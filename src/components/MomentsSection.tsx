import { useEffect, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { LIFE_MOMENTS, type LifeMoment } from '../data/profileData';

export function MomentsSection() {
  const [activeMoment, setActiveMoment] = useState<LifeMoment | null>(null);
  const [failedImgs, setFailedImgs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMoment(null);
      }
    };
    if (activeMoment) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [activeMoment]);

  const featuredMoment = LIFE_MOMENTS[0];
  const secondaryMoments = LIFE_MOMENTS.slice(1);

  return (
    <section id="moments" className="py-16 sm:py-24 scroll-mt-16 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-10">
        {/* Heading */}
        <div className="max-w-3xl space-y-2.5">
          <p className="text-xs font-semibold text-teal-800">
            05. Những mảnh ghép hình ảnh
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Góc nhỏ đời thường từ Đồng Tháp đến giảng đường UEH Mekong
          </h2>
          <p className="text-[15px] text-slate-600 leading-relaxed">
            Một vài khung hình gợi nhắc những không gian thân thuộc nhất với mình: sắc sen hồng quê nhà, chiếc bàn gỗ nơi cửa hàng tạp hóa mỗi sáng trong tuần, góc bàn học cuối tuần và ánh đèn vàng yên tĩnh lúc đêm về.
          </p>
        </div>

        {/* Dynamic Bento Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Wide Featured Bento Tile */}
          <button
            type="button"
            onClick={() => setActiveMoment(featuredMoment)}
            className="lg:col-span-7 text-left rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/90 relative min-h-[340px] sm:min-h-[420px] flex flex-col justify-end group cursor-pointer"
          >
            {!failedImgs[featuredMoment.id] ? (
              <img
                src={featuredMoment.imageUrl}
                alt={featuredMoment.title}
                referrerPolicy="no-referrer"
                onError={() =>
                  setFailedImgs((prev) => ({ ...prev, [featuredMoment.id]: true }))
                }
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-200"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-slate-900" />
            )}

            <div className="relative z-10 pt-24 pb-6 px-6 sm:px-7 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white space-y-2 w-full">
              <div className="flex items-center justify-between gap-4 text-xs text-teal-200">
                <span>
                  {featuredMoment.tag} · {featuredMoment.location}
                </span>
                <span className="inline-flex items-center gap-1 text-white/90 font-medium whitespace-nowrap">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Xem ảnh</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                {featuredMoment.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                {featuredMoment.caption}
              </p>
            </div>
          </button>

          {/* Right Column: Compact Story Stack */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {secondaryMoments.map((moment) => (
              <button
                key={moment.id}
                type="button"
                onClick={() => setActiveMoment(moment)}
                className="text-left p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-700/50 transition-colors duration-150 flex items-center gap-4 group cursor-pointer flex-1"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-24 rounded-xl overflow-hidden bg-slate-100 shrink-0 relative">
                  {!failedImgs[moment.id] ? (
                    <img
                      src={moment.imageUrl}
                      alt={moment.title}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImgs((prev) => ({ ...prev, [moment.id]: true }))
                      }
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
                    />
                  ) : (
                    <div className="w-full h-full bg-teal-900" />
                  )}
                </div>

                <div className="min-w-0 flex-1 space-y-1">
                  <p className="text-xs text-teal-800 font-medium truncate">
                    {moment.scheduleNote} · {moment.location}
                  </p>
                  <h3 className="text-sm sm:text-base font-bold text-slate-950 leading-snug line-clamp-2">
                    {moment.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {moment.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Media Lightbox Viewer */}
      {activeMoment && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="moment-lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs"
          onClick={() => setActiveMoment(null)}
        >
          <div
            className="w-full max-w-3xl rounded-2xl bg-white overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-slate-900 overflow-hidden shrink-0">
              {!failedImgs[activeMoment.id] ? (
                <img
                  src={activeMoment.imageUrl}
                  alt={activeMoment.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-sm">
                  {activeMoment.title}
                </div>
              )}

              <button
                type="button"
                onClick={() => setActiveMoment(null)}
                aria-label="Đóng khung xem ảnh"
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/65 hover:bg-black/85 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-3 overflow-y-auto">
              <div className="flex flex-wrap items-center gap-2 text-xs text-teal-800 font-medium">
                <span>{activeMoment.tag}</span>
                <span aria-hidden="true">·</span>
                <span>{activeMoment.location}</span>
                <span aria-hidden="true">·</span>
                <span>{activeMoment.scheduleNote}</span>
              </div>

              <h3
                id="moment-lightbox-title"
                className="text-xl sm:text-2xl font-bold text-slate-950 leading-snug"
              >
                {activeMoment.title}
              </h3>

              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                {activeMoment.story}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
