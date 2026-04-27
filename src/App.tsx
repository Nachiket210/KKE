/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  AnimatePresence,
  useInView,
  useSpring
} from 'motion/react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useNavigate, 
  useParams,
  useLocation,
} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin, 
  Users, 
  Calendar, 
  Star, 
  Award,
  Music,
  Briefcase,
  Heart,
  Mic2,
  Trophy,
  Zap,
  Globe,
  Camera,
  ArrowRight,
  ExternalLink,
  Quote,
  Images
} from 'lucide-react';
//artists
import s from "../src/assets/artists/sunidhi.jpg"
import shreya from "../src/assets/artists/shreya.jpg"
import shankar from "../src/assets/artists/shankar.jpg"
import m from "../src/assets/artists/m.JPG"
import ss from "../src/assets/artists/ss.jpeg"
import ja from "../src/assets/artists/ja.jpeg"
import fa from "../src/assets/artists/fa.jpg"
import vs from "../src/assets/artists/vs.jpg"
//speakers
import san from "../src/assets/sprakers/sandip.jpg"
import vb from "../src/assets/sprakers/vivek.jpg"
import up from "../src/assets/sprakers/up.png"
import gg from "../src/assets/sprakers/gg.jpg"
import sk from "../src/assets/sprakers/sk.jpg"


//logos
import l1 from "./assets/logos/AMD.svg"
import l2 from "./assets/logos/Max Protein.svg"
import l3 from "./assets/logos/One Plus.svg"
import l4 from "./assets/logos/RedBull.svg"
import l5 from "./assets/logos/RealMe.svg"
import l6 from "./assets/logos/Relience Digital.svg"
import l7 from "./assets/logos/Dubai Energy Drink.svg"
import logo from "./assets/logo.png"
//wedding
import wedding1 from "./assets/wedding/wedding1.jpg"
import wedding2 from "./assets/wedding/wedding2.jpg"
import wedding3 from "./assets/wedding/wedding3.jpg"
import wedding4 from "./assets/wedding/wedding4.jpg"
import wedding5 from "./assets/wedding/wedding5.jpg"

//services
import w1 from "./assets/services/wed1.jpg"
import w2 from "./assets/services/wed2.jpg"
import w3 from "./assets/services/wed3.jpg"
import w4 from "./assets/services/wed4.jpg"
import w5 from "./assets/services/wed5.jpg"
import m1 from "./assets/services/meet1.jpg"
import ex1 from "./assets/services/ex.jpg"
import con from "./assets/services/con.jpg"
import mice from "./assets/services/mice.jpg"
import meeting from "./assets/services/meetings.jpg"
import inc from "./assets/services/incentive.jpg"
import conf from "./assets/services/conf.jpg"
import travel from "./assets/services/travel.jpg"
import gift from "./assets/services/gift.jpg"
import suni1 from "./assets/services/suni1.jpg"
import suni2 from "./assets/services/suni2.jpg"
import suni3 from "./assets/services/suni3.jpg"
import suni4 from "./assets/services/suni4.jpg"
import suni5 from "./assets/services/suni5.jpg"
import sh1 from "./assets/services/sh1.jpg"
import sh2 from "./assets/services/sh2.jpg"
import sh3 from "./assets/services/sh3.jpg"
import sh4 from "./assets/services/sh4.jpg"
import sh5 from "./assets/services/sh5.jpg"
import sh6 from "./assets/services/sh6.jpg"
import w6 from "./assets/services/wed6.jpg"
import vir1 from "./assets/services/virtual.png"
import art1 from "./assets/services/artist.jpg"
//btl
import btl1 from "./assets/btl/btl1.jpeg"
import btl3 from "./assets/btl/btl2.jpg"
import btl2 from "./assets/btl/btl3.jpg"
// --- Constants ---

const SOCIAL_LINKS = [
  { Icon: Instagram, href: "https://www.instagram.com/kreativekeedaent/", name: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/kreativekeedatv/", name: "Facebook" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/kreative-keeda-entertainment/", name: "LinkedIn" },
  { Icon: MapPin, href: "https://maps.app.goo.gl/Hw2Qrzv3obexv6KP8", name: "Location" },
];

const SPEAKERS_DATA = [
  { name: "Sandeep Maheshwari", image: san, description: "Sandeep Maheshwari is one of India’s most influential motivational speakers, inspiring millions with practical life lessons on confidence, success, and personal growth. His relatable storytelling, real-life examples, and powerful stage presence create transformative sessions that energize audiences, helping individuals overcome self-doubt, unlock potential, and take meaningful action toward achieving their goals." },
  { name: "Vivek Bindra", image: vb, description: "Vivek Bindra is a globally recognized motivational speaker and leadership coach known for his high-energy presentations and actionable business strategies. His sessions focus on entrepreneurship, leadership, and performance excellence, empowering professionals and organizations to enhance productivity, drive growth, and build winning mindsets that deliver measurable results in competitive business environments." },
  { name: "Dr. Ujjwal Patni", image: up, description: "Dr. Ujjwal Patni is an internationally acclaimed motivational speaker and corporate trainer renowned for simplifying complex business and leadership concepts. His engaging sessions combine humor, practical insights, and real-world strategies, helping teams improve performance, strengthen leadership skills, and cultivate positive workplace cultures that support sustained success and organizational excellence." },
  { name: "Gaur Gopal Das", image: gg, description: "Gaur Gopal Das is a widely respected spiritual leader and motivational speaker known for blending wisdom, humor, and practical life guidance. His talks focus on happiness, relationships, and purpose-driven living, inspiring audiences to develop emotional resilience, maintain balance, and lead fulfilling personal and professional lives through mindful decision-making and positive thinking." },
  { name: "Shiv Khera", image: sk, description: "Shiv Khera is a renowned motivational speaker and bestselling author celebrated for his impactful messages on attitude, leadership, and success principles. With decades of global speaking experience, he delivers powerful, value-driven sessions that motivate individuals and organizations to build strong character, achieve excellence, and create lasting personal and professional success." },
];

