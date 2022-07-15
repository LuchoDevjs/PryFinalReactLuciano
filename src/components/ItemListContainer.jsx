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

function ItemListContainer({imagen }) {
  const { id } = useParams();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    if (id) {
      const q = query(productsCollection, where("category", "==", id));
      getDocs(q)
        .then((snapshot) => {
          setResult(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setResult(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      <div>
        {loading && (
          <>
            <div className="loadingFather">
              <div className="line-wobble"></div>
            </div>
          </>
        )}
        {result && (
          <>
            <ItemList personajes={result} />
          </>
        )}
      </div>
    </>
  );
}

export default ItemListContainer;
