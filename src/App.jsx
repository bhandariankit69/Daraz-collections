import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import ProductDetails from "./page/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;