import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface NavbarProps {
  onOpenProfileModal: () => void;
}

const NAV_ITEMS = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Làm & Học', href: '#work-study' },
  { label: 'Video cảm nhận', href: '#course-reflection' },
  { label: 'Góc tĩnh lặng', href: '#sanctuary' },
  { label: 'Liên hệ', href: '#contact' },
];

export function Navbar({ onOpenProfileModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F6F8F6]/90 backdrop-blur-md border-b border-slate-200/80 print:hidden">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-5 sm:px-8 h-16">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        >
          {PROFILE_INFO.fullName}
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-slate-900 underline-offset-8 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenProfileModal}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
          >
            Hồ sơ cá nhân
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
            className="lg:hidden p-2.5 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 space-y-1 shadow-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-700 hover:text-teal-800 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
