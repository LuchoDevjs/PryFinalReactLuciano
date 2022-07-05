import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';

export const Categories = ({ handleClose }) => {
    const [ category, setCategory ] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const categoriesCollection = collection( db, 'categories' );
        getDocs( categoriesCollection ).then( (snapshot ) => {
            setCategory( snapshot.docs.map((doc) => doc.data().name) )
        })
    },[])

  return (
   <>
    { category.map((el) => (
         <Link
         to={"/category/" + el}
         className="buttonCategoriasItem"
         key={el}
       >
         <MenuItem onClick={handleClose}> {el.charAt(0).toUpperCase() + el.slice(1)} </MenuItem>
       </Link>
    )) }
   </>
  )
}
