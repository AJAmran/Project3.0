import { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Component/Header/Header";

export const JobsContext = createContext([]);
export const CartContext = createContext([]);

function App() {
  const {allJobs, initialCart} = useLoaderData()
  const [cart, setCart] = useState(initialCart)
  console.log(cart)
  return (
      <div className="App">
        <JobsContext.Provider value={allJobs}>
        <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <Outlet></Outlet>
        </CartContext.Provider>
        </JobsContext.Provider>
      </div>
  );
}

export default App;
