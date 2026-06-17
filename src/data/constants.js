import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';
import b4 from '../assets/b4.png';
import b5 from '../assets/b5.png';
import b6 from '../assets/b6.png';
import b7 from '../assets/b7.png';
import b8 from '../assets/b8.png';
import b9 from '../assets/b9.png';
import b10 from '../assets/b10.png';

export const COLORS = {
  primary: '#F4B400',
  darkGreen: '#3A3A3A',
  black: '#111111',
  charcoal: '#3A3A3A',
  lightGray: '#EAEAEA',
  accentLime: '#FFC107',
  white: '#FFFFFF',
};

export const BRANDS = [
  { name: 'Brand 1', logo: b1 },
  { name: 'Brand 2', logo: b2 },
  { name: 'Brand 3', logo: b3 },
  { name: 'Brand 4', logo: b4 },
  { name: 'Brand 5', logo: b5 },
  { name: 'Brand 6', logo: b6 },
  { name: 'Brand 7', logo: b7 },
  { name: 'Brand 8', logo: b8 },
  { name: 'Brand 9', logo: b9 },
  { name: 'Brand 10', logo: b10 },
];

export const CATEGORIES = [
  {
    id: 'ppe-safety',
    title: 'PPE & Safety Equipment',
    icon: 'ShieldCheck',
    subcategories: [
      { name: 'Helmets', folder: 'assets/headsafety', hero: 'big3.jpg' },
      { name: 'Safety Glasses', folder: 'assets/eyeprotection', hero: 'big4.jpg' },
      { name: 'Safety Harness', folder: 'assets/fallprotection', hero: 'big1.jpg' },
      { name: 'Respirators', folder: 'assets/faceprotection', hero: 'big01.jpg' },
      { name: 'Ear Protection', folder: 'assets/headsafety', hero: 'headprotection (1).jpg' },
      { name: 'Hand Gloves', folder: 'assets/handgloves', hero: 'handgloves (1).jpg' },
      { name: 'Safety Shoes', folder: 'assets/safetyshoes', hero: 'safetyshoes (1).jpg' },
      { name: 'Body Protection', folder: 'assets/bodyprotection', hero: 'bodyprotection (1).jpg' },
    ]
  },
  {
    id: 'industrial-safety',
    title: 'Industrial Safety Accessories',
    icon: 'Construction',
    subcategories: [
      { name: 'Road Safety', folder: 'assets/roadsafety', hero: 'roadsafety (6).jpg' },
      { name: 'Lockout Tagout', folder: 'assets/locouttagout', hero: '01.jpg' },
    ]
  },
  {
    id: 'fire-safety',
    title: 'Fire Safety Equipment',
    icon: 'Flame',
    subcategories: [
      { name: 'Fire Safety Equipment', folder: 'assets/firesafety', hero: 'big04.jpg' },
    ]
  },
  {
    id: 'tools-abrasives',
    title: 'Tools, Abrasives & Hardware',
    icon: 'Hammer',
    subcategories: [
      { name: 'Power Tools, Abrasives & Hardware', folder: 'assets/others', hero: '000_featured_abrasives.jpg' },
    ]
  },
];

export const CONTACT_INFO = {
  company: 'Grace Safety Engineering',
  tagline: 'The Multi Brand Safety Shop',
  address: 'RK Royal Interiors, shop no 6, harohalli, nagaraj building, Sy.No.7/5, mainroad, Mahanthalingapura, Jigani, Karnataka 560083',
  phones: ['+91 9740700207', '+91 8088488777'],
  email: 'gracesafetyengg@gmail.com',
  mapsEmbed: 'https://www.google.com/maps?q=RK+Royal+Interiors,+shop+no+6,+harohalli,+nagaraj+building,+Jigani,+Karnataka+560083&output=embed'
};
