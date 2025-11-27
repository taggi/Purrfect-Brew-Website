import React from 'react';
import { Heart, Coffee, Sun } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  isCat: boolean;
}

const TEAM: TeamMember[] = [
  {
    name: "คุณพลอย (Ploy)",
    role: "Founder & Head Barista",
    description: "หลงรักกลิ่นกาแฟและความเงียบสงบ ตั้งใจชงทุกแก้วด้วยใจ",
    image: "https://picsum.photos/id/64/400/400",
    isCat: false
  },
  {
    name: "น้องกะทิ (Kati)",
    role: "Store Manager",
    description: "แมวสามสีผู้รอบรู้ (AI ของเราเอง) ชอบแนะนำเมนูให้ลูกค้า",
    image: "https://picsum.photos/id/40/400/400",
    isCat: true
  },
  {
    name: "โอเลี้ยง (O-Liang)",
    role: "Security Guard",
    description: "แมวดำขี้เซา หน้าที่หลักคือนอนเฝ้าประตูและรับแขก (เวลามีขนม)",
    image: "https://picsum.photos/id/219/400/400",
    isCat: true
  },
  {
    name: "นมสด (Nom-Sod)",
    role: "Receptionist",
    description: "แมวขาวขี้อ้อน ชอบกระโดดขึ้นตักลูกค้าที่นั่งทำงานนานๆ",
    image: "https://picsum.photos/id/593/400/400",
    isCat: true
  }
];

export const AboutSection: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-brown-50 font-sans text-brown-900">
      
      {/* Header */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brown-100 rounded-full opacity-50 blur-3xl -z-10"></div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-brown-900">Our Story</h1>
        <p className="text-xl text-brown-600 font-light max-w-2xl mx-auto">
          เรื่องราวของกาแฟ แมวเหมียว และความสุขสีน้ำตาล
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-20">
        
        {/* Concept */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <img 
              src="https://picsum.photos/id/42/800/600" 
              alt="Cafe Atmosphere" 
              className="rounded-3xl shadow-xl w-full object-cover h-[400px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-brown-100 hidden md:block">
              <div className="flex items-center space-x-2 text-brown-800">
                <Sun size={20} />
                <span className="font-medium">Warm & Cozy</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-800">
              More than just a café
            </h2>
            <p className="text-brown-600 leading-relaxed text-lg">
              <b>Purrfect Brew</b> เริ่มต้นจากความรักในสองสิ่งที่ดูเหมือนจะแตกต่างกัน แต่เข้ากันได้อย่างลงตัว นั่นคือ "กาแฟ Specialty" และ "ความผ่อนคลายของแมว"
            </p>
            <p className="text-brown-600 leading-relaxed text-lg">
              เราตั้งใจออกแบบร้านให้เป็นเหมือนห้องนั่งเล่นที่บ้าน พื้นที่ที่คุณสามารถหนีจากความวุ่นวาย มานั่งจิบกาแฟหอมๆ ฟังเสียงเพลงเบาๆ และปล่อยใจไปกับความน่ารักของเหล่าพนักงานสี่ขาของเรา
            </p>
            <div className="flex space-x-4 pt-4 text-brown-700 font-medium">
              <div className="flex items-center space-x-2">
                <Coffee size={20} className="text-brown-500" />
                <span>Good Coffee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart size={20} className="text-brown-500" />
                <span>Heal Soul</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-brown-800 mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-brown-100 group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                   <div className="absolute inset-0 bg-brown-200 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform"></div>
                   <img 
                    src={member.image} 
                    alt={member.name} 
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                   />
                </div>
                <h3 className="text-xl font-bold text-brown-900 mb-1">{member.name}</h3>
                <span className="inline-block px-3 py-1 bg-brown-50 text-brown-600 text-xs font-medium rounded-full mb-3 uppercase tracking-wide">
                  {member.role}
                </span>
                <p className="text-brown-500 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};