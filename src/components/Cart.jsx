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
            {cart.map((item, index) => (
              <div key={index} className="mostrarCart">
                <>
                  <div className="mostrarProducto">
                    <img
                      src={item.image}
                      style={{ width: 200, padding:"25px" }}
                      alt="producto"
                    />
                    <p style={{padding:"25px"}}> {item.model}</p>
                    <p style={{padding:"25px"}}>${item.price}</p>
                    <p style={{padding:"25px"}}>Cantidad: {item.quantity}</p>
                    <TiDelete
                      className="btnDelete"
                      onClick={() => deleteItem(item.id)}
                    />
                  </div>
                </>
              </div>
            ))}
            <div className="total">
              <p style={{padding:"25px"}}>Total: ${getItemPrice()}</p>
              <Link to={"/checkout"} className="buttonTerminarCompra">
              <Button>Comprar</Button>
              </Link>
                <Button style={{color:"rgb(75 76 95)",border:"none",fontSize:"1rem", padding:"25px"}} variant="outlined" startIcon={<DeleteIcon />} onClick={() => emptyCart()}>
                  Vaciar Carrito
                </Button>
          
            </div>
          </div>
        </>
      ) : (
        <div className="cartVacio">
          <h1>Tu carrito está vacío</h1>
          <div className="carVacioP">
            <p>¿No sabes que comprar?</p>
            <p>¡Miles de productos te esperan!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
