/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Menu, Star, ArrowRight, Instagram, Phone, MessageCircle, ArrowRightIcon } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 glass-nav border-b border-slate-200/50 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-full mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-display tracking-widest-plus text-primary uppercase">La Vie En Flower</div>
        <div className="hidden md:flex space-x-10 font-sans text-lg items-center uppercase tracking-widest">
          <a href="#story" className="hover:text-primary transition-colors">Story</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#classes" className="hover:text-primary transition-colors">Classes</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <button className="bg-primary text-white px-8 py-2.5 rounded-none font-sans text-sm tracking-widest-plus hover:bg-black transition-colors">
            Shop Now
          </button>
        </div>
        <button className="md:hidden text-primary">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-screen w-full flex flex-col md:flex-row bg-background-light overflow-hidden">
      <div className="w-full md:w-5/12 flex items-center pt-48 pb-16 md:pt-40 md:pb-0 px-8 md:px-20 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-block text-primary font-sans text-sm tracking-widest-plus uppercase mb-4">Established 2024</span>
          <h1 className="text-primary text-6xl md:text-[8rem] leading-[0.9] mb-10 italic">
            La Vie <br />En <br />Flower
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-display uppercase tracking-widest-plus mb-12 max-w-xs">
            일상에 꽃을 더하다
          </p>
          <div className="flex flex-col gap-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#gallery" 
              className="inline-block bg-primary text-white px-12 py-5 text-sm tracking-widest-plus uppercase hover:bg-black transition-all w-fit"
            >
              Explore Collection
            </motion.a>
            <div className="hidden md:flex items-center gap-4 text-primary/40">
              <div className="h-px w-20 bg-current"></div>
              <span className="font-sans text-[10px] tracking-widest uppercase">The Art of Botanique</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="w-full md:w-7/12 relative h-[50vh] md:h-screen">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 md:left-[-10%] hero-image-clip overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="High-quality elegant bouquet of flowers" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-light/20 via-transparent to-transparent"></div>
        </motion.div>
      </div>
    </header>
  );
};

const Philosophy = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white" id="story">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary font-display italic text-2xl mb-6 tracking-widest"
        >
          Our Philosophy
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl text-center mb-12 text-slate-900 leading-tight"
        >
          특별한 너에게 주는 꽃
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-slate-600 font-light">
          <p>
            라비앙플라워는 단순히 꽃을 파는 곳이 아닌, 일상 속의 작은 숨표를 제안합니다. 
            계절이 선사하는 가장 건강하고 아름다운 생명력을 담아 당신의 공간에 온기를 전합니다.
          </p>
          <p>
            꽃과 함께하는 시간은 우리에게 평온과 위로를 줍니다. 
            우리는 자연의 선이 살아있는 디자인을 지향하며, 꽃이 가진 본연의 아름다움을 가장 우아하게 표현합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

