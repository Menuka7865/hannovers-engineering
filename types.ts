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
  category: 'Power Generators' | 'Marine Services' | 'Specialised Aviation & Fleet Support' | 'Heavy Vehicles'|'Industrial Machineries'|'Sales & Components';
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
