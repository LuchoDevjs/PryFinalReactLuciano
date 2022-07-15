import React from "react";
import Item from "./Item";

function ItemList({ personajes }) {
  return (
    <>
      <h1 className="productsTitle">#FeelingGood</h1>
      <div className="productsList">
        {personajes.map((personajes) => (
          <Item key={personajes.id} personaje={personajes} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
