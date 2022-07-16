import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Item({ products }) {
  const { model, image, price, color, id, stock } = products;
  return (
    <>
      <div className="column">
        <div className="product-card">
          <div className="product-tumb">
            <img src={image} alt="" />
          </div>
          <div className="product-details">
            <h4>{model}</h4>
            <h4>Color: {color}</h4>
            <h4>Stock: {stock}</h4>
            <div className="product-bottom-details">
              <div className="product-price">${price}</div>
              <Link to={`/item/${id}`} className="buttonItem">
                <Button
                  style={{
                    color: "#73777B",
                    fontFamily:
                      '"GT America","Helvetica Neue","Helvetica","sans-serif"',
                    fontWeight: "400",
                  }}
                >
                  Ver mas detalles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Item;
