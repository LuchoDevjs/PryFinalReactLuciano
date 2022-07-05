import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc( db, 'products', id );
    getDoc( productRef ).then(( snapshot ) => {
      setItem({ ...snapshot.data(), id: snapshot.id });
    })
  }, [id]);
  return item && <ItemDetail item={item} />;
}

export default ItemDetailContainer;
