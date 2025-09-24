import axios from "axios";
import React, { useState } from "react";

const Show = () => {
    const [products, setProducts] = useState([]);

    const getproducts = () => {
      const api = "https://fakestoreapi.com/products";
  
      axios
      .get(api)
      .then((products) => {
        // console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err));
    };

  return (

    <>
      <button onClick={getproducts} className='rounded px-5 py-2 bg-red-300'>Call Product API</button>

      <hr />

      <ul>
      {products.length > 0 ? (
        products.map((p) => (
          <li key={p.id} className="w-1/4 mb-2 p-5 bg-red-200 ">{p.title}</li>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
      </ul>
    
    
    </>
    
  );
};

export default Show;
