import { Link } from "react-router-dom";
import log from "../../assets/images/log.png";
import user from "../../assets/images/icon-user.svg";
import cart from "../../assets/images/icon-cart.svg";
import search from "../../assets/images/icon-search.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-around">
      <nav>
        <ul className="flex items-center justify-center font-semibold">
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 font-normal text-lg">
              Home
            </button>
            {/* <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        The Suite
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Course Editor
                            <p className="text-gray-500 font-normal">
                              All-in-one editor
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accept payments
                            <p className="text-gray-500 font-normal">
                              Pre-build payments page
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Closed Captioning
                            <p className="text-gray-500 font-normal">
                              Use AI to generate captions
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Extensions
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Plugins
                            <p className="text-gray-500 font-normal">
                              Tweak existing functionality
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Batch uploads
                            <p className="text-gray-500 font-normal">
                              Get your time back
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Social sharing
                            <p className="text-gray-500 font-normal">
                              Generate content for socials
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </li>
          <li className="relative group px-3 py-2">
            <button className="hover:opacity-50 cursor-default font-normal text-lg">
              In New
            </button>
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
            {/* <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <ul className="text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Get Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        News &amp; Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </li>
          {/* <li className="relative group px-3 py-2">
            <a href="#" className="hover:opacity-50 cursor-default">
              Sales
            </a>
          </li> */}
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
                src={search}
                alt=""
              />
              <input
                className="input-icons placeholder-black bg-[#F2F2F2] rounded-lg p-2 px-4"
                type="text"
                placeholder="search"
              />
            </form>
          </div>
          <div className="icons">
            <Link to={"/cart"}>
              <img src={cart} alt="" />
            </Link>
          </div>
          <div className="icons">
            <Link to={"/signUp"}>
              <img src={user} alt="" />
            </Link>
          </div>
        </div>
      </nav>
    </header>

    // <div className="navbar">
    //   <div className="nav-pages">
    //     <Link to={"/"}>Home</Link>
    //     <Link to={"/clothes"}>Product</Link>
    //     <Link to={"/travel"}>Categories</Link>
    //     <Link to={"/toys"}>SALE</Link>
    //   </div>

    //   <div className="log">
    //     <Link to={"/"}>
    //       <img src={log} alt="" />
    //     </Link>
    //   </div>

    //   <div className="left-side-icons content-center">
    //     <div className="icons mb-2 content-center">
    //       <form action="" className="relative">
    //         <img
    //           className="log p-1 absolute right-2 top-[10px] text-center "
    //           src={search}
    //           alt=""
    //         />
    //         <input
    //           className="input-icons placeholder-black bg-[#F2F2F2] rounded-lg p-2 px-4"
    //           type="text"
    //           placeholder="search"
    //         />
    //       </form>
    //     </div>
    //     <div className="icons">
    //       <Link>
    //         <img src={cart} alt="" />
    //       </Link>
    //     </div>
    //     <div className="icons">
    //       <Link>
    //         <img src={user} alt="" />
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    // <div className="navbar">
    //   <div className="nav-pages">
    //     <Link to={"/"}>Home</Link>
    //     <Link to={"/clothes"}>Product</Link>
    //     <div className="relative group">
    //       <button className="text-gray-700 group-hover:text-gray-900 focus:outline-none">
    //         Categories
    //       </button>
    //       <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10 hidden group-hover:block">
    //         <div className="flex">
    //           <div className="w-1/3 p-4">
    //             <h3 className="font-semibold mb-2">Clothing</h3>
    //             <Link to={"/clothing/men"}>Men</Link>
    //             <Link to={"/clothing/women"}>Women</Link>
    //             <Link to={"/clothing/kids"}>Kids</Link>
    //           </div>
    //           <div className="w-1/3 p-4">
    //             <h3 className="font-semibold mb-2">Accessories</h3>
    //             <Link to={"/accessories/hats"}>Hats</Link>
    //             <Link to={"/accessories/bags"}>Bags</Link>
    //             <Link to={"/accessories/shoes"}>Shoes</Link>
    //           </div>
    //           <div className="w-1/3 p-4">
    //             <h3 className="font-semibold mb-2">Electronics</h3>
    //             <Link to={"/electronics/smartphones"}>Smartphones</Link>
    //             <Link to={"/electronics/laptops"}>Laptops</Link>
    //             <Link to={"/electronics/headphones"}>Headphones</Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <Link to={"/toys"}>SALE</Link>
    //   </div>

    //   <div className="log">
    //     <Link to={"/"}>
    //       <img src={log} alt="" />
    //     </Link>
    //   </div>

    //   <div className="left-side-icons content-center">
    //     <div className="icons mb-2 content-center">
    //       <form action="" className="relative">
    //         <img
    //           className="log p-1 absolute right-2 top-[10px] text-center "
    //           src={search}
    //           alt=""
    //         />
    //         <input
    //           className="input-icons placeholder-black bg-[#F2F2F2] rounded-lg p-2 px-4"
    //           type="text"
    //           placeholder="search"
    //         />
    //       </form>
    //     </div>
    //     <div className="icons">
    //       <Link>
    //         <img src={cart} alt="" />
    //       </Link>
    //     </div>
    //     <div className="icons">
    //       <Link>
    //         <img src={user} alt="" />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;

/*
 <div className="nav-pages">
        <Link to={"/"}>Home</Link>
        <Link to={"/clothes"}>Clothes</Link>
        <Link to={"/travel"}>Travel</Link>
        <Link to={"/toys"}>Toys</Link>
        <Link to={"/children"}>Children Room</Link>
        <Link to={"/hygiene"}>Hygiene</Link>
        <Link to={"/maternity"}>Maternity</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
*/
