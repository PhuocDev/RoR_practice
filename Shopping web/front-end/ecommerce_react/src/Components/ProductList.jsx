import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import axios from 'axios';


export default function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
          .then(response => {
            setProducts(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error("Error:", error);
          });
    }, []);




    return (

        <>
            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">

                    {products.map((product) => (
                        <ProductItem key={product.id} product={product}/>
                    ))}
                </div>
            </div>
            {/* Products End */}
        </>
  )
}
