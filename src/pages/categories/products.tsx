import { mockCategories } from "@/lib/mockData";
import { getProductsByCategory, type Product } from "@/types/product";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export default function ProductsPage() {
  const { id } = useParams();

  const [category, setCategory] = useState(
    mockCategories.find((c) => c.id == Number(id)),
  );

  if (category?.id == null) return <Navigate to={"/404"} />;

  const [products, setProducts] = useState<Product[]>(
    getProductsByCategory(Number(id)),
  );

  return (
    <>
      <div className="w-full">
        <div className="bg-[#963F16] py-4">
          <div className="lg:max-w-7xl mx-auto">
            <h1>Untuk kamu yang mengalami</h1>
          </div>
        </div>
      </div>
    </>
  );
}
