import "./Cart.css";

import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

function ArticulosCarrito({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> ${price}
      </div>

      <footer>
        <small>Cant : {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckBoxID = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label htmlFor={cartCheckBoxID} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxID} hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <ArticulosCarrito
              key={product.id}
              addToCart={() => addToCart(product)} //Aqui le enviamos el metodo
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
