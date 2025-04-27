import React, { createContext, useState} from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();


const ShopContextProvider = (props) => {
  
    // testing 
    // const [products, setProducts] = useState(initialProducts);
    // const [latestProducts, setLatestProducts] = useState([]);
   
   const currency = '$';
   const delivery_fee = 5.99;
   const [search, setSearch] = useState('');
   const [showSearch, setShowSearch] = useState(false)
  
   const value = {
       products , 
       currency , delivery_fee, 
       search, setSearch, 
       showSearch, setShowSearch
   }


   return (
       <ShopContext.Provider value={value}>
           { props.children }
       </ShopContext.Provider>
   )
}


export default ShopContextProvider;

