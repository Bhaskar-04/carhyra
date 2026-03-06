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

import carensImg from "./assets/carens/1.png"
import carens2Img from "./assets/carens/2.png"
import carens3Img from "./assets/carens/3.png"
import carens4Img from "./assets/carens/4.png"






export interface CarType {
  id: string;
  name: string;
  price: number;
  security_deposit: number;
  image: string;
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
    price: 92,
    security_deposit : 2000,
    image: baleno6Img,
    transmission: 'Manual',
    images: [ baleno4Img,baleno6Img,baleno5Img,balenoImg, baleno2Img, baleno3Img, baleno7Img,baleno8Img,baleno9Img, baleno10Img, baleno11Img],
    fuel: 'Petrol',
    seats: 5,
  },
  {
    id: 'Brezza',
    name: 'Suzuki Brezza',
    price: 109,
    security_deposit : 2000,
    image: breezaImg,
    transmission: 'Manual',
    images: [breezaImg,breeza2Img,breeza3Img,breeza4Img,breeza5Img,breeza6Img,breeza7Img,breeza8Img,breeza9Img,breeza10Img,],
    fuel: 'Petrol',
    seats: 5,
  },
  {
    id: 'i20-sunroof',
    name: 'Hyundai i20 (with sunroof)',
    price: 97,
    security_deposit : 2000,
    image: 'https://cdn-s3.autocarindia.com/hyundai/i20/_AAB7144.JPG?w=640',
    transmission: 'Manual',
    images: ['https://www.team-bhp.com/forum/attachments/official-new-car-reviews/1295277d1412337443-hyundai-elite-i20-official-review-2.jpg', "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/i20-N-Line/10285/1755057897543/rear-view-119.jpg", "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/40530/i20-interior-dashboard.jpeg?q=80"],
    fuel: 'Petrol',
    seats: 5,
  },
  {
    id: 'Kia',
    name: 'Kia Carens Clavis',
    price: 169,
    security_deposit : 4000,
    image: 'https://i2-vnexpress.vnecdn.net/2025/05/09/KiaCarensClavis1-1746758641-9874-1746758654.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=o-xbhaiRvXaEyWsRuMOWiQ',
    transmission: 'Manual',
    images: [carensImg,carens2Img,carens3Img,carens4Img],
    fuel: 'Petrol',
    seats: 7,
  },
  {
    id: 'Punch',
    name: 'Tata Punch Facelift',
    price: 83,
    security_deposit : 2000,
    image: 'https://asset.autocarindia.com/static/image-galleries/images/20260109_110637_efc1a6f4.png?w=728&q=75',
    transmission: 'Manual',
    images: ["https://imgd.aeplcdn.com/600x600/n/cw/ec/187937/tata-punch-right-front-three-quarter2.jpeg?isig=0", "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/172825/punch-exterior-left-side-view-16.jpeg?isig=0&q=80", "https://stimg.cardekho.com/images/carinteriorimages/930x620/Tata/Punch/9623/1762425702890/dashboard-59.jpg?imwidth=420&impolicy=resize"],
    fuel: 'Petrol',
    seats: 5,
  },
   {
    id: 'Ertiga',
    name: 'Suzuki Ertiga',
    price: 149,
    security_deposit : 4000,
    image: 'https://images.jdmagicbox.com/quickquotes/images_main/ertiga-cng-vxi-pearl-arctic-white-271052341-5yv8z.png',
    transmission: 'Manual',
    images: ["https://images.jdmagicbox.com/quickquotes/images_main/ertiga-cng-vxi-pearl-arctic-white-271052341-5yv8z.png", "https://images.overdrive.in/wp-content/odgallery/2018/11/48776_Maruti_Suzuki_Ertiga_2019_010.JPG", "https://images10.gaadi.com/usedcar_image/5144811/original/processed_fb6596ec-b2eb-42d3-b04c-7faf78091145.jpg?imwidth=640"],
    fuel: 'Petrol',
    seats: 7,
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
    title: 'Perfect Fleet',
    description: 'Well-maintained, clean, and modern vehicles for a superior driving experience.',
  },
];

export const WHATSAPP_NUMBER = '8506885683'; // Replace with real number

