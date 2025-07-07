import "./cart-styles.css";

import { useMemo, useState } from "react";
import cartImg from "../assets/cart.svg";
import { useCart } from "./CartContext";

export default function ShoppingCart() {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const getTotalNumberOfUnits = useMemo(() => {
    let counter = 0;
    cartItems.forEach((item) => (counter += item.units));
    return counter;
  }, [cartItems]);

  const getSumPrice = useMemo(() => {
    let accumulator = 0;
    cartItems.forEach((item) => (accumulator += item.units * item.price));
    return accumulator;
  }, [cartItems]);

  return (
    <div className="shopping-cart">
      <div
        className="shopping-cart-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {cartItems.length !== 0 && (
          <span className="shopping-cart-toggle__unit-badge">
            {getTotalNumberOfUnits}
          </span>
        )}
        <img src={cartImg} alt="Shopping Cart" />
        <span>Shopping Cart</span>
      </div>

      {isOpen && (
        <div className="shopping-cart-dropdown">
          {cartItems.length !== 0 ? (
            <>
              <span className="shopping-cart-dropdown__title-text">
                You have {getTotalNumberOfUnits} item
                {getTotalNumberOfUnits > 1 && "s"} in your cart!
              </span>
              <hr className="divider" />
              <div className="shopping-cart-price-grid">
                <span className="shopping-cart-price-grid__left-col heavy-font">
                  Items
                </span>
                <span className="shopping-cart-price-grid__middle-col heavy-font">
                  Units
                </span>
                <span className="shopping-cart-price-grid__right-col heavy-font">
                  Price
                </span>
              </div>
              {cartItems.map((item) => (
                <div key={item.name} className="shopping-cart-price-grid">
                  <span className="shopping-cart-price-grid__left-col data-font">
                    {item.name}
                  </span>
                  <span className="shopping-cart-price-grid__middle-col data-font">
                    {item.units}
                  </span>
                  <span className="shopping-cart-price-grid__right-col data-font">
                    £{item.price * item.units}
                  </span>
                </div>
              ))}
              <hr className="divider divider--thick" />
              <div className="space-between">
                <b>Total Order Value</b>
                <b>£{getSumPrice}</b>
              </div>
              <hr className="divider divider--thin" />
              <button className="button">Checkout</button>
            </>
          ) : (
            <span className="shopping-cart-dropdown__title-text">
              Your cart is empty!
            </span>
          )}
        </div>
      )}
    </div>
  );
}
