import "./product-styles.css";

import { useCart } from "../cart/CartContext";
import HoverInfo from "./HoverInfo";

export default function ProductCard({ productData }) {
  const { addItemToCart } = useCart();
  const { name, price, imageUrl } = productData;

  return (
    <div className="product-card">
      <HoverInfo productData={productData} />
      <img src={imageUrl} alt={name} className="product-card__image margin-5" />
      <div className="margin-5">{name}</div>
      <div className="heavy-font margin-5">£{price}</div>
      <button className="button" onClick={() => addItemToCart({ name, price })}>
        Add to Cart
      </button>
    </div>
  );
}
