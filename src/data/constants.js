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
  { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1280px-Bosch-logo.svg.png' },
  { name: 'DeWalt', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/DeWalt_logo.svg/1200px-DeWalt_logo.svg.png' },
  { name: 'Hitachi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hitachi_Logo.svg/1200px-Hitachi_Logo.svg.png' },
  { name: '3M', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/3M_wordmark.svg/1200px-3M_wordmark.svg.png' },
  { name: 'JCB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/JCB_logo.svg/1200px-JCB_logo.svg.png' },
  { name: 'Venus', logo: 'https://dummyimage.com/200x80/000/fff&text=Venus' },
  { name: 'Liberty', logo: 'https://dummyimage.com/200x80/000/fff&text=Liberty' },
  { name: 'Karam', logo: 'https://dummyimage.com/200x80/000/fff&text=Karam' },
  { name: 'Taparia', logo: 'https://dummyimage.com/200x80/000/fff&text=Taparia' },
  { name: 'Tiger', logo: 'https://dummyimage.com/200x80/000/fff&text=Tiger' },
  { name: 'Euro', logo: 'https://dummyimage.com/200x80/000/fff&text=Euro' },
  { name: 'Mastech', logo: 'https://dummyimage.com/200x80/000/fff&text=Mastech' },
  { name: 'Udyogi', logo: 'https://dummyimage.com/200x80/000/fff&text=Udyogi' },
  { name: 'Alko Plus', logo: 'https://dummyimage.com/200x80/000/fff&text=Alko+Plus' },
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
      { name: 'Gloves', folder: 'assets/handgloves', hero: 'handgloves (1).jpg' },
      { name: 'Safety Shoes', folder: 'assets/safetyshoes', hero: 'safetyshoes (1).jpg' },
    ]
  },
  {
    id: 'industrial-safety',
    title: 'Industrial Safety Accessories',
    icon: 'Construction',
    subcategories: [
      { name: 'Barricades', folder: 'assets/roadsafety', hero: 'roadsafety (6).jpg' },
      { name: 'Traffic Cones', folder: 'assets/roadsafety', hero: 'roadsafety (2).jpg' },
      { name: 'Lockout Tagout', folder: 'assets/locouttagout', hero: '01.jpg' },
    ]
  },
  {
    id: 'abrasives',
    title: 'Abrasives & Cutting Tools',
    icon: 'Disc',
    subcategories: [
      { name: 'Grinding Wheels', folder: 'assets/others', hero: 'others (4).jpg' },
      { name: 'Cut Off Wheels', folder: 'assets/others', hero: 'others (11).jpg' },
    ]
  },
  {
    id: 'power-tools',
    title: 'Power Tools',
    icon: 'Hammer',
    subcategories: [
      { name: 'Drills', folder: 'assets/others', hero: 'other (4).jpg' },
      { name: 'Bosch Tools', folder: 'assets/others', hero: 'other (1).jpg' },
    ]
  },
  {
    id: 'welding',
    title: 'Welding Equipment',
    icon: 'Zap',
    subcategories: [
      { name: 'Welding Machines', folder: 'assets/firesafety', hero: 'big01.jpg' },
    ]
  },
  {
    id: 'hand-tools',
    title: 'Hand Tools',
    icon: 'Hammer',
    subcategories: [
      { name: 'Spanners', folder: 'assets/others', hero: 'others (5).jpg' },
      { name: 'Screwdrivers', folder: 'assets/others', hero: 'others (7).jpg' },
      { name: 'Pliers', folder: 'assets/others', hero: 'others (8).jpg' },
      { name: 'Tool Kits', folder: 'assets/others', hero: 'others (9).jpg' },
    ]
  },
  {
    id: 'measuring',
    title: 'Measuring Instruments',
    icon: 'Ruler',
    subcategories: [
      { name: 'Vernier Calipers', folder: 'assets/others', hero: 'others (12).jpg' },
      { name: 'Gauges', folder: 'assets/others', hero: 'others (13).jpg' },
    ]
  },
  {
    id: 'machinery',
    title: 'Industrial Machines & Hardware',
    icon: 'Settings',
    subcategories: [
      { name: 'Bench Vice', folder: 'assets/others', hero: 'others (15).jpg' },
      { name: 'Industrial Cutting Machines', folder: 'assets/others', hero: 'others (16).jpg' },
      { name: 'Chain Tools', folder: 'assets/others', hero: 'others (17).jpg' },
    ]
  },
  {
    id: 'others',
    title: 'Others',
    icon: 'Package',
    subcategories: [
      { name: 'Other Products', folder: 'assets/others', hero: 'others (1).jpg' },
    ]
  }
];

export const CONTACT_INFO = {
  company: 'Grace Safety Engineering',
  tagline: 'The Multi Brand Safety Shop',
  address: '#1 First Floor, Doddrammanna Building, Kallubalu Cross, Jigani Hobli, Anekal Taluk, Bangalore – 560105',
  phones: ['+91 9740700207', '+91 9845100617'],
  email: 'sham.graysafetyeng@gmail.com',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.871131495447!2d77.6321487747385!3d12.78696808751121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c4d7e8b6b0b%3A0x6e8e8e8e8e8e8e8e!2sJigani%2C%20Karnataka%20562106!5e0!3m2!1sen!2sin!4v1715520000000!5m2!1sen!2sin'
};
