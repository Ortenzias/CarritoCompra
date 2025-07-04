//Esto es para guardar cosas en el local storage
export const cartEstadoInicial = JSON.parse(window.localStorage.getItem("cart")) || [];
//export const cartEstadoInicial = [];

export const TIPO_ACCIONES_CARRITO = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_TO_CART: "REMOVE_TO_CART",
  CLEAR_CART: "CLEAR_CART"
}

// Actualizar localStorage con el estado del carro
export const actualizarLocalStorage = state => {
  window.localStorage.setItem("cart", JSON.stringify(state))
}

/** Info del Reduce
 * Lo que significa reduce no es de hacerlo mas pequeño, sino como una reduccion en cocina
 * En el type es la accion que se va hacer
 * Y en el payLoad es todo el objeto que necesitamos para actualizar el estado
 */
export const cartReducer = (state, action) => {
  //Ahora cuando vayamos a buscar la id, vamos a hacerlo desde payload
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case TIPO_ACCIONES_CARRITO.ADD_TO_CART: {
      //Ahora ya no vamos a buscarlo en cart, lo buscamos de state, porque se esta pasando en el reducer
      const { id } = actionPayload;
      const productoEnCarritoId = state.findIndex((item) => item.id === id);
      

      if (productoEnCarritoId >= 0) {
        const newCart = structuredClone(state);

        newCart[productoEnCarritoId].quantity += 1;
        actualizarLocalStorage(newCart)
        return newCart;
        //return setCart(newCart); ahora se tiene que cambiar el setCart. En lugar de llamar a un metodo, tienes que devolver un nuevo estado. En vez de llamar al setCart, devolvermos el nuevo carrito osea return newCart
      }

      const newState = [
        ...state,
        {
          ...actionPayload, //este es el producto
          quantity: 1,
        },
      ];

      //Antes de hacer cualquier return, debemos de actualizar con el nuevo estado y esto lo llevamos al localStorage
      actualizarLocalStorage(newState)
      return newState
    }

    case TIPO_ACCIONES_CARRITO.REMOVE_TO_CART: {
      const { id } = actionPayload;
      const newState = state.filter(item => item.id !== id);
      actualizarLocalStorage(newState)
      return newState
      //setCart((prevState) => prevState.filter((item) => item.id !== product.id));
    }

    case TIPO_ACCIONES_CARRITO.CLEAR_CART: {
      actualizarLocalStorage([])
      return [];
    }
  }
 
  return state;
};


  //const [cart, setCart] = useState([]);

  //Supongo que no se le pone parentesis porque solo va tener un solo parametro y es valido que se escriba asi
  /* const addToCart = (product) => {
    //Se envie con los valores anteriores y luego se agrega otro producto mas
    //setCart([...cart, product]);

    /** Revisar si el producto ya esta en el carrito
     * En el carrito vamos a buscar un index,
     * yo voy a suponer que el elemento "item" es el producto que se esta reciviendo, despues supondre que el id del item sea igual algun elemento del array que se tiene en los productos
     
    const productoEnCarritoId = cart.findIndex(
      (item) => item.id === product.id
    );

    //Si se ha encontrado un id igual en el carrito, osea que si esta, asi que deberia ser mayo a 0 porque es un metodo contable... creo
    if (productoEnCarritoId >= 0) {
      //El structureClone hace copias profundas de arreglos y de los objetos, osea que aqui tendiamos un nuevo carro
      const newCart = structuredClone(cart);

      //Le aumentamos la cantidad + 1
      newCart[productoEnCarritoId].quantity += 1;
      return setCart(newCart);
    }

    //Si el producto no esta en el carrito
    /*prevState => ... es una función de actualización de estado que recibe el estado anterior (prevState) como argumento y devuelve el nuevo estado. Esto es crucial en React para evitar problemas con actualizaciones de estado asíncronas.
     *
     * ...prevState utiliza el operador spread para crear una copia del array prevState (el estado anterior del carrito). Esto es importante porque en React, debes tratar el estado como inmutable. No debes modificar directamente el estado existente, sino crear una nueva copia con los cambios.
     *
     * ...product utiliza el operador spread para crear una copia del objeto product (el producto que se está agregando al carrito).
     *
     * ¿Y porque se abren las llaves y se coloca los productos y la cantidad
     * Creación de un objeto literal
     * En JavaScript, las llaves {} se utilizan para definir un objeto literal. Un objeto literal es una colección de pares clave-valor. En este caso, estamos creando un objeto que representa un producto en el carrito, y este objeto tiene dos propiedades principales: el producto y la cantidad
     * ¿Por qué crear un objeto?
     * Estructura de datos: Un objeto nos permite agrupar múltiples valores relacionados (las propiedades del producto y su cantidad) en una sola entidad. Esto facilita el manejo de la información del producto en el carrito.
     
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };
*/

  /**const clearCart = () => {
    setCart([]);
  };
 */

  /*const removeFromCart = (product) => {
    //Le pasamos el producto y vamos a filtrar los productos que tengan un ID diferente
    * .filter(...) es un método de array que crea un nuevo array con todos los elementos que pasan una prueba implementada por la función proporcionada.
     * item => item.id !== product.id:
     * Esta es la función de prueba que se pasa al método filter. Item representa cada elemento del array prevState (cada producto en el carrito).
     * item.id !== product.id es la condición de prueba. Devuelve true si el id del producto actual (item.id) es diferente del id del producto que se quiere eliminar (product.id).
     * 
     * 
     * Supongamos que el carrito contiene los siguientes productos:
     * [
    { id: 1, name: 'Producto A' },
    { id: 2, name: 'Producto B' },
    { id: 3, name: 'Producto C' }
    ]
    Y queremos eliminar el producto con id 2.
    La función filter iterará sobre cada producto en el array y aplicará la condición item.id !== product.id.
        Para el producto con id 1, la condición es 1 !== 2, que es true, por lo que se incluye en el nuevo array.
        Para el producto con id 2, la condición es 2 !== 2, que es false, por lo que se excluye del nuevo array.
        Para el producto con id 3, la condición es 3 !== 2, que es true, por lo que se incluye en el nuevo array.
    
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };
  */