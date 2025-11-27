import React from 'react';
import { View } from '../types';

interface HeroSectionProps {
  setView: (view: View) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setView }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-brown-100 rounded-l-[100px] -z-10 opacity-60 translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-center md:text-left animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-brown-200 text-brown-800 rounded-full text-sm font-medium tracking-wider mb-4">
              COFFEE & CATS
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-brown-900 leading-tight">
              A Cup of <br/>
              <span className="text-brown-500 italic">Comfort</span>
            </h1>
            <p className="text-brown-700 text-lg md:text-xl max-w-lg mx-auto md:mx-0 font-light">
              สัมผัสความอบอุ่นในสไตล์มินิมอล กาแฟหอมกรุ่นและเหล่าเจ้านายขนปุยที่พร้อมฮีลใจคุณในทุกแก้ว
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button 
                onClick={() => setView(View.MENU)}
                className="px-8 py-4 bg-brown-800 text-white rounded-full hover:bg-brown-900 transition-all shadow-lg hover:shadow-xl font-medium"
              >
                ดูเมนูแนะนำ
              </button>
              <button 
                onClick={() => setView(View.BARISTA)}
                className="px-8 py-4 bg-white text-brown-800 border-2 border-brown-200 rounded-full hover:bg-brown-50 transition-all font-medium"
              >
                ให้แมวเลือกให้
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/id/40/800/1000" 
                alt="Cat and Coffee" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brown-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
          </div>

        </div>
      </div>
    </section>
  );
};