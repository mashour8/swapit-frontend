import React from "react";
import imgPlaceholder from "../assets/images/presents.webp";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container flex flex-col justify-center items-center">
      <img src={imgPlaceholder} alt="" className="w-1/3 m-4" />
      <h2 className="font-medium text-2xl m-4">
        Sign up to Swapit Love Rewards
      </h2>
      <p>
        Join and get $10 off your first online order, earn points every time you
        shop and more!
      </p>
      <form action="" className="w-full" onSubmit={handelSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <div className="mt2">
              <input
                type="text"
                placeholder="First name"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <div className="mt2">
              <input
                type="text"
                placeholder="Last name"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="mt2">
              <input
                type="email"
                placeholder="Email"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="mt2">
              <input
                type="password"
                placeholder="Password"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-8 p-2 shadow-md bg-[#b7f088] rounded-md text-sm font-medium w-1/2"
          >
            SignUp
          </button>
        </div>
      </form>

      <p className="text-gray-500 mt-6">
        Have an account?{" "}
        <Link to={"/login"} className="underline text-black">
          Login
        </Link>{" "}
        to view your rewards
      </p>
    </div>
  );
};

export default SignUpPage;
