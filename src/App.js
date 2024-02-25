import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarApp from "./components/NavbarApp";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
