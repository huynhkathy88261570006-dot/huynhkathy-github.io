import { useState } from 'react';
import {
  PERSONAL_TRAITS,
  PROFILE_INFO,
  WEEKLY_PHASES,
  type WeeklyPhase,
} from '../data/profileData';

export function AboutSection() {
  const [activePhase, setActivePhase] = useState<WeeklyPhase>(WEEKLY_PHASES[0]);
  const [imgFailed, setImgFailed] = useState<Record<string, boolean>>({});

  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-16 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
        {/* Section Heading & Personal Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-semibold text-teal-800">
              01. Câu chuyện cá nhân · Đồng Tháp & UEH Mekong
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 leading-snug">
              Cô gái sinh năm 2003 với một cửa hàng tạp hóa và những cuối tuần trên giảng đường
            </h2>
            <p className="font-serif italic text-base text-slate-600 leading-relaxed">
              “Thứ Hai đến Thứ Sáu mở cửa tiệm đón nắng sớm, Thứ Bảy – Chủ Nhật mở trang vở mới, còn mỗi tối mở lòng lắng nghe chính mình.”
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4 text-[15px] sm:text-base text-slate-600 leading-relaxed">
            <p>
              Mình là <strong className="font-semibold text-slate-900">{PROFILE_INFO.fullName}</strong>, sinh năm <span className="tabular-nums font-medium text-slate-800">2003</span> và lớn lên tại <strong className="font-semibold text-slate-900">Đồng Tháp</strong>. Ở quê nhà, <strong className="font-semibold text-slate-900">mình có một cửa hàng tạp hóa</strong> — công việc gắn bó với mình suốt từ <strong className="font-semibold text-slate-900">Thứ Hai đến Thứ Sáu</strong> hàng tuần. Từ việc kiểm từng đợt hàng mới, ghi chép sổ thu chi đến trò chuyện cùng cô chú hàng xóm ghé mua gói trà, túi đường, mọi thứ đều giản dị nhưng dạy mình sự tự lập và cẩn trọng.
            </p>
            <p>
              Khi cuối tuần đến, mình tạm khép lại nhịp buôn bán thường ngày để dành trọn <strong className="font-semibold text-slate-900">Thứ Bảy và Chủ Nhật đi học</strong> chương trình <strong className="font-semibold text-slate-900">Vừa Làm Vừa Học (VLVH) tại UEH Mekong</strong>. Không có ngày nghỉ cuối tuần theo nghĩa thông thường, nhưng đổi lại mỗi tuần trôi qua đều rất trọn vẹn và có mục tiêu rõ ràng.
            </p>
            <p>
              Ngoài đời mình khá điềm đạm và sống hướng nội. Sau những giờ giao tiếp liên tục ngoài quầy hàng hay thảo luận trên lớp, niềm vui lớn nhất của mình là được trở về phòng riêng <strong className="font-semibold text-slate-900">đọc sách, nghe nhạc và ở một mình</strong>.
            </p>

            {/* Clean unboxed profile metadata facts */}
            <dl className="pt-6 mt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div>
                <dt className="text-xs text-slate-500">Họ và tên & Năm sinh</dt>
                <dd className="font-semibold text-slate-900 mt-0.5 tabular-nums">
                  {PROFILE_INFO.fullName} · 2003
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Quê quán</dt>
                <dd className="font-semibold text-slate-900 mt-0.5">Đồng Tháp</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Lịch trình tuần</dt>
                <dd className="font-semibold text-slate-900 mt-0.5">
                  T2 – T6 buôn bán · T7 – CN đi học UEH Mekong
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Email sinh viên UEH</dt>
                <dd className="font-mono text-xs sm:text-sm font-medium text-teal-900 mt-0.5 break-all">
                  {PROFILE_INFO.contactEmail}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* 4 Relatable Personal Traits */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-950">
              Vài điều nho nhỏ để hiểu rõ hơn về Kathy
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Những thói quen đời thường làm nên con người mình giữa tiệm tạp hóa và giảng đường
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 border-t border-slate-200/80">
            {PERSONAL_TRAITS.map((trait) => (
              <div key={trait.index} className="space-y-2 pt-2">
                <span className="font-mono text-xs font-semibold text-teal-800 tabular-nums">
                  {trait.index}.
                </span>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {trait.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {trait.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Weekly Schedule Switcher with Visual Illustration */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200/80">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-950">
                Nhịp sống một tuần của mình
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Chuyển đổi giữa các ngày trong tuần để xem công việc, lịch học và góc nghỉ ngơi của Kathy
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Lịch trình trong tuần"
              className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-xl w-fit"
            >
              {WEEKLY_PHASES.map((phase) => {
                const isSelected = activePhase.id === phase.id;
                return (
                  <button
                    key={phase.id}
                    role="tab"
                    aria-selected={isSelected}
                    type="button"
                    onClick={() => setActivePhase(phase)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-white text-slate-950 shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {phase.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Visual Frame */}
            <div className="lg:col-span-5 flex flex-col">
              <figure className="relative flex-1 min-h-[240px] sm:min-h-[280px] rounded-xl overflow-hidden bg-slate-100 flex flex-col justify-end">
                {!imgFailed[activePhase.id] ? (
                  <img
                    src={activePhase.imageUrl}
                    alt={activePhase.headline}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setImgFailed((prev) => ({ ...prev, [activePhase.id]: true }))
                    }
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-slate-900 flex items-center justify-center p-6 text-center text-white text-sm">
                    {activePhase.headline}
                  </div>
                )}
                <figcaption className="relative z-10 pt-14 pb-3.5 px-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-xs text-slate-100 leading-relaxed">
                  {activePhase.imageCaption}
                </figcaption>
              </figure>
            </div>

            {/* Text & Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
              <div className="space-y-2.5">
                <p className="text-xs font-mono tabular-nums text-teal-800 font-medium">
                  {activePhase.scheduleTag}
                </p>
                <h4 className="text-xl font-bold text-slate-950 leading-snug">
                  {activePhase.headline}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activePhase.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <p className="text-xs font-semibold text-slate-500">
                  Những điều quen thuộc trong thời gian này
                </p>
                <ol className="divide-y divide-slate-100">
                  {activePhase.highlights.map((point, idx) => (
                    <li
                      key={point}
                      className="py-2.5 first:pt-0 last:pb-0 flex items-baseline gap-3.5 text-sm text-slate-700 leading-relaxed"
                    >
                      <span className="font-mono text-xs font-semibold text-teal-800 tabular-nums shrink-0">
                        0{idx + 1}.
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
