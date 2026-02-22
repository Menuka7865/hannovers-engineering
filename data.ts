import {
  Wrench, Anchor, Zap, Truck, Settings, PenTool,
  Cpu, Activity, ShieldCheck, TrendingUp,
  Tractor, Plane, Package
} from 'lucide-react';
import { Service, Project, Job, Testimonial } from './types';

export const servicesData: Service[] = [
  {
    id: 'power',
    title: 'Power Generation & Energy Systems',
    tagline: 'Uninterrupted energy for industry.',
    description: 'From 500kVA to 2MVA, we provide end-to-end lifecycle support for power systems. Our expertise covers preventive maintenance, alternator insulation upgrades, and high-capacity radiator servicing to ensure your facility never goes dark.',
    image: 'generator.jpg',
    icon: 'generator.png',
    detail: 'From 500kVA to 2MVA, we provide end-to-end lifecycle support for power systems. Our expertise covers preventive maintenance, alternator insulation upgrades, and high-capacity radiator servicing to ensure your facility never goes dark.',
    features: ['Preventive Service', 'Alternator Rewinds', 'Control Panels', 'Radiators/Cooling', 'Power Rentals', 'Spareparts', '24/7 Support']
  },
  {
    id: 'marine',
    title: 'Marine & Maritime Engineering',
    tagline: 'Mission-critical repairs for maritime sector.',
    description: 'Providing mission-critical repairs for the maritime sector. We specialize in the overhaul of marine diesel engines for offshore supply vessels, tugs, and commercial fishing fleets, keeping your propulsion systems reliable in open water.',
    image: 'marine.jpg',
    icon: 'marine.png',
    detail: 'Providing mission-critical repairs for the maritime sector. We specialize in the overhaul of marine diesel engines for offshore supply vessels, tugs, and commercial fishing fleets, keeping your propulsion systems reliable in open water.',
    features: ['Marine Diesel Engine Servicing', 'Engine overhauls', 'Marine Equipment and unit repairs', 'Emergency Marine repairs', 'Spare parts']
  },
  {
    id: 'aviation',
    title: 'Specialised Aviation & Other Fleet Support',
    tagline: 'Trusted by Air Forces and Airport Authorities.',
    description: 'Trusted by Air Forces and Airport Authorities. We deliver specialised engineering for aircraft fire trucks, Towing Vehicles, Refuelling bowsers, and ground power units. Our service includes everything from chassis structural repairs to complete engine overhauls.',
    image: 'vehicle.JPG',
    icon: 'specialised.png',
    detail: 'Trusted by Air Forces and Airport Authorities. We deliver specialised engineering for aircraft fire trucks, Towing Vehicles, Refuelling bowsers, and ground power units. Our service includes everything from chassis structural repairs to complete engine overhauls.',
    features: ['Airport Ground Support', 'Heavy Construction Equipment', 'Specialised Tyres', 'Chassis & Dent Repairs', 'Spare Parts Supply']
  },
  {
    id: 'heavy-diesel',
    title: 'Heavy Diesel & Industrial Solutions',
    tagline: 'Restoring power and precision.',
    description: 'Restoring power and precision to your most heavy-duty assets. We specialize in the technical mastery required to maximize the lifespan of industrial equipment, providing everything from major engine overhauls to advanced on-site diagnostics.',
    image: 'heavy.png',
    icon: 'heavy2.png',
    detail: 'Restoring power and precision to your most heavy-duty assets. We specialize in the technical mastery required to maximize the lifespan of industrial equipment, providing everything from major engine overhauls to advanced on-site diagnostics.',
    features: ['Full Engine Overhauls & Re-manufacturing', 'Preventive maintenance', 'Advanced Mechanical Diagnostics', 'Component-Level Unit Repairs', 'On-Call Emergency Technical Support', 'Strategic Parts Supply & Logistics']
  },
  {
    id: 'industrial-plant',
    title: 'Industrial, Plant, & Agriculture Machinery Solutions',
    tagline: 'Engineered for endurance across every terrain.',
    description: 'Engineered for endurance across every terrain. We provide comprehensive lifecycle support for industrial plants and agricultural machinery, ensuring that your critical equipment from construction fleets to diesel tractors operates with seamless reliability in the toughest conditions.',
    image: 'industrial.jpg',
    icon: 'industrial.png',
    detail: 'Engineered for endurance across every terrain. We provide comprehensive lifecycle support for industrial plants and agricultural machinery, ensuring that your critical equipment from construction fleets to diesel tractors operates with seamless reliability in the toughest conditions.',
    features: ['Industrial Plant Servicing & Unit Repairs', 'Industrial Diesel Engine & Machinery', 'Agriculture Diesel Engines & Machinery', 'Diesel Forklift Maintenance & Support', 'Container Handling Equipment', 'Construction & Earthmoving Machinery', 'Advanced Cooling Systems & Engine Radiators', 'Machinery Health Monitoring & Diagnostics', 'Genuine Spares & Precision Tools']
  },
  {
    id: 'parts',
    title: 'Sales & Component Supply',
    tagline: 'Precision components for mission-critical performance.',
    description: 'Precision components for mission-critical performance. We supply high-grade parts specifically engineered for the power and industrial sectors, ensuring that your systems are always supported by genuine, high-performance hardware.',
    image: 'service.jpg',
    icon: 'spare.png',
    detail: 'Precision components for mission-critical performance. We supply high-grade parts specifically engineered for the power and industrial sectors, ensuring that your systems are always supported by genuine, high-performance hardware.',
    features: ['Diesel Generator Control Modules', 'Generator & Industrial Electrical parts', 'Industrial Electrical & Synchronization Parts', 'High-Performance Turbochargers', 'Heavy-Duty Generator & Industrial Radiators']
  }
];

