import { LucideIcon } from "lucide-react";

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  GALLERY = 'gallery',
  CONTACT = 'contact',
  CAREERS = 'careers',
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detail: string;
  image: string;
  icon: LucideIcon;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category:
  | 'Power Generators'
  | 'Marine Services'
  | 'Specialised Aviation & Fleet Support'
  | 'Heavy Vehicles'
  | 'Industrial,Plant,Construction,Forklift & Agriculture'
  | 'Sales & Components'
  // Power Generator sub-categories
  | 'Alternator Rewinds & Installation Upgrades'
  | 'Complete Generator Overhauls'
  | 'Generator Preventive Services'
  | 'Radiators and Cooling Systems'
  // Aviation sub-categories
  | 'Chassis Repairs'
  | 'Specialised Aviation Fleet Support'
  | 'Truck Dent Repairs and Painting'
  // Heavy Vehicles sub-categories
  | 'Diagnostics'
  | 'Heavy Diesel Engine Repair Overhauls'
  | 'Locomotive Repairs'
  | 'Unit Repairs'
  // Industrial sub-categories
  | 'Agricultural Machineries'
  | 'Industrial Machineries'
  | 'Costruction machinery & Container Handling';
  image: string;
  client: string;
  result: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  rating: number;
}
