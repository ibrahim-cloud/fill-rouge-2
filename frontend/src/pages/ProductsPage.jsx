import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Products from "../components/Products/AllProducts.jsx";
import Loader from "../components/Layout/Loader.jsx";

const ProductsPage = () => {
  const { allProducts, isLoading } = useSelector((state) => state.products);

  return (
    <>    {
        isLoading ?  (  <Loader /> ) : (   <div>
        <Products allProducts={allProducts}  />
    </div>
        )
    }
      </>

  )

}        

export default ProductsPage