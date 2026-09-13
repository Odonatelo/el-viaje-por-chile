/**
 * Audio helpers for converting PCM audio from Gemini TTS into playable AudioBuffers / WAV Blobs,
 * recording mic audio, and synthesizing speech.
 */

// Convert raw 16-bit linear PCM base64 string (24kHz) to a playable WAV Blob URL
export function pcmBase64ToWavBlobUrl(base64Pcm: string, sampleRate = 24000, numChannels = 1): string {
  try {
    const binary = atob(base64Pcm);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    const pcmData = new Int16Array(bytes.buffer);
    const wavBuffer = createWavHeaderAndData(pcmData, sampleRate, numChannels);
    const blob = new Blob([wavBuffer], { type: 'audio/wav' });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error decoding PCM to WAV:', error);
    return '';
  }
}

// Convert a base64 audio payload (WAV, MP3, etc.) directly to a playable Blob URL
export function base64AudioBlobUrl(base64: string, mimeType = 'audio/mpeg'): string {
  try {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const isPcm = mimeType.startsWith('audio/pcm');
    if (isPcm) {
      const sampleRate = mimeType.includes('32000') ? 32000 : 24000;
      return pcmBase64ToWavBlobUrl(base64, sampleRate);
    }
    return URL.createObjectURL(new Blob([bytes], { type: mimeType }));
  } catch (error) {
    console.error('Error decoding audio blob:', error);
    return '';
  }
}

function createWavHeaderAndData(samples: Int16Array, sampleRate: number, numChannels: number): ArrayBuffer {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  // RIFF identifier
  writeString(view, 0, 'RIFF');
  // RIFF chunk length
  view.setUint32(4, 36 + samples.length * 2, true);
  // RIFF type
  writeString(view, 8, 'WAVE');
  // format chunk identifier
  writeString(view, 12, 'fmt ');
  // format chunk length
  view.setUint32(16, 16, true);
  // sample format (raw PCM = 1)
  view.setUint16(20, 1, true);
  // channel count
  view.setUint16(22, numChannels, true);
  // sample rate
  view.setUint32(24, sampleRate, true);
  // byte rate (sampleRate * blockAlign)
  view.setUint32(28, sampleRate * numChannels * 2, true);
  // block align (channel count * bytes per sample)
  view.setUint16(32, numChannels * 2, true);
  // bits per sample
  view.setUint16(34, 16, true);
  // data chunk identifier
  writeString(view, 36, 'data');
  // data chunk length
  view.setUint32(40, samples.length * 2, true);

  // Write PCM samples
  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    view.setInt16(offset, samples[i], true);
  }

  return buffer;
}

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

// Browser Web Speech API fallback for instant audio synthesis
export function speakWithBrowserTts(text: string, language = 'es-ES', onEnd?: () => void): SpeechSynthesisUtterance | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language;
  utterance.rate = 1.0;
  utterance.pitch = 1.0;

  // Try to find a good Spanish voice
  const voices = window.speechSynthesis.getVoices();
  const selectedVoice = voices.find(v => v.lang.startsWith('es') || v.lang.includes('Spanish')) || voices[0];
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
  }

  window.speechSynthesis.speak(utterance);
  return utterance;
}

export function stopBrowserTts() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// In-browser Microphone Audio Recorder
export class AudioRecorder {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private stream: MediaStream | null = null;

  async start(): Promise<boolean> {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(this.stream);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start();
      return true;
    } catch (err) {
      console.error('Error starting audio recording:', err);
      return false;
    }
  }

  async stop(): Promise<{ blob: Blob; dataUrl: string; durationSeconds: number }> {
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder) {
        return reject(new Error('No recording active'));
      }

      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUrl = reader.result as string;
          // Stop media stream tracks
          if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
          }
          resolve({
            blob: audioBlob,
            dataUrl,
            durationSeconds: Math.round(audioBlob.size / 16000), // approximate
          });
        };
        reader.readAsDataURL(audioBlob);
      };

      this.mediaRecorder.stop();
    });
  }
}

// Persist an audio Blob on the server so the audioguide survives reloads.
export async function uploadAudioToServer(blob: Blob, mimeType: string = 'audio/mpeg'): Promise<{ url: string; mimeType: string; size: number }> {
  const dataUrl = await blobToDataUrl(blob);
  const res = await fetch('/api/uploads/audio', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ dataUrl, mimeType }),
  });
  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Error al subir el audio al servidor');
  }
  return data.data as { url: string; mimeType: string; size: number };
}

export function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('No se pudo leer el archivo de audio'));
    reader.readAsDataURL(blob);
  });
}

// Best-effort duration estimate for an audio Blob without loading it in a player.
export function audioDurationFromBlob(blob: Blob): Promise<number> {
  return new Promise((resolve) => {
    try {
      const url = URL.createObjectURL(blob);
      const audio = new Audio();
      audio.preload = 'metadata';
      audio.onloadedmetadata = () => {
        const d = audio.duration;
        URL.revokeObjectURL(url);
        resolve(Number.isFinite(d) ? Math.round(d) : Math.round(blob.size / 16000));
      };
      audio.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(Math.round(blob.size / 16000));
      };
      audio.src = url;
    } catch {
      resolve(Math.round(blob.size / 16000));
    }
  });
}

// Helper to convert YouTube link to standard embed URL
export function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  try {
    let videoId = '';
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/shorts/')) {
      videoId = url.split('shorts/')[1]?.split('?')[0];
    }

    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
  } catch (e) {
    console.error('Error parsing YouTube URL:', e);
  }
  return null;
}
