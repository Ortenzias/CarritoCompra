import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  //Esto es para ver el producto que vamos a añadir, si ya lo tiene el carrito comparandolo con la id. Devuelve true o false
  const verProductoEnCarro = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          //Esto se hará para la visualizacion del carro
          const esProductoEnCarrito = verProductoEnCarro(product);

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button style={{ backgroundColor: esProductoEnCarrito ? "red" : "#09f" }}
                  onClick={() => {
                    esProductoEnCarrito
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {esProductoEnCarrito ? (
                    <RemoveFromCartIcon />
                  ) : (
                    <AddToCartIcon />
                  )}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
