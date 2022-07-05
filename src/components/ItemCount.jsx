import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {getDocs, query, where, collection, getFirestore} from 'firebase/firestore';

export default function ItemCount({ inicial, onAdd, stock}) {
  const [count, setCount] = useState(inicial);

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
      <div className="contador">
        <Stack direction="row" spacing={2}>
          <Button onClick={sumarStock} variant="contained">
            +
          </Button>
          <h2 style={{ display: "flex", justifyContent: "center" }}>{count}</h2>
          <Button onClick={restarStock} variant="outlined">
            -
          </Button>
          <Button
            onClick={() => {
              onAdd(count);
            }}
          >
            Agregar al carrito
          </Button>
        </Stack>
      </div>
    </>
  );
}
