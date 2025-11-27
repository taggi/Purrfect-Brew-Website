import React from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';

const Card: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brown-100">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {item.isSignature && (
        <div className="absolute top-4 right-4 bg-brown-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Signature
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-brown-900">{item.name}</h3>
        <span className="text-lg font-serif font-bold text-brown-600">฿{item.price}</span>
      </div>
      <p className="text-brown-500 text-sm leading-relaxed mb-4">{item.description}</p>
      <button className="w-full py-2 rounded-lg border border-brown-200 text-brown-600 hover:bg-brown-50 hover:border-brown-300 transition-colors text-sm font-medium">
        สั่งเลย
      </button>
    </div>
  </div>
);

export const MenuGrid: React.FC = () => {
  const signatures = MENU_ITEMS.filter(i => i.isSignature);
  const others = MENU_ITEMS.filter(i => !i.isSignature);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown-900 mb-4">Our Menu</h2>
        <p className="text-brown-600 max-w-2xl mx-auto">
          คัดสรรเมล็ดกาแฟและวัตถุดิบชั้นดี ปรุงด้วยความใส่ใจทุกขั้นตอน
        </p>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-brown-800 mb-8 border-l-4 border-brown-500 pl-4">Signature Picks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatures.map(item => <Card key={item.id} item={item} />)}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-brown-800 mb-8 border-l-4 border-brown-300 pl-4">All Favorites</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map(item => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};