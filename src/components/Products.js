import React from "react";

function Products({ state, dispatch }) {
  const { products, cart } = state;
  console.log(cart);
  console.log(products);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products?.products?.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid grey",
            width: "30%",
            marginTop: 10,
            gap: 10,
          }}
        >
          <img
            src={prod.thumbnail}
            alt={prod.title}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span> {prod.title}</span>
            <span> {prod.price}$</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {cart.some((p) => p.id === prod.id) ? (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: "green",
                  color: "white",
                }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}
              >
                Remove from cart
              </button>
            ) : (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: "green",
                  color: "white",
                }}
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: prod.id,
                      title: prod.title,
                      thumbnail: prod.thumbnail,
                      qty: prod.qty,
                      price: prod.price,
                    },
                  });
                }}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
