import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { Computers } from "./pages/products/single-products";
import { ShoppingCart } from "./pages/shopping-cart/shopping-cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products/:id" element={<Computers />} />
        <Route path="/products/cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}

export default App;
