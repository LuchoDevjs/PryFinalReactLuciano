import React, { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "./context/CartContext";

function CartWidget() {
  const { getItemQty } = useContext(CartContext);

  return (
    <>
    <div style={{display:'flex',alignItems:"center"}}>
      <MdAddShoppingCart style={{fontSize:"1.4rem"}}/>
      <p style={{marginBottom:"15px",fontFamily: '"GT America", "Helvetica Neue", "Helvetica", "sans-serif"',fontWeight:"300"}}>{getItemQty() > 0 && getItemQty()}</p>
      </div>
    </>
  );
}

export default CartWidget;
