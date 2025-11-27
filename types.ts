export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'non-coffee' | 'bakery';
  image: string;
  isSignature: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export enum View {
  HOME = 'HOME',
  MENU = 'MENU',
  BARISTA = 'BARISTA',
  ABOUT = 'ABOUT',
}