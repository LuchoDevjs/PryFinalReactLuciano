import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('productos')) ?? []);

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(cart));
}, [cart]);

  // metodo some - itemdetail - se encarga de detectar si el producto a agregar ya esta en el carrito o no. retorna booleano
  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };
  // itemdetail - se encarga de agregar el producto al cart, sin pisar a los agregados anteriormente. y si esta duplicado aumenta la cantidad
  const addItem = (item, quantity) => {
    const newItem = {
      ...item,
      quantity,
    }
    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf( findProduct );
      const auxArray = [...cart];
      auxArray[productIndex].quantity += quantity;
      setCart(auxArray)
    } else {
      setCart([...cart, newItem]);
    }
  };
  // vaciar el carrito - cart - boton
  const emptyCart = () => {
    setCart([]);
  };
  // metodo filter - cart - se encarga, en funcion del id de retornar un nuevo array sin el producto seleccionado
  const deleteItem = ( id ) => {
    return setCart(cart.filter( x => x.id !== id ))
  };
  // metodo reduce - cartwidget retorna la cantidad total de unidades que tiene nuestro state cart
  const getItemQty = () => {
    return cart.length;
    // cart.reduce(( acc, x ) => acc += x.quantity, 0)
  };
  // metodo reduce - cart - retorna el precio total del carrito
  const getItemPrice = () => {
    return cart.reduce(( acc, x ) => acc += x.quantity * x.price, 0)
  };

  return <Provider value={{ cart, addItem , emptyCart, deleteItem, getItemQty, getItemPrice,isInCart }}>{ children} </Provider>;
};

export default MyProvider;
