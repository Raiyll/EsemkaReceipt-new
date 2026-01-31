import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Leaf,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Star,
  ArrowRight,
} from "lucide-react";
import JamuLogo from "@/assets/jamu-logo.png";
import JamuBackground from "@/assets/jamu-background.jpg";
import JamuAssets1 from "@/assets/jamu-assets1.jpeg";
import JamuAssets2 from "@/assets/jamu-assets2.jpeg";
import ProductSection from "./sections/product";

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
    description:
      "Terbuat dari bahan alami seperti kunyit, jahe, temulawak, serta rempah-rempah lain yang sudah dipercaya secara turun-temurun.",
    image:
      "https://images.unsplash.com/photo-1563483772248-3b1a276823f6?auto=format&fit=crop&q=80&w=400",
    category: "masuk-angin",
    deletedAt: null,
    benefits: ["Menghangatkan tubuh", "Melancarkan peredaran darah"],
    popular: true,
  },
  {
    id: 2,
    name: "JAMU BATUK",
    description:
      "Membantu mengencerkan dahak dan melegakan tenggorokan serta pernafasan secara alami dengan bahan herbal pilihan.",
    image:
      "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&q=80&w=400",
    category: "batuk",
    deletedAt: null,
    benefits: ["Melegakan tenggorokan", "Mengencerkan dahak"],
    popular: true,
  },
  {
    id: 3,
    name: "JAMU FLU",
    description:
      "Perpaduan rempah pilihan untuk meningkatkan imun tubuh, dibuat dari temulawak pilihan yang kaya manfaat.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400",
    category: "flu",
    deletedAt: null,
    benefits: ["Meningkatkan imun", "Meredakan gejala flu"],
  },
  {
    id: 4,
    name: "JAMU NYERI SENDI",
    description:
      "Solusi alami untuk nyeri sendi, dibuat dari kunyit dan jahe yang sudah terbukti efektif.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a0b5b6c7e1f5?auto=format&fit=crop&q=80&w=400",
    category: "pegal-linu",
    deletedAt: null,
    benefits: ["Meredakan nyeri", "Mengurangi peradangan"],
  },
  {
    id: 5,
    name: "JAMU SAKIT KEPALA",
    description:
      "Meredakan sakit kepala dengan bahan alami seperti jahe merah dan temulawak pilihan.",
    image:
      "https://images.unsplash.com/photo-1609692814858-951d5ebe8ff9?auto=format&fit=crop&q=80&w=400",
    category: "sakit-kepala",
    deletedAt: null,
    benefits: ["Meredakan sakit kepala", "Menenangkan pikiran"],
  },
  {
    id: 6,
    name: "JAMU BADAN LEMAS",
    description:
      "Mengembalikan stamina dan energi tubuh dengan kombinasi rempah-rempah berkhasiat.",
    image:
      "https://images.unsplash.com/photo-1582735689627-c6c8d609ca8e?auto=format&fit=crop&q=80&w=400",
    category: "pegal-linu",
    deletedAt: null,
    benefits: ["Mengembalikan stamina", "Meningkatkan energi"],
    popular: true,
  },
];

const CAROUSEL_IMAGES = [
  JamuAssets1,
  JamuAssets2,
  "https://images.unsplash.com/photo-1609692814858-951d5ebe8ff9?auto=format&fit=crop&q=80&w=800",
];

const TESTIMONIALS = [
  {
    name: "Ibu Siti",
    text: "Jamu batuknya sangat membantu! Anak saya cepat sembuh.",
    rating: 5,
  },
  {
    name: "Pak Budi",
    text: "Harga terjangkau dan kualitas terjamin. Recommended!",
    rating: 5,
  },
  {
    name: "Ibu Rina",
    text: "Jamu tradisional yang benar-benar berkhasiat.",
    rating: 5,
  },
];

