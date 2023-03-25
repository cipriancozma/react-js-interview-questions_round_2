import { useEffect, useReducer } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { cartReducer } from "./reducers/cartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const products = await data.json();
    dispatch({
      type: "ADD_PRODUCTS",
      payload: products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
