import React, { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "./context/CartContext";

function CartWidget() {
  const { getItemQty } = useContext(CartContext);

  return (
    <>
      <MdAddShoppingCart style={{fontSize:"1.4rem"}}/>
      <span style={{textAlign:"center",marginBottom:"50px"}}>{getItemQty() > 0 && getItemQty()}</span>
    </>
  );
}

export default CartWidget;
