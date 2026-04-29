import { motion } from "framer-motion";
import { useState } from "react";
//logos
import l1 from "./assets/logos/AMD.svg"
import l2 from "./assets/logos/Max Protein.svg"
import l3 from "./assets/logos/One Plus.svg"
import l4 from "./assets/logos/RedBull.svg"
import l5 from "./assets/logos/RealMe.svg"
import l6 from "./assets/logos/Relience Digital.svg"
import l7 from "./assets/logos/Dubai Energy Drink.svg"
import logo from "./assets/logo.png"

import wedding1 from "./assets/wedding/wedding1.jpg"
import conf from "./assets/services/conf.jpg"
import suni1 from "./assets/services/suni1.jpg"
import btl1 from "./assets/btl/btl1.jpeg"
import sh1 from "./assets/services/sh1.jpg"
import art1 from "./assets/services/artist.jpg"
import w2 from "./assets/services/wed2.jpg"
import con from "./assets/services/con.jpg"
import mice from "./assets/services/mice.jpg"

const services = [
  { title: "Weddings", img: wedding1  },
  { title: "Corporate Events", img: conf  },
  { title: "Concerts", img: suni1},
  { title: "Brand Activations", img: btl1 },
  { title: "College Events", img:sh1 },
  { title: "Luxury Events", img: w2  },
  { title: "Artist Management", img: art1 },
  { title: "Event Production", img: con },
  { title: "MICE", img: mice },
];

const Landing = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // 🔥 WhatsApp redirect (HIGH CONVERSION)
    const msg = `New Enquiry:%0AName: ${form.name}%0APhone: ${form.phone}%0AEvent: ${form.event}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, "_blank");
  };

  return (
    <div className="bg-white text-black min-h-screen">

{/* 🔥 HERO WITH RIGHT FORM */}
<section className="min-h-screen flex items-center px-6 md:px-20">
  <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        India’s Premium Event Production Company
      </h1>

      <p className="mt-6 text-gray-400 max-w-xl">
        Weddings, Concerts & Corporate Events — Designed to Impress.
      </p>

      <button
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-8 px-8 py-4 bg-gold text-black uppercase tracking-[0.3em] text-xs font-bold"
      >
        View More
      </button>
    </div>

    {/* RIGHT FORM */}
    <div className="bg-grey p-8 rounded-xl border border-gray-800 shadow-xl">
      <h2 className="text-2xl font-bold mb-6">
        Get a Free Quote
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Your Name"
          className="p-4 bg-transparent border border-gray-700 outline-none"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          className="p-4 bg-transparent border border-gray-700 outline-none"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <select
          className="p-4 bg-white border border-gray-700 outline-none"
          onChange={(e) => setForm({ ...form, event: e.target.value })}
        >
          <option>Select Event Type</option>
          <option>Wedding</option>
          <option>Corporate</option>
          <option>Concert</option>
        </select>

        <button
          type="submit"
          className="mt-4 py-4 bg-gold text-black uppercase tracking-[0.3em] text-xs font-bold hover:bg-white transition-all"
        >
          Enquire on WhatsApp
        </button>
      </form>
    </div>

  </div>
</section>

      {/* 🧩 SERVICES (VISUAL GRID) */}
<section className="py-20 px-6 max-w-6xl mx-auto">
  <h2 className="text-center text-3xl font-bold mb-12">
    Our Services
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {services.map((s, i) => (
      <div key={i} className="relative group overflow-hidden">
        
        <img
          src={s.img}
          className="w-full h-64 object-cover md:group-hover:scale-110 transition duration-500"
        />

        {/* 🔥 Overlay ONLY on desktop */}
        <div className="absolute inset-0 bg-transparent md:bg-black/0 md:group-hover:bg-black/60 transition-all duration-500 ease-in-out flex items-center justify-center">
          
          <h3 className="text-lg font-semibold text-white md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
            {s.title}
          </h3>

        </div>

      </div>
    ))}
  </div>
</section>

      {/* 🎥 PROOF / PORTFOLIO */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">
          Our Work
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[suni1, sh1, con].map(
            (img, i) => (
              <img key={i} src={img} className="w-full h-72 object-cover" />
            )
          )}
        </div>
      </section>

{/* 🏆 CLIENT LOGO GRID */}
<section className="py-20 border-t border-gray-200 overflow-hidden">

  <h2 className="text-3xl md:text-5xl font-medium text-center mb-12">
    TRUSTED BY
  </h2>

  <div className="relative flex overflow-hidden">
    
<div className="flex animate-scroll gap-16 items-center whitespace-nowrap">
  
  {[... [l1, l2, l3, l4, l5, l6, l7], ... [l1, l2, l3, l4, l5, l6, l7]].map((logo, i) => (
    <img
      key={i}
      src={logo}
      className="h-10 w-auto object-contain invert opacity-40 hover:opacity-100 transition-all duration-500"
    />
  ))}

</div>

  </div>
</section>

      {/* 📞 CONTACT (HIGH CONVERSION) */}
      <section id="contact" className="py-24 px-6 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          Get a Free Quote
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            placeholder="Your Name"
            className="p-4 bg-transparent border border-gray-700"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            placeholder="Phone Number"
            className="p-4 bg-transparent border border-gray-700"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <select
            className="p-4 bg-black border border-gray-700"
            onChange={(e) => setForm({ ...form, event: e.target.value })}
          >
            <option>Select Event Type</option>
            <option>Wedding</option>
            <option>Corporate</option>
            <option>Concert</option>
            <option>Other</option>
          </select>

          <button
            type="submit"
            className="mt-4 py-4 bg-gold text-black uppercase tracking-[0.3em] font-bold hover:bg-white transition-all"
          >
            Enquire on WhatsApp
          </button>
        </form>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="py-20 text-center border-t border-gray-800">
        <h2 className="text-2xl md:text-4xl font-bold">
          Let’s Plan Your Event
        </h2>

        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 px-10 py-4 bg-gold text-black uppercase tracking-[0.3em] font-bold hover:bg-white transition-all"
        >
          Contact Now
        </button>
      </section>

      {/* 🎨 CSS */}
      <style>{`
        .bg-gold {
          background-color: #d4af37;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default Landing;