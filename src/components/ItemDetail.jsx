import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import Swal from 'sweetalert2'

function ItemDetail({ item }) {
  const { model, image, price, description, stock } = item;
  const [units, setUnits] = useState(0);
  const { addItem, isInCart } = useContext( CartContext )

  const onAdd = (quantityToAdd) => {
    Swal.fire({
      title: "Genial!",
      text:`Se han agregado ${quantityToAdd} productos`,
      icon:'success',
      background:"#FAFAFA",
      confirmButtonColor: '#413F42',
  })
    setUnits(quantityToAdd);
    addItem( item, quantityToAdd )
  };

  return (
    <>
      <h2 className="titleItemDetail">Detalle del Producto</h2>
      <div className="itemDetail">
        <img src={image} className="itemDetail__img" alt="" />
        <div className="itemDetail__p">
          <h1>{model}</h1>
          <h3>{description}</h3>
          <div className="itemDetail__priceButton">
            <h2>${price}</h2>
          </div>
          <div>
            {isInCart(item.id) ? (
              <>
               <Link to={"/productos"} className="itemDetail__buttonLink">
               <button className="buttonsDetail" style={{marginBottom:"0.8rem"}}> Seguir comprando </button>
              </Link>
              <Link to={"/cart"} className="itemDetail__buttonLink">
               <button className="buttonsDetail"> Terminar mi compra </button>
              </Link>
              </>
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
