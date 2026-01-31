import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import { ComponentExample } from "@/components/component-example";
import NotFoundPage from "./pages/errors/not-found";
import ProductsPage from "./pages/categories/products";
import CategoriesSection from "./pages/sections/categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<CategoriesSection />} />
        <Route path="/categories/:id/products" element={<ProductsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
