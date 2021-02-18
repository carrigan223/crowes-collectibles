import React from "react";
import data from "../data";

const ProductScreen = (props) => {
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div style={{paddingTop: "2rem", }} className="product">
      <img className="product-image" src={product.image} alt="product" />
      <div className="product-name">{product.name}</div>{" "}
      <div className="product-brand">{product.brand}</div>
      <div className="product-price">{product.price}</div>
      <div className="product-rating">
        {product.rating} stars ({product.numReviews})
      </div>
    </div>
  );
};

export default ProductScreen;
