import React, {useEffect, useMemo} from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Navbar from "./Components/Navbar"
import ProductDetails from "./Pages/ProductDetails"
import Checkout from "./Pages/Checkout"
import SuccessPage from "./Pages/SuccessPage"
import Footer from "./Components/Footer"
import './index.css';
import styles from './Styles/App.module.css'
import { useSelector } from "react-redux"


function App() {
  const darkMode = useSelector((state) => state.theme.darkmode);
  const memoizedDarkmode = useMemo(() => darkMode, [darkMode]);
  
  useEffect(() => {
    document.body.classList.toggle("dark", memoizedDarkmode);
  }, [memoizedDarkmode]);


  return (<div className={styles.wrapper}>
    <main className={styles.content}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
    </main>
    <Footer />
  </div>)
}

export default App