const ARTISTS_DATA = [
  { name: "Sunidhi Chauhan", genre: "Bollywood Playback", image: s, description: "Sunidhi Chauhan is a powerhouse performer known for her electrifying stage presence and versatile vocals spanning pop, Bollywood, and dance hits. With chart-topping songs and high-energy live shows, she captivates audiences across generations, delivering unforgettable College Fests experiences filled with rhythm, charisma, and unstoppable energy that keeps crowds dancing all night long." },
  { name: "Shreya Ghoshal", genre: "Classical & Playback", image: shreya, description: "Shreya Ghoshal is one of India\’s most celebrated vocalists, admired for her melodious voice, emotional depth, and classical finesse. Her College Fests offer a soulful musical journey featuring romantic ballads and timeless hits, creating an enchanting atmosphere that resonates deeply with audiences and showcases her unmatched elegance and vocal mastery on stage." },
  { name: "Shankar Mahadevan", genre: "Fusion & Classical", image: shankar, description: "Shankar Mahadevan is a musical virtuoso renowned for blending classical Indian music with contemporary styles. A dynamic performer and composer, he brings technical brilliance, improvisational flair, and infectious enthusiasm to every College Fests. His performances celebrate musical diversity, engaging audiences with powerful vocals, rhythmic energy, and an inspiring connection to India\’s rich musical heritage." },
  { name: "Mithoon", genre: "Music Composer", image: m, description: "Mithoon is a celebrated composer and singer known for creating emotionally resonant melodies that define modern Bollywood romance. His College Fests feature heartfelt compositions, cinematic soundscapes, and soulful performances that connect deeply with listeners, offering audiences an intimate and memorable musical experience filled with passion, nostalgia, and timeless love songs." },
  { name: "Salim-Sulaiman", genre: "Composer Duo", image: ss, description: "Salim–Sulaiman are internationally acclaimed composers celebrated for their fusion of Indian and global musical influences. Their live performances combine powerful vocals, live instrumentation, and innovative arrangements, delivering high-quality entertainment that appeals to diverse audiences. With a reputation for musical excellence, they create vibrant College Fests that blend tradition, modernity, and world-class production." },
  { name: "Javed Ali", genre: "Melodious Playback", image: ja, description: "Javed Ali is a versatile playback singer admired for his smooth voice and expressive delivery across romantic, devotional, and classical-inspired songs. His live performances are known for emotional connection and musical sincerity, captivating audiences with melodious renditions that create a warm, immersive College Fests atmosphere filled with heartfelt expression and timeless musical charm." },
  { name: "Farhan Akhtar", genre: "Actor & Singer", image: fa, description: "Farhan Akhtar is a dynamic entertainer who blends rock music with charismatic stage performance. Known for his energetic vocals and engaging personality, he delivers College Fests that combine music, storytelling, and audience interaction. His shows offer a contemporary, youthful vibe, making them a popular choice for festivals, corporate events, and large-scale live entertainment experiences." },
  { name: "Vishal-Sheykhar", genre: "High-Energy Duo", image: vs, description: "Vishal–Sheykhar are one of Bollywood’s most successful music composer duos, famous for delivering chart-topping hits across genres. Their College Fests feature high-energy performances, modern sound production, and crowd-favorite songs that ignite excitement. With a strong reputation for live entertainment, they create electrifying musical experiences that keep audiences singing and dancing throughout the show." },
];