export default function JamuLandingPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
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
    setCurrentSlide(
      (prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length,
    );
  };

  return (
    <div className="bg-[#FAF8F3] min-h-screen font-sans text-[#3D2817] overflow-x-hidden">
      {/* NAVIGATION with scroll effect */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ?
            "bg-[#3D2817] shadow-lg py-3"
          : "bg-gradient-to-b from-black/60 to-transparent py-4"
        } px-6`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src={JamuLogo}
              alt="Jamu Logo"
              className={`transition-all duration-300 ${
                scrollY > 50 ? "w-24 md:w-28" : "w-32 md:w-40"
              }`}
            />
          </div>
          <div className="hidden md:flex gap-6 text-white/90 text-sm font-medium">
            <a
              href="#home"
              className="hover:text-[#FF8C42] transition-colors duration-300 hover:scale-105 transform">
              BERANDA
            </a>
            <a
              href="#about"
              className="hover:text-[#FF8C42] transition-colors duration-300 hover:scale-105 transform">
              TENTANG
            </a>
            <a
              href="#products"
              className="hover:text-[#FF8C42] transition-colors duration-300 hover:scale-105 transform">
              PRODUK KAMI
            </a>
            <a
              href="#gallery"
              className="hover:text-[#FF8C42] transition-colors duration-300 hover:scale-105 transform">
              GALERI
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION with parallax */}
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <img
            src={JamuBackground}
            alt="Herbal Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Floating particles effect */}
        {/* <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full animate-float"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div> */}

        <div
          className={`relative z-10 text-white max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="inline-block mb-4 px-4 py-2 bg-[#FF8C42]/20 backdrop-blur-sm rounded-full border border-[#FF8C42]/30">
            <Sparkles className="inline w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">100% Bahan Alami</span>
          </div>
          <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
            Jamu Sehat dari Dapur
            <br />
            Kami untuk Keluarga Anda
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 font-light">
            Minuman tradisi yang menyehatkan, dibuat dengan cinta dan rempah
            pilihan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF8C42] hover:bg-[#E67A35] text-white rounded-full px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 transform group">
              CEK PRODUK KAMI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 rounded-full px-10 py-6 text-base font-semibold transition-all hover:scale-105 transform">
              PELAJARI LEBIH LANJUT
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION with hover effects */}
      <section className="py-16 bg-white grid grid-cols-1 md:grid-cols-3 gap-12 px-8 max-w-7xl mx-auto -mt-16 relative z-20 rounded-2xl shadow-2xl">
        {[
          {
            icon: <CheckCircle className="text-[#FF8C42] w-12 h-12" />,
            title: "HARGA BERSAHABAT",
            desc: "Produk berkualitas dengan harga yang terjangkau untuk keluarga Indonesia.",
            color: "from-orange-50 to-orange-100",
          },
          {
            icon: <Leaf className="text-[#FF8C42] w-12 h-12" />,
            title: "BAHAN ALAMI",
            desc: "Dibuat dari rempah-rempah pilihan tanpa bahan kimia berbahaya.",
            color: "from-green-50 to-green-100",
          },
          {
            icon: <ShoppingBag className="text-[#FF8C42] w-12 h-12" />,
            title: "VARIAN LENGKAP",
            desc: "Tersedia berbagai jenis jamu untuk berbagai keluhan kesehatan.",
            color: "from-amber-50 to-amber-100",
          },
        ].map((feat, i) => (
          <div
            key={i}
            className="text-center flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group">
            <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-[#FF8C42]/10 to-[#FF8C42]/5 group-hover:from-[#FF8C42]/20 group-hover:to-[#FF8C42]/10 transition-all">
              {feat.icon}
            </div>
            <h3 className="font-bold text-[#3D2817] mt-3 mb-3 text-lg tracking-wide">
              {feat.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FF8C42] to-[#E67A35]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { number: "500+", label: "Pelanggan Puas" },
            { number: "100%", label: "Bahan Alami" },
            { number: "6", label: "Varian Jamu" },
            { number: "5★", label: "Rating Rata-rata" },
          ].map((stat, i) => (
            <div
              key={i}
              className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION with animation */}
      <section
        id="about"
        className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#FF8C42] rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-[#6B4423] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="relative z-10">
          <div className="inline-block mb-4 px-6 py-2 bg-[#FF8C42]/10 rounded-full">
            <Heart className="inline w-4 h-4 mr-2 text-[#FF8C42]" />
            <span className="text-sm font-semibold text-[#FF8C42]">
              Tentang Kami
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B4423] mb-12 tracking-wide">
            SEKILAS PERJALANAN KAMI
          </h2>
          <div className="bg-gradient-to-br from-[#6B4423] to-[#5D4037] text-white p-10 md:p-16 rounded-3xl max-w-4xl mx-auto leading-relaxed shadow-2xl transform hover:scale-105 transition-all duration-300">
            <p className="text-base md:text-lg mb-6">
              Kami adalah UMKM lokal yang mendedikasikan diri untuk melestarikan
              minuman tradisional warisan nusantara. Dengan bahan-bahan alami
              seperti kunyit, jahe, dan temulawak pilihan, kami percaya bahwa
              kesehatan harus bisa dinikmati dengan cara yang simpel, murah, dan
              sudah pasti aman dikonsumsi.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                "Kunyit Pilihan",
                "Jahe Merah",
                "Temulawak",
                "Rempah Nusantara",
              ].map((ingredient, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLAINT/FILTER SECTION with improved interactivity */}
      <section className="py-20 bg-gradient-to-br from-[#5D4037] to-[#4A2C2A] text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #FF8C42 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wider">
            Apa Keluhan
            <br />
            Kesehatan Anda?
          </h2>
          <p className="mb-10 opacity-90 text-base">
            Pilih gejala yang anda alami dan
            <br />
            temukan jamu yang tepat
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { id: "masuk-angin", label: "Masuk angin", icon: "" },
              { id: "batuk", label: "Batuk", icon: "" },
              { id: "flu", label: "Flu", icon: "" },
              { id: "sakit-kepala", label: "Sakit kepala", icon: "" },
              { id: "pegal-linu", label: "Nyeri & pegal", icon: "" },
              { id: "asam-lambung", label: "Asam lambung", icon: "" },
            ].map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`border-2 transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === cat.id ?
                    "bg-[#FF8C42] border-[#FF8C42] text-white shadow-lg scale-105"
                  : "bg-[#4A352F] border-[#6B4A42] hover:bg-[#5D4037] text-white/90 hover:border-[#FF8C42]/50"
                } px-6 py-3 rounded-lg font-medium text-sm`}>
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </Button>
            ))}
          </div>
          <Button
            variant="ghost"
            onClick={() => setActiveFilter("all")}
            className="mt-6 text-white/70 hover:text-white text-sm underline hover:scale-105 transition-transform">
            Tampilkan semua produk
          </Button>
        </div>
      </section>

      {/* CAROUSEL SECTION with auto-play */}
      <section
        id="gallery"
        className="py-20 px-4 bg-gradient-to-br from-[#6B4423] to-[#5D4037]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">
            NO SHORTCUTS
          </h2>
          <p className="text-white/80 text-lg mb-12 italic">
            Just authentic, natural jamu.
          </p>

          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {CAROUSEL_IMAGES.map((img, idx) => (
                  <div key={idx} className="min-w-full">
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FF8C42] hover:bg-[#E67A35] text-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 transform">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FF8C42] hover:bg-[#E67A35] text-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110 transform">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {CAROUSEL_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === idx ?
                      "bg-[#FF8C42] w-8 h-3"
                    : "bg-white/40 w-3 h-3 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          <Button className="bg-[#FF8C42] hover:bg-[#E67A35] text-white rounded-full px-10 py-6 text-base font-semibold shadow-lg mt-10 hover:scale-105 transition-all transform group">
            LIHAT LEBIH BANYAK
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <ProductSection />

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#FAF8F3] to-[#F5F1E8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B4423] mb-12">
            APA KATA MEREKA
          </h2>
          <div className="relative h-64 flex items-center justify-center">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div
                key={idx}
                className={`absolute w-full transition-all duration-500 ${
                  currentTestimonial === idx ?
                    "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
                }`}>
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FF8C42] text-[#FF8C42]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-[#6B4423]">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentTestimonial === idx ?
                    "bg-[#FF8C42] w-8 h-3"
                  : "bg-gray-300 w-3 h-3"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FF8C42] to-[#E67A35] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Mencoba Jamu Kami?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Dapatkan kesehatan alami dengan harga terjangkau. Pesan sekarang dan
            rasakan khasiatnya!
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
              <img
                src={JamuLogo}
                alt="Jamu Logo"
                className="w-40 mb-6 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-white/70 mb-6 leading-relaxed">
                Menjaga kesehatan keluarga Indonesia dengan warisan jamu
                tradisional yang autentik dan berkualitas.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Produk</h3>
              <ul className="space-y-3">
                {PRODUCTS.slice(0, 4).map((product) => (
                  <li key={product.id}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-[#FF8C42] transition-colors">
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Tautan</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-white/70 hover:text-[#FF8C42] transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-white/70 hover:text-[#FF8C42] transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-white/70 hover:text-[#FF8C42] transition-colors">
                    Produk
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-white/70 hover:text-[#FF8C42] transition-colors">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Kontak</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-[#FF8C42]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Jl. Jamu Sehat No. 123, Jakarta
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-[#FF8C42]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (021) 1234-5678
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-[#FF8C42]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@jamusehat.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <div className="flex justify-center gap-6 mb-6">
              {["Instagram", "WhatsApp", "Facebook", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-white/70 hover:text-[#FF8C42] transition-colors hover:scale-110 transform">
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
