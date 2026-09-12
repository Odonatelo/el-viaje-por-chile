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

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio source URL
  const audioSrc = audio?.url;

  // Initialize or reset player when stop or audio changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    stopBrowserTts();
    setIsUsingBrowserTts(false);

    if (audio?.durationSeconds) {
      setDuration(audio.durationSeconds);
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      if (audioSrc) {
        audioRef.current.load();
        if (autoPlay) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }
    }
  }, [audio, audioSrc, autoPlay]);

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
    } else if (fallbackText) {
      // Use Web Speech API if no audio file
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
    <div className="w-full bg-gradient-to-r from-[#0D1B2D] via-[#15273F] to-[#0D1B2D] text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-[#2B456B]/60 transition-all font-sans">
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
            <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#C04A26]/20 text-[#F59E7C] border border-[#C04A26]/40">
              <Radio className="w-3 h-3 animate-pulse text-[#C04A26]" />
              Audioguía Oficial
            </span>
            {audio?.type === 'ai_generated' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#27523C]/40 text-[#A3E3B8] border border-[#27523C]/50">
                <Sparkles className="w-3 h-3 text-[#A3E3B8]" />
                Voz IA ({audio.voiceName || 'Gemini'})
              </span>
            )}
            {audio?.type === 'uploaded_mp3' && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#27523C]/40 text-[#A3E3B8] border border-[#27523C]/50">
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
          <h4 className="text-base sm:text-lg font-bold text-white truncate mt-1 font-['Outfit',sans-serif]">{stopTitle}</h4>
          {tourTitle && <p className="text-xs text-[#E8DFC8]/70 truncate">{tourTitle}</p>}
        </div>

        {/* Waveform graphic bars */}
        <div className="flex items-end gap-1 h-8 px-2 py-1 bg-[#09121E] rounded-lg border border-[#2B456B]">
          {[40, 70, 90, 60, 100, 50, 80, 45, 95, 30].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full bg-[#C04A26] transition-all duration-200 ${
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
            className="w-full h-2 bg-[#09121E] rounded-lg appearance-none cursor-pointer accent-[#C04A26] hover:accent-[#E05A32] focus:outline-none"
          />
        </div>
        <div className="flex justify-between text-xs font-mono text-[#E8DFC8]/60">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Playback Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#192E47]">
        {/* Speed selectors */}
        <div className="flex items-center gap-1 bg-[#09121E] p-1 rounded-xl border border-[#2B456B] text-xs">
          <Gauge className="w-3.5 h-3.5 text-[#E8DFC8]/60 ml-1" />
          {[0.8, 1.0, 1.25, 1.5].map((rate) => (
            <button
              key={rate}
              onClick={() => handleRateChange(rate)}
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                playbackRate === rate
                  ? 'bg-[#C04A26] text-white shadow-sm'
                  : 'text-[#E8DFC8]/60 hover:text-white'
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
            className="p-2 text-[#E8DFC8]/70 hover:text-white hover:bg-[#192E47] rounded-full transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            id="btn-play-pause-audioguide"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C04A26] hover:bg-[#A63A19] text-white shadow-lg shadow-[#C04A26]/40 hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <button
            onClick={() => handleSeek(10)}
            title="Avanzar 10 segundos"
            className="p-2 text-[#E8DFC8]/70 hover:text-white hover:bg-[#192E47] rounded-full transition-colors"
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
            className="p-2 text-[#E8DFC8]/70 hover:text-white hover:bg-[#192E47] rounded-lg transition-colors"
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#F59E7C]" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Transcript button */}
          {(audio?.transcript || fallbackText) && (
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                showTranscript
                  ? 'bg-[#C04A26]/30 text-[#F59E7C] border-[#C04A26]/50'
                  : 'bg-[#09121E] text-[#E8DFC8]/80 border-[#2B456B] hover:text-white'
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
        <div className="mt-3 p-3.5 bg-[#09121E] rounded-xl border border-[#2B456B] text-xs sm:text-sm text-[#E8DFC8]/90 leading-relaxed max-h-48 overflow-y-auto animate-fadeIn">
          <div className="font-bold text-[#F59E7C] mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wider font-['Outfit',sans-serif]">
            <Sparkles className="w-3 h-3 text-[#C04A26]" />
            Transcripción del Audio Guía
          </div>
          <p className="whitespace-pre-line">{audio?.transcript || fallbackText}</p>
        </div>
      )}
    </div>
  );
};
