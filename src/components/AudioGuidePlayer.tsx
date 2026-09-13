import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  FileText, 
  Radio, 
  Gauge,
  Music,
  Mic
} from 'lucide-react';
import { StopAudio } from '../types';
import { speakWithBrowserTts, stopBrowserTts } from '../utils/audioUtils';

interface AudioGuidePlayerProps {
  audio?: StopAudio;
  fallbackText?: string;
  stopTitle: string;
  tourTitle?: string;
  onNextStop?: () => void;
  onPrevStop?: () => void;
  autoPlay?: boolean;
}

export const AudioGuidePlayer: React.FC<AudioGuidePlayerProps> = ({
  audio,
  fallbackText,
  stopTitle,
  tourTitle,
  onNextStop,
  onPrevStop,
  autoPlay = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(audio?.durationSeconds || 60);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [volume, setVolume] = useState(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isUsingBrowserTts, setIsUsingBrowserTts] = useState(false);
  const [premiumSrc, setPremiumSrc] = useState<string | null>(null);
  const [ttsEngine, setTtsEngine] = useState<'speechify' | 'gemini' | null>(null);
  const [premiumFetching, setPremiumFetching] = useState(false);
  const [premiumFailed, setPremiumFailed] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const premiumSrcRef = useRef<string | null>(null);

  // Audio source URL: archivo persistido, o blob sintetizado con voz premium del servidor
  const audioSrc = audio?.url || premiumSrc;

  // Sintetiza con voz premium del servidor (Speechify o Gemini) en vez de la voz del navegador
  useEffect(() => {
    const shouldUseServerTts = audio?.type === 'ai_generated' && !audio?.url && fallbackText;
    if (!shouldUseServerTts) return;
    let cancelled = false;
    setPremiumFetching(true);
    setPremiumFailed(false);
    fetch('/api/tts/audio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: fallbackText, voiceName: audio.voiceName || 'Kore' }),
    })
      .then(r => r.json())
      .then(data => {
        if (cancelled) return;
        setPremiumFetching(false);
        if (!data?.success) {
          setPremiumFailed(true);
          return;
        }
        const binary = atob(data.audioBase64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        const url = URL.createObjectURL(new Blob([bytes], { type: data.mimeType || 'audio/mpeg' }));
        premiumSrcRef.current = url;
        setPremiumSrc(url);
        setTtsEngine(data.engine || null);
        if (data.durationSeconds) setDuration(data.durationSeconds);
      })
      .catch(() => {
        if (!cancelled) {
          setPremiumFetching(false);
          setPremiumFailed(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [audio?.type, audio?.url, audio?.voiceName, fallbackText]);

  // Initialize or reset player when stop or audio changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    stopBrowserTts();
    setIsUsingBrowserTts(false);
    setTtsEngine(null);
    setPremiumFetching(false);
    setPremiumFailed(false);
    if (premiumSrcRef.current) {
      URL.revokeObjectURL(premiumSrcRef.current);
      premiumSrcRef.current = null;
    }
    setPremiumSrc(null);

    if (audio?.durationSeconds) {
      setDuration(audio.durationSeconds);
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      if (audio?.url) {
        audioRef.current.load();
        if (autoPlay) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }
    }
  }, [audio, audio?.url, autoPlay]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (audioSrc && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.warn('Audio play error:', err);
        });
      }
    } else if (fallbackText && (audio?.type !== 'ai_generated' || premiumFailed)) {
      // Web Speech API como respaldo solo si no hay voz premium disponible
      if (isPlaying) {
        stopBrowserTts();
        setIsPlaying(false);
        setIsUsingBrowserTts(false);
      } else {
        setIsUsingBrowserTts(true);
        setIsPlaying(true);
        speakWithBrowserTts(fallbackText, 'es-CL', () => {
          setIsPlaying(false);
          setIsUsingBrowserTts(false);
        });
      }
    }
  };

  // Skip time
  const handleSeek = (seconds: number) => {
    if (audioRef.current && audioSrc) {
      const newTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + seconds));
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Change playback speed
  const handleRateChange = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  // Scrub bar change
  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current && audioSrc) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#14281C] via-[#1D3626] to-[#14281C] text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-[#3A5C44]/60 transition-all font-sans">
      {/* Hidden audio element */}
      {audioSrc && (
        <audio
          ref={audioRef}
          src={audioSrc}
          onTimeUpdate={() => {
            if (audioRef.current) {
              setCurrentTime(audioRef.current.currentTime);
            }
          }}
          onLoadedMetadata={() => {
            if (audioRef.current && audioRef.current.duration && !isNaN(audioRef.current.duration)) {
              setDuration(audioRef.current.duration);
            }
          }}
          onEnded={() => {
            setIsPlaying(false);
            if (onNextStop) {
              onNextStop();
            }
          }}
        />
      )}

      {/* Header info */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#B04E2A]/20 text-[#E8A58B] border border-[#B04E2A]/40">
              <Radio className="w-3 h-3 animate-pulse text-[#B04E2A]" />
              Audioguía Oficial
            </span>
            {audio?.type === 'ai_generated' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#2F5238]/40 text-[#A3E3B8] border border-[#2F5238]/50">
                <Sparkles className="w-3 h-3 text-[#A3E3B8]" />
                Voz IA ({audio.voiceName || 'Gemini'}{ttsEngine === 'speechify' ? ' · Premium' : ''})
              </span>
            )}
            {isUsingBrowserTts && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#4B3B2A]/40 text-[#E4D8BF] border border-[#B04E2A]/40">
                <Volume2 className="w-3 h-3 text-[#E8A58B]" />
                Voz del dispositivo
              </span>
            )}
            {audio?.type === 'uploaded_mp3' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#2F5238]/40 text-[#A3E3B8] border border-[#2F5238]/50">
                <Music className="w-3 h-3 text-[#A3E3B8]" />
                Audio Subido
              </span>
            )}
            {audio?.type === 'recorded' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#7C3AED]/30 text-[#C4B5FD] border border-[#7C3AED]/40">
                <Mic className="w-3 h-3 text-[#C4B5FD]" />
                Grabación Local
              </span>
            )}
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white truncate mt-1 font-['Cormorant_Garamond',Georgia,serif]">{stopTitle}</h4>
          {tourTitle && <p className="text-xs text-[#E4D8BF]/70 truncate">{tourTitle}</p>}
        </div>

        {/* Waveform graphic bars */}
        <div className="flex items-end gap-1 h-8 px-2 py-1 bg-[#101F16] rounded-lg border border-[#3A5C44]">
          {[40, 70, 90, 60, 100, 50, 80, 45, 95, 30].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full bg-[#B04E2A] transition-all duration-200 ${
                isPlaying ? 'animate-pulse' : 'opacity-40'
              }`}
              style={{
                height: isPlaying ? `${Math.max(20, (h * (currentTime + i)) % 100)}%` : `${h * 0.3}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar & Scrub */}
      <div className="space-y-1 mb-3">
        <div className="relative flex items-center">
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.5"
            value={currentTime}
            onChange={handleScrub}
            className="w-full h-2 bg-[#101F16] rounded-lg appearance-none cursor-pointer accent-[#B04E2A] hover:accent-[#D97A46] focus:outline-none"
          />
        </div>
        <div className="flex justify-between text-xs font-mono text-[#E4D8BF]/60">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Playback Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#223F2C]">
        {/* Speed selectors */}
        <div className="flex items-center gap-1 bg-[#101F16] p-1 rounded-xl border border-[#3A5C44] text-xs">
          <Gauge className="w-3.5 h-3.5 text-[#E4D8BF]/60 ml-1" />
          {[0.8, 1.0, 1.25, 1.5].map((rate) => (
            <button
              key={rate}
              onClick={() => handleRateChange(rate)}
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                playbackRate === rate
                  ? 'bg-[#B04E2A] text-white shadow-sm'
                  : 'text-[#E4D8BF]/60 hover:text-white'
              }`}
            >
              {rate}x
            </button>
          ))}
        </div>

        {/* Center Main Play / Seek buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => handleSeek(-10)}
            title="Retroceder 10 segundos"
            className="p-2 text-[#E4D8BF]/70 hover:text-white hover:bg-[#223F2C] rounded-full transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            id="btn-play-pause-audioguide"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white shadow-lg shadow-[#B04E2A]/40 hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            onClick={() => handleSeek(10)}
            title="Avanzar 10 segundos"
            className="p-2 text-[#E4D8BF]/70 hover:text-white hover:bg-[#223F2C] rounded-full transition-colors"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>

        {/* Volume & Transcript Toggle */}
        <div className="flex items-center gap-2">
          {/* Volume toggle */}
          <button
            onClick={() => {
              if (audioRef.current) {
                const nextMute = !isMuted;
                audioRef.current.muted = nextMute;
                setIsMuted(nextMute);
              }
            }}
            className="p-2 text-[#E4D8BF]/70 hover:text-white hover:bg-[#223F2C] rounded-lg transition-colors"
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#E8A58B]" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Transcript button */}
          {(audio?.transcript || fallbackText) && (
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                showTranscript
                  ? 'bg-[#B04E2A]/30 text-[#E8A58B] border-[#B04E2A]/50'
                  : 'bg-[#101F16] text-[#E4D8BF]/80 border-[#3A5C44] hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{showTranscript ? 'Ocultar Texto' : 'Transcripción'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Expandable Transcript view */}
      {showTranscript && (
        <div className="mt-3 p-3.5 bg-[#101F16] rounded-xl border border-[#3A5C44] text-xs sm:text-sm text-[#E4D8BF]/90 leading-relaxed max-h-48 overflow-y-auto animate-fadeIn">
          <div className="font-bold text-[#E8A58B] mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wider font-['Cormorant_Garamond',Georgia,serif]">
            <Sparkles className="w-3 h-3 text-[#B04E2A]" />
            Transcripción del Audio Guía
          </div>
          <p className="whitespace-pre-line">{audio?.transcript || fallbackText}</p>
        </div>
      )}
    </div>
  );
};
