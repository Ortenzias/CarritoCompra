import { createContext, useReducer } from "react";
import { cartEstadoInicial, cartReducer } from "../reducers/cart";

// 1. Crear Contexto
export const CartContext = createContext();

function useCartReducer() {
  //El Dispatch es la que le va a enviar los estados al reducer
  const [state, dispatch] = useReducer(cartReducer, cartEstadoInicial);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_TO_CART",
      payload: product,
    });

  //En este caso no le enviamos el payload, no es necesario
  const clearCart = () =>
    dispatch({
      type: "CLEAR_CART",
    });

  return { state, addToCart, removeFromCart, clearCart };
}

// 2. Crear Provider
// La dependencia de usar ReactContext es minima
export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
