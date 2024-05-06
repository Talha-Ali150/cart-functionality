import React from "react";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    state: { products, cart },
    dispatch,
  } = CartState();
  console.log("cart", cart);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "80%",
        margin: "0 auto",
      }}
    >
      {products.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              width: 300,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              backgroundColor: "yellowgreen",
            }}
          >
            <img
              style={{ width: 200, height: 200 }}
              src={item.image}
              alt="thumbnail"
            />
            <p>{item.title}</p>
            <p>{item.price}$ </p>
            <p>{item.rating.rate}</p>
            <button
              style={{ padding: 3 }}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                });
              }}
            >
              Add to Cart
            </button>
            <button
              style={{ padding: 3 }}
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                });
              }}
            >
              Remove from Cart
            </button>
          </div>
        );
      })}
      <Link to={`/cart`}>
        <button>GOTO CART</button>
      </Link>
    </div>
  );
};

export default Home;
