import { useRef, useState } from 'react';
import { ExternalLink, Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import {
  COURSE_VIDEO_REFLECTION,
  PROFILE_INFO,
  type CourseVideoChapter,
} from '../data/profileData';

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function CourseReflectionSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(56);
  const [activeChapterId, setActiveChapterId] = useState<string>(
    COURSE_VIDEO_REFLECTION.chapters[0].id
  );

  const handleTogglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      void vid.play();
    } else {
      vid.pause();
    }
  };

  const handleRestart = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.currentTime = 0;
    void vid.play();
  };

  const handleToggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  const handleJumpToChapter = (chapter: CourseVideoChapter) => {
    setActiveChapterId(chapter.id);
    const vid = videoRef.current;
    if (!vid) return;
    vid.currentTime = chapter.timeSeconds;
    void vid.play();
  };

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid) return;
    const t = vid.currentTime;
    setCurrentTime(t);

    const chapters = COURSE_VIDEO_REFLECTION.chapters;
    for (let i = chapters.length - 1; i >= 0; i--) {
      if (t >= chapters[i].timeSeconds) {
        setActiveChapterId(chapters[i].id);
        break;
      }
    }
  };

  return (
    <section
      id="course-reflection"
      className="py-16 sm:py-24 scroll-mt-16 border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-10">
        {/* Section Heading */}
        <div className="max-w-4xl space-y-2.5">
          <p className="text-xs font-semibold text-teal-800">
            03. Video chia sẻ cảm nhận môn học · Chiến lược Marketing
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 leading-snug">
            {COURSE_VIDEO_REFLECTION.heading}
          </h2>
          <p className="text-[15px] text-slate-600 leading-relaxed">
            {COURSE_VIDEO_REFLECTION.subheading}
          </p>
        </div>

        {/* 2-Column Split: Video Player on Left, Timestamped Reflections on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Clean Video Frame + Quick Controls */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden bg-white border border-slate-200/80 aspect-square w-full max-w-[420px] mx-auto relative">
                <video
                  ref={videoRef}
                  src={COURSE_VIDEO_REFLECTION.videoUrl}
                  poster={PROFILE_INFO.portraitPath}
                  controls
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onLoadedMetadata={(e) => {
                    if (Number.isFinite(e.currentTarget.duration)) {
                      setDuration(e.currentTarget.duration);
                    }
                  }}
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain bg-white"
                >
                  Trình duyệt của bạn không hỗ trợ phát video trực tiếp.
                </video>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-800">
                  {PROFILE_INFO.fullName}
                </span>
                <span className="font-mono tabular-nums text-teal-800 font-medium">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Accessible Custom Transport Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Tạm dừng</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Xem & Nghe chia sẻ</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleRestart}
                  aria-label="Phát lại từ đầu"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Từ đầu</span>
                </button>
              </div>

              <button
                type="button"
                onClick={handleToggleMute}
                aria-label={isMuted ? 'Bật tiếng video' : 'Tắt tiếng video'}
                className="p-2 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Timestamped Chapters & Full Transcript */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200/80">
                <div className="space-y-0.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    Nội dung lời chia sẻ theo từng mốc thời gian
                  </h3>
                  <p className="text-xs text-slate-500">
                    Bấm vào bất kỳ phần nào bên dưới để chuyển nhanh tới đúng đoạn trong video
                  </p>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {COURSE_VIDEO_REFLECTION.chapters.map((chapter, idx) => {
                  const isCurrent = activeChapterId === chapter.id;
                  return (
                    <div key={chapter.id} className="py-4 first:pt-1 last:pb-1">
                      <button
                        type="button"
                        onClick={() => handleJumpToChapter(chapter)}
                        className={`w-full text-left p-3.5 -mx-3.5 rounded-xl transition-colors duration-150 space-y-2 cursor-pointer ${
                          isCurrent
                            ? 'bg-teal-50/75'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-baseline gap-2.5 min-w-0">
                            <span className="font-mono text-xs font-semibold text-teal-800 tabular-nums shrink-0">
                              0{idx + 1}.
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-slate-950 leading-snug">
                              {chapter.title}
                            </h4>
                          </div>
                          <span className="font-mono text-xs font-semibold text-teal-800 tabular-nums whitespace-nowrap shrink-0">
                            {chapter.timeLabel}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                          “{chapter.excerpt}”
                        </p>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reference Link mentioned in Kathy's video */}
            <div className="pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
              <span>
                Nguồn cảm hứng xây dựng website cá nhân & kho học liệu được nhắc tới trong video:
              </span>
              <a
                href="https://dapxe.info/tailieu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-teal-800 hover:text-teal-950 underline-offset-4 hover:underline whitespace-nowrap shrink-0"
              >
                <span>dapxe.info/tailieu</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
