import { Card, CardContent } from "@/components/ui/card";
import { mockCategories } from "@/lib/mockData";
import type { Category } from "@/types/category";
import { Button } from "@base-ui/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CategoriesSection() {
  const [category, setCategories] = useState<Category[]>(mockCategories);

  return (
    <>
      {/* PRODUCT LIST with enhanced cards */}
      <section
        id="category"
        className="py-24 md:max-w-4xl lg:max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#6B4423] mb-4 uppercase tracking-wide">
            KATEGORI TERBAIK
          </h2>
          <p className="text-xl text-gray-600 font-yusei">
            Karena satu masalah, butuh satu jamu yang pas.
          </p>
        </div>

        {/* Map category untuk render multiple cards */}
        {category.map((category, idx) => (
          <div
            className={`flex w-full ${idx % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}>
            <Card
              key={category.id}
              className="overflow-hidden border-none bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl group transform hover:-translate-y-2 mb-8 mx-4 xl:mx-0 w-full lg:max-w-5xl">
              <CardContent className="p-0 px-4 flex flex-col md:flex-row items-stretch relative">
                <div className="w-full md:w-2/5 h-64 md:h-80 relative overflow-hidden rounded-2xl">
                  <img
                    src={category.picture_url}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 rounded-2xl hover:rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#3D2817] mb-4 tracking-wide group-hover:text-[#FF8C42] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div>
                    <Button className="bg-[#6B4423] hover:bg-[#FF8C42] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 transform group/btn flex items-center">
                      LIHAT PRODUK
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>
    </>
  );
}
