import React from "react";
import Item from "./Item";

function ItemList({ personajes }) {
  return (
    <>
      <div className="ListaPersonajes">
        {personajes.map((personajes) => (
          <Item key={personajes.id} personaje={personajes} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
