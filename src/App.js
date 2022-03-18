import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import Products from "./components/pages/Products/Products";
import Services from "./components/pages/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
