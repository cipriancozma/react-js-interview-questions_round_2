import React, { useEffect, useState } from "react";

function Cart({ state, dispatch }) {
  const { cart } = state;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, el) => {
        return acc + Number(el.price) * el.qty;
      }, 0)
    );
  }, [cart]);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: id,
        qty: qty,
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 0,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%",
      }}
    >
      Cart
      <b>Subtotal: $ {total}</b>
      {cart.length > 0 ? (
        <div>
          {cart?.map((prod) => {
            return (
              <div key={prod.id}>
                <div>
                  <span>{prod.title}</span>
                  <p>{prod.price}</p>
                </div>
                <div>
                  <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                    -
                  </button>
                  <span>{prod.qty}</span>
                  <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div> Cart is empty </div>
      )}
    </div>
  );
}

export default Cart;
