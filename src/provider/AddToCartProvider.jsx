import { useState } from "react";
import { AddToCartContext } from "../context";

const AddToCartProvider = ({ children }) => {
  const [addToCart, setAddToCart] = useState([]);

  return (
    <AddToCartContext.Provider value={{ addToCart, setAddToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddToCartProvider;
