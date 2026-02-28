import { Car, Shield, Clock, Smartphone } from 'lucide-react';

import balenoImg from "./assets/baleno/1.jpeg"
import baleno2Img from "./assets/baleno/2.jpeg"
import baleno3Img from "./assets/baleno/3.jpeg"
import baleno4Img from "./assets/baleno/4.jpeg"
import baleno5Img from "./assets/baleno/5.jpeg"
import baleno6Img from "./assets/baleno/6.jpeg"
import baleno7Img from "./assets/baleno/7.jpeg"
import baleno8Img from "./assets/baleno/8.jpeg"
import baleno9Img from "./assets/baleno/9.jpeg"
import baleno10Img from "./assets/baleno/10.jpeg"
import baleno11Img from "./assets/baleno/11.jpeg"

import breezaImg from "./assets/breeza/1.jpeg"
import breeza2Img from "./assets/breeza/2.jpeg"
import breeza3Img from "./assets/breeza/3.jpeg"
import breeza4Img from "./assets/breeza/4.jpeg"
import breeza5Img from "./assets/breeza/5.jpeg"
import breeza6Img from "./assets/breeza/6.jpeg"
import breeza7Img from "./assets/breeza/7.jpeg"
import breeza8Img from "./assets/breeza/8.jpeg"
import breeza9Img from "./assets/breeza/9.jpeg"
import breeza10Img from "./assets/breeza/10.jpeg"





export interface CarType {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string[];
  images: string[];
  transmission: 'Automatic' | 'Manual';
  fuel: 'Petrol' | 'Diesel' | 'Electric';
  seats: number;
  description?: string;
}

export const CARS: CarType[] = [
  {
    id: 'Baleno2023',
    name: 'Suzuki Baleno',
    type: 'Hatchback',
    price: 2399,
    image: [baleno6Img],
    transmission: 'Manual',
    images: [ baleno6Img,baleno4Img,baleno5Img,balenoImg, baleno2Img, baleno3Img, baleno7Img,baleno8Img,baleno9Img, baleno10Img, baleno11Img],
    fuel: 'Petrol',
    seats: 5,
  },
  {
    id: 'Brezza',
    name: 'Suzuki Brezza',
    type: 'Compact-SUV',
    price: 2899,
    image: [breezaImg],
    transmission: 'Manual',
    images: [breezaImg,breeza2Img,breeza3Img,breeza4Img,breeza5Img,breeza6Img,breeza7Img,breeza8Img,breeza9Img,breeza10Img,],
    fuel: 'Petrol',
    seats: 5,
  },
  {
    id: 'Punch',
    name: 'Tata Punch Facelift',
    type: 'mini-SUV',
    price: 130,
    image: 'https://asset.autocarindia.com/static/image-galleries/images/20260109_110637_efc1a6f4.png?w=728&q=75',
    transmission: 'Manual',
    images: [balenoImg, baleno2Img, baleno3Img],
    fuel: 'Petrol',
    seats: 5,
  },
  {
    id: 'ScorpioN',
    name: 'Mahindra ScorpioN',
    type: 'Full Size SUV',
    price: 250,
    image: 'https://dentasmile.in/wp-content/uploads/2025/12/mahindra-scorpio-n-facelift-2026-could-bring-bold-styling-updates-1024x576.webp',
    transmission: 'Manual',
    images: [balenoImg, baleno2Img, baleno3Img],
    fuel: 'Petrol',
    seats: 7,
  },
  {
    id: 'Baleno2025',
    name: 'Suzuki Baleno',
    type: 'Hatchback',
    price: 140,
    image: 'https://cdni.autocarindia.com/ExtraImages/20230310053922_aaaaaaa.jpg',
    transmission: 'Automatic',
    images: [balenoImg, baleno2Img, baleno3Img],
    fuel: 'Petrol',
    seats: 5,
  },
  {
    id: 'i20-sunroof',
    name: 'Hyundai i20 sunroof edition',
    type: 'Hatchback',
    price: 140,
    image: 'https://s3.amazonaws.com/advaithmedia/backend/storage/uploads/2022/07/25085225/Atlas-white-3.webp',
    transmission: 'Manual',
    images: [balenoImg, baleno2Img, baleno3Img],
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

