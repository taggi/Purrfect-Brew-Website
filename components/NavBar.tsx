import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { Menu, X, Coffee } from 'lucide-react';

interface NavBarProps {
  currentView: View;
  setView: (view: View) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled || mobileMenuOpen ? 'bg-brown-50/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
  }`;

  const linkClass = (view: View) =>
    `cursor-pointer transition-colors duration-200 font-medium ${
      currentView === view ? 'text-brown-800 border-b-2 border-brown-600' : 'text-brown-600 hover:text-brown-900'
    }`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setView(View.HOME)}
          >
            <div className="bg-brown-600 p-2 rounded-full text-white">
               <Coffee size={24} />
            </div>
            <span className="font-serif text-2xl font-bold text-brown-900 tracking-wide">Purrfect Brew</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setView(View.HOME)} className={linkClass(View.HOME)}>หน้าหลัก</button>
            <button onClick={() => setView(View.ABOUT)} className={linkClass(View.ABOUT)}>เกี่ยวกับเรา</button>
            <button onClick={() => setView(View.MENU)} className={linkClass(View.MENU)}>เมนูของเรา</button>
            <button onClick={() => setView(View.BARISTA)} className={linkClass(View.BARISTA)}>น้องกะทิบาริสต้า</button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brown-800">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brown-50 border-t border-brown-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
            <button 
              onClick={() => { setView(View.HOME); setMobileMenuOpen(false); }} 
              className="py-3 text-brown-800 w-full text-center hover:bg-brown-100 rounded-lg"
            >
              หน้าหลัก
            </button>
            <button 
              onClick={() => { setView(View.ABOUT); setMobileMenuOpen(false); }} 
              className="py-3 text-brown-800 w-full text-center hover:bg-brown-100 rounded-lg"
            >
              เกี่ยวกับเรา
            </button>
            <button 
              onClick={() => { setView(View.MENU); setMobileMenuOpen(false); }} 
              className="py-3 text-brown-800 w-full text-center hover:bg-brown-100 rounded-lg"
            >
              เมนูของเรา
            </button>
            <button 
              onClick={() => { setView(View.BARISTA); setMobileMenuOpen(false); }} 
              className="py-3 text-brown-800 w-full text-center hover:bg-brown-100 rounded-lg"
            >
              คุยกับน้องกะทิ
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};