import React, { useState } from "react";
import Stack from "@mui/material/Stack";

export default function ItemCount({ initial, onAdd, stock}) {
  const [count, setCount] = useState(initial);

  const sumarStock = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restarStock = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="counter">
        <Stack direction="row" spacing={2} style={{alignItems:"center"}}>
          <button onClick={sumarStock} className="buttonsDetail">
            -
          </button>
          <h2 style={{ display: "flex", justifyContent: "center" }}>{count}</h2>
          <button onClick={restarStock} className="buttonsDetail">
            +
          </button>
          <button  onClick={() => {
              onAdd(count);
            }} className="buttonsDetail"> Agregar al carrito</button>
            
        </Stack>
      </div>
    </>
  );
}
