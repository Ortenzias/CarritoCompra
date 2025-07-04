import { Products } from "./components/Products";
///https://dummyjson.com/products
import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import "./App.css";
import { Headerr } from "./components/Headerr.jsx";
import { Footer } from "./components/Footer.jsx";
import { ES_MOD_DESARROLLO } from "./config.js";
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const varFilterProducts = filterProducts(products);

  return (
    <CartProvider>
      <Headerr />
      <Cart />
      <Products products={varFilterProducts} />
      {ES_MOD_DESARROLLO && <Footer />}
    </CartProvider>
  );
}

export default App;
