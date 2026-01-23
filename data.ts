import {
  Wrench, Anchor, Zap, Truck, Settings, PenTool,
  Cpu, Activity, ShieldCheck, TrendingUp,
  Tractor
} from 'lucide-react';
import { Service, Project, Job, Testimonial } from './types';

export const servicesData: Service[] = [
  {
    id: 'marine',
    title: 'Marine & Propulsion Systems',
    tagline: 'Efficient solutions for every vessel.',
    description: 'We specialize in the servicing and maintenance of diesel marine engines and specialized marine equipment for the maritime industry.',
    image: './images/marine.jpg',
    icon: Anchor,
    detail:'We specialize in the servicing and maintenance of diesel marine engines and specialized marine equipment for the maritime industry.',
    features: ['Marine Engine Servicing', 'Engine overhauls', 'Marine Equipment and unit repairs', 'Emergency Marine repairs','Spare parts']
  },
  {
    id: 'power',
    title: 'Generators & Power Systems',
    tagline: 'Uninterrupted energy for industry.',
    description: 'End-to-end services for Diesel and Marine Generators to ensure peak performance and reliability.',
    image: './images/generator.jpg',
    icon: Zap,
    detail:'We provide reliable 24/7 power solutions for essential industries, specializing in preventive servicing of diesel generators, alternators, and control panels. Our services cover engine overhauls, alternator rewinds, and system commissioning. As a trusted supplier of generator controllers and service parts, we ensure uninterrupted performance for power systems nationwide.',
    features: ['Comprehensive maintenance plans', 'Alternator Rewinds', 'Control Panels repairs and upgrades', 'Power Rentals Installation and setup','Spareparts','24/7 Support']
  },
  {
    id: 'vehicles',
    title: 'Specialized Vehicle & Fleet Support',
    tagline: 'Keeping your fleet moving.',
    description: 'Expert maintenance for airport ground support, heavy construction equipment, and other specialized vehicles.',
    image: './images/vehicle.jpg',
    icon: Truck,
    detail:'We provide expert maintenance and repair services for heavy-duty and specialized vehicles, including airport ground support units like fire trucks and towing vehicles, as well as construction equipment. Our team ensures maximum uptime with reliable servicing, specialized tyres, and a complete range of spare parts—keeping your fleet always ready for operation.',
    features: ['Transmission rebuilds', 'Hydraulic systems', 'Diesel engine diagnostics', 'Undercarriage repair']
  },
  {
    id: 'Truck',
    title: 'Heavy Diesel Trucks',
    tagline: 'Precision metalworks.',
    description: 'Complete service, repair, and maintenance of heavy diesel trucks and commercial vehicles.',
    image: './images/heavy.png',
    icon: Tractor,
    detail:'We offer comprehensive services for Heavy Diesel Trucks and Commercial Vehicles, including Engine Overhauls, Preventive maintenance, Unit repairs, Emergency repairs, and reliable parts supply to keep your fleet running at peak performance.',
    features: ['Engine overhauls', 'Preventive maintenance', 'Unit repairs', 'Emergency repairs','Parts Supply']
  },
  {
    id: 'repairs',
    title: 'Industrial Machinery & Plant Solutions',
    tagline: 'Reliable Solutions for Every Industrial Need',
    description: 'We offer comprehensive servicing for all types of Industrial Machinery and Plant Equipment to ensure your operation runs smoothly.',
    image: './images/industrial.jpg',
    icon: Wrench,
    detail:'We provide comprehensive servicing for all types of industrial machinery and plant equipment, ensuring smooth and efficient operations. Our expertise includes maintaining industrial coolers and radiators to prevent overheating and optimize performance. We also deliver detailed machinery health reports for predictive maintenance and supply genuine spare parts and tools to support all repairs—minimizing downtime and maximizing productivity.',
    features: ['Full Servicing & Unit Repairs', 'Specialized Cooling Systems', 'Machinery Health Diagnostics', 'Tools & Genuine Spares']
  },
  {
    id: 'parts',
    title: '24/7 Emergency Service',
    tagline: 'Always Available',
    description: 'Our expert team is on call 24/7 to handle any machinery or generator emergency ensuring minimal downtime and maximum reliability.',
    image: './images/service.jpg',
    icon: Settings,
    detail:'Our 24/7 emergency service provides rapid response for breakdowns. With a dedicated emergency hotline, nationwide coverage, and expert technicians, we are always ready to assist you.',
    features: ['Emergency hotline', 'Nationwide coverage', 'Rapid response', 'Expert technicians']
  }
];

export const projectsData: Project[] = [
  { id: 'p1', title: '', category: 'Power Systems', image: './images/power.jpg', client: '', result: '  ' },
  { id: 'p2', title: '', category: 'Marine', image: './images/marine1.jpg', client: '', result: ' ' },
  { id: 'p3', title: '', category: 'Vehicles', image: './images/vehicle.jpg', client: '', result: ' ' },
  { id: 'p4', title: '', category: 'Industrial', image: './images/industrial.jpg', client: '', result: ' ' },
  { id: 'p5', title: '', category: 'Industrial', image: './images/industrial1.jpg', client: '', result: ' ' },
  { id: 'p6', title: '', category: 'Industrial', image: './images/industrial2.jpg', client: '', result: ' ' },
  { id: 'p7', title: '', category: 'Industrial', image: './images/industrial3.jpg', client: '', result: ' ' },
  { id: 'p8', title: '', category: 'Industrial', image: './images/industrial4.jpg', client: '', result: ' ' },
  { id: 'p9', title: '', category: 'Industrial', image: './images/industrial5.jpg', client: '', result: ' ' },
  { id: 'p10', title: '', category: 'Power Systems', image: './images/power3.png', client: '', result: ' ' },
  { id: 'p11', title: '', category: 'Vehicles', image: './images/vehicle1.jpg', client: '', result: ' ' },
  { id: 'p12', title: '', category: 'Power Systems', image: './images/power2.jpg', client: '', result: ' ' },
];

export const jobsData: Job[] = [
  { id: 'j1', title: 'Senior Marine Engineer', location: 'Hamburg, Germany', type: 'Full-Time' },
  { id: 'j2', title: 'CNC Machinist', location: 'Hanover, Germany', type: 'Full-Time' },
  { id: 'j3', title: 'Industrial Electrician', location: 'Remote / On-Site', type: 'Contract' },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: "Kolitha Kotugoda,\nEngineering manager", company: "Michelin-Casting Product Division", content: "Your services have played a critical role in ensuring an uninterrupted power supply, especially during planned outages, load testing, and critical equipment maintenance activities.\n\n Your support in supplying rental generators of various capacities with proper load balancing, fuel management, and synchronization with our existing power systems has been timely and technically sound. The availability of mobile gensets, coupled with on-site technical support, allowed us to carry out our operations without downtime or production loss.", rating: 5 },
  

];