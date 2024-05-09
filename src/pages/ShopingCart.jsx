/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import draftServer from "../services/draft.service";
import { AuthContext } from "../context/auth.context";
import authService from "../services/users.service";

const ShopingCart = ({ selectedSize, productId }) => {
  const { user, isLoggedIn, draftOrder } = useContext(AuthContext);

  const [quantity, setQuantity] = useState(1);

  const handelSubmit = (e) => {
    console.log("selectedSize", selectedSize);
    console.log("productId", productId);
  };

  const getDraftOrder = () => {
    draftServer.getDraft();
  };
  const decrement = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
      console.log(quantity);
    }
  };
  const handelQuantity = (e) => {
    e.target.value(quantity);
  };

  const increment = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };
  return (
    <div className="shoping-cart flex justify-center">
      <div className="container flex flex-col">
        <div className=" p-8 bg-[#FBF6F2] w-full flex flex-col gap-8">
          <Link to={"/"}>
            <div className="flex flex-row gap-4 justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth={1.5}
                stroke="grey"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>

              <p className="uppercase text-gray-600">Continue Shoping</p>
            </div>
          </Link>

          <h1 className="text-3xl text-center">Your Shopping Cart</h1>
        </div>
        <div className="flex flex-col mt-12">
          <h1 className="text-3xl font-light mb-12">
            Delivery or Click & Collect
          </h1>
          <div className="cart mb-8 grid grid-cols-4 justify-between">
            <div className="w-full">
              <h1 className="font-medium">Products</h1>
            </div>
            <div className="w-full">
              <h1 className="font-medium">QUANTITY</h1>
            </div>
            <div className="w-1/2">
              <h1 className="font-medium"> PRICE</h1>
            </div>
            <div className="w-1/2">
              <h1 className="font-medium"> </h1>
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <hr className="mb-8" />
              <div className="columns-4 mb-8 flex flex-row justify-between">
                <div className="flex gap-4 w-full">
                  <img
                    className="w-32 border rounded-lg"
                    src="https://cdn.shopify.com/s/files/1/0082/9351/5349/products/PP1096ES_VANBLOSPK_IMAGE1.jpg?v=1662831011"
                    alt=""
                  />
                  <h3 className="font-medium">
                    2 Pack Easy Neck Long Sleeve Bodysuit
                  </h3>
                </div>
                <div className="w-full">
                  <form className="max-w-xs mx-auto ml-4">
                    <div className="relative flex items-center max-w-[7rem]">
                      <button
                        type="button"
                        id="decrement-button"
                        className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                        onClick={decrement}
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 "
                        // placeholder={quantity}
                        value={quantity}
                        onChange={handelQuantity}
                        required
                      />
                      <button
                        type="button"
                        id="increment-button"
                        className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                        onClick={increment}
                      >
                        <svg
                          className="w-3 h-3 text-gray-900 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="w-1/2">
                  <p>$12.00</p>
                </div>
              </div>
              <hr className="" />
            </div>

            <div className="ml-4 p-8 bg-[#FBF6F2] flex flex-col col-span-1 w-full">
              <h1 className="font-normal text-2xl">Order Summary</h1>
              <hr className="mt-4" />
              <div className="flex flex-row gap-20 w-full justify-between p-6">
                <p>Subtotal</p>
                <p>$123.00</p>
              </div>
              <div className="flex flex-row gap-20 w-full justify-between p-6">
                <p>
                  TOTAL{" "}
                  <span className="text-gray-400 text-xs">(Including GST)</span>
                </p>
                <p>$123.00</p>
              </div>
              <button
                type="submit"
                onClick={handelSubmit}
                className="m-4 p-4 shadow-md bg-[#b7f088] rounded-md text-lg font-medium"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
