import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



    



    function ProductList() {
      const [products, setProducts] = useState([])
      
      
      
   
    useEffect(() => {
        const fetchProducts = async () => {
          const response = await axios.get('https://dummyjson.com/products')
          console.log(response.data.products)
          setProducts(response.data.products)
        }

        fetchProducts()
      }, [])

      return (
        <div>
          <h1 className="heading">Product List</h1>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <Link to={`/ProductItem/${product.id}`}>
                  {product.title} - ${product.price}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    export default ProductList