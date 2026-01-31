import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, ShoppingBag, ChevronLeft, ChevronRight, Sparkles, Heart, Star, ArrowRight } from "lucide-react";
import JamuLogo from '@/assets/jamu-logo.png';
import JamuBackground from '@/assets/jamu-background.jpg';
import JamuAssets1 from '@/assets/jamu-assets1.jpeg';
import JamuAssets2 from '@/assets/jamu-assets2.jpeg';
import JamuAssets3 from '@/assets/jamu-assets3.jpeg';
import ProductSection from './sections/product';

// Types
interface JamuProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  deletedAt?: string | null;
  benefits?: string[];
  popular?: boolean;
}

const PRODUCTS: JamuProduct[] = [
  { 
    id: 1, 
    name: "JAMU MASUK ANGIN", 
    description: "Terbuat dari bahan alami seperti kunyit, jahe, temulawak, serta rempah-rempah lain yang sudah dipercaya secara turun-temurun.", 
    image: "https://images.unsplash.com/photo-1563483772248-3b1a276823f6?auto=format&fit=crop&q=80&w=400", 
    category: "masuk-angin", 
    deletedAt: null,
    benefits: ["Menghangatkan tubuh", "Melancarkan peredaran darah"],
    popular: true
  },
  { 
    id: 2, 
    name: "JAMU BATUK", 
    description: "Membantu mengencerkan dahak dan melegakan tenggorokan serta pernafasan secara alami dengan bahan herbal pilihan.", 
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&q=80&w=400", 
    category: "batuk", 
    deletedAt: null,
    benefits: ["Melegakan tenggorokan", "Mengencerkan dahak"],
    popular: true
  },
  { 
    id: 3, 
    name: "JAMU FLU", 
    description: "Perpaduan rempah pilihan untuk meningkatkan imun tubuh, dibuat dari temulawak pilihan yang kaya manfaat.", 
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400", 
    category: "flu", 
    deletedAt: null,
    benefits: ["Meningkatkan imun", "Meredakan gejala flu"]
  },
  { 
    id: 4, 
    name: "JAMU NYERI SENDI", 
    description: "Solusi alami untuk nyeri sendi, dibuat dari kunyit dan jahe yang sudah terbukti efektif.", 
    image: "https://images.unsplash.com/photo-1596040033229-a0b5b6c7e1f5?auto=format&fit=crop&q=80&w=400", 
    category: "pegal-linu", 
    deletedAt: null,
    benefits: ["Meredakan nyeri", "Mengurangi peradangan"]
  },
  { 
    id: 5, 
    name: "JAMU SAKIT KEPALA", 
    description: "Meredakan sakit kepala dengan bahan alami seperti jahe merah dan temulawak pilihan.", 
    image: "https://images.unsplash.com/photo-1609692814858-951d5ebe8ff9?auto=format&fit=crop&q=80&w=400", 
    category: "sakit-kepala", 
    deletedAt: null,
    benefits: ["Meredakan sakit kepala", "Menenangkan pikiran"]
  },
  { 
    id: 6, 
    name: "JAMU BADAN LEMAS", 
    description: "Mengembalikan stamina dan energi tubuh dengan kombinasi rempah-rempah berkhasiat.", 
    image: "https://images.unsplash.com/photo-1582735689627-c6c8d609ca8e?auto=format&fit=crop&q=80&w=400", 
    category: "pegal-linu", 
    deletedAt: null,
    benefits: ["Mengembalikan stamina", "Meningkatkan energi"],
    popular: true
  },
];

const CAROUSEL_IMAGES = [
  JamuAssets1,
  JamuAssets2,
  JamuAssets3,
  JamuAssets1,
];

const TESTIMONIALS = [
  { name: "Ibu Siti", text: "Jamu batuknya sangat membantu! Anak saya cepat sembuh.", rating: 5 },
  { name: "Pak Budi", text: "Harga terjangkau dan kualitas terjamin. Recommended!", rating: 5 },
  { name: "Ibu Rina", text: "Jamu tradisional yang benar-benar berkhasiat.", rating: 5 },
];

export default function JamuLandingPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  // Helper function to get previous, current, and next indices
  const getPrevIndex = () => (currentSlide - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length;
  const getNextIndex = () => (currentSlide + 1) % CAROUSEL_IMAGES.length;

  return (
    <div className="bg-[#FAF8F3] min-h-screen font-sans text-[#3D2817] overflow-x-hidden">
      
      {/* NAVIGATION with scroll effect */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-[#3D2817] shadow-lg py-3' 
          : 'bg-gradient-to-b from-black/60 to-transparent py-4'
      } px-6`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img 
              src={JamuLogo} 
              alt="Jamu Logo" 
              className={`transition-all duration-300 ${
                scrollY > 50 ? 'w-24 md:w-28' : 'w-32 md:w-40'
              }`} 
            />
          </div>
          <div className="hidden md:flex gap-6 text-white/90 text-sm font-medium">
            <a href="#home" className="font-poppins hover:text-[#FF8C42] transition-colors duration-300 hover:scale-105 transform">BERANDA</a>
            <a href="#about" className="font-poppins hover:text-[#FF8C42] transition-colors duration-300 hover:scale-105 transform">TENTANG</a>
            <a href="/products" className="font-poppins hover:text-[#FF8C42] transition-colors duration-300 hover:scale-105 transform">PRODUK KAMI</a>
            <a href="#gallery" className="font-poppins hover:text-[#FF8C42] transition-colors duration-300 hover:scale-105 transform">GALERI</a>
          </div>
        </div>
      </nav>

    {/* HERO SECTION with parallax - SEKARANG FULL VIEW */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <img 
            src={JamuBackground}
            alt="Herbal Background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient - Gelap di bawah biar teks putih kebaca */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#f87108]" />
        </div>

        <div className={`relative z-10 text-white max-w-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Sparkles className="inline w-4 h-4 mr-2 text-[#FF8C42]" />
            <span className="font-poppins text-sm font-semibold uppercase tracking-widest">100% Bahan Alami</span>
          </div>
          <h1 className="font-yusei text-5xl md:text-6xl mb-6 font-black leading-tight">
            Jamu Sehat dari Dapur<br />Kami untuk Keluarga Anda
          </h1>
          <p className="font-poppins text-lg md:text-xl mb-10 opacity-90 font-light max-w-2xl mx-auto">
            Minuman tradisi yang menyehatkan, dibuat dengan cinta dan rempah pilihan
          </p>
          <div className="font-poppins flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-[#D97706] hover:bg-[#B45309] text-white rounded-md px-10 py-7 text-lg font-bold transition-all hover:scale-105 shadow-xl group">
              CEK PRODUK KAMI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-md px-10 py-7 text-lg font-bold transition-all hover:scale-105">
              PELAJARI LEBIH LANJUT
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - SEKARANG DI BAWAH (TANPA NEGATIVE MARGIN) */}
      <section className="py-24 bg-[#FDFBF7] relative z-10">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <CheckCircle className="text-[#D97706] w-12 h-12" />, title: "HARGA BERSAHABAT", desc: "Produk berkualitas dengan harga yang terjangkau untuk keluarga Indonesia." },
            { icon: <Leaf className="text-[#D97706] w-12 h-12" />, title: "BAHAN ALAMI", desc: "Dibuat dari rempah-rempah pilihan tanpa bahan kimia berbahaya." },
            { icon: <ShoppingBag className="text-[#D97706] w-12 h-12" />, title: "VARIAN LENGKAP", desc: "Tersedia berbagai jenis jamu untuk berbagai keluhan kesehatan." },
          ].map((feat, i) => (
            <div 
              key={i} 
              className="text-center flex flex-col items-center p-8 rounded-2xl bg-white border border-[#E8DCC8] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="mb-6 p-5 rounded-2xl bg-[#FDFBF7] group-hover:bg-[#D97706]/10 transition-colors">
                {feat.icon}
              </div>
              <h3 className="font-black text-[#3D2817] mb-4 text-xl tracking-tight uppercase">{feat.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION - REINVENTED */}
      <section id="about" className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            
            {/* Sisi Gambar - Pake bingkai estetik */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={JamuBackground} // Pake image yang sama atau image proses pembuatan
                  alt="Traditional Jamu Process" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Dekorasi Aksen di belakang gambar */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#E8DCC8] rounded-3xl -z-0" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#D97706]/10 rounded-full blur-2xl" />
            </div>

            {/* Sisi Teks - Dibuat lebih clean & berkelas */}
            <div className="w-full md:w-1/2 text-left">
              <span className="text-[#D97706] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                Warisan Nusantara
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#3D2817] mb-8 leading-tight uppercase">
                Melestarikan Tradisi <br/>Lewat <span className="text-[#8B4513]">Satu Botol</span>
              </h2>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Kami adalah UMKM lokal yang mendedikasikan diri untuk melestarikan minuman tradisional warisan nusantara. 
                  Bukan sekadar jamu, tapi sebuah komitmen untuk membawa resep leluhur ke gaya hidup modern.
                </p>
                <p>
                  Dengan bahan-bahan alami seperti kunyit, jahe, dan temulawak pilihan, kami percaya bahwa kesehatan harus bisa 
                  dinikmati dengan cara yang simpel, murah, dan sudah pasti aman dikonsumsi.
                </p>
              </div>

              {/* Badges Bahan - Dibuat Minimalis */}
              <div className="flex flex-wrap gap-3 mt-10">
                {['Kunyit Pilihan', 'Jahe Merah', 'Temulawak', 'Tanpa Pengawet'].map((ingredient, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#FDFBF7] border border-[#E8DCC8] rounded-lg text-[#8B4513] text-sm font-bold uppercase tracking-tighter">
                    <div className="w-1.5 h-1.5 bg-[#D97706] rounded-full" />
                    {ingredient}
                  </div>
                ))}
              </div>

              <div className="mt-12">
                 <button className="text-[#8B4513] font-black uppercase tracking-widest border-b-2 border-[#8B4513] pb-1 hover:text-[#D97706] hover:border-[#D97706] transition-all">
                   Baca Sejarah Jamu &rarr;
                 </button>
              </div>
            </div>

          </div>
        </div>
      </section>

       {/* COMPLAINT/FILTER SECTION - NEW DESIGN */}
      <section className="py-32 bg-gradient-to-br from-[#C17A4A] via-[#B8673D] to-[#A85A35] text-white text-center px-4 relative overflow-hidden">
        
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#8B4513] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#6B3410] rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-16 uppercase tracking-wide leading-tight">
            APA KELUHAN<br/>KESEHATAN ANDA?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              { id: 'masuk-angin', label: 'Masuk Angin' },
              { id: 'batuk', label: 'Batuk' },
              { id: 'flu', label: 'Flu' },
              { id: 'nyeri-sendi', label: 'Nyeri Sendi' },
              { id: 'sakit-kepala', label: 'Sakit Kepala' },
              { id: 'badan-lemas', label: 'Badan Lemas' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`font-poppins py-4 md:py-5 px-6 md:px-8 rounded-xl text-base md:text-lg font-semibold border-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  activeFilter === cat.id 
                    ? 'bg-[#8B4513] border-[#6B3410] text-white shadow-2xl scale-105' 
                    : 'bg-[#7A4020] border-[#5D2F17] text-white/95 hover:bg-[#8B4513] hover:border-[#6B3410]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CAROUSEL SECTION */}
<section id="gallery" className="py-20 px-4 bg-[#E8DCC8] relative overflow-hidden">
  {/* Dekorasi Atas Solid */}
  <div className="absolute top-0 left-0 right-0 h-16 bg-[#5D4037]/10"></div>
  
  <div className="max-w-7xl mx-auto text-center relative">
    <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#8B4513] mb-3 uppercase tracking-wider">
      NO SHORTCUTS
    </h2>
    <p className="font-sans text-[#8B4513]/80 text-lg md:text-xl mb-16 italic">
      Just authentic, natural jamu.
    </p>
    
    <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
      
      {/* Navigasi Kiri - Flat */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 lg:left-16 z-30 bg-[#D97706] hover:bg-[#B45309] text-white p-4 rounded-md transition-colors"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Container Gambar */}
      <div className="relative w-full max-w-5xl mx-auto px-10 md:px-32">
        
        {/* Gambar Kiri (Samping) - Radius diperdalam */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <div 
            key={`prev-${currentSlide}`}
            className="w-40 h-56 lg:w-60 lg:h-80 rounded-3xl overflow-hidden opacity-30 scale-90 transition-all duration-700"
          >
            <img 
              src={CAROUSEL_IMAGES[getPrevIndex()]} 
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        {/* Gambar Tengah (Fokus) - Radius diperdalam */}
        <div className="relative z-20 mx-auto">
          <div 
            key={`curr-${currentSlide}`}
            className="w-64 h-80 md:w-80 md:h-[400px] lg:w-[450px] lg:h-[500px] rounded-3xl overflow-hidden mx-auto animate-in fade-in slide-in-from-right-10 duration-700"
          >
            <img 
              src={CAROUSEL_IMAGES[currentSlide]} 
              className="w-full h-full object-cover"
              alt="Current Product"
            />
          </div>
        </div>

        {/* Gambar Kanan (Samping) - Radius diperdalam */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <div 
            key={`next-${currentSlide}`}
            className="w-40 h-56 lg:w-60 lg:h-80 rounded-3xl overflow-hidden opacity-30 scale-90 transition-all duration-700"
          >
            <img 
              src={CAROUSEL_IMAGES[getNextIndex()]} 
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

      </div>

      {/* Navigasi Kanan - Flat */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 lg:right-16 z-30 bg-[#D97706] hover:bg-[#B45309] text-white p-4 rounded-md transition-colors"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

    </div>

    <div className="mt-16">
      <Button className="bg-[#D97706] hover:bg-[#B45309] text-white rounded-md px-10 py-6 text-lg font-bold transition-colors uppercase tracking-widest">
        COBA PRODUK KAMI
      </Button>
    </div>
  </div>
</section>

      
      {/* CTA SECTION */}
      <section className="py-20 px-4 bg-[#E67A35] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Mencoba Jamu Kami?</h2>
          <p className="text-lg mb-8 opacity-90">
            Dapatkan kesehatan alami dengan harga terjangkau. Pesan sekarang dan rasakan khasiatnya!
          </p>
          <Button className="bg-white text-[#FF8C42] hover:bg-gray-100 rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 transform">
            HUBUNGI KAMI SEKARANG
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2D1C0F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={JamuLogo} alt="Jamu Logo" className="w-40 mb-6 hover:scale-105 transition-transform duration-300" />
              <p className="text-white/70 mb-6 leading-relaxed">
                Menjaga kesehatan keluarga Indonesia dengan warisan jamu tradisional yang autentik dan berkualitas.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Produk</h3>
              <ul className="space-y-3">
                {PRODUCTS.slice(0, 4).map((product) => (
                  <li key={product.id}>
                    <a href="#" className="text-white/70 hover:text-[#FF8C42] transition-colors">
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Tautan</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-white/70 hover:text-[#FF8C42] transition-colors">Beranda</a></li>
                <li><a href="#about" className="text-white/70 hover:text-[#FF8C42] transition-colors">Tentang Kami</a></li>
                <li><a href="#products" className="text-white/70 hover:text-[#FF8C42] transition-colors">Produk</a></li>
                <li><a href="#testimonials" className="text-white/70 hover:text-[#FF8C42] transition-colors">Testimoni</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Kontak</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#FF8C42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  Jl. Jamu Sehat No. 123, Jakarta
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#FF8C42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  (021) 1234-5678
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#FF8C42]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  info@jamusehat.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <div className="flex justify-center gap-6 mb-6">
              {['Instagram', 'WhatsApp', 'Facebook', 'TikTok'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-white/70 hover:text-[#FF8C42] transition-colors hover:scale-110 transform"
                >
                  {social}
                </a>
              ))}
            </div>
            <div className="text-sm text-white/50">
              © {new Date().getFullYear()} Jamu! copyright all rights reserved.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}