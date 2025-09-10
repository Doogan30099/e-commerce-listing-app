
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function ProductItem() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${productId}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
        <div>
        <button onClick={() => window.history.back()} className="back-button">Back to Product List</button>
        </div>
      <h2 className="heading">{product.title}</h2>
      <p className="price">${product.price}</p>
      <img src={product.thumbnail} alt={product.title} className="thumbnail" />
      <p className="description">{product.description}</p>
    </div>
  );
}

export default ProductItem;
