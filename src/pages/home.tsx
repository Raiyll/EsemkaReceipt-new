import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

// Types
interface JamuProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  deletedAt?: string | null; // Support soft deletes di frontend
}

const PRODUCTS: JamuProduct[] = [
  { id: 1, name: "JAMU MASUK ANGIN", description: "Jamu herbal alami yang membantu meredakan gejala masuk angin, mual, dan perut kembung.", image: "https://images.unsplash.com/photo-1563483772248-3b1a276823f6?auto=format&fit=crop&q=80&w=400", category: "masuk-angin", deletedAt: null },
  { id: 2, name: "JAMU BATUK", description: "Membantu mengencerkan dahak dan melegakan tenggorokan serta pernafasan secara alami.", image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&q=80&w=400", category: "batuk", deletedAt: null },
  { id: 3, name: "JAMU FLU", description: "Perpaduan rempah pilihan untuk meningkatkan imun tubuh dan meredakan gejala flu.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400", category: "flu", deletedAt: null },
];

export default function JamuLandingPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Logic filter produk & soft delete
  const displayedProducts = PRODUCTS.filter(p => 
    (activeFilter === 'all' || p.category === activeFilter) && !p.deletedAt
  );

  return (
    <div className="bg-[#FAF3E0] min-h-screen font-sans text-[#4A2C2A]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=1600" 
            alt="Herbal Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Jamu Sehat dari Dapur Kami untuk Keluarga Anda
          </h1>
          <Button className="bg-[#D97706] hover:bg-[#B45309] text-white rounded-full px-8 py-6 text-lg font-semibold">
            CEK PRODUK KELUARGA
          </Button>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-16 bg-white grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto -mt-10 relative z-20 rounded-xl shadow-xl">
        {[
          { icon: <CheckCircle className="text-[#D97706] w-10 h-10" />, title: "HARGA BERSAHABAT", desc: "Produk berkualitas dengan harga yang terjangkau bagi semua." },
          { icon: <Leaf className="text-[#D97706] w-10 h-10" />, title: "BAHAN ALAMI", desc: "Dibuat dari rempah pilihan tanpa bahan kimia berbahaya." },
          { icon: <ShoppingBag className="text-[#D97706] w-10 h-10" />, title: "VARIAN LENGKAP", desc: "Tersedia berbagai macam jamu untuk segala keluhan." },
        ].map((feat, i) => (
          <div key={i} className="text-center flex flex-col items-center p-4">
            {feat.icon}
            <h3 className="font-bold mt-4 mb-2">{feat.title}</h3>
            <p className="text-sm text-gray-600">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#D97706] mb-8">SEKILAS TENTANG KAMI</h2>
        <div className="bg-[#78350F] text-white p-8 md:p-12 rounded-2xl max-w-4xl mx-auto leading-relaxed">
          <p>
            Kami adalah UMKM lokal yang mendedikasikan diri untuk melestarikan minuman tradisional warisan nusantara. 
            Dengan bahan-bahan alami seperti kunyit, jahe, dan temulawak pilihan, kami percaya bahwa kesehatan harus bisa 
            dinikmati dengan cara yang simpel, murah, dan sudah pasti aman dikonsumsi.
          </p>
        </div>
      </section>

      {/* 4. COMPLAINT/FILTER SECTION */}
      <section className="py-16 bg-[#4A2C2A] text-white text-center px-4">
        <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">Apa Keluhan Kesehatan Anda?</h2>
        <p className="mb-8 opacity-80">Pilih gejala yang Anda alami untuk saran jamu yang tepat</p>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {['masuk-angin', 'batuk', 'flu', 'sakit-kepala', 'pegal-linu', 'asam-lambung'].map((cat) => (
            <Button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`border-none ${activeFilter === cat ? 'bg-[#D97706]' : 'bg-[#5D3A37] hover:bg-[#6D4A47]'} uppercase text-xs`}
            >
              {cat.replace('-', ' ')}
            </Button>
          ))}
          <Button variant="ghost" onClick={() => setActiveFilter('all')} className="text-xs">RESET</Button>
        </div>
      </section>

      {/* 5. PRODUCT LIST */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4A2C2A] mb-2 uppercase">Produk Kami</h2>
          <p className="italic text-gray-500">Karena satu masalah, butuh satu jamu yang pas.</p>
        </div>

        <div className="space-y-8">
          {displayedProducts.length > 0 ? displayedProducts.map((prod) => (
            <Card key={prod.id} className="overflow-hidden border-none bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-64 h-48">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-[#4A2C2A] mb-2">{prod.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{prod.description}</p>
                  <Button className="bg-[#4A2C2A] hover:bg-[#2D1A19] text-white px-6">
                    LIHAT PRODUK
                  </Button>
                </div>
              </CardContent>
            </Card>
          )) : (
            <p className="text-center py-10 opacity-50 italic">Produk tidak tersedia untuk keluhan ini.</p>
          )}
        </div>
      </section>

    </div>
  );
}