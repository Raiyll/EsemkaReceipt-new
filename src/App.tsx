import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import { ComponentExample } from "@/components/component-example";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<ComponentExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
