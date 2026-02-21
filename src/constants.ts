import { Car, Shield, Clock, Smartphone } from 'lucide-react';

export interface CarType {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  transmission: 'Automatic' | 'Manual';
  fuel: 'Petrol' | 'Diesel' | 'Electric';
  seats: number;
}

export const CARS: CarType[] = [
  {
    id: '1',
    name: '2023 Maruti Suzuki Baleno',
    type: 'Hatchback',
    price: 150,
    image: 'https://media.spinny.com/sp-file-system/public/2025-01-23/a62c483bbcf74d53838f433d0769b345/file.JPG',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
  },
  {
    id: '2',
    name: '2024 Maruti Suzuki Brezza',
    type: 'Compact-SUV',
    price: 200,
    image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80&q=80',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
  },
  {
    id: '3',
    name: '2026 Tata Punch Facelift',
    type: 'mini-SUV',
    price: 130,
    image: 'https://asset.autocarindia.com/static/image-galleries/images/20260109_110637_efc1a6f4.png?w=728&q=75',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
  },
  {
    id: '4',
    name: '2026 Mahindra ScorpioN',
    type: 'Full Size SUV',
    price: 250,
    image: 'https://dentasmile.in/wp-content/uploads/2025/12/mahindra-scorpio-n-facelift-2026-could-bring-bold-styling-updates-1024x576.webp',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 7,
  },
  {
    id: '5',
    name: '2023 Maruti Suzuki Baleno',
    type: 'Hatchback',
    price: 140,
    image: 'https://cdni.autocarindia.com/ExtraImages/20230310053922_aaaaaaa.jpg',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
  },
];

export const VALUE_POINTS = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'All our vehicles come with comprehensive insurance for your peace of mind.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our team is always available to assist you with any queries or emergencies.',
  },
  {
    icon: Smartphone,
    title: 'Easy Booking',
    description: 'No complex forms. Just a quick WhatsApp message and you are ready to go.',
  },
  {
    icon: Car,
    title: 'Premium Fleet',
    description: 'Well-maintained, clean, and modern vehicles for a superior driving experience.',
  },
];

export const WHATSAPP_NUMBER = '8506885683'; // Replace with real number

