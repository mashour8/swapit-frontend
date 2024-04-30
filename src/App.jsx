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
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import { SidebarItem } from "./components/admin/components/SidebarItem";
import SideBar from "./components/admin/components/SideBar";

export const IsLogedInContext = createContext();

function App() {
  const isLogedIn = true;
  const isAdmin = true;
  return (
    <div className="app">
      {!isLogedIn && <Navbar></Navbar>}
      <div className="flex">
        {isAdmin && <AdminNavbar></AdminNavbar>}
        {isAdmin && isLogedIn ? (
          <Routes>
            <Route path="/admin/products" element={<AdminProductsPage />} />
          </Routes>
        ) : null}
      </div>

      {/* <DashboardPage></DashboardPage> */}
      <div className="flex w-screen justify-center items-center">
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

            {isLogedIn ? (
              <>
                <Route
                  path="/profile"
                  element={<ProfilePage isLogedIn={isLogedIn} />}
                />
                <Route
                  path="/orders"
                  element={<OrderPage isLogedIn={isLogedIn} />}
                />
                <Route
                  path="/orderDetails"
                  element={<OrderDetailsPage isLogedIn={isLogedIn} />}
                />
                <Route
                  path="/checkOut"
                  element={<CheckOutPage isLogedIn={isLogedIn} />}
                />
              </>
            ) : null}
          </Routes>
        </div>
      </div>

      {!isAdmin && <Footer></Footer>}
    </div>
  );
}

export default App;
