import { Link } from "react-router-dom";
import log from "../../assets/images/log.png";
import userIcon from "../../assets/images/icon-user.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import searchIcon from "../../assets/images/icon-search.svg";
import { AuthContext } from "../../context/auth.context";
import "./navbar.scss";
import { useContext, useEffect, useState } from "react";
import authService from "../../services/users.service";

const Navbar = () => {
  const { user, isLoggedIn, logOutUser, draftOrder } = useContext(AuthContext);
  const [badgeCounter, setBadgeCounter] = useState(0);

  const getUser = () => {
    authService
      .user(user._id)
      .then((response) => {
        console.log("usere dasd ", response.data);
        if (response.data.draftOrder != null) {
          setBadgeCounter(response.data.draftOrder.products.length);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (user) {
      getUser();
    }
    setBadgeCounter(0);
  }, [user]);
  return (
    <div className="main">
      <header className="container mx-auto px-4 flex items-center justify-around">
        <nav>
          <ul className="flex items-center justify-center font-semibold">
            <li className="relative group px-3 py-2">
              <Link to={"/"} className="hover:opacity-50 font-normal text-lg">
                Home
              </Link>
            </li>
            <li className="relative group px-3 py-2">
              <Link className="hover:opacity-50 cursor-default font-normal text-lg">
                In New
              </Link>
              <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                  <div className="relative z-10">
                    <ul className="mt-3 text-[15px]">
                      <li>
                        <a
                          href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          Children Room
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          Furniture
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          Changing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                        >
                          Decoration
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group px-3 py-2">
              <button className="hover:opacity-50 cursor-default font-normal text-lg">
                Categories
              </button>
              <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                  <div className="relative z-10">
                    <Link
                      to={"/category"}
                      className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                    >
                      Collections
                      <p className="text-gray-500 font-normal">
                        Check the Categories
                      </p>
                    </Link>
                    <div className="mt-6 grid grid-cols-3 gap-6">
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Clothing
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              0-3m (50/56)
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              3-6m (62/68)
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              6-12 (74/80)
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              1y (86/92)
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              2y (98/104)
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Children Room
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Changing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Furniture
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Decoration
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Others
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Hygiene
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Maternity
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Travel
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group px-3 py-2">
              <button className="hover:opacity-50 font-normal text-lg">
                Sale
              </button>
            </li>
          </ul>
        </nav>
        <div className="log w-[250px]">
          <Link to={"/"}>
            <img src={log} alt="" />
          </Link>
        </div>
        <nav className="flex">
          <div className="left-side-icons content-center flex gap-5 justify-center items-center">
            <div className="icons mb-2 content-center">
              <form action="" className="relative">
                <img
                  className="log p-1 absolute right-2 top-[10px] text-center "
                  src={searchIcon}
                  alt=""
                />
                <input
                  className="input-icons placeholder-black bg-[#F2F2F2] rounded-lg p-2 px-4"
                  type="text"
                  placeholder="search"
                />
              </form>
            </div>
            <ul className="flex items-center justify-center font-semibold">
              <li className="relative group px-3 py-2">
                <Link to={"/cart"} className="relative inline-block">
                  <img src={cartIcon} alt="" />
                  <span className="absolute top-[-8px] right-[-4px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {badgeCounter}
                  </span>
                </Link>
              </li>
              <li className="relative group px-3 py-2">
                <button>
                  <img src={userIcon} alt="" />
                </button>
                <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[160px] transform">
                  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div className="relative z-10">
                      <ul className="mt-3 text-[15px]">
                        {isLoggedIn && (
                          <>
                            <li>
                              <Link
                                to={"/profile"}
                                className="bg-transparent bg-clip-text py-1 block hover:text-gray-500"
                              >
                                Profile
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/orders"}
                                className="bg-transparent bg-clip-text py-1 block hover:text-gray-500"
                              >
                                Orders
                              </Link>
                            </li>
                            <hr className="my-4" />
                            <li>
                              <Link
                                to={"/login"}
                                className="bg-transparent bg-clip-text text-gray-400 py-1 block hover:text-gray-500"
                                onClick={logOutUser}
                              >
                                Logout
                              </Link>
                            </li>
                          </>
                        )}

                        {!isLoggedIn && (
                          <>
                            <li>
                              <Link
                                to={"/signup"}
                                className="bg-transparent bg-clip-text text-gray-400 py-1 block hover:text-gray-500"
                              >
                                SignUp
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"/login"}
                                className="bg-transparent bg-clip-text text-gray-400 py-1 block hover:text-gray-500"
                              >
                                Login
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="sidebar"></div>
    </div>
  );
};

export default Navbar;
