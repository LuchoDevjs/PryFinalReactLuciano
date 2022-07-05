import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { CartContext } from "./context/CartContext";

function ItemDetail({ item }) {
  const { model, image, price, description, stock } = item;
  const [units, setUnits] = useState(0);
  const { addItem } = useContext( CartContext )

  const onAdd = (quantityToAdd) => {
    alert(`Se han agregado ${quantityToAdd} productos`);
    setUnits(quantityToAdd);
    addItem( item, quantityToAdd )
  };

  return (
    <>
      <h2 className="h2itemDetail">Detalle del Producto</h2>
      <div className="itemDetail">
        <img src={image} className="itemDetail__img" alt="" />
        <div className="itemDetail__p">
          <h1>{model}</h1>
          <h3>{description}</h3>
          <div className="flexPriceButton">
            <h2>${price}</h2>
          </div>
          <div>
            {units > 0 ? (
              <Link to={"/cart"} className="buttonTerminarCompra">
                <Button>
                  {" "}
                  Terminar mi compra{" "}
                </Button>
              </Link>
            ) : (
              <ItemCount inicial={1} onAdd={onAdd} stock={stock} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
