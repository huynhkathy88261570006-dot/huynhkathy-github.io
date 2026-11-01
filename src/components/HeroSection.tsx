import { useState } from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { HERO_METRICS, PROFILE_INFO, QUICK_PROMPTS, type QuickPrompt } from '../data/profileData';

interface HeroSectionProps {
  onOpenProfileModal: () => void;
}

export function HeroSection({ onOpenProfileModal }: HeroSectionProps) {
  const [selectedPrompt, setSelectedPrompt] = useState<QuickPrompt>(QUICK_PROMPTS[0]);
  const [imgError, setImgError] = useState(false);

  const handleJumpToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="pt-8 sm:pt-12 pb-14 sm:pb-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* 2-Column Split-Screen Hero with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Editorial Typographic Hierarchy & Quick Portfolio Explorer */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              {/* Unboxed clean metadata kicker with typographic separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-teal-800">
                <span>UEH Mekong</span>
                <span aria-hidden="true">·</span>
                <span>Hệ Vừa Làm Vừa Học</span>
                <span aria-hidden="true">·</span>
                <span>Đồng Tháp</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">2003</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-[1.12]">
                  {PROFILE_INFO.fullName}
                </h1>
                <p className="font-serif italic text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl">
                  Năm ngày trong tuần chăm chút cửa hàng tạp hóa nhỏ ở Đồng Tháp, hai ngày cuối tuần đến giảng đường UEH Mekong, và mỗi tối trở về góc yên tĩnh của riêng mình.
                </p>
              </div>

              <div className="space-y-3 text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                <p>{PROFILE_INFO.openingGreeting}</p>
                <p>{PROFILE_INFO.openingSubtext}</p>
              </div>

              {/* Primary CTA + Quiet Secondary Link */}
              <div className="pt-2 flex flex-wrap items-center gap-5">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  <span>Khám phá câu chuyện</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenProfileModal}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 hover:text-teal-800 underline-offset-4 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer py-2"
                >
                  <span>Xem tóm tắt hồ sơ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Quick Discovery Explorer */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500">
                  Tìm hiểu nhanh từng lát cắt của Kathy
                </span>
                <span className="text-xs text-slate-400">
                  Chọn chủ đề để xem tóm tắt
                </span>
              </div>

              <div
                role="tablist"
                aria-label="Chủ đề khám phá nhanh"
                className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100/90 rounded-xl"
              >
                {QUICK_PROMPTS.map((item) => {
                  const isActive = selectedPrompt.id === item.id;
                  return (
                    <button
                      key={item.id}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      onClick={() => setSelectedPrompt(item)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-white text-slate-950 shadow-xs font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="pt-1 space-y-2.5">
                <h2 className="text-sm font-semibold text-slate-900">
                  {selectedPrompt.summaryTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedPrompt.answer}
                </p>
                <button
                  type="button"
                  onClick={() => handleJumpToSection(selectedPrompt.targetSection)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors cursor-pointer pt-0.5"
                >
                  <span>Đi tới phần chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Matching-height Portrait Container */}
          <div className="lg:col-span-5 flex flex-col">
            <figure className="relative flex-1 min-h-[380px] sm:min-h-[460px] lg:h-full rounded-2xl overflow-hidden bg-slate-200 border border-slate-200/90 flex flex-col justify-end">
              {!imgError ? (
                <img
                  src={PROFILE_INFO.portraitPath}
                  alt="Chân dung Kathy Mỹ Ngọc Huỳnh — Sinh viên VLVH UEH Mekong"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-slate-800 to-slate-900 flex items-center justify-center p-8 text-center">
                  <div className="space-y-2">
                    <p className="font-serif text-3xl font-bold text-white">KMNH</p>
                    <p className="text-sm text-slate-200">{PROFILE_INFO.fullName}</p>
                  </div>
                </div>
              )}

              <figcaption className="relative z-10 pt-24 pb-6 px-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white space-y-1.5">
                <p className="text-base font-semibold tracking-tight">
                  {PROFILE_INFO.fullName}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-200">
                  <span>Sinh năm 2003</span>
                  <span aria-hidden="true">·</span>
                  <span>Đồng Tháp</span>
                  <span aria-hidden="true">·</span>
                  <span>Cửa hàng tạp hóa & UEH Mekong</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-Width 4-Column Highlights Strip Below Hero Split */}
        <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 tabular-nums">
                {metric.value}
              </p>
              <p className="text-sm font-semibold text-slate-800">{metric.label}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Editorial Marquee Divider */}
      <div
        aria-hidden="true"
        className="mt-12 py-3.5 border-y border-slate-200/80 bg-white/60 overflow-hidden select-none"
      >
        <div className="animate-editorial-marquee text-xs font-medium text-slate-500">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8 pr-8 whitespace-nowrap">
              <span>Kathy Mỹ Ngọc Huỳnh</span>
              <span>·</span>
              <span>Sinh năm 2003 · Quê hương Đồng Tháp</span>
              <span>·</span>
              <span>Thứ 2 – Thứ 6: Cửa hàng tạp hóa tại nhà</span>
              <span>·</span>
              <span>Thứ 7 – Chủ nhật: Đi học hệ VLVH tại UEH Mekong</span>
              <span>·</span>
              <span>Đọc sách · Nghe nhạc · Ở một mình</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
