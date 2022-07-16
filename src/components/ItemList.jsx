import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <>
      <h1 className="productsTitle">#FeelingGood</h1>
      <div className="productsList">
        {products.map((gaps) => (
          <Item key={gaps.id} products={gaps} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
