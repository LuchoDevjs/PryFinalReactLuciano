import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer({ saludo }) {
  const { id } = useParams();
  const [result, setResult] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const db = getFirestore();
    const productsCollection = collection( db, 'products' );
    if ( id ) {
      const q = query( productsCollection, where('category', '==', id))
      getDocs( q ).then((snapshot) => {
        setResult( snapshot.docs.map(( doc ) => ({ ...doc.data(), id: doc.id })))
    })}else{

      getDocs( productsCollection ).then((snapshot) => {
        setResult( snapshot.docs.map(( doc ) => ({ ...doc.data(), id: doc.id })) )
      })
    }
  }, [ id ]);

  return (
    <>
      <div>
        <h1 className="h1Saludo">{saludo}</h1>
        {result !== undefined ? (
          <ItemList personajes={result} />
        ) : (
          <ItemList personajes={products} />
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
