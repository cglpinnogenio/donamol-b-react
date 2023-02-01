import React, { useEffect } from "react";

import "./Product.css";
const Product = ({ image, title, price, click, select }: any) => {
  useEffect(() => {
    console.log("productdetails");
  }, []);
  useEffect(() => {
    console.log("productdetailsselect");
  }, [select]);
  return (
    <div>
      <div className="third-container">
        <div className="product-label">
          <div
            className="product-input"
            style={{
              backgroundColor: select ? "salmon" : "",
            }}
          >
            <img
              onClick={click}
              src={image}
              alt=""
              id="product"
              className="image-input"
            />

            <div className="price-info1">
              <div className="product-name">{title}</div>

              <div className="product-price">{price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Product);
