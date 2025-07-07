import { PRODUCT_DATA } from "./product-data";
import "./product-styles.css";

import ProductCard from "./ProductCard";

export default function ProductListing() {
  return (
    <div className="product-listing">
      {PRODUCT_DATA.products.map((productData) => (
        <ProductCard productData={productData} key={productData.name} />
      ))}
    </div>
  );
}
