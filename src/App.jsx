import "./App.css";

import ProductListing from "./products/ProductListing";
import ShoppingCart from "./cart/ShoppingCart";

export default function App() {
  return (
    <main className="main">
      <div className="header">
        <div className="hallo-world heavy-font">HALLO WORLD</div>
        <ShoppingCart />
      </div>
      <h1>Fingertips Store</h1>
      <ProductListing />
    </main>
  );
}
