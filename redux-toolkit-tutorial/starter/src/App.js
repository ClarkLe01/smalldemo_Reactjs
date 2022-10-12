<<<<<<< HEAD
import Navbar from "./components/navbar";
import React, { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import './App.css'
function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(calculateTotals());
  }, [dispatch,cartItems]);

  useEffect(()=>{
    dispatch(getCartItems());
  },[dispatch]);
  if(isLoading){
    return (
      <div className="loading">
        <h1>Loading ... </h1>
      </div>
    )
  }
  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar />
      <CartContainer />
    </main>
  );
=======
function App() {
  return <h2>Redux Toolkit</h2>;
>>>>>>> 06d4d4c65f8c8c9d0df7083ba17fac816c2fc395
}
export default App;
