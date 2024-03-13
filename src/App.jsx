import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import Home from "./pages/home/home";
import { Computers } from "./pages/products/single-products";
import { SingleProduct } from "./pages/single-product/single-product";
import { lazy, Suspense } from "react";

const ShoppingCart = lazy(() => import("./pages/shopping-cart/shopping-cart"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products/:id" element={<Computers />} />
        <Route
          path="/products/cart"
          element={
            <Suspense>
              <ShoppingCart />
            </Suspense>
          }
        />
        <Route path="/products/single/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
