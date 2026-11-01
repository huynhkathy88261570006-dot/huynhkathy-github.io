import { useEffect, useState } from 'react';
import { Check, Copy, Printer, X } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKey);
    }
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyProfileText = async () => {
    const summary = [
      `HỒ SƠ CÁ NHÂN — ${PROFILE_INFO.fullName.toUpperCase()}`,
      `Năm sinh: ${PROFILE_INFO.birthYear} | Quê quán: Đồng Tháp`,
      `Học vấn: Sinh viên hệ Vừa Làm Vừa Học (VLVH) — UEH Mekong (MSSV: ${PROFILE_INFO.studentId})`,
      `Lịch trình: Thứ 2 – Thứ 6 buôn bán cửa hàng tạp hóa | Thứ 7 – Chủ nhật đi học`,
      `Sở thích: Đọc sách, nghe nhạc và tận hưởng không gian ở một mình`,
      `Email: ${PROFILE_INFO.contactEmail}`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(summary);
      setCopiedSummary(true);
      window.setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      setCopiedSummary(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-modal-heading"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/65 backdrop-blur-xs print:static print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] print:max-h-none print:shadow-none print:border-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Toolbar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0 print:hidden">
          <p className="text-xs font-semibold text-slate-600">
            Hồ sơ tóm tắt · {PROFILE_INFO.fullName}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyProfileText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              {copiedSummary ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-700" />
                  <span>Đã chép tóm tắt</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép tóm tắt</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In hồ sơ</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng hồ sơ"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Profile Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800">
          {/* Header Identity Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-200 border border-slate-200 shrink-0">
                {!imgError ? (
                  <img
                    src={PROFILE_INFO.portraitPath}
                    alt={PROFILE_INFO.fullName}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full bg-teal-900 text-white flex items-center justify-center font-serif font-bold text-lg">
                    KMNH
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <h2
                  id="profile-modal-heading"
                  className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight"
                >
                  {PROFILE_INFO.fullName}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-teal-800">
                  Sinh viên Vừa Làm Vừa Học tại UEH Mekong · Chủ cửa hàng tạp hóa tại Đồng Tháp
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="tabular-nums">Sinh năm 2003</span>
                  <span aria-hidden="true">·</span>
                  <span>Đồng Tháp</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono break-all">{PROFILE_INFO.contactEmail}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 01. Giới thiệu ngắn */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-950 border-b border-slate-200 pb-1.5">
              01. Giới thiệu bản thân
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sinh năm 2003 tại Đồng Tháp, mình hiện sở hữu và trực tiếp trông coi một cửa hàng tạp hóa tại nhà từ Thứ Hai đến Thứ Sáu. Mỗi dịp Thứ Bảy và Chủ Nhật, mình theo học chương trình đại học hệ Vừa Làm Vừa Học tại UEH Mekong nhằm trau dồi kiến thức quản trị bài bản song hành cùng công việc kinh doanh thực tế.
            </p>
          </div>

          {/* 02. Học vấn */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-950 border-b border-slate-200 pb-1.5">
              02. Quá trình học tập
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <p className="text-sm font-bold text-slate-900">
                UEH Mekong — Phân hiệu Đại học Kinh tế TP. Hồ Chí Minh
              </p>
              <span className="text-xs font-mono text-slate-500 tabular-nums">
                Lịch học: Thứ 7 & Chủ Nhật
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-teal-800 tabular-nums">
              Sinh viên Hệ Vừa Làm Vừa Học (VLVH) · MSSV: {PROFILE_INFO.studentId}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Rèn luyện kỷ luật quản lý thời gian để vừa đảm bảo chuyên cần trên giảng đường hai ngày cuối tuần, vừa vận dụng kiến thức kinh tế học được vào công việc buôn bán thường nhật.
            </p>
          </div>

          {/* 03. Công việc hiện tại */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold text-slate-950 border-b border-slate-200 pb-1.5">
              03. Công việc & Kinh nghiệm thực tế
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <p className="text-sm font-bold text-slate-900">
                Quản lý & Buôn bán tại Cửa hàng Tạp hóa riêng
              </p>
              <span className="text-xs font-mono text-slate-500">
                Đồng Tháp · Thứ 2 đến Thứ 6
              </span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed list-disc list-inside">
              <li>
                Trực tiếp mở cửa, kiểm tra chất lượng, hạn sử dụng hàng hóa và sắp xếp quầy kệ ngăn nắp mỗi ngày trong tuần.
              </li>
              <li>
                Ghi chép sổ sách thu chi, theo dõi hàng tồn và chuẩn bị nguồn hàng chu đáo trước mỗi kỳ học cuối tuần.
              </li>
              <li>
                Phục vụ bà con lối xóm bằng sự niềm nở, chân thành và uy tín lâu dài.
              </li>
            </ul>
          </div>

          {/* 04. Sở thích & Đời sống tinh thần */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-950 border-b border-slate-200 pb-1.5">
              04. Sở thích & Phong cách cá nhân
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 text-xs sm:text-sm">
              <div>
                <p className="font-semibold text-slate-900">Đọc sách</p>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  Yêu thích tản văn miền Tây, sách tâm lý hướng nội và quản trị thói quen.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Nghe nhạc</p>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  Thưởng thức giai điệu Acoustic, Indie nhẹ nhàng sau giờ đóng cửa tiệm.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Ở một mình</p>
                <p className="text-slate-600 mt-0.5 leading-relaxed">
                  Trân trọng khoảng thời gian yên tĩnh riêng tư mỗi tối để tái tạo năng lượng.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Close Bar */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0 print:hidden">
          <span className="text-xs text-slate-500 font-mono truncate">
            {PROFILE_INFO.contactEmail}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Đóng hồ sơ
          </button>
        </div>
      </div>
    </div>
  );
}
