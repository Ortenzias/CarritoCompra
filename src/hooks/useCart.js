import { useContext } from "react";
import { CartContext } from "../context/cart";

//Ahora vamos a crear un hook para leer el contexto
export const useCart = () => {
  const cart = useContext(CartContext);

  //Una de las practicas que se suele hacer en los custome hooks que consumen Contexto y que es una buena practica es saber si es undefine porque puede significar que tenga un error
  if (cart == undefined) {
    throw new Error("Estas usando este useCart en un sitio donde no puedes")
  }

  return cart;
};
