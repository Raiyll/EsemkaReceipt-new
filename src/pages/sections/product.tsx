import { Card, CardContent } from "@/components/ui/card";
import { mockProducts } from "@/lib/mockData";
import { Button } from "@base-ui/react";
import { ArrowRight, Star } from "lucide-react";
import { useState } from "react";

export default function ProductSection() {
  const [products, setProducts] = useState(mockProducts);
  return (
    <>
      {/* PRODUCT LIST with enhanced cards */}
      <section id="products" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B4423] mb-4 uppercase tracking-wide">
            PRODUK KAMI
          </h2>
          <p className="text-xl text-gray-600 italic">
            Karena satu masalah,
            <br />
            butuh satu jamu yang pas.
          </p>
        </div>

        <Card className="overflow-hidden border-none bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl group transform hover:-translate-y-2">
          <CardContent className={`p-0 flex flex-col items-stretch relative`}>
            <div className="absolute top-4 right-4 z-10 bg-[#FF8C42] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center">
              <Star className="w-4 h-4 mr-1 fill-current" />
              POPULER
            </div>
            <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
              <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#3D2817] mb-4 tracking-wide group-hover:text-[#FF8C42] transition-colors">
                Name
              </h3>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Description
              </p>

              <div>
                <Button className="bg-[#6B4423] hover:bg-[#FF8C42] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 transform group/btn">
                  LIHAT PRODUK
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
