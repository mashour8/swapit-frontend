import { Routes, Route } from "react-router-dom";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";
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
import AdminNavbar from "./pages/admin/AdminNavbar";
import ProfilePage from "./pages/account/ProfilePage";
import { createContext } from "react";
import OrderPage from "./pages/account/OrderPage";
import CheckOutPage from "./pages/account/CheckOutPage";
import OrderDetailsPage from "./pages/account/OrderDetailsPage";
import ProductsAdminPage from "./pages/admin/ProductsAdminPage";
import CategoriesAdminPage from "./pages/admin/CategoriesAdminPage";
import SizesAdminPage from "./pages/admin/SizesAdminPage";
import IsPrivate from "./components/others/IsPrivate";
import IsAnon from "./components/others/IsAnon";
import AboutPage from "./pages/AboutPage";
import { useState, useContext } from "react";
import { AuthContext } from "./context/auth.context";
import FAQsPage from "./pages/FAQsPage";

export const IsLogedInContext = createContext();

function App() {
  const { user, isLoggedIn, logOutUser, draftOrder, isAdmin } =
    useContext(AuthContext);

  const [selectedSize, setSelectedSize] = useState(null);
  const [productId, setProductId] = useState([]);

  return (
    <div className="app">
      {!isAdmin && <Navbar></Navbar>}
      <div className="flex">
        {isAdmin && <AdminNavbar></AdminNavbar>}
        {isAdmin && isLoggedIn ? (
          <Routes>
            <Route path="/admin/products" element={<ProductsAdminPage />} />
            <Route path="/admin/categories" element={<CategoriesAdminPage />} />
            <Route path="/admin/sizes" element={<SizesAdminPage />} />
          </Routes>
        ) : null}
      </div>

      <div className="flex w-screen justify-center items-center">
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clothes" element={<ClothesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/toys" element={<ToysPage />} />
            <Route path="/children" element={<ChildrenRoomPage />} />
            <Route path="/hygiene" element={<HygienePage />} />
            <Route path="/maternity" element={<MaternityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/productDetails/:productId"
              element={
                <IsPrivate>
                  <ProductDetails
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    setProductId={setProductId}
                  />
                </IsPrivate>
              }
            />
            <Route
              path="/cart"
              element={
                <IsPrivate>
                  <ShopingCart
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    productId={productId}
                  />
                </IsPrivate>
              }
            />
            <Route
              path="/signUp"
              element={
                <IsAnon>
                  <SignUpPage />
                </IsAnon>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route
              path="/profile"
              element={
                <IsPrivate>
                  <ProfilePage />
                </IsPrivate>
              }
            />
            <Route
              path="/orders"
              element={
                <IsPrivate>
                  <OrderPage />
                </IsPrivate>
              }
            />
            <Route
              path="/orderDetails"
              element={
                <IsPrivate>
                  <OrderDetailsPage />
                </IsPrivate>
              }
            />
            <Route
              path="/checkOut"
              element={
                <IsPrivate>
                  <CheckOutPage />
                </IsPrivate>
              }
            />
          </Routes>
        </div>
      </div>

      {!isAdmin && <Footer></Footer>}
    </div>
  );
}

export default App;
