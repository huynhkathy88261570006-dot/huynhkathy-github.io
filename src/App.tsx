/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorkStudySection } from './components/WorkStudySection';
import { CourseReflectionSection } from './components/CourseReflectionSection';
import { SanctuarySection } from './components/SanctuarySection';
import { MomentsSection } from './components/MomentsSection';
import { ValuesSection } from './components/ValuesSection';
import { ContactSection } from './components/ContactSection';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8F6] text-slate-900">
      <Navbar onOpenProfileModal={() => setIsProfileOpen(true)} />

      <main className="flex-1 print:hidden">
        <HeroSection onOpenProfileModal={() => setIsProfileOpen(true)} />
        <AboutSection />
        <WorkStudySection />
        <CourseReflectionSection />
        <SanctuarySection />
        <MomentsSection />
        <ValuesSection />
        <ContactSection onOpenProfileModal={() => setIsProfileOpen(true)} />
      </main>

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
}
