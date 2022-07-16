import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { TiDelete } from "react-icons/ti";
import { Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';

function Cart() {
  const { cart, getItemPrice, deleteItem, emptyCart } = useContext(CartContext);
  return (
    <>
      {cart.length > 0 ? (
        <>
          <div>
            <h1 className="h1Title">TU CARRITO</h1>
            {cart.map((item, index) => (
              <div className="cartFather">
              <div key={index} className="showCart">
                <>
                  <div className="showProduct">
                    <img
                      src={item.image}
                      // style={{ width: 200, padding:"25px" }}
                      alt="producto"
                    />
                    <p> {item.model}</p>
                    <p>${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <TiDelete
                      className="btnDelete"
                      onClick={() => deleteItem(item.id)}
                    />
                  </div>
                </>
              </div>
              </div>
            ))}
            <div className="total">
              <p>Total: ${getItemPrice()}</p>
              <Link to={"/checkout"} style={{marginRight:"20px"}}>
              <button className="buttonsDetail"> Comprar </button>
              </Link>
                <Button style={{color:"#413F42",border:"none",fontSize:"15px",   fontFamily: '"GT America", "Helvetica Neue", "Helvetica", "sans-serif"',fontWeight:"300"}} variant="outlined" startIcon={<DeleteIcon />} onClick={() => emptyCart()}>
                  Vaciar Carrito
                </Button>
          
            </div>
          </div>
        </>
      ) : (
        <div className="emptyCart">
          <h1>Tu carrito está vacío</h1>
          <div>
            <p>¿No sabes que comprar?</p>
            <p>¡Miles de productos te esperan!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
