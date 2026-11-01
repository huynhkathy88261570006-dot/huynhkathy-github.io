import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { WORK_STUDY_ITEMS, type WorkStudyItem } from '../data/profileData';

type FilterKey = 'all' | 'business' | 'academic';

export function WorkStudySection() {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [selectedItem, setSelectedItem] = useState<WorkStudyItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const filteredItems =
    filter === 'all'
      ? WORK_STUDY_ITEMS
      : WORK_STUDY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="work-study" className="py-16 sm:py-24 scroll-mt-16 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-10">
        {/* Header + Segmented Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <p className="text-xs font-semibold text-teal-800">
              02. Công việc thường nhật & Giảng đường cuối tuần
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Thứ 2 – Thứ 6 buôn bán tạp hóa, Thứ 7 – Chủ nhật đi học UEH Mekong
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Hai vai trò nối tiếp nhau tạo nên một tuần lễ bận rộn nhưng ý nghĩa: cửa hàng tạp hóa tại Đồng Tháp cho mình trải nghiệm thực tế, còn những ngày học cuối tuần tại UEH Mekong giúp mình mở rộng tư duy bài bản hơn.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Lọc mảng công việc và học tập"
            className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl w-fit shrink-0"
          >
            <button
              role="tab"
              aria-selected={filter === 'all'}
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-slate-950 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất cả ({WORK_STUDY_ITEMS.length})
            </button>
            <button
              role="tab"
              aria-selected={filter === 'business'}
              type="button"
              onClick={() => setFilter('business')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'business'
                  ? 'bg-white text-slate-950 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cửa hàng tạp hóa (T2–T6)
            </button>
            <button
              role="tab"
              aria-selected={filter === 'academic'}
              type="button"
              onClick={() => setFilter('academic')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'academic'
                  ? 'bg-white text-slate-950 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Học UEH Mekong (T7–CN)
            </button>
          </div>
        </div>

        {/* 2-Column Editorial Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-white border border-slate-200/90 hover:border-teal-700/50 transition-colors duration-150 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Media Banner */}
                <div className="aspect-16/9 w-full overflow-hidden bg-slate-100 relative">
                  {!failedImages[item.id] ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [item.id]: true }))
                      }
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-200"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-900 to-slate-800 flex items-center justify-center p-6 text-white text-sm font-medium">
                      {item.title}
                    </div>
                  )}
                </div>

                {/* Card Copy */}
                <div className="p-6 sm:p-7 pb-4 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold text-teal-800 tabular-nums">
                        {item.index}.
                      </span>
                      <span>{item.categoryLabel}</span>
                    </div>
                    <span className="font-mono tabular-nums text-slate-400">{item.period}</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500">{item.subtitle}</p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">{item.summary}</p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500 truncate">{item.metricsLabel}</span>
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer py-1"
                >
                  <span>Xem câu chuyện chi tiết</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Detail Lightbox / Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-study-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/65 backdrop-blur-xs"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {!failedImages[selectedItem.id] && (
              <div className="h-48 sm:h-56 w-full overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setFailedImages((prev) => ({ ...prev, [selectedItem.id]: true }))
                  }
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-teal-800">
                    {selectedItem.index}. {selectedItem.categoryLabel} · {selectedItem.period}
                  </p>
                  <h3
                    id="work-study-modal-title"
                    className="text-xl sm:text-2xl font-bold text-slate-950 leading-snug"
                  >
                    {selectedItem.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Đóng cửa sổ chi tiết"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
                <p className="text-[15px] text-slate-700">{selectedItem.summary}</p>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-900">
                    Công việc & thói quen thực tế
                  </h4>
                  <ol className="space-y-2.5 divide-y divide-slate-100">
                    {selectedItem.details.map((detail, idx) => (
                      <li key={detail} className="pt-2.5 first:pt-0 flex items-baseline gap-3">
                        <span className="font-mono text-xs font-semibold text-teal-800 tabular-nums shrink-0">
                          0{idx + 1}.
                        </span>
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-1.5">
                  <p className="text-xs font-semibold text-slate-500">Chiêm nghiệm cá nhân</p>
                  <p className="font-serif italic text-base text-slate-800 leading-relaxed">
                    “{selectedItem.reflection}”
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Đóng cửa sổ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