const SignatureCollection = () => {
  const collections = [
    { title: "L'amour Pink Peony", category: "Signature", img: "https://postfiles.pstatic.net/MjAyNjA0MTRfMjc0/MDAxNzc2MTY1NzcxNDE3._olJ4Cb-svXRtFa_WWhqB7wCpIIKyN6WdyxO7Pj2MMcg.YeJ_JoMLQ-vUfRrN9CeYkCNFIlGqeWqMHjpMOIx_vTUg.JPEG/anita-austvika-NZ7hcCZoRUc-unsplash.jpg?type=w966" },
    { title: "Spring Meadow Breeze", category: "Seasonal", img: "https://postfiles.pstatic.net/MjAyNjA0MTRfMjMw/MDAxNzc2MTY1NzcxMDEx._HjWTD6iYW5DLx2pXV589kpmwHQ_ACdZcIIIwKGJ2yMg.fau091Mw4WSiICuT4HOKXzj3pbE6I_8VBChLTBfSl8wg.JPEG/markus-clemens-mibjbNoS1XA-unsplash.jpg?type=w966" },
    { title: "Golden Sunshine Luxe", category: "Special", img: "https://postfiles.pstatic.net/MjAyNjA0MTRfMTA4/MDAxNzc2MTY1NzcwNTU1.A9u3ft5YkRtpPMN8X1MPhbDdrRiNbsmF6StFUmgSnPUg.NxuOcLF6gEZv5wWfb-ICLlzWTRq8lETUCLAgYRMxaZ0g.JPEG/christie-kim-0IsBu45B3T8-unsplash.jpg?type=w966" },
  ];

  return (
    <section className="py-24 bg-background-light overflow-hidden" id="gallery">
      <div className="px-6 md:px-12 mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-5xl md:text-7xl text-primary italic">Signature Collection</h2>
          <p className="text-slate-500 mt-4 font-body tracking-wider uppercase text-sm">감각적인 디자인의 라비앙 시그니처 부케</p>
        </div>
        <div className="hidden md:block">
          <button className="text-primary hover:tracking-widest transition-all font-sans text-xl uppercase tracking-wider">View All</button>
        </div>
      </div>
      
      <div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 no-scrollbar snap-x">
        {collections.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="min-w-[85vw] md:min-w-[40vw] snap-center group"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest-plus text-primary/60 mb-2 font-sans">{item.category}</p>
              <h3 className="text-3xl italic">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AtelierClasses = () => {
  const classes = [
    { title: "Hobby Class", desc: "주 1회, 4주 과정으로 꽃과 친해지는 시간입니다. 계절의 변화를 꽃으로 느껴보세요." },
    { title: "One-day Class", desc: "특별한 날, 혹은 나를 위한 선물. 단 하루 만에 완성하는 감각적인 플라워 어레인지먼트." },
    { title: "Professional Class", desc: "플로리스트를 꿈꾸는 분들을 위한 실무 테크닉과 라비앙만의 디자인 노하우 전수." },
  ];

  return (
    <section className="py-32 bg-primary text-white" id="classes">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl italic mb-6">Atelier Classes</h2>
          <div className="h-1 w-24 bg-white/30"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ backgroundColor: "#ffffff", color: "#2D4B3E" }}
              className="group bg-white/5 border border-white/10 p-10 flex flex-col justify-between aspect-square transition-all duration-500 cursor-pointer"
            >
              <div>
                <h3 className="text-3xl md:text-4xl mb-6 font-display">{item.title}</h3>
                <p className="text-white/70 group-hover:text-primary/70 font-body text-base leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex justify-between items-center mt-8">
                <span className="text-xs uppercase tracking-widest font-sans">Learn More</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <button className="border border-white px-12 py-5 font-sans tracking-widest-plus uppercase hover:bg-white hover:text-primary transition-all">
            수강 신청 문의
          </button>
        </div>
      </div>
    </section>
  );
};

const ClientStories = () => {
  const reviews = [
    { name: "김소연 님", role: "Regular Member", text: "기념일마다 찾게 되는 곳이에요. 꽃 조합이 정말 세련되고 매번 받을 때마다 감동입니다. 사장님의 감각이 최고예요!", img: "https://picsum.photos/seed/user1/100/100" },
    { name: "이지민 님", role: "One-day Class Student", text: "원데이 클래스 들었는데 친절하게 설명해주셔서 너무 좋았어요. 힐링이 필요한 주말에 최고의 선택이었습니다.", img: "https://picsum.photos/seed/user2/100/100" },
    { name: "박민정 님", role: "Gift Purchase", text: "부모님 결혼기념일 선물로 예약했는데 너무 만족스러워 하셨어요. 꽃도 정말 싱싱하고 향기가 오래가서 좋아요.", img: "https://picsum.photos/seed/user3/100/100" },
  ];

  return (
    <section className="py-32 px-6 bg-slate-50" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl text-primary italic mb-6">Client Stories</h2>
          <div className="flex justify-center gap-2 text-primary">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative p-12 bg-white border-l-4 border-primary shadow-sm"
            >
              <div className="flex items-center gap-6 mb-8">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-16 h-16 rounded-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-display text-xl tracking-wider">{review.name}</p>
                  <p className="text-xs uppercase tracking-widest font-sans text-primary/60">{review.role}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed italic font-body text-lg">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  const feeds = [
    "https://images.unsplash.com/photo-1583780544671-000a728c2789?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1645788933386-bea42ef84147?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1615654673360-29898e4f857f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720785609641-9d739c0ddf6b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl italic text-primary">Follow @lavie_en_flower</h2>
          <div className="hidden md:block h-px bg-slate-200 flex-grow mx-10"></div>
          <Instagram className="text-primary" size={24} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {feeds.map((url, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-slate-100">
              <img 
                src={url} 
                alt="Instagram post" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6 bg-accent/20 border-t border-primary/10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl md:text-8xl italic text-primary mb-10 leading-tight">
          특별한 꽃선물,<br />미리 예약하세요
        </h2>
        <p className="text-slate-600 mb-16 text-xl font-body">
          라비앙플라워는 모든 주문을 예약제로 진행하여 최고의 퀄리티를 보장합니다.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#" 
            className="w-full md:w-auto bg-[#FEE500] text-[#3C1E1E] px-14 py-6 font-sans tracking-widest uppercase flex items-center justify-center gap-3 hover:shadow-xl transition-all"
          >
            <MessageCircle size={24} />
            카카오톡 문의하기
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="tel:02-1234-5678" 
            className="w-full md:w-auto border-2 border-primary text-primary px-14 py-6 font-sans tracking-widest uppercase hover:bg-primary hover:text-white transition-all"
          >
            <Phone size={24} className="mr-2 inline" />
            전화 주문하기
          </motion.a>
        </div>
        <p className="mt-12 text-sm uppercase tracking-widest-plus text-slate-400 font-sans">
          지금 꽃을 선물해보세요 — Shop hours: 10:00 AM - 08:00 PM
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-24 px-6 md:px-12 border-t border-slate-200">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-md">
          <h3 className="text-4xl font-display tracking-widest-plus text-primary mb-8">LA VIE EN FLOWER</h3>
          <div className="text-sm text-slate-500 font-body space-y-4 leading-relaxed uppercase tracking-wider">
            <p>대표: 김라비 | 사업자등록번호: 000-00-00000</p>
            <p>서울특별시 강남구 꽃길 123, 1층</p>
            <p>Contact: 02-1234-5678 | lavie@flower.com</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-20 md:gap-40">
          <div>
            <h4 className="text-primary font-sans text-xs mb-8 uppercase tracking-widest-plus">Navigation</h4>
            <ul className="text-sm text-slate-500 font-body space-y-5 uppercase tracking-widest">
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Classes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-sans text-xs mb-8 uppercase tracking-widest-plus">Social Presence</h4>
            <ul className="text-sm text-slate-500 font-body space-y-5 uppercase tracking-widest">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Naver Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-full mx-auto mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 uppercase tracking-widest-plus gap-6">
        <p>© 2024 La Vie En Flower. All Rights Reserved.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <SignatureCollection />
        <AtelierClasses />
        <ClientStories />
        <InstagramFeed />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
