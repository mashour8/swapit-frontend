import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage";
import ClothesPage from "./pages/ClothesPage";
import ToysPage from "./pages/ToysPage";
import ChildrenRoomPage from "./pages/ChildrenRoomPage";
import HygienePage from "./pages/HygienePage";
import MaternityPage from "./pages/MaternityPage";
import ContactPage from "./pages/ContactPage";
import "./styles/global.scss";
import ProductDetails from "./pages/ProductDetails";
import ShopingCart from "./pages/ShopingCart";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clothes" element={<ClothesPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/toys" element={<ToysPage />} />
          <Route path="/children" element={<ChildrenRoomPage />} />
          <Route path="/hygiene" element={<HygienePage />} />
          <Route path="/maternity" element={<MaternityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/cart" element={<ShopingCart />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
