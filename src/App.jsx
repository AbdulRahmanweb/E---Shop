import React, {useEffect, useMemo} from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Navbar from "./Components/Navbar"
import ProductDetails from "./Pages/ProductDetails"
import Checkout from "./Pages/Checkout"
import SuccessPage from "./Pages/SuccessPage"
import './index.css';
import { useSelector } from "react-redux"


function App() {
  console.log("App Render");
  const darkMode = useSelector((state) => state.theme.darkmode);
  const memoizedDarkmode = useMemo(() => darkMode, [darkMode]);
  
  useEffect(() => {
    document.body.classList.toggle("dark", memoizedDarkmode);
  }, [memoizedDarkmode]);


  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  </>)
}

export default App
