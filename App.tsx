import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { MenuGrid } from './components/MenuGrid';
import { CatBaristaBot } from './components/CatBaristaBot';
import { AboutSection } from './components/AboutSection';
import { View } from './types';

function App() {
  const [currentView, setView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <>
            <HeroSection setView={setView} />
            <div className="py-10 bg-white">
              <MenuGrid />
            </div>
          </>
        );
      case View.MENU:
        return (
          <div className="pt-20 min-h-screen bg-stone-50">
            <MenuGrid />
          </div>
        );
      case View.BARISTA:
        return (
          <div className="pt-20 min-h-screen bg-stone-50">
            <CatBaristaBot />
          </div>
        );
      case View.ABOUT:
        return <AboutSection />;
      default:
        return <HeroSection setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-brown-900 bg-[#fdf8f6]">
      <NavBar currentView={currentView} setView={setView} />
      <main className="fade-in">
        {renderView()}
      </main>
      
      {/* Footer */}
      <footer className="bg-brown-900 text-brown-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center sm:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">Purrfect Brew</h3>
            <p className="text-sm leading-relaxed opacity-80">
              ร้านกาแฟสไตล์มินิมอลที่ใส่ใจในทุกรายละเอียด<br/>
              มาผ่อนคลายกับกาแฟดีๆ และน้องแมวน่ารักๆ ได้ทุกวัน
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">Opening Hours</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Mon - Fri: 7:00 - 19:00</li>
              <li>Sat - Sun: 8:00 - 20:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">Contact</h4>
            <p className="text-sm opacity-80">123 Cat Street, Bangkok</p>
            <p className="text-sm opacity-80">Tel: 02-999-9999</p>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-brown-800 text-xs opacity-50">
          © 2024 Purrfect Brew Café. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;