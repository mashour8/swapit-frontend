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
import { useState } from "react";

export const IsLogedInContext = createContext();

function App() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [productId, setProductId] = useState(null);

  const isLogedIn = false;
  const isAdmin = false;
  return (
    <div className="app">
      {!isLogedIn && <Navbar></Navbar>}
      <div className="flex">
        {isAdmin && <AdminNavbar></AdminNavbar>}
        {isAdmin && isLogedIn ? (
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
            <Route path="/travel" element={<TravelPage />} />
            <Route path="/toys" element={<ToysPage />} />
            <Route path="/children" element={<ChildrenRoomPage />} />
            <Route path="/hygiene" element={<HygienePage />} />
            <Route path="/maternity" element={<MaternityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/productDetails/:productId"
              element={
                <ProductDetails
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  setProductId={setProductId}
                />
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

// import { Routes, Route } from "react-router-dom";
// import {
//   LifeBuoy,
//   Receipt,
//   Boxes,
//   Package,
//   UserCircle,
//   BarChart3,
//   LayoutDashboard,
//   Settings,
// } from "lucide-react";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// import HomePage from "./pages/HomePage";
// import TravelPage from "./pages/TravelPage";
// import ClothesPage from "./pages/ClothesPage";
// import ToysPage from "./pages/ToysPage";
// import ChildrenRoomPage from "./pages/ChildrenRoomPage";
// import HygienePage from "./pages/HygienePage";
// import MaternityPage from "./pages/MaternityPage";
// import ContactPage from "./pages/ContactPage";
// import "./styles/global.scss";
// import ProductDetails from "./pages/ProductDetails";
// import ShopingCart from "./pages/ShopingCart";
// import SignUpPage from "./pages/SignUpPage";
// import LoginPage from "./pages/LoginPage";
// import CategoryPage from "./pages/CategoryPage";
// import AdminNavbar from "./pages/admin/AdminNavbar";
// import ProfilePage from "./pages/account/ProfilePage";
// import { createContext } from "react";
// import OrderPage from "./pages/account/OrderPage";
// import CheckOutPage from "./pages/account/CheckOutPage";
// import OrderDetailsPage from "./pages/account/OrderDetailsPage";
// import ProductsAdminPage from "./pages/admin/ProductsAdminPage";
// import CategoriesAdminPage from "./pages/admin/CategoriesAdminPage";
// import SizesAdminPage from "./pages/admin/SizesAdminPage";

// export const IsLogedInContext = createContext();

// function App() {
//   const isLogedIn = false;
//   const isAdmin = false;
//   return (
//     <div className="app">
//       {!isLogedIn && <Navbar></Navbar>}
//       {/* <div className="flex">{isAdmin && <AdminNavbar></AdminNavbar>}</div> */}

//       <div className="flex w-screen justify-center items-center">
//         <div className="main">
//           <Routes>
//             {isAdmin && isLogedIn ? (
//               <>
//                 <Route path="/admin/products" element={<ProductsAdminPage />} />
//                 <Route
//                   path="/admin/categories"
//                   element={<CategoriesAdminPage />}
//                 />
//                 <Route path="/admin/sizes" element={<SizesAdminPage />} />
//               </>
//             ) : null}
//             <Route path="/" element={<HomePage />} />
//             <Route path="/clothes" element={<ClothesPage />} />
//             <Route path="/travel" element={<TravelPage />} />
//             <Route path="/toys" element={<ToysPage />} />
//             <Route path="/children" element={<ChildrenRoomPage />} />
//             <Route path="/hygiene" element={<HygienePage />} />
//             <Route path="/maternity" element={<MaternityPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/productDetails" element={<ProductDetails />} />
//             <Route path="/cart" element={<ShopingCart />} />
//             <Route path="/signUp" element={<SignUpPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/category" element={<CategoryPage />} />

//             {isLogedIn ? (
//               <>
//                 <Route
//                   path="/profile"
//                   element={<ProfilePage isLogedIn={isLogedIn} />}
//                 />
//                 <Route
//                   path="/orders"
//                   element={<OrderPage isLogedIn={isLogedIn} />}
//                 />
//                 <Route
//                   path="/orderDetails"
//                   element={<OrderDetailsPage isLogedIn={isLogedIn} />}
//                 />
//                 <Route
//                   path="/checkOut"
//                   element={<CheckOutPage isLogedIn={isLogedIn} />}
//                 />
//               </>
//             ) : null}
//           </Routes>
//         </div>
//       </div>

//       {!isAdmin && <Footer></Footer>}
//     </div>
//   );
// }

// export default App;
