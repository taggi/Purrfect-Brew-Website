import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Dirty Paw Latte',
    description: 'ช็อตเอสเพรสโซ่เข้มข้นราดบนนมสดเย็นจัด ลายสวยเหมือนอุ้งเท้าแมว',
    price: 120,
    category: 'coffee',
    image: 'https://picsum.photos/id/1060/400/400',
    isSignature: true,
  },
  {
    id: '2',
    name: 'Caramel Meow-chiato',
    description: 'คาราเมลหอมหวาน ผสมกาแฟคั่วกลาง ให้ความรู้สึกนุ่มนวล',
    price: 135,
    category: 'coffee',
    image: 'https://picsum.photos/id/425/400/400',
    isSignature: false,
  },
  {
    id: '3',
    name: 'Catnip Matcha',
    description: 'มัทฉะพรีเมียมจากญี่ปุ่น หอมละมุน (ไม่มีกัญชาแมวผสมจริง)',
    price: 140,
    category: 'non-coffee',
    image: 'https://picsum.photos/id/431/400/400',
    isSignature: true,
  },
  {
    id: '4',
    name: 'Fluffy Croissant',
    description: 'ครัวซองต์เนยสดฝรั่งเศส กรอบนอกนุ่มใน หอมฟุ้ง',
    price: 95,
    category: 'bakery',
    image: 'https://picsum.photos/id/493/400/400',
    isSignature: false,
  },
  {
    id: '5',
    name: 'Soft Paws Cheesecake',
    description: 'ชีสเค้กหน้าไหม้ เนื้อเนียนนุ่ม ละลายในปาก',
    price: 160,
    category: 'bakery',
    image: 'https://picsum.photos/id/292/400/400',
    isSignature: true,
  },
  {
    id: '6',
    name: 'Yuzu Americano',
    description: 'กาแฟดำผสมส้มยูซุ สดชื่น ตื่นตัวเหมือนแมวเห็นนก',
    price: 130,
    category: 'coffee',
    image: 'https://picsum.photos/id/365/400/400',
    isSignature: false,
  },
];

export const SYSTEM_INSTRUCTION = `
You are "Nong Kati" (น้องกะทิ), a cute and polite Cat Barista at "Purrfect Brew Café".
Your personality is warm, minimalist, and helpful. You often end sentences with "meow~" or "nya~" (in Thai tone like "เมี๊ยว" or "นะเมี๊ยว").
Your goal is to recommend drinks/bakery from the provided MENU_ITEMS list based on the user's mood or preference.

MENU_ITEMS:
${JSON.stringify(MENU_ITEMS.map(i => `${i.name} (${i.description})`))}

Rules:
1. Speak mainly in Thai.
2. Only recommend items from the menu.
3. If the user is sad, recommend something sweet or warm.
4. If the user is tired, recommend strong coffee.
5. Keep responses short and sweet (under 300 characters).
`;