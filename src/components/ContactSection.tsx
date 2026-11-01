import { useState, type FormEvent } from 'react';
import { Check, Copy, FileText, Send } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface ContactSectionProps {
  onOpenProfileModal: () => void;
}

const MESSAGE_TOPICS = [
  'Kết nối bạn học UEH Mekong',
  'Trao đổi bài tập nhóm cuối tuần',
  'Chuyện cửa hàng tạp hóa & nguồn hàng',
  'Chia sẻ tựa sách hay & Âm nhạc',
];

export function ContactSection({ onOpenProfileModal }: ContactSectionProps) {
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [topic, setTopic] = useState(MESSAGE_TOPICS[0]);
  const [message, setMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);
  const [messageStatus, setMessageStatus] = useState<'idle' | 'copied' | 'prepared'>('idle');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_INFO.contactEmail);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2400);
    } catch {
      setEmailCopied(false);
    }
  };

  const buildFormattedBody = () => {
    return [
      `Chào Kathy Mỹ Ngọc Huỳnh,`,
      ``,
      `Mình là: ${senderName || 'Một người ghé thăm website'}`,
      senderContact ? `Thông tin liên hệ: ${senderContact}` : null,
      `Chủ đề: ${topic}`,
      ``,
      `Lời nhắn:`,
      message || 'Rất vui được ghé thăm không gian cá nhân của bạn và kết nối!',
    ]
      .filter((line) => line !== null)
      .join('\n');
  };

  const handleCopyFullMessage = async () => {
    try {
      await navigator.clipboard.writeText(buildFormattedBody());
      setMessageStatus('copied');
      window.setTimeout(() => setMessageStatus(false ? 'idle' : 'copied'), 10);
      window.setTimeout(() => setMessageStatus('idle'), 3000);
    } catch {
      setMessageStatus('idle');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = buildFormattedBody();
    const mailtoHref = `mailto:${PROFILE_INFO.contactEmail}?subject=${encodeURIComponent(
      topic
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoHref;
    setMessageStatus('prepared');
    window.setTimeout(() => setMessageStatus('idle'), 4500);
  };

  return (
    <>
      <section id="contact" className="py-16 sm:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
          <div className="max-w-3xl space-y-2.5">
            <p className="text-xs font-semibold text-teal-800">
              07. Lời chào & Kết nối
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Rất vui vì bạn đã ghé thăm góc nhỏ của Kathy
            </h2>
            <p className="text-[15px] text-slate-600 leading-relaxed">
              Nếu bạn là thầy cô, bạn học hệ Vừa Làm Vừa Học tại UEH Mekong muốn trao đổi bài vở cuối tuần, đối tác hàng tạp hóa tại Đồng Tháp, hay một người bạn có chung niềm vui đọc sách và nghe nhạc — đừng ngần ngại để lại lời nhắn cho mình nhé.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-950">Thông tin liên hệ</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Từ Thứ 2 đến Thứ 6 mình bận trông cửa hàng, Thứ 7 – Chủ nhật đi học trên lớp nên mình thường phản hồi email nhanh nhất vào buổi trưa hoặc buổi tối.
                </p>
              </div>

              <dl className="divide-y divide-slate-100 text-sm">
                <div className="py-3 first:pt-0">
                  <dt className="text-xs text-slate-500">Họ và tên</dt>
                  <dd className="font-semibold text-slate-900 mt-0.5">{PROFILE_INFO.fullName}</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Trường & Lịch học</dt>
                  <dd className="font-medium text-slate-800 mt-0.5">
                    Hệ VLVH · UEH Mekong (Học Thứ 7 & Chủ nhật)
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs text-slate-500">Công việc & Nơi ở</dt>
                  <dd className="font-medium text-slate-800 mt-0.5">
                    Cửa hàng tạp hóa tại Đồng Tháp (Thứ 2 – Thứ 6)
                  </dd>
                </div>
                <div className="py-3 last:pb-0">
                  <dt className="text-xs text-slate-500">Email sinh viên UEH</dt>
                  <dd className="mt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-mono text-xs text-slate-900 break-all">
                      {PROFILE_INFO.contactEmail}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-teal-800 hover:bg-teal-50 rounded-lg transition-colors cursor-pointer shrink-0 whitespace-nowrap w-fit"
                    >
                      {emailCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Đã sao chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </dd>
                </div>
              </dl>

              <div className="pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onOpenProfileModal}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  <FileText className="w-4 h-4 text-teal-800" />
                  <span>Xem & In Hồ sơ tóm tắt</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Message Composer */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-5"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-950">Gửi lời nhắn tới Kathy</h3>
                <p className="text-xs text-slate-500">
                  Tin nhắn sẽ được gửi trực tiếp tới hộp thư {PROFILE_INFO.contactEmail}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="sender-name" className="block text-xs font-semibold text-slate-700">
                    Tên của bạn
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Ví dụ: Minh Anh"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="sender-contact"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Email hoặc số điện thoại
                  </label>
                  <input
                    id="sender-contact"
                    type="text"
                    value={senderContact}
                    onChange={(e) => setSenderContact(e.target.value)}
                    placeholder="Để Kathy tiện phản hồi"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-800"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <span className="block text-xs font-semibold text-slate-700">
                  Chủ đề trò chuyện
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {MESSAGE_TOPICS.map((item) => {
                    const active = topic === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTopic(item)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                          active
                            ? 'bg-teal-800 text-white border-teal-800'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="sender-message"
                  className="block text-xs font-semibold text-slate-700"
                >
                  Lời nhắn của bạn
                </label>
                <textarea
                  id="sender-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Chia sẻ điều bạn muốn trao đổi cùng Kathy..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-800 resize-y"
                />
              </div>

              <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" />
                    <span>Gửi qua ứng dụng Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyFullMessage}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Sao chép nội dung</span>
                  </button>
                </div>

                {messageStatus === 'copied' && (
                  <p role="status" className="text-xs font-semibold text-teal-800">
                    Đã sao chép nội dung lời nhắn vào bộ nhớ tạm.
                  </p>
                )}
                {messageStatus === 'prepared' && (
                  <p role="status" className="text-xs font-semibold text-teal-800">
                    Đã mở trình soạn thảo email với nội dung của bạn.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-8 print:hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-slate-800">{PROFILE_INFO.fullName}</span>
            <span aria-hidden="true">·</span>
            <span>UEH Mekong</span>
            <span aria-hidden="true">·</span>
            <span>Đồng Tháp</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{PROFILE_INFO.contactEmail}</span>
          </div>

          <div className="flex items-center gap-5 shrink-0">
            <a href="#top" className="hover:text-slate-900 transition-colors whitespace-nowrap">
              Lên đầu trang
            </a>
            <button
              type="button"
              onClick={onOpenProfileModal}
              className="hover:text-slate-900 transition-colors cursor-pointer whitespace-nowrap"
            >
              Hồ sơ cá nhân
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
