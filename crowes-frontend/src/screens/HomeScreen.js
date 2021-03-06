import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

const HomeScreen = (props) => {
  return (
    <ul className="products">
      {data.products.map((product) => (
        <li>
          <div className="product">
            <Link to={"/product/" + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
              <div className="product-name">{product.name}</div>{" "}
            </Link>

            <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">
              {product.rating} stars ({product.numReviews})
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeScreen;