const SERVICES_DATA = [
  {
    id: 'wedding-services',
    title: "Wedding Services",
    banner: w1,
    description: "We provide full wedding planning and décor solutions from start to finish.",
    subServices: [
      { title: "Wedding planning & management", image: w2 },
      { title: "Destination weddings", image: wedding1 },
      { title: "Venue booking", image: wedding2 },
      { title: "Vendor coordination", image: wedding3 },
      { title: "Photography & videography", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" },
      { title: "Catering & bartenders", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800" },
      { title: "DJ / Band", image: wedding5 },
      { title: "Makeup artist", image: wedding4 },
      { title: "Gifts & souvenirs", image: gift },
    ]
  },
  {
    id: 'wedding-decor',
    title: "Wedding Decor",
    banner: w6,
    description: "Exquisite decoration services to make your special day visually stunning.",
    subServices: [
      { title: "Mandap setup", image: "https://i.pinimg.com/474x/e5/e8/a8/e5e8a8fe40b14b3b58383cdf896a47f6.jpg" },
      { title: "Stage decoration", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
      { title: "Entrance gate decoration", image: "https://mymandap.in/wp-content/uploads/2022/05/Wedding-Entrance-Decorations.png" },
      { title: "Lighting setup", image: "https://www.adj.com/cdn/shop/articles/567ad9641d12d_ultimate-cover.jpg?v=1745276802&width=2048" },
      { title: "Floral decoration", image: "https://5.imimg.com/data5/SELLER/Default/2025/3/499693133/ED/JY/SB/33392282/wedding-flower-decoration-service.jpg" },
      { title: "Reception stage design", image: "https://media.weddingz.in/images/bbda52972b1de50671f1b9de639610de/Anais-Events-6.jpg"  },
      { title: "Fireworks", image: "https://www.wedinspire.com/wp-content/uploads/2024/02/VillaCariola010923-178-2ff.jpg" },
      { title: "LED wall setup", image: "https://assets.ems-events.co.uk/2026/01/Designing-the-Perfect-Stage-Setup-With-Led-Walls.webp" },
    ]
  },
  {
    id: 'corporate-events',
    title: "Corporate & Business Events",
    banner: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1920",
    description: "Professional event management for conferences, launches, and corporate gatherings.",
    subServices: [
      { title: "Conferences", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800" },
      { title: "Product launches", image: "https://5.imimg.com/data5/RA/HA/GLADMIN-36077309/product-launch-events-management-service.png" },
      { title: "Award ceremonies", image: "https://tcuplace.com/wp-content/uploads/MarkGTiuDSC_6834-scaled-1.webp" },
      { title: "Seminars", image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-02/12/full/1707732087-7106.jpg" },
      { title: "Team-building activities", image: "https://steplearningindia.com/corporate-team-building-games/assets/images/course/Blow-BridgeTeam-Building-Activity.jpg" },
      { title: "Corporate meetings", image: "https://itpo-tokyo.unido.org/files/sites/2/DSC_4110_ok-1170x782.jpg" },
    ]
  },
  {
    id: 'mice-services',
    title: "MICE Services",
    banner: mice,
    description: "Meetings, Incentives, Conferences, and Exhibitions handled with precision.",
    subServices: [
      { title: "Meetings", image: meeting },
      { title: "Incentive programs", image: inc },
      { title: "Conferences", image: conf },
      { title: "Exhibitions", image: ex1 },
      { title: "Business travel coordination", image: travel },
    ]
  },
  {
    id: 'exhibition-trade-fair',
    title: "Exhibition & Trade Fair",
    banner: "https://static.investindia.gov.in/s3fs-public/2021-11/AI_1.jpg",
    description: "End-to-end solutions for exhibitions and trade fairs.",
    subServices: [
      { title: "Booth design", image: "https://www.triumfo.de/uploads/blog/1666181818.webp" },
      { title: "Stall fabrication", image: btl1},
      { title: "Product display setup", image: "https://meyers.com/wp-content/uploads/2022/08/shutterstock_1158877525-scaled-1.webp" },
      { title: "Branding and signage", image: btl2 },
      { title: "Event logistics", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800" },
      { title: "On-site support", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800" },
    ]
  },
  {
    id: 'virtual-hybrid-events',
    title: "Virtual / Hybrid Events",
    banner: vir1,
    description: "Cutting-edge solutions for live streaming and virtual interactions.",
    subServices: [
      { title: "Live streaming", image: "https://images.squarespace-cdn.com/content/v1/574c242e2eeb81625afad31e/04b9ef19-5154-4e38-98bd-dedab81adbfa/Virtual+Event+Studio+Dubai" },
      { title: "Webinar hosting", image: "https://i.ytimg.com/vi/7G5jBaLxi8s/maxresdefault.jpg" },
      { title: "Virtual conferences", image: "https://www.wildapricot.com/wp-content/uploads/2022/10/virtual-conference.png" },
     
    ]
  },
  {
    id: 'artist-celebrity-management',
    title: "Artist & Celebrity Management",
    banner: art1,
    description: "Connecting you with top-tier talent for your events.",
    subServices: [
      { title: "Singer booking", image: suni1},
      { title: "DJ booking", image: "https://akm-img-a-in.tosshub.com/lingo/brt/images/story/202404/662f71d9be800-10-wedding-djs-to-book-for-your-wedding-290928589-16x9.png" },
      { title: "Celebrity appearances", image: "https://celebsbooking.com/img/about_desc/Celebrity%20at%20college-4.jpg" },
      { title: "Dance performances", image: "https://cdn0.weddingwire.in/article/1841/3_2/1280/jpg/71481-group-dance-video-hitched-and-clicked-lead.jpeg" },
      { title: "Host / anchor management", image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/555988682-1526541463.jpg" },
      { title: "Audience Engagement Planning", image: "https://www.dissdash.com/wp-content/uploads/2018/01/o-STAND-UP-COMEDY-INDIA-facebook-768x384.jpg" },
    ]
  },
  {
  id: 'btl-activities',
  title: "BTL Activities",
  banner: btl1,
  description: "We specialize in executing comprehensive BTL activities that enable brands to engage directly with their audience through targeted, on-ground initiatives. Our services include mall activations, corporate and college campaigns, product demonstrations, sampling drives, and promotional events. With a strong focus on audience behavior and location strategy, we design campaigns that are both impactful and result-driven. From concept development to execution, our team ensures seamless coordination, high visibility, and effective brand communication at every touchpoint.",
  subServices: [
    { title: "Stall Fabrication", image: btl3 },
    { title: "Brand Promotions", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" },
    { title: "Experiantial Marketing", image: "https://www.thehandhgroup.com/wp-content/uploads/2020/01/experiential-marketing.jpg" },
 
  ]
}
  
];

// --- Components ---

const ContactModal = ({ isOpen, onClose, title }: { isOpen: boolean, onClose: () => void, title: string }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-white/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white w-full max-w-2xl rounded-sm overflow-hidden relative shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="p-10 md:p-16">
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Booking Enquiry</span>
            <h2 className="text-3xl md:text-4xl font-display mb-8">Book <span className="italic">{title}</span></h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors" placeholder="+91 00000 00000" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Event Date</label>
                  <input type="date" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Message</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors resize-none" placeholder={`Tell us about your event with ${title}...`}></textarea>
              </div>
              <button className="w-full py-5 bg-gold text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white transition-all">
                Submit Booking Request
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const BookingItem = ({ number, image, name, description, genre, onBook }: { number: string, image: string, name: string, description: string, genre?: string, onBook: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-20 items-start py-12 border-b border-gray-100 group relative"
    >
      <div className="absolute -left-4 md:-left-12 top-6 text-8xl md:text-[10rem] font-bold text-black/[0.03] group-hover:text-gold/[0.05] transition-colors duration-700 leading-none pointer-events-none z-0">
        {number}
      </div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl z-10">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col justify-center h-full pt-4 z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-2 tracking-tight">{name}</h3>
        {genre && <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">{genre}</span>}
        <p className="text-black/50 text-base font-light leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const BookingSection = ({ id, title, items, startNumber, onBook }: { id: string, title: string, items: any[], startNumber: number, onBook: (name: string) => void }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-transparent text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Exclusive Talent</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-black">{title}</h2>
        </motion.div>

        <div className="space-y-0">
          {items.map((item, index) => (
            <BookingItem 
              key={index}
              number={String(startNumber + index).padStart(2, '0')}
              {...item}
              onBook={() => onBook(item.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919082073899"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[999] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl cursor-pointer group"
    >
      <div className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us
      </div>
      <svg 
        viewBox="0 0 24 24" 
        className="w-8 h-8 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03a11.854 11.854 0 001.532 5.827L0 24l6.305-1.654a11.846 11.846 0 005.743 1.48h.005c6.632 0 12.028-5.391 12.03-12.024a11.874 11.874 0 00-3.527-8.507"/>
      </svg>
    </motion.a>
  );
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-gold rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.2 }}
      />
    </>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Artists', href: '/artists' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || !isHomePage ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col cursor-pointer"
          onClick={() => navigate('/')}
        >
          <span className={`text-2xl font-bold tracking-tighter transition-colors duration-500 ${isScrolled || !isHomePage ? 'text-black' : 'text-white'}`}>
            KREATIVE KEEDA
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-gold">
            Entertainment
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-sm uppercase tracking-widest font-medium transition-colors duration-500 hover:text-gold ${isScrolled || !isHomePage ? 'text-black/80 hover:text-black' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className={`px-6 py-2 border transition-all duration-500 text-xs uppercase tracking-widest font-bold ${isScrolled || !isHomePage ? 'border-black/20 text-black hover:bg-black hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-black'}`}
          >
            Plan Your Event
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className={isScrolled || !isHomePage ? 'text-black' : 'text-white'} />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm uppercase tracking-widest font-medium text-black/80 hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-3 bg-gold text-black text-xs uppercase tracking-widest font-bold text-center"
              >
                Plan Your Event
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ClientMarquee = () => {
  const clients = [
    { name: "Red Bull", logo: l1 },
    { name: "MTV", logo: l2 },
    { name: "Sony Music", logo: l3 },
    { name: "Universal", logo:l4 },
    { name: "Warner Bros", logo:l5 },
    { name: "Netflix", logo: l6 },
    { name: "Disney", logo: l7 },
  ];

  return (
    <div className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30"
        >
          Trusted by Industry Giants
        </motion.span>
      </div>
      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24 items-center px-12"
        >
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="flex-shrink-0">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-8 md:h-10 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out cursor-pointer invert"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    w1,
    m1,
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920",
    ex1,
    con
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
  id="home"
  className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 md:pt-28"
>
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
          />
        </AnimatePresence>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
>
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-10 leading-tight tracking-tighter">
            <span className="whitespace-nowrap">Crafting <span className="italic font-meduim text-gold/100">Extraordinary</span></span> <br className="hidden md:block" /> Events
          </h1>
          <motion.p 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.8 }}
  className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-14 font-medium leading-relaxed"
>
            From weddings to corporate events, Concerts to college festivals , we bring your boldest ideas to life with precision and passion.
          </motion.p>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/portfolio"
                className="  w-full sm:w-auto sm:min-w-[220px]  px-6 py-3 sm:px-10 sm:py-4 md:px-16 md:py-6
border border-gold
bg-transparent
text-white
text-xs sm:text-sm
uppercase
tracking-[0.15em] sm:tracking-[0.25em]
font-bold
transition-all

text-center
hover:bg-gold
hover:text-black
hover:border-gold
active:scale-95
  "
              >
                Explore Our Work
              </Link>
              <Link 
                to="/contact"
                className="  w-full sm:w-auto sm:min-w-[220px]  px-6 py-3 sm:px-10 sm:py-4 md:px-16 md:py-6
border border-gold
bg-transparent
text-white
text-xs sm:text-sm
uppercase
tracking-[0.15em] sm:tracking-[0.25em]
font-bold
transition-all
text-center
hover:bg-gold
hover:text-black
hover:border-gold
active:scale-95
  "
              >
                Plan Your Event
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <Link 
                to="/speakers"
                className="  w-full sm:w-auto sm:min-w-[220px]  px-6 py-3 sm:px-10 sm:py-4 md:px-16 md:py-6
border border-gold
bg-transparent
text-white
text-xs sm:text-sm
uppercase
tracking-[0.15em] sm:tracking-[0.25em]
font-bold
transition-all  
text-center
hover:bg-gold
hover:text-black
hover:border-gold
active:scale-95
  "
              >
                Book Speakers
              </Link>
              <Link 
                to="/artists"
                className="  w-full sm:w-auto sm:min-w-[220px] px-6 py-3 sm:px-10 sm:py-4 md:px-16 md:py-6
border border-gold
bg-transparent
text-white
text-xs sm:text-sm
uppercase
tracking-[0.15em] sm:tracking-[0.25em]
font-bold
transition-all
text-center
hover:bg-gold
hover:text-black
hover:border-gold
active:scale-95
  "
              >
                Book Artist
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-white/50 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069" 
                alt="Event Planning" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 -z-10 hidden md:block" />
            <motion.div 
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  className="
    absolute
    bottom-0 right-0
    md:-bottom-6 md:-right-6
    bg-gold
    text-black
    p-4 md:p-8
    shadow-2xl
    z-20
  "
>
  <span className="text-2xl md:text-4xl font-display italic block mb-0.5 md:mb-1">
    10+
  </span>
  <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">
    Years of Legacy
  </span>
</motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-display mb-8 leading-tight text-black">
              Where Creativity Meets <span className="italic">Seamless</span> Execution
            </h2>
            <p className="text-black/60 text-lg mb-8 leading-relaxed font-light">
              KREATIVE KEEDA ENTERTAINMENT is a premier full-service event management agency dedicated to transforming visions into unforgettable realities. We specialize in large-scale productions, luxury weddings, and high-impact corporate experiences.
            </p>
            <p className="text-black/60 text-lg mb-10 leading-relaxed font-light">
              Our philosophy is simple: every event is a unique story waiting to be told. With a team of seasoned professionals and a network of top-tier partners, we ensure every detail is curated to perfection.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-black">Creative Vision</h4>
                <p className="text-xs text-black/40">Bespoke concepts tailored to your brand or personal style.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-black">Global Reach</h4>
                <p className="text-xs text-black/40">Executing world-class events across borders and cultures.</p>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<null | typeof SERVICES_DATA[0]>(null);

  if (selectedService) {
    return (
      <section className="py-16 md:py-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <button 
            onClick={() => setSelectedService(null)}
            className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold mb-12 hover:translate-x-[-8px] transition-transform"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Services
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="relative h-[40vh] md:h-[50vh] rounded-xl overflow-hidden mb-12 shadow-2xl">
              <img 
                src={selectedService.banner} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter text-center px-6">
                  {selectedService.title}
                </h2>
              </div>
            </div>

            <div className="max-w-3xl mb-16">
              <p className="text-black/60 text-xl leading-relaxed font-light">
                {selectedService.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedService.subServices.map((sub, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-video overflow-hidden rounded-lg mb-4 shadow-lg">
                    <img 
                      src={sub.image} 
                      alt={sub.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-black tracking-tight group-hover:text-gold transition-colors">
                    {sub.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">What We Do</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-black">Our <span className="italic font-light">Bespoke</span> Services</h2>
          <p className="text-black/50 max-w-2xl mx-auto font-light text-base">Comprehensive event solutions designed to elevate every experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-12 relative">
          {SERVICES_DATA.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center px-6 cursor-pointer group ${index % 4 !== 3 ? 'lg:border-r border-gray-100' : ''}`}
              onClick={() => setSelectedService(service)}
            >
              <div className="w-full aspect-[4/5] overflow-hidden rounded-xl mb-6 shadow-2xl group-hover:shadow-gold/20 transition-all duration-500">
                <img 
                  src={service.banner} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-bold text-black text-center tracking-tight group-hover:text-gold transition-colors">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const categories = ['All', 'Weddings', 'Corporate', 'College Fests'];
  
  const projects = [
    { id: 'royal-wedding', title: "The Royal Wedding", category: "Weddings", img: w1 },
    { id: 'tech-summit', title: "Tech Summit 2024", category: "Corporate", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2070" },
    { id: 'Sunidhi Chauhan', title: "AIIMS Raipur", category: "College Fests", img: suni1 },
    { id: 'Shreya Ghoshal', title: "Mithibai, Kshitij", category: "College Fests", img: sh1 },
    { id: 'luxury-launch', title: "Luxury Brand Launch", category: "Corporate", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2012" },
    { id: 'artist-showcase', title: "Artist Showcase", category: "College Fests", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070" },


  ];

  const filteredProjects = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Our Work</span>
            <h2 className="text-3xl md:text-5xl font-display tracking-tight text-black">Featured <span className="italic">Experiences</span></h2>
          </div>
          <div className="flex flex-wrap gap-6">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setVisibleCount(6);
                }}
                className={`text-[10px] uppercase tracking-widest font-bold transition-all border-b-2 pb-1 ${activeTab === cat ? 'border-gold text-black' : 'border-transparent text-black/40 hover:text-black'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div 
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
                onClick={() => navigate(`/event/${project.id}`)}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="
  absolute inset-0
  bg-transparent md:bg-white/60
  opacity-100 md:opacity-0 md:group-hover:opacity-100
  transition-opacity duration-500
  flex flex-col justify-end p-8
">
                  <span className="text-white md:text-gold  text-lg uppercase tracking-[0.3em] font-black mb-2 block transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white md:text-black transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100 ease-out">
                    {project.title}
                  </h3>
                  <div className="mt-6 w-10 h-10 rounded-full border border-black/30 flex items-center justify-center text-black transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-200 ease-out">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-10 py-4 border border-black text-[10px] uppercase tracking-[0.1em] font-black transition-all hover:bg-black hover:text-white"
            >
              View More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Events Managed", value: 3000 },
    { label: "Artists Managed", value: 200 },
    { label: "Corporate Clients", value: 100 },
    { label: "College Festivals", value: 150 },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-['Orbitron'] font-bold text-gold mb-4"
              >
                <Counter value={stat.value} />+
              </motion.div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span ref={ref}>{count}</span>;
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "Working with Kreative Keeda was a smooth journey. Aditya was the agent for our online fest FUNDAMENTAL 2020. Due to COVID-19, our budget was tight, but Aditya truly went above and beyond to secure us with the artist we wanted. The show was a hit! We couldn't be happier.",
      author: "Augnayee Sen",
      role: "Digitial Designer at Boston Consulting Group August 11, 2021"
    },
    {
      text: "Kreative Keeda has shown exceptional professionalism over the 7+ years we’ve worked together, consistently taking ownership from planning to execution and delivering beyond expectations. What sets them apart is not just their work ethic, but the strong relationships they build along the way, adding value both in results and connections.",
      author: "Nisarg S.",
      role: "A Manager - HR (Waaree Energies) | Accenture Strategy |Change Management | Organizational Effectiveness | 7 MBA SIBM Pune - HR | Engineer Turned People Partner | Guinness World Record Holder June 20, 2025,  "
    },
    {
      text: "I’d like to sincerely thank Kreative Keeda for organizing such a wonderful event and making it a grand success.",
      author: "Shankar Mahadevan",
      role: "Singer, Composer"
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-display mb-6">Voices of <span className="italic">Excellence</span></h2>
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
              <p className="text-black/70 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-black">{t.author}</h4>
                <p className="text-[10px] text-gold font-bold tracking-widest uppercase mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Creative Concepts", desc: "We don't just plan events; we design experiences that resonate." },
    { title: "Professional Production", desc: "State-of-the-art technical setup and flawless execution." },
    { title: "Experienced Team", desc: "A dedicated team of experts with years of industry knowledge." },
    { title: "End-to-End Solutions", desc: "From initial concept to final wrap-up, we handle it all." },
  ];

  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block">The Difference</span>
            <h2 className="text-4xl md:text-6xl font-display mb-8 text-black">Why <span className="italic">Kreative Keeda?</span></h2>
            <p className="text-black/60 text-lg mb-12 font-light">We pride ourselves on being more than just event managers. We are your creative partners, dedicated to pushing boundaries and delivering excellence.</p>
            <div className="space-y-8">
              {reasons.map((r, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                    <span className="text-black font-bold">0{i+1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2 text-black">{r.title}</h4>
                    <p className="text-black/50 text-sm">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=2070" 
                alt="Event Production" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-gold -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-gold -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
 



const [status, setStatus] = useState("");
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
    <section id="contact" className="py-24 md:py-40 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-display mb-10">Let's Create <span className="italic text-gold">Magic</span> Together</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm group-hover:bg-gold transition-colors duration-500 border border-gray-100">
                  <Phone className="w-5 h-5 text-gold group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/40 mb-1">Call Us</h4>
                  <p className="text-lg font-medium text-black">+919082073899</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm group-hover:bg-gold transition-colors duration-500 border border-gray-100">
                  <Mail className="w-5 h-5 text-gold group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/40 mb-1">Email Us</h4>
                  <p className="text-lg font-medium text-black">business@kreativekeeda.in</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm group-hover:bg-gold transition-colors duration-500 border border-gray-100">
                  <MapPin className="w-5 h-5 text-gold group-hover:text-black transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/40 mb-1">Visit Us</h4>
                  <p className="text-lg font-medium text-black">Navi Mumbai,Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              {SOCIAL_LINKS.map(({ Icon, href, name }) => (
                <motion.a 
                  key={name}
                  whileHover={{ y: -5, color: '#34c759' }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-200 flex items-center justify-center rounded-full text-black/40 transition-colors hover:border-gold"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-10 md:p-16 rounded-sm border border-gray-100 shadow-sm"
          >
            
            <form className="space-y-8" onSubmit={handleSubmit}>
  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Full Name</label>
      <input 
        type="text" 
        name="name"
        className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors text-black" 
        placeholder="John Doe" 
      />
    </div>

    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Email Address</label>
      <input 
        type="email" 
        name="email"
        className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors text-black" 
        placeholder="john@example.com" 
      />
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Phone Number</label>
      <input 
        type="tel" 
        name="phone"
        className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors text-black" 
        placeholder="+91 77689 41772" 
      />
    </div>

    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Event Type</label>
      <select 
        name="eventType"
        className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors text-black"
      >
        <option className="bg-white">Wedding</option>
        <option className="bg-white">Corporate</option>
        <option className="bg-white">Artist Booking</option>
        <option className="bg-white">Speaker Booking</option>
        <option className="bg-white">College Fest</option>
        <option className="bg-white">Other</option>
      </select>
    </div>
  </div>

  <div className="space-y-2">
    <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Message</label>
    <textarea 
      name="message"
      rows={4} 
      className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-gold outline-none transition-colors text-black resize-none" 
      placeholder="Tell us about your event..."
    ></textarea>
  </div>

  <button 
    type="submit"
    className="w-full py-5 bg-gold text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white transition-all duration-500"
  >
    Send Enquiry
  </button>
  {status === "success" && (
  <p className="text-green-600 text-sm mt-4">
    Enquiry sent successfully!
  </p>
)}

{status === "error" && (
  <p className="text-red-600 text-sm mt-4">
    Something went wrong. Please try again.
  </p>
)}
</form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex flex-col mb-8">
              <span className="text-3xl font-bold tracking-tighter">KREATIVE KEEDA</span>
              <span className="text-xs tracking-[0.4em] uppercase font-medium text-gold">Entertainment</span>
            </div>
            <p className="text-black/50 max-w-sm leading-relaxed font-light mb-10">
              Crafting extraordinary events and experiences that leave a lasting impression. From luxury weddings to high-energy College Fests , we bring your vision to life.
            </p>
            <div className="flex gap-6">
              {SOCIAL_LINKS.map(({ Icon, href, name }) => (
                <a 
                  key={name} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black/30 hover:text-gold transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`} className="text-sm text-black/50 hover:text-black transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-8">Services</h4>
            <ul className="space-y-4">
              {['Weddings', 'Corporate', 'Concerts', 'College Fests', 'Artist Management'].map(service => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-black/50 hover:text-black transition-colors">{service}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-black/30 uppercase tracking-widest">
            © 2026 Kreative Keeda Entertainment. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-black/30 uppercase tracking-widest hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-black/30 uppercase tracking-widest hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const EventDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
  setCurrentIndex((prev) =>
    prev === project.images.length - 1 ? 0 : prev + 1
  );
};

const prevSlide = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? project.images.length - 1 : prev - 1
  );
};
  
  const projects = [
    { id: 'royal-wedding', title: "The Royal Wedding", category: "Weddings", images: [w2,w3,w4,w5], date: "June 2024", location: "Udaipur, Rajasthan", description: "A grand destination wedding featuring traditional Rajasthani decor, celebrity performances, and world-class hospitality for 500+ guests." },
    { id: 'tech-summit', title: "Tech Summit 2024", category: "Corporate", images: ["https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070","https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"], date: "March 2024", location: "Bangalore, India", description: "An immersive corporate conference with interactive tech zones, international speakers, and seamless hybrid event integration." },
    { id: 'Sunidhi Chauhan', title: "AIIMS Nagpur", category: "College Festss", images: [suni1,suni2,suni3,suni4,suni5],date: "December 2023", location: "Nagpur, India", description: "A high-energy music festival with state-of-the-art sound, lighting, and stage production featuring Sunidhi Chauhan." },
    { id: 'Shreya Ghoshal', title: "Mithibai,Kshitij", category: "College Fests", images:[sh1,sh2,sh3,sh4,sh5,sh6] , date: "Jan 2026", location: "Mumbai, India", description: "A massive college festival with multiple stages, celebrity guest appearances, and a diverse range of cultural competitions." },
    { id: 'luxury-launch', title: "Luxury Brand Launch", category: "Corporate", images: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=2012", date: "August 2023", location: "Dubai, UAE", description: "An exclusive product reveal for a luxury automotive brand, featuring cinematic projection mapping and elite guest management." },
    { id: 'artist-showcase', title: "Artist Showcase", category: "College Festss", images: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070", date: "May 2023", location: "London, UK", description: "An intimate College Fests series showcasing emerging talent, with bespoke stage design and high-fidelity audio production." },
  ];

  const project = projects.find(p => p.id === id);

  if (!project) return <div className="h-screen flex items-center justify-center bg-white text-black">Event not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white text-black min-h-screen pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold mb-12 hover:translate-x-[-8px] transition-transform"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Portfolio
        </button>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-10">

  <img
    src={project.images[currentIndex]}
    alt={project.title}
    className="w-full h-full object-cover transition-all duration-500"
  />

  {/* Left Button */}
  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-black transition"
  >
    ‹
  </button>

  {/* Right Button */}
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-black transition"
  >
    ›
  </button>

</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block ">{project.category}</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight text-black">{project.title}</h1>
            
            <div className="grid grid-cols-2 gap-10 mb-12 border-y border-black/10 py-10">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/40 mb-2">Date</h4>
                <p className="text-lg font-medium">{project.date}</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/40 mb-2">Location</h4>
                <p className="text-lg font-medium">{project.location}</p>
              </div>
            </div>

            <p className="text-black/60 text-xl leading-relaxed font-light mb-12">
              {project.description}
            </p>

            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/40">Key Highlights</h4>
              <ul className="space-y-4">
                {['Bespoke Production Design', 'Seamless Coordination', 'High-Impact Visuals', 'Elite Guest Management'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-16 px-12 py-5 bg-gold text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-white transition-all w-full md:w-auto">
              Enquire About Similar Events
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const PageHero = ({ title, subtitle, bgImage }: { title: string, subtitle: string, bgImage: string }) => (
  <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-white/60" />
    </div>
    <div className="relative z-10 text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-8xl font-bold text-black mb-6 tracking-tighter"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-black/80 text-lg md:text-2xl font-light tracking-widest uppercase"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

const AboutPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-0 bg-white">
    <PageHero 
      title="Our Story" 
      subtitle="A Legacy of Excellence" 
      bgImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920" 
    />
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Who We Are</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-black">Crafting Memories <br /><span className="italic font-light">Since 2014</span></h2>
            <p className="text-black/50 leading-relaxed font-light mb-6">
              Founded with a passion for creativity and a commitment to perfection, Kreative Keeda has grown into one of India's premier event management firms. We believe that every event is a unique story waiting to be told.
            </p>
            <p className="text-black/50 leading-relaxed font-light mb-10">
              Our team of dedicated professionals brings together decades of experience in hospitality, design, and production to deliver events that are not just successful, but truly extraordinary.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-gold font-bold text-3xl mb-2">500+</h4>
                <p className="text-xs uppercase tracking-widest text-black/40">Events Executed</p>
              </div>
              <div>
                <h4 className="text-gold font-bold text-3xl mb-2">100%</h4>
                <p className="text-xs uppercase tracking-widest text-black/40">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" alt="About Us" className="rounded-sm shadow-2xl" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-10 -left-10 bg-gold p-10 hidden md:block">
              <span className="text-6xl font-bold text-black block">10+</span>
              <span className="text-xs uppercase tracking-widest text-black font-bold">Years of Magic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Our Values</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">The Pillars of <span className="italic font-light text-gold">Kreative Keeda</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Innovation", desc: "We push the boundaries of conventional event planning to deliver fresh, unique experiences." },
            { title: "Excellence", desc: "Our commitment to quality ensures that every detail is handled with the utmost precision." },
            { title: "Integrity", desc: "We build lasting relationships through transparency, honesty, and mutual respect." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-gray-50 rounded-sm border border-gray-100 hover:border-gold transition-all duration-500">
              <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-black">{item.title}</h4>
              <p className="text-black/50 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <About />
    <WhyChooseUs />
    <Stats />
  </motion.div>
);

const ServicesPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-0 bg-white">
    <PageHero 
      title="Our Services" 
      subtitle="Bespoke Event Solutions" 
      bgImage="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1920" 
    />
    <Services />
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display mb-12 text-center text-black">Our <span className="italic">Bespoke</span> Approach</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Consultation", desc: "We begin by understanding your vision, goals, and budget to create a tailored strategy that aligns perfectly with your expectations." },
            { title: "Planning", desc: "Meticulous planning covering every detail from logistics and vendor management to creative design and technical production." },
            { title: "Execution", desc: "Flawless on-site management ensuring a seamless and memorable experience for you and your guests, handled by our expert team." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-gray-50 rounded-sm border border-gray-100 hover:border-gold transition-colors duration-500 group shadow-sm">
              <span className="text-gold font-bold text-4xl mb-6 block group-hover:scale-110 transition-transform">0{i+1}</span>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-widest text-black">{item.title}</h4>
              <p className="text-black/50 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800" alt="Service Detail" className="rounded-sm shadow-2xl" referrerPolicy="no-referrer" />
          </div>
          <div>
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-black">Beyond <span className="italic font-light">Expectations</span></h2>
            <ul className="space-y-6">
              {[
                "End-to-end event management solutions",
                "Access to premium vendors and artists",
                "Cutting-edge technical production",
                "Personalized attention to every detail",
                "Transparent and competitive pricing"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-black/60">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">Ready to start your <span className="text-gold italic">journey</span>?</h2>
        <Link to="/contact" className="inline-block px-12 py-5 bg-gold text-black text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-500">
          Get a Free Quote
        </Link>
      </div>
    </div>
  </motion.div>
);

const PortfolioPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-0 bg-white">
    <PageHero 
      title="Portfolio" 
      subtitle="Showcasing Excellence" 
      bgImage="https://prism.fm/wp-content/uploads/2025/02/Event-Management-Concert-1024x576.png" 
    />
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Our Work</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-black">Featured <span className="italic font-light">Experiences</span></h2>
        <p className="text-black/50 max-w-2xl mx-auto font-light leading-relaxed">
          Explore our collection of successfully executed events, from intimate gatherings to grand celebrations. Each project is a testament to our commitment to quality and creativity.
        </p>
      </div>
    </div>
    <Portfolio />
    <Stats />
  </motion.div>
);

const SpeakersPage = ({ onBook }: { onBook: (name: string) => void }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-0 bg-white">
    <PageHero 
      title="Motivational Speakers" 
      subtitle="Inspiring Minds" 
      bgImage="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1920" 
    />
    <BookingSection 
      id="speakers-list" 
      title=" Speakers" 
      items={SPEAKERS_DATA} 
      startNumber={1} 
      onBook={onBook} 
    />
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">Interested in booking a <span className="text-gold italic">speaker</span>?</h2>
        <Link to="/contact" className="inline-block px-12 py-5 bg-gold text-black text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-500">
          Enquire Now
        </Link>
      </div>
    </div>
  </motion.div>
);

const ArtistsPage = ({ onBook }: { onBook: (name: string) => void }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-0 bg-white">
    <PageHero 
      title="Music Artists" 
      subtitle="Rhythms of Celebration" 
      bgImage="https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=1920" 
    />
    <BookingSection 
      id="artists-list" 
      title="Renowned Artists" 
      items={ARTISTS_DATA} 
      startNumber={1} 
      onBook={onBook} 
    />
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">Book your favorite <span className="text-gold italic">artist</span> today!</h2>
        <Link to="/contact" className="inline-block px-12 py-5 bg-gold text-black text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-500">
          Get a Free Quote
        </Link>
      </div>
    </div>
  </motion.div>
);

const ContactPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-0 bg-white">
    <PageHero 
      title="Contact Us" 
      subtitle="Let's Start a Conversation" 
      bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920" 
    />
    <Contact />
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="p-10 bg-gray-50 rounded-sm border border-gray-100 shadow-sm">
            <h4 className="text-gold font-bold uppercase tracking-widest mb-4">Office Hours</h4>
            <p className="text-black/50 font-light">Mon - Sat: 10:00 AM - 7:00 PM</p>
            <p className="text-black/50 font-light">Sunday: Closed</p>
          </div>
          <div className="p-10 bg-gray-50 rounded-sm border border-gray-100 shadow-sm">
            <h4 className="text-gold font-bold uppercase tracking-widest mb-4">Global Presence</h4>
            <p className="text-black/50 font-light">Serving clients across India</p>
            <p className="text-black/50 font-light">and International destinations</p>
          </div>
          <div className="p-10 bg-gray-50 rounded-sm border border-gray-100 shadow-sm">
            <h4 className="text-gold font-bold uppercase tracking-widest mb-4">Follow Us</h4>
            <div className="flex justify-center gap-6 mt-4">
              {SOCIAL_LINKS.map(({ Icon, href, name }) => (
                <a 
                  key={name} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-black/40 hover:text-gold transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const MainPage = ({ onBook }: { onBook: (name: string) => void }) => {
  return (
    <>
      <Hero />
      <ClientMarquee />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Services />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Portfolio />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Stats />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState('');

  const openModal = (name: string) => {
    setSelectedTalent(name);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="font-sans bg-white min-h-screen text-black">
        <ScrollToTop />
        <CustomCursor />
        <WhatsAppButton />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<MainPage onBook={openModal} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/speakers" element={<SpeakersPage onBook={openModal} />} />
          <Route path="/artists" element={<ArtistsPage onBook={openModal} />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
        </Routes>

        <Footer />
        <ContactModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title={selectedTalent} 
        />
      </div>
    </Router>
  );
}
