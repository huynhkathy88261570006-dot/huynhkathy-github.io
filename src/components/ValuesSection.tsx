import { CORE_VALUES } from '../data/profileData';

export function ValuesSection() {
  return (
    <section id="values" className="py-16 sm:py-24 scroll-mt-16 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
        <div className="max-w-3xl space-y-2.5">
          <p className="text-xs font-semibold text-teal-800">
            06. Triết lý cá nhân & Nguyên tắc sống
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Những giá trị giữ mình điềm tĩnh và bền bỉ
          </h2>
          <p className="text-[15px] text-slate-600 leading-relaxed">
            Sáu điều mình luôn nhắc nhở bản thân mỗi ngày — từ lúc mở cửa hàng tạp hóa đón khách sớm Thứ Hai ở Đồng Tháp, những buổi học Thứ Bảy – Chủ Nhật tại UEH Mekong cho đến khi khép lại ngày dài trong căn phòng riêng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val) => (
            <article
              key={val.index}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-mono text-2xl font-bold text-teal-800 tabular-nums">
                    {val.index}
                  </span>
                  <span className="text-xs text-slate-400">{val.subtitle}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 leading-snug">
                  {val.titleVi}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
