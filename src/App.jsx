import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Navbar from "./Components/Navbar"
import ProductDetails from "./Pages/ProductDetails"
import Checkout from "./Pages/Checkout"
import SuccessPage from "./Pages/SuccessPage"


function App() {
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