export const galleryData: Project[] = [
  { id: 'pg-ar-1', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-1.jpg', client: '', result: ' ' },
  { id: 'pg-ar-2', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-2.jpg', client: '', result: ' ' },
  { id: 'pg-ar-3', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-3.jpg', client: '', result: ' ' },
  { id: 'pg-ar-4', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-4.jpg', client: '', result: ' ' },
  { id: 'pg-ar-5', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-5.jpg', client: '', result: ' ' },
  { id: 'pg-ar-6', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-6.jpg', client: '', result: ' ' },
  { id: 'pg-ar-7', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-7.jpg', client: '', result: ' ' },
  { id: 'pg-ar-8', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-8.jpg', client: '', result: ' ' },
  { id: 'pg-ar-9', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-9.jpg', client: '', result: ' ' },
  { id: 'pg-ar-10', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-10.jpg', client: '', result: ' ' },
  { id: 'pg-ar-11', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-11.jpg', client: '', result: ' ' },
  { id: 'pg-ar-12', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-12.jpg', client: '', result: ' ' },
  { id: 'pg-ar-13', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-13.jpg', client: '', result: ' ' },
  { id: 'pg-ar-14', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-14.jpg', client: '', result: ' ' },
  { id: 'pg-ar-15', title: 'Alternator Rewind', category: 'Alternator Rewinds & Installation Upgrades', image: 'pg-ar-15.jpg', client: '', result: ' ' },
  { id: 'pg-cg-1', title: 'Generator Overhaul', category: 'Complete Generator Overhauls', image: 'pg-cg-1.jpg', client: '', result: ' ' },
  { id: 'pg-cg-2', title: 'Generator Overhaul', category: 'Complete Generator Overhauls', image: 'pg-cg-2.jpg', client: '', result: ' ' },
  { id: 'pg-cg-3', title: 'Generator Overhaul', category: 'Complete Generator Overhauls', image: 'pg-cg-3.jpg', client: '', result: ' ' },
  { id: 'pg-cg-4', title: 'Generator Overhaul', category: 'Complete Generator Overhauls', image: 'pg-cg-4.jpg', client: '', result: ' ' },
  { id: 'pg-cg-5', title: 'Generator Overhaul', category: 'Complete Generator Overhauls', image: 'pg-cg-5.jpg', client: '', result: ' ' },
  { id: 'gps-1', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (1).jpg', client: '', result: ' ' },
  { id: 'gps-2', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (2).jpg', client: '', result: ' ' },
  { id: 'gps-3', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (3).jpg', client: '', result: ' ' },
  { id: 'gps-4', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (4).jpg', client: '', result: ' ' },
  { id: 'gps-5', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (5).JPG', client: '', result: ' ' },
  { id: 'gps-6', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (6).jpg', client: '', result: ' ' },
  { id: 'gps-7', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (7).jpg', client: '', result: ' ' },
  { id: 'gps-8', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (8).jpg', client: '', result: ' ' },
  { id: 'gps-9', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (9).jpg', client: '', result: ' ' },
  { id: 'gps-10', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (10).jpg', client: '', result: ' ' },
  { id: 'gps-11', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (11).jpg', client: '', result: ' ' },
  { id: 'gps-12', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (12).jpg', client: '', result: ' ' },
  { id: 'gps-13', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (13).jpg', client: '', result: ' ' },
  { id: 'gps-14', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (14).jpg', client: '', result: ' ' },
  { id: 'gps-15', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (15).jpg', client: '', result: ' ' },
  { id: 'gps-16', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (16).jpg', client: '', result: ' ' },
  { id: 'gps-17', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (17).jpg', client: '', result: ' ' },
  { id: 'gps-18', title: 'Preventive Service', category: 'Generator Preventive Services', image: 'Generator Preventive Services (18).jpg', client: '', result: ' ' },
  { id: 'rad-1', title: 'New Radiators', category: 'Radiators and Cooling Systems', image: 'New Radiator for Cummins QSK60 2MVA Generator (2).jpg', client: '', result: ' ' },
  { id: 'rad-2', title: 'New Radiators', category: 'Radiators and Cooling Systems', image: 'New Radiator for Cummins QSK60 2MVA Generator (5).jpg', client: '', result: ' ' },
  { id: 'rad-3', title: 'New Radiators', category: 'Radiators and Cooling Systems', image: 'New Radiator for Cummins QSK60 2MVA Generator (6).jpg', client: '', result: ' ' },
  { id: 'rad-4', title: 'New Radiators', category: 'Radiators and Cooling Systems', image: 'New Radiator for Cummins QSK60 2MVA Generator (8).jpg', client: '', result: ' ' },
  { id: 'rad-5', title: 'New Radiators', category: 'Radiators and Cooling Systems', image: 'New Radiator for Cummins QSK60 2MVA Generator (9).jpg', client: '', result: ' ' },
  { id: 'rsr-1', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (1).jpg', client: '', result: ' ' },
  { id: 'rsr-2', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (2).jpg', client: '', result: ' ' },
  { id: 'rsr-3', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (3).jpg', client: '', result: ' ' },
  { id: 'rsr-4', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (4).jpg', client: '', result: ' ' },
  { id: 'rsr-5', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (5).jpg', client: '', result: ' ' },
  { id: 'rsr-6', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (6).jpg', client: '', result: ' ' },
  { id: 'rsr-7', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (7).jpg', client: '', result: ' ' },
  { id: 'rsr-8', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (8).jpg', client: '', result: ' ' },
  { id: 'rsr-9', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (9).jpg', client: '', result: ' ' },
  { id: 'rsr-10', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (10).jpg', client: '', result: ' ' },
  { id: 'rsr-11', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (11).jpg', client: '', result: ' ' },
  { id: 'rsr-12', title: 'Radiator Services and Repairs', category: 'Radiators and Cooling Systems', image: 'Radiator Services and Repairs (12).jpg', client: '', result: ' ' },
];

export const jobsData: Job[] = [
  { id: 'j1', title: 'Senior Marine Engineer', location: 'Hamburg, Germany', type: 'Full-Time' },
  { id: 'j2', title: 'CNC Machinist', location: 'Hanover, Germany', type: 'Full-Time' },
  { id: 'j3', title: 'Industrial Electrician', location: 'Remote / On-Site', type: 'Contract' },
];

export const testimonials: Testimonial[] = [
  { id: 1, name: "Kolitha Kotugoda,\nEngineering manager", company: "Michelin-Casting Product Division", content: "Your services have played a critical role in ensuring an uninterrupted power supply, especially during planned outages, load testing, and critical equipment maintenance activities.\n\n Your support in supplying rental generators of various capacities with proper load balancing, fuel management, and synchronization with our existing power systems has been timely and technically sound. The availability of mobile gensets, coupled with on-site technical support, allowed us to carry out our operations without downtime or production loss.", rating: 5 },


];