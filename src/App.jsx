import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import Home from "@/pages/home";
import Shop from "@/pages/shop";
import Contact from "@/pages/contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
