import React, { useEffect, useState } from "react";

import Product from "../../Components/ProductCard/Product";

import "./ProductItem.css";

const ProductItem = () => {
  const [isSelect, setIsSelect] = useState(0);
  const [products, setProducts] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const [name, setName] = useState("Enjoy");

  const handleClick = (index: number) => {
    setIsSelect(index);
  };

  const fetchData = async () => {
    const productDetails = await fetch(
      "https://reqres.in/api/users?page=2"
    );

    const json: Array<any> = await productDetails.json();

    setUsers(json);
  };

  const fetchDetails = async () => {
    const productArray = await fetch(
      "https://reqres.in/api/users?page=2"
    );
    const json = await productArray.json();
    setProducts(json);
  };

  const dataFetch = () => {
    if (isSelect === 2) {
      fetchDetails();
    } else {
      fetchData();
    }
  };
  useEffect(() => {
    dataFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelect]);

  return (
    <div className="third-container">
      <div className="header-paragraph">{name} our feature products</div>
      <button onClick={() => setName("")}>Reset</button>
      <div className="product-label">
       { isSelect === 2
          ? products &&
            products.length &&
            products.map((value: any, index: number) => {
              return (
                <Product
                  key={`${value.product_name} ${index}`}
                  click={() => handleClick(index)}
                  select={index === isSelect}
                  image={value.avatar}
                  title={value.email}
                  price={value.first_name}
                />
              );
              })
          : users &&  users.length &&
            users.map((value: any, index: number) => {
              return (
                <Product
                  key={`${value.product_name} ${index}`}
                  click={() => handleClick(index)}
                  select={index === isSelect}
                  image={value.avatar}
                  title={value.email}
                  price={value.first_name}
                />
              );
            })}
      </div>

      <div className="shop-all">SHOP ALL</div>
    </div>
  );
};

export default ProductItem;
