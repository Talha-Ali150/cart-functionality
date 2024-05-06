import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  console.log("cart", cart);

  const [total, setTotal] = useState();
  const [subtotal, setSubTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    setSubTotal(cart.reduce((acc, curr) => acc + Number(curr.qty), 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => {
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
                {item.qty > 0 && (
                  <button
                    style={{ padding: 3 }}
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_QTY",
                        payload: item,
                      });
                    }}
                  >
                    REMOVE QTY
                  </button>
                )}
                <button
                  style={{ padding: 3 }}
                  onClick={() => {
                    dispatch({
                      type: "ADD_QTY",
                      payload: item,
                    });
                  }}
                >
                  ADD QTY
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
        </>
      ) : (
        <span>cart is empty</span>
      )}
      <p>subtotal: {subtotal}</p>
      <p>total: {total}</p>
    </div>
  );
};

export default Cart;
