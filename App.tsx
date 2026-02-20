import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Phone, Mail, MapPin, ChevronRight, CheckCircle,
  Linkedin, Facebook, Instagram, Sun, Moon, ArrowRight,
  MessageSquare, Send, Globe, Award, Users, Clock, Briefcase,
  ShieldCheck, Anchor, Zap, Truck, Settings, TrendingUp,
  Timer,
  Clock1,
  Clock3,
  Goal,
  Toolbox,
  Settings as SettingsIcon,
  Briefcase as ToolCase,
  Wrench,
  FireExtinguisher,
  Youtube,
  ChevronDown,
  Loader2,
  Cog
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, useMotionValue, useSpring, useTransform, useInView, animate, AnimatePresence, isGenerator } from 'framer-motion';
import { Page, Service, Project } from './types';
import { servicesData, galleryData, jobsData, testimonials } from './data';
import { Button, Card, SectionHeader } from './components/Components';

// --- TYPES ---
interface HeroProps {
  navigateTo: (page: Page) => void;
}

interface ServiceCardProps {
  key?: string;
  service: Service;
  handleServiceClick: (service: Service) => void;
}

interface CounterProps {
  value: string;
  duration?: number;
  shouldAnimate?: boolean;
}

interface PageProps {
  navigateTo: (page: Page) => void;
}

interface HomePageProps extends PageProps {
  handleServiceClick: (service: Service) => void;
  setIsYoutubeOpen: (isOpen: boolean) => void;
}

interface ContactPageProps {
  handleFormSubmit: (e: React.FormEvent) => Promise<void>;
  formData: {
    name: string;
    designation: string;
    company: string;
    inquiryType: string;
    email: string;
    message: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  submitStatus: 'idle' | 'success' | 'error';
  isSending: boolean;
}

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
  navigateTo: (page: Page) => void;
}

// --- SUB-COMPONENTS (Pages) ---

const Hero = ({ navigateTo }: HeroProps) => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/landing1.jpg"
        alt="Rocker Levers Engineering"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-industrial-900/90 to-industrial-800/70 mix-blend-multiply"></div>
    </div>

    <div className="relative z-10 text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Hannovers Engineering</h1>
      <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-light">
        The Standard in Industrial Reliability. Specialized maintenance and lifecycle solutions for Heavy Diesel, Power Systems, and Maritime operations.
      </p>
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 dark:from-industrial-900 to-transparent z-10"></div>
  </div>
);

const ServiceCard = ({ service, handleServiceClick }: ServiceCardProps) => (
  <Card className="group bg-white dark:bg-industrial-800 shadow-xl border border-gray-100 dark:border-slate-700 hover:border-industrial-accent dark:hover:border-cyan-500 h-full flex flex-col relative">
    <div className="aspect-[3/2] overflow-hidden relative">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      {/* <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center">
        <img src={service.icon} size={10} className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" />
      </div> */}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
      <p className="text-sm text-industrial-700 font-medium mb-4">{service.tagline}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{service.description}</p>
      <Button
        variant="outline"
        size="sm"
        className="self-start mt-auto"
        onClick={() => handleServiceClick(service)}
      >
        View Details
      </Button>
    </div>
  </Card>
);

const Counter = ({ value, duration = 2, shouldAnimate = true }: CounterProps) => {
  const numericValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && shouldAnimate) {
      count.set(0);
      const controls = animate(count, numericValue, { duration });
      return controls.stop;
    }
  }, [isInView, numericValue, count, duration, shouldAnimate]);

  if (!shouldAnimate) {
    return (
      <span className="text-4xl font-bold text-gray-900 dark:text-white block mb-2">
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-4xl font-bold text-gray-900 dark:text-white block mb-2">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

// --- SUB-COMPONENTS (Pages) ---

const ContactPage = ({ handleFormSubmit, formData, handleInputChange, submitStatus, isSending }: ContactPageProps) => (
  <div className="pt-24 pb-24">
    <div className="container mx-auto px-6">
      <SectionHeader title="Contact Us" subtitle="Get in Touch" centered />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border-l-4 border-industrial-highlight">
            <h3 className="text-lg md:text-2xl font-bold dark:text-white mb-4 flex items-center gap-3 ml-2">
              Contact Number
            </h3>
            <a href="tel:+94773829924" className="text-xl md:text-3xl font-semibold text-industrial-900 flex dark:text-white hover:text-industrial-accent"><Phone className="text-industrial-highlight mt-2 mx-2" />+94 77 382 9924</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl">
              <MapPin className="text-blue-500 mb-4" size={32} />
              <h4 className="font-bold dark:text-white">Headquarters</h4>
              <p className="text-gray-500 text-sm mt-2">102/159, Madara Gardens, Mattegoda, 10240. Sri Lanka</p>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl">
              <a href="mailto:hellohnvrs@gmail.com"><Button size="lg" className='mx-auto my-8'>Email Us</Button></a>
            </div>
          </div>

          {/* Mock Map */}
          <div className="h-64 bg-gray-200 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.624113429111!2d79.9650603283118!3d6.81812687014675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251d6657dd76b%3A0x187744c7f359ed69!2sHannovers%20Engineering%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1768752490817!5m2!1sen!2slk" width="800" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className="bg-white dark:bg-industrial-900 p-8 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-bold dark:text-white mb-6">Send Message</h3>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-300">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-300">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium dark:text-gray-300">Type of Inquiry</label>
                <select
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white appearance-none"
                >
                  <option value="" disabled>Select Inquiry Type</option>
                  <option value="Power & Generators">Power Generation & Energy Systems</option>
                  <option value="Marine & Propulsion Services">Marine & Maritime Engineering</option>
                  <option value="Industrial Machinery">Specialised Aviation & Fleet Support</option>
                  <option value="Construction Machinery">Heavy Diesel & Industrial Solutions</option>
                  <option value="Industrial, Plant, & Agriculture Machinery Solutions">Industrial, Plant, & Agriculture Machinery Solutions</option>
                  <option value="Sales & Component Supply">Sales & Component Supply</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium dark:text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium dark:text-gray-300">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-slate-800 border dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Message sent successfully! We will get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2">
                <X size={20} />
                <span>Failed to send message. Please try again or contact us via phone.</span>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSending}
            >
              {isSending ? (
                <>Sending... <Loader2 size={18} className="animate-spin" /></>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN LAYOUT & ROUTING ---

// --- PAGE COMPONENTS ---

const HomePage = ({ navigateTo, handleServiceClick, setIsYoutubeOpen }: HomePageProps) => (
  <div className="space-y-24 pb-24">
    <Hero navigateTo={navigateTo} />

    {/* Vision Section */}
    <section className="bg-white dark:bg-white-900 py-20">
      <div className="container mx-auto px-6">
        <p className="text-3xl md:text-4xl text-center italic text-industrial-900 dark:text-industrial-900 font-light leading-relaxed max-w-5xl mx-auto">
          "We are driven by the belief that innovation is the spark that ignites the imagination blueprint of engineering, where creativity meets problem-solving."
        </p>
      </div>
    </section>

    {/* Authority Block - Experience Quote */}
    {/* <section className="bg-gray-50 dark:bg-industrial-800 py-16">
      <div className="container mx-auto px-6">
        <p className="text-xl md:text-2xl text-center text-gray-800 dark:text-gray-200 font-semibold leading-relaxed max-w-4xl mx-auto">
          "Experience is the currency of engineering. You can buy gold, but you cannot buy the decades of expertise earned in the field. At Hannovers, we don't just bring tools; we bring the wisdom of a thousand solved problems."
        </p>
      </div>
    </section> */}

    {/* Services Overview */}
    <section className="container mx-auto px-6">
      <SectionHeader title="Our Engineering Services" subtitle="" centered />
      <div className="mb-6 text-center w-10xl ">
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto font-bold text-xl">"Experience is the currency of engineering. You can buy gold, but you cannot buy the decades of
          expertise earned in the field. At Hannovers, we don’t just bring tools; we bring the wisdom of a
          thousand solved problems."</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.slice(0, 3).map((s) => (
          <ServiceCard key={s.id} service={s} handleServiceClick={handleServiceClick} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="ghost" onClick={() => navigateTo(Page.SERVICES)}>View All Services <ArrowRight size={16} /></Button>
      </div>
    </section>

    {/* OUR PROMISE - Philosophy & Gallery Introduction */}
    <section className="bg-white dark:bg-industrial-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">OUR PROMISE</h2>
        <p className="text-xl md:text-2xl text-center text-gray-700 dark:text-gray-300 mb-16 max-w-4xl mx-auto font-semibold">
          "You can buy gold, but you can't buy experience. Our skills are forged in the heat of the moment, in the harshest environments. When things get tough, we get to work."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="bg-gray-50 dark:bg-industrial-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Experience over Gold</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our gallery is not a photoshoot; it is a testament. Every image you see was captured by a technician on-site—a witness to the precision, sweat, and problem-solving that defines our true story. This is engineering in its rawest, most reliable form.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-gray-50 dark:bg-industrial-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Forged in the Field</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Skills forged in the heat of the moment. We believe that experience gained in the harshest environments is worth double. When the situation is tough, our team is at its best.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col items-center mt-12">
            <div className="flex justify-center gap-6 mb-12 flex-wrap">
              {galleryData.slice(0, 6).map((project) => (
                <div key={project.id} className="relative w-full max-w-[300px] aspect-[3/2] rounded-xl overflow-hidden shadow-xl group">
                  <img
                    src={project.image}
                    alt={project.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigateTo(Page.GALLERY)}
              className="px-12"
            >
              View Full Gallery <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* The Witness Gallery */}
    <section className="bg-gray-100 dark:bg-industrial-800 py-20">
      {/* Engineering in Motion - YouTube Section */}
      <div className="bg-white dark:bg-industrial-900 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Youtube className="text-red-600" size={40} />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Engineering in Motion</h3>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          See our technicians in action. Watch the technical precision behind our major overhauls and field repairs.
        </p>
        <Button
          size="lg"
          onClick={() => setIsYoutubeOpen(true)}
          className="mx-auto"
        >
          <Youtube size={20} className="mr-2" />
          Watch Our Process
        </Button>
      </div>
    </section>

    {/* Testimonials */}
    <section className="container mx-auto px-6">
      <SectionHeader title="Client Trust" subtitle="Testimonials" centered />

      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">We pride ourselves on building lasting relationships based on trust and quality workmanship.</p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md relative max-w-md w-full">
            <div className="text-orange-400 flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 italic whitespace-pre-line">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                <img src="./testi1.png" alt={t.name} className='w-full h-full object-cover' />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white whitespace-pre-line">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Banner */}
    <section className="bg-industrial-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Need Urgent Engineering Assistance?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Our rapid response teams are ready to deploy in the island. Minimizing downtime is our priority.</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" onClick={() => navigateTo(Page.CONTACT)}>
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = ({ navigateTo }: PageProps) => (
  <div className="pb-24 pt-20">
    <div className="h-96 relative bg-gray-900 flex items-center justify-center">
      <img src="/landing3.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-heading font-bold text-white mb-4">About Hannovers</h1>
        <p className="text-xl text-gray-300">Building the future since 2010</p>
      </div>
    </div>

    <div className="container mx-auto px-6 -mt-20 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <Card className="bg-white dark:bg-industrial-800 p-10 shadow-2xl flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-industrial-900 dark:text-white mb-6 flex items-center gap-2"> We are,</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Nationally recognised provider of essential engineering solutions for critical industries. Our mission is to deliver professional, reliable service that keeps your operations running smoothly, 24/7. <br /> <br />

            Unlike other service providers, our clients count on us for unparalleled support during emergencies, knowing we are available 365 days a year, anywhere in the country. Our reputation for responding swiftly and effectively to breakdowns is a key competitive advantage that ensures your peace of mind.
          </p>
          <div className="flex gap-4">
            <ShieldCheck className="text-industrial-accent" size={40} />
            <div>
              <h4 className="font-bold dark:text-white mt-2">Quality Assured Company</h4>

            </div>
          </div>
        </Card>
        <div className="grid grid-cols-2 gap-4">
          <img src="guide.jpg" className="rounded-xl shadow-lg w-full h-full object-cover" />
          <img src="hero3.jpg" className="rounded-xl shadow-lg w-full h-full object-cover translate-y-8" />
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-24">
        <SectionHeader title="Our Journey" subtitle="Milestones" centered />
        <div className="flex overflow-x-auto gap-8 pb-8 hide-scrollbar justify-center">
          {[
            { year: '2010', title: 'Founded', desc: 'Establishing a proven track record with \nsome of the industry’s most respected names.' },
            { year: 'Since 2010', title: 'Growth', desc: 'Building on our foundation of expert generator services, \nwe have expanded into a comprehensive provider of \ndiverse industrial solutions.' },
            { year: 'Future', title: 'We are Aiming,', desc: 'Aiming to provide engineering \nservices with emerging technologies \nfor all of your need.' }
          ].map((item, i) => (
            <div key={i} className="min-w-[250px]">
              <div className="text-5xl font-bold text-gray-200 dark:text-gray-800 mb-2">{item.year}</div>
              <div className="border-l-4 border-industrial-accent pl-4">
                <h4 className="font-bold text-lg dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-500 whitespace-pre-line">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-24">
        <SectionHeader title="Our Team" subtitle="Experts" centered />
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8">
          <img src="team.png" className="rounded-xl shadow-lg w-full lg:w-1/3 object-cover" alt="Engineering Team" />
          <Card className="bg-white dark:bg-industrial-800 p-10 shadow-2xl flex flex-col justify-center max-w-[450px] flex-1">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Our maintenance and servicing teams are composed of highly skilled personnel with comprehensive expertise in mechanical, electrical, pneumatic, hydraulic, and automation systems. Our team provides an efficient and professional service to clients across the island, ensuring that your operations remain seamless and productive. We are the trusted experts who understand your machinery from the inside out, allowing us to diagnose complex issues with precision and speed.
            </p>
          </Card>
        </div>
      </div>
    </div>
    <div>
      <SectionHeader title="Our Services" subtitle="From Us" centered />
      <div className="flex flex-wrap justify-center gap-8">

        <Card className="bg-white dark:bg-industrial-800 p-10 shadow-2xl flex flex-col justify-center max-w-[600px] ">
          <h2 className="text-3xl font-bold text-industrial-900 dark:text-white mb-6 flex items-center gap-2"><div className="bg-white p-2 rounded-full"><img src="/generator.png" className="w-10 h-10" alt="generator" /></div> Power Generation</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 ">
            We specialise in end-to-end services for Diesel Generators and Marine Generators, ensuring peak performance and 24/7 reliability across the nation. <br /> <br />
            We specialize in power generation and preventive maintenance, supplying generator controllers, alternators, and spare parts trusted by industries nationwide for their quality and dependability.
          </p>
          <Button onClick={() => navigateTo(Page.GALLERY)} className="px-2 w-fit mx-auto">See Our Experience</Button>
        </Card>
        <Card className="bg-white dark:bg-industrial-800 p-10 shadow-2xl flex flex-col justify-center max-w-[600px] ">
          <h2 className="text-3xl font-bold text-industrial-900 dark:text-white mb-6 flex items-center gap-2"><div className="bg-white p-2 rounded-full"><img src="/marine.png" className="w-10 h-10" alt="generator" /></div> Marine, Industrial & Construction</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 ">
            Our expert technicians provide critical support for:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 justify-center ml-6">
            <li>Marine Engines: Services, heat exchangers, and spares for <span className="ml-5">off-shore ships.</span> </li>
            <li>Industrial Machinery: Maintenance and repairs for industrial <span className="ml-5">power panels and related systems.</span></li>
            <li>Construction Machinery: Comprehensive service, repairs, and <span className="ml-5">genuine spare parts.</span></li>

          </ul>
          <Button onClick={() => navigateTo(Page.GALLERY)} className="px-2 w-fit mx-auto">See Our Experience</Button>
        </Card>
        <Card className="bg-white dark:bg-industrial-800 p-10 shadow-2xl flex flex-col  max-w-[600px] ">
          <h2 className="text-3xl font-bold text-industrial-900 dark:text-white mb-6 flex items-center gap-2"><div className="bg-white p-2 rounded-full"><img src="/specialised.png" className="w-10 h-10" alt="generator" /></div> Specialised Vehicles & Engines</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 ">
            We are equipped to handle a variety of specialised and commercial vehicles, including airport fire trucks, aircraft towing vehicles, and fire rescue vehicles.
            Our services cover everything from standard maintenance to complete overhauls.
          </p>
          <Button onClick={() => navigateTo(Page.GALLERY)} className="px-2 w-fit mx-auto mt-14">See Our Experience</Button>
        </Card>
        <Card className="bg-white dark:bg-industrial-800 p-10 shadow-2xl flex flex-col justify-center max-w-[600px] ">
          <h2 className="text-3xl font-bold text-center text-industrial-900 dark:text-white mb-6 flex items-center  justify-center gap-2"><div className="bg-white p-2 rounded-full"><img src="/industrial.png" className="w-12 h-10" alt="generator" /></div> Other Specialised Services</h2>
          {/* <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 ">
            We are a leading supplier of genuine and quality parts for a wide range of machinery and engines. Our inventory includes:
          </p> */}
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 justify-center ml-6">
            <li>Locomotive Engines: Full-scale service, repair, and overhauls.</li>
            <li>Chassis Repairs: Crack reinforcements, re-aligning, and <span className="ml-5">modifications.</span> </li>
            <li>Heavy Diesel Engine Repairs: Comprehensive service, repair, <span className="ml-5">and overhauls.</span></li>
            <li>Health Reports: In-depth diagnostics and health reports for <span className="ml-5">generators and other machinery.</span></li>
          </ul>
          <Button onClick={() => navigateTo(Page.GALLERY)} className="px-2 w-fit mx-auto">See Our Experience</Button>
        </Card>
        <Card className="bg-white dark:bg-industrial-800 p-10 shadow-2xl flex flex-col justify-center max-w-[600px] ">
          <h2 className="text-3xl font-bold text-industrial-900 dark:text-white mb-6 flex items-center gap-2"><div className="bg-white p-2 rounded-full"><img src="/spare.png" className="w-10 h-10" alt="generator" /></div> Sales and Spares</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 ">
            We are a leading supplier of genuine and quality parts for a wide range of machinery and engines. Our inventory includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 justify-center ml-6">
            <li>Generators and Marine Propulsion</li>
            <li>Heavy Construction Equipment</li>
            <li>Industrial Machinery</li>
            <li>Specialized Vehicle Support</li>
          </ul>
          <Button onClick={() => navigateTo(Page.GALLERY)} className="px-2 w-fit mx-auto">See Our Experience</Button>
        </Card>
      </div>
    </div>
  </div>
);

const ServicesPage = ({ navigateTo, handleServiceClick, setIsYoutubeOpen }: HomePageProps) => (
  <div className="pb-24 pt-28">
    <div className="container mx-auto px-6">
      <SectionHeader title="Engineering Services" subtitle="What We Do" centered />

      {/* Filter Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {[
          { icon: '/generator.png', label: 'Power' },
          { icon: '/marine.png', label: 'Marine' },
          { icon: '/specialised.png', label: 'Special Vehicle' },
          { icon: '/heavy2.png', label: 'Heavy Diesel' },
          { icon: '/industrial.png', label: 'Machineries' },
          { icon: '/spare.png', label: 'Sales & Spares' },
        ].map((cat, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-gray-400 hover:text-industrial-accent cursor-pointer transition-colors">
            <div className="p-3 bg-gray-100 dark:bg-white rounded-full w-16 h-16 flex items-center justify-center">
              <img src={cat.icon} alt={cat.label} className="w-10 h-10 object-contain" />
            </div>
            <span className="text-sm font-medium">{cat.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((s) => (
          <ServiceCard key={s.id} service={s} handleServiceClick={handleServiceClick} />
        ))}
      </div>

      <div className="mt-16 bg-blue-50 dark:bg-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-100 dark:border-slate-700">
        <div>
          <h3 className="text-xl font-bold dark:text-white">Looking for a custom solution?</h3>
          <p className="text-gray-500 dark:text-gray-400">Our engineers can design bespoke systems for unique challenges.</p>
        </div>
        <Button onClick={() => navigateTo(Page.CONTACT)}>Contact Engineers</Button>

      </div>
    </div>
  </div>
);

const YoutubeModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-industrial-accent transition-colors"
        >
          <X size={32} />
        </button>
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/vB8gfB7E44g" // Hannovers Engineering in Motion video
          title="Hannovers Engineering in Motion"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

const ServiceModal = ({ service, onClose, navigateTo }: ServiceModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-industrial-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full overflow-y-auto">
          <div className="h-64 md:h-full relative">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
              <div>
                <service.icon size={48} className="text-industrial-accent mb-4" />
                <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                <p className="text-lg text-gray-200">{service.tagline}</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-8 overflow-y-auto">
            <div>
              <h3 className="text-xl font-bold dark:text-white mb-4 flex items-center gap-2 text-industrial-accent">
                Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {service.detail}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold dark:text-white mb-6 flex items-center gap-2 text-industrial-accent">
                Key Offerings
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {service.features.map((f, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-xl flex items-center gap-3 border-l-4 border-industrial-accent">
                    <CheckCircle size={20} className="text-green-500 shrink-0" />
                    <span className="font-medium dark:text-gray-200">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-slate-700">
              <Button className="w-full py-6 text-lg" onClick={() => { onClose(); navigateTo(Page.CONTACT); }}>
                Request This Service <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsPage = ({ navigateTo }: PageProps) => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(20);

  const filteredProjects = filter === 'All' ? galleryData : galleryData.filter(p => p.category === filter);
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setVisibleCount(20);
  };

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Our Gallery" subtitle="Case Studies" centered />
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg py-4 text-center max-w-5xl mx-auto">Our gallery is not a photoshoot; it is a testament. Every image you see was captured by a
          technician on-site a witness to the precision, sweat, and problem-solving that defines our true
          story. This is engineering in its rawest, most reliable form.</p>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {['All', 'Power Generators', 'Marine Services', 'Specialised Aviation & Fleet Support', 'Heavy Vehicles', 'Industrial Machineries', 'Sales & Components'].map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f
                ? 'bg-industrial-accent text-white shadow-lg'
                : 'bg-gray-200 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-300'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((p) => (
            <div key={p.id} className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[3/2]">
              <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-xs font-bold text-industrial-highlight uppercase tracking-wider">{p.category}</span>
                <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
                <p className="text-gray-300 text-sm">{p.client}</p>

                <div className="mt-4 pt-4 border-t border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-green-400 font-bold flex items-center gap-2"> {p.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              onClick={() => setVisibleCount(prev => prev + 20)}
              className="px-12 py-6 text-lg"
            >
              Load More
            </Button>
          </div>
        )}

        <div className="mt-20 bg-industrial-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">"We turn challenges into performance."</h2>
            <Button size="lg" onClick={() => navigateTo(Page.CONTACT)} className='mx-auto'>Start Your Project</Button>
          </div>
          {/* Abstract Grid Background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
      </div>

    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isYoutubeOpen, setIsYoutubeOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // EmailJS Form State
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    company: '',
    inquiryType: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Scroll handler for sticky header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [currentPage, selectedService]);

  // Sync state with URL path on load and back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1).toLowerCase();
      const pageValues = Object.values(Page) as string[];

      if (pageValues.includes(path)) {
        setCurrentPage(path as Page);
      } else if (path === '' || path === 'home') {
        setCurrentPage(Page.HOME);
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Run on initial load

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: Page) => {
    const path = page === Page.HOME ? '/' : `/${page.toLowerCase()}`;
    window.history.pushState({ page }, '', path);
    setCurrentPage(page);
    setSelectedService(null);
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        designation: formData.designation,
        company_name: formData.company,
        inquiry_type: formData.inquiryType,
        message: formData.message,
        to_name: 'Hannovers Engineering',
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          designation: '',
          company: '',
          inquiryType: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSending(false);
    }
  };










  return (
    <div className={`min-h-screen transition-colors duration-500  ${isDarkMode ? 'dark bg-industrial-900' : 'bg-gray-50'}`}>

      {/* Top Banner for 24/7 Support */}
      {/* <div className="bg-industrial-accent text-white py-1 px-6 text-center text-xs md:text-sm font-medium sticky top-0 z-[60]">
        Priority 24/7 Support: Dedicated emergency response for our contract partners and long-term clients.
      </div> */}

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90  shadow-md backdrop-blur-md py-3' : 'bg-white py-3'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigateTo(Page.HOME)}
          >
            {/* <div className="bg-industrial-highlight p-2 rounded-lg">
              <Settings className="text-white animate-spin-slow" size={24} />
            </div> */}
            <img src="logo2.png" alt="logo" width={400} height={400} className='rounded-xl  p-4 w-40 lg:w-[300px] h-auto' />
            <div className='hidden lg:block text-xl font-bold text-corporate-primary pl-4'>HANNOVERS ENGINEERING PRIVATE LIMITED <br />
              <span className='text text-industrial-700' style={{ fontFamily: "'Dancing Script', cursive" }}>Synchronizing to your Pulse</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Home', page: Page.HOME },
              { label: 'About', page: Page.ABOUT },
              { label: 'Services', page: Page.SERVICES },
              { label: 'Gallery', page: Page.GALLERY, isSupport: false },
              // { label: '', page: Page.HOME, isSupport: true },
              // { label: 'Careers', page: Page.CAREERS },
              { label: 'Contact', page: Page.CONTACT },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => item.isSupport ? window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) : navigateTo(item.page as Page)}
                className={`text-sm font-medium uppercase tracking-wide hover:text-industrial-accent transition-colors ${isScrolled ? ' dark:text-industrial-700' : 'text-industrial-800'
                  } ${!item.isSupport && currentPage === item.page ? 'text-industrial-accent' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-yellow-400' : 'bg-white/10 text-white'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button size="sm" onClick={() => navigateTo(Page.CONTACT)}>
              Request Quote
            </Button>
          </div> */}

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            {/* <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-gray-400">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`text-2xl ${isScrolled ? 'text-gray-900 dark:text-black' : 'text-black'}`}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-industrial-900 border-t border-gray-800 shadow-xl lg:hidden p-6 flex flex-col gap-4">
            {[
              { label: 'Home', page: Page.HOME },
              { label: 'About', page: Page.ABOUT },
              { label: 'Services', page: Page.SERVICES },
              { label: 'Gallery', page: Page.GALLERY },
              { label: 'Client Support', page: Page.HOME, isSupport: true },
              { label: 'Contact', page: Page.CONTACT },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.isSupport) {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  } else {
                    navigateTo(item.page as Page);
                  }
                }}
                className="text-left text-white text-lg py-2 border-b border-gray-800"
              >
                {item.label}
              </button>
            ))}
            <Button className="w-full mt-4" onClick={() => navigateTo(Page.CONTACT)}>Request Quote</Button>
          </div>
        )}
      </header>

      {/* Main Content Render */}
      <main className="min-h-screen">
        {currentPage === Page.HOME && <HomePage navigateTo={navigateTo} handleServiceClick={handleServiceClick} setIsYoutubeOpen={setIsYoutubeOpen} />}
        {currentPage === Page.ABOUT && <AboutPage navigateTo={navigateTo} />}
        {currentPage === Page.SERVICES && <ServicesPage navigateTo={navigateTo} handleServiceClick={handleServiceClick} setIsYoutubeOpen={setIsYoutubeOpen} />}
        {currentPage === Page.GALLERY && <ProjectsPage navigateTo={navigateTo} />}
        {currentPage === Page.CONTACT && (
          <ContactPage
            handleFormSubmit={handleFormSubmit}
            formData={formData}
            handleInputChange={handleInputChange}
            submitStatus={submitStatus}
            isSending={isSending}
          />
        )}
      </main>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            navigateTo={navigateTo}
          />
        )}
        {isYoutubeOpen && (
          <YoutubeModal
            isOpen={isYoutubeOpen}
            onClose={() => setIsYoutubeOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="logo2.png" alt="logo" className=' bg-white p-2 rounded-xl w-60' />
            </div>
            <p className="mb-6">
              Our mission is to keep your machinery,fleets and plants in constant motion.Through expert, up-to-date maintenance, We minimize downtime and ensure your operations run smoothly, 24/7.
            </p>
            <div className="flex gap-4">
              <a href="" target="_blank"><Linkedin className="hover:text-white cursor-pointer" /></a>
              <a href="https://www.facebook.com/hannoversengineering/" target="_blank"><Facebook className="hover:text-white cursor-pointer" /></a>
              <a href="https://www.youtube.com/@hannoversengineering5223" target="_blank"><Youtube className="hover:text-white cursor-pointer" width={28} height={28} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="hover:text-industrial-accent transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: Page.HOME },
                { label: 'About', page: Page.ABOUT },
                { label: 'Gallery', page: Page.GALLERY },
                { label: 'Contact', page: Page.CONTACT },
              ].map((link) => (
                <li key={link.label}>
                  <button onClick={() => navigateTo(link.page)} className="hover:text-industrial-accent transition-colors">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact Information</h4>
            <div className="space-y-6">
              <div>
                <h5 className="text-industrial-accent font-semibold mb-2 flex items-center gap-2"><Globe size={16} /> Sri Lanka Operations</h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm"><MapPin size={18} className="mt-1 shrink-0" /> 102/159, Madara Gardens, Mattegoda, 10240. Sri Lanka</li>
                  <li className="flex items-center gap-3 text-sm"><Phone size={18} /> +94 77 382 9924</li>
                </ul>
              </div>
              {/* <div>
                <h5 className="text-industrial-accent font-semibold mb-2 flex items-center gap-2"><Globe size={16} /> Australia Presence</h5>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm"><MapPin size={18} /> Serving Australian Industrial & Maritime Sectors</li>
                  <li className="flex items-center gap-3 text-sm"><Mail size={18} /> hellohnvrs@gmail.com</li>
                </ul>
              </div> */}
            </div>
          </div>

        </div>

        {/* Priority 24/7 Support Section */}
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800">
          <div className="bg-industrial-accent/10 border border-industrial-accent/30 rounded-xl p-6 text-center">
            <h4 className="text-white font-bold text-xl mb-2">Priority 24/7 Support</h4>
            <p className="text-gray-300">
              Dedicated emergency response for our contract partners and long-term clients.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          &copy; 2020 Hannovers Engineering | All Right Reserved
        </div>
      </footer>

      {/* Floating Action Buttons */}
      {/* <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a 
          href="https://wa.me/123456789" 
          target="_blank" 
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        >
          <MessageSquare size={24} />
        </a>
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center relative"
        >
          <Users size={24} />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div> */}

      {/* Chat Widget */}
      {/* {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-industrial-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden z-50 animate-float">
           <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><Zap size={16} /></div>
                 <span className="font-bold">Hannover AI Support</span>
              </div>
              <button onClick={() => setIsChatOpen(false)}><X size={18} /></button>
           </div>
           <div className="p-4 h-64 overflow-y-auto bg-gray-50 dark:bg-industrial-900 space-y-4">
              <div className="bg-blue-100 dark:bg-slate-700 p-3 rounded-lg rounded-tl-none max-w-[80%] text-sm dark:text-gray-200">
                 Hello! I'm your engineering assistant. How can I help you with our services today?
              </div>
           </div>
           <div className="p-3 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-industrial-800 flex gap-2">
              <input type="text" placeholder="Type a message..." className="flex-1 bg-gray-100 dark:bg-slate-900 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 dark:text-white" />
              <button className="p-2 bg-blue-600 text-white rounded-full"><Send size={16} /></button>
           </div>
        </div>
      )} */}

    </div>
  );
}