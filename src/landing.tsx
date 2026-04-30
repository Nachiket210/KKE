import { Quote } from 'lucide-react'; // ADD THIS
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight
} from 'lucide-react';
import w2 from "./assets/services/wed2.jpg"
import conf from "./assets/services/conf.jpg"
import suni1 from "./assets/services/suni1.jpg"
import btl1 from "./assets/btl/btl1.jpeg"
import sh1 from "./assets/services/sh1.jpg"
import art1 from "./assets/services/artist.jpg"
import wedding1 from "./assets/wedding/wedding1.jpg"
import con from "./assets/services/con.jpg"
import ex1 from "./assets/services/ex.jpg"
import w1 from "./assets/services/wed1.jpg"

//logos
import l1 from "./assets/logos/AMD.svg"
import l2 from "./assets/logos/Max Protein.svg"
import l3 from "./assets/logos/One Plus.svg"
import l4 from "./assets/logos/RedBull.svg"
import l5 from "./assets/logos/RealMe.svg"
import l6 from "./assets/logos/Relience Digital.svg"
import l7 from "./assets/logos/Dubai Energy Drink.svg"
import logo from "./assets/logo.png"

const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    ex1,
    w1,
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920",
    con
  ];

  const clients = [
    { name: "Red Bull", logo: l1 },
    { name: "MTV", logo:l2 },
    { name: "Sony Music", logo: l3 },
    { name: "Universal", logo: l4 },
    { name: "Warner Bros", logo: l5 },
    { name: "Netflix", logo: l6 },
    { name: "Disney", logo: l7 },
  ];

  const projects = [
    { id: 'royal-wedding', title: "The Royal Wedding", category: "Weddings", img: wedding1 },
    { id: 'tech-summit', title: "Tech Summit 2024", category: "Corporate", img:conf},
    { id: 'College Fest', title: "Revive", category: "Concerts", img: con },
  ];

const SOCIAL_LINKS = [
  { Icon: Instagram, href: "https://www.instagram.com/kreativekeedaent/", name: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/kreativekeedatv/", name: "Facebook" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/kreative-keeda-entertainment/", name: "LinkedIn" },
  { Icon: MapPin, href: "https://maps.app.goo.gl/Hw2Qrzv3obexv6KP8", name: "Location" },
];
            const localServices = [
                  { id: 1, title: "Weddings", description: "Luxury wedding planning", banner: w2 },
                  { id: 2, title: "Corporate Events", description: "Professional corporate events", banner: conf },
                  { id: 3, title: "Concerts", description: "Live music & concerts", banner: suni1 },
                  { id: 4, title: "BTL Activations", description: "Brand activations", banner: btl1 },
                  { id: 5, title: "Artist Management", description: "Celebrity & artist handling", banner: art1 },
                  { id: 6, title: "Social Events", description: "Private celebrations", banner: sh1 },
];

const testimonials = [
  {
    text: "Working with Kreative Keeda was a smooth journey. Aditya was the agent for our online fest FUNDAMENTAL 2020. Due to COVID-19, our budget was tight, but Aditya truly went above and beyond to secure us with the artist we wanted. The show was a hit! We couldn't be happier.",
    author: "Augnayee Sen",
    role: "Digital Designer at BCG"
  },
  {
    text: "Kreative Keeda has shown exceptional professionalism over the 7+ years we’ve worked together, consistently taking ownership from planning to execution and delivering beyond expectations. What sets them apart is not just their work ethic, but the strong relationships they build along the way, adding value both in results and connections.",
    author: "Nisarg S.",
    role: "HR Manager"
  },
  {
    text: "I’d like to sincerely thank Kreative Keeda for organizing such a wonderful event and making it a grand success.",
    author: "Shankar Mahadevan",
    role: "Singer, Composer"
  }
];
const [status, setStatus] = useState("");
;
  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    eventType: formData.get("eventType"),
    message: formData.get("message"),
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwDH3FH30wGBahB48cs-l7WRRBzZUmFluIal9pJBNap1NxsMV-Uml5b7tfpFZLwgrMh/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setStatus("success");
    e.target.reset();
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images[currentImage]})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side text */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="flex flex-col items-start"
>
  <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tighter">
    Crafting <span className="text-gold italic font-light">Extraordinary</span> Events
  </h1>

  <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
    Redefining event excellence with precision, passion, and unparalleled creativity.
  </p>

  {/* ✅ BUTTON HERE */}
  <a 
    href="http://localhost:3000/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-10 px-10 py-5 bg-gold text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-300"
  >
    Visit Main Website
  </a>
</motion.div>

            {/* Right side form */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
  className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-sm shadow-2xl"
>
  <h3 className="text-2xl font-bold mb-8">Enquire Now</h3>

  <form className="space-y-6" onSubmit={handleSubmit}>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-1">
        <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Name</label>
        <input 
          name="name"   // ✅ REQUIRED
          type="text" 
          required       // ✅ optional but recommended
          className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors" 
          placeholder="Full Name" 
        />
      </div>

      <div className="space-y-1">
        <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Email</label>
        <input 
          name="email"   // ✅ REQUIRED
          type="email" 
          required
          className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors" 
          placeholder="Email Address" 
        />
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-1">
        <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Phone</label>
        <input 
          name="phone"   // ✅ REQUIRED
          type="tel" 
          className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors" 
          placeholder="Phone Number" 
        />
      </div>

      <div className="space-y-1">
        <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Event Type</label>
        <select 
          name="eventType"   // ✅ REQUIRED
          className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors"
        >
          <option>Wedding</option>
          <option>Corporate</option>
          <option>Concert</option>
          <option>Other</option>
        </select>
      </div>
    </div>

    <div className="space-y-1">
      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Message</label>
      <textarea 
        name="message"   // ✅ REQUIRED
        rows={3} 
        className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors resize-none" 
        placeholder="How can we help?"
      ></textarea>
    </div>

    <button 
      type="submit"   // ✅ IMPORTANT
      className="w-full py-5 bg-gold text-white text-xs uppercase tracking-[0.3em] font-bold hover:bg-black transition-all"
    >
      Send Enquiry
    </button>

    {/* ✅ Feedback */}
    {status === "success" && (
      <p className="text-green-600 text-sm">Message sent successfully!</p>
    )}
    {status === "error" && (
      <p className="text-red-600 text-sm">Something went wrong. Try again.</p>
    )}

  </form>
</motion.div>
          </div>
        </div>
      </section>

      {/* 3x3 Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter">Our <span className="italic font-light">Services</span></h2>
<div className="grid md:grid-cols-3 gap-8">
  {localServices.map((service) => (
    <motion.div 
      key={service.id}
      whileHover={{ y: -10 }}
      className="group relative h-96 overflow-hidden rounded-sm cursor-pointer shadow-xl"
    >
      <img 
        src={service.banner} 
        alt={service.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-left">
        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-white/60 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {service.description}
        </p>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Clients Logos */}
      <section className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-24 items-center px-12"
            >
              {[...clients, ...clients].map((client, i) => (
                <img 
                  key={i} 
                  src={client.logo} 
                  alt={client.name} 
                  className="h-8 md:h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer invert" 
                  referrerPolicy="no-referrer"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our <span className="italic font-light">Craft</span></h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative aspect-[4/5] overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-gold text-sm uppercase tracking-[0.3em] font-bold mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Testimonials Section */}
<section className="py-24 md:py-40 bg-white text-black">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-20">
      <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block">
        Testimonials
      </span>
      <h2 className="text-4xl md:text-6xl font-display mb-6">
        Voices of <span className="italic">Excellence</span>
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-12">
      {testimonials.map((t, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative p-10 bg-gray-50 rounded-sm group hover:bg-white transition-all duration-500 border border-gray-100 shadow-sm hover:shadow-xl"
        >
          <Quote className="w-8 h-8 text-gold/20 mb-6 group-hover:text-gold/40 transition-colors" />
          <p className="text-black/70 italic mb-8 leading-relaxed">
            "{t.text}"
          </p>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-black">
              {t.author}
            </h4>
            <p className="text-[10px] text-gold font-bold tracking-widest uppercase mt-1">
              {t.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* Footer with Socials and Map */}
      <footer className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-20">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tighter">KREATIVE KEEDA</span>
                <span className="text-xs tracking-[0.4em] uppercase font-medium text-gold">Entertainment</span>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/50">
                  <Phone className="w-5 h-5 text-gold" />
                  <span>+91 77689 41772</span>
                </div>
                <div className="flex items-center gap-4 text-white/50">
                  <Mail className="w-5 h-5 text-gold" />
                  <span>business@kreativekeeda.in</span>
                </div>
                <div className="flex items-center gap-4 text-white/50">
                  <MapPin className="w-5 h-5 text-gold" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
              <div className="flex gap-6 mt-10">
                {SOCIAL_LINKS.map(({ Icon, href, name }) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-full text-white/30 hover:text-gold hover:border-gold transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Gist */}
            <div className="lg:col-span-1">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-10">Corporate Excellence</h4>
              <p className="text-white/40 font-light leading-relaxed mb-10">
                Specializing in luxury destination weddings and corporate productions that redefine standards. Our presence is global, our touch is personal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Weddings', 'Corporate', 'Concerts', 'College Fests'].map(item => (
                  <div key={item} className="flex items-center gap-3 text-xs text-white/60">
                    <div className="w-1 h-1 bg-gold rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
<div className="h-64 md:h-full min-h-[300px] rounded-sm overflow-hidden border border-white/5 grayscale">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8890902329076!2d73.0219796!3d19.0246083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaebdc918ae080569%3A0xc5403ed76b8ba58!2sKreative%20Keeda%20Entertainment!5e0!3m2!1sen!2sin!4v1777531387828!5m2!1sen!2sin"
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
              © 2026 Kreative Keeda Entertainment. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
