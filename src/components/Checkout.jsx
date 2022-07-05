import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from 'firebase/firestore'


const Checkout = () => {
  const [ name, setName ] = useState("");
  const [cel, setCel] = useState("");
  const [email, setEmail] = useState("");
  const { cart, getItemPrice } = useContext(CartContext);
  const [ orderCompra, setOrderCompra ] = useState('')

  const db = getFirestore();
  const orderCollection = collection( db, 'orders' )

  
  const handleClick = () => {
    const order = {
      buyer: { name, email, cel },
      items: cart,
      total: getItemPrice(),
    };
    addDoc( orderCollection, order ).then(({id}) => {
        setOrderCompra(id);
    });
}

  return (
    <>
    {/* poner ternario.. si la persona compra que apareza el orderCompra y si no que apareza el formulario. */}
      <div id="form" className="topBefore">
        <h1 className="form">FORMULARIO</h1>
        <input onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="NAME" />
        <input onChange={(e) => setEmail(e.target.value)} id="email" type="text" placeholder="E-MAIL" />
        <input onChange={(e) => setCel(e.target.value)} id="number" type='text' placeholder="NUMERO DE TELEFONO" />
        <button className="buttonCheckout" id='submit' onClick={handleClick}>ENVIAR</button><br /><br /><br />
        ORDEN: { orderCompra }
      </div>
    </>
  );
};

export default Checkout;