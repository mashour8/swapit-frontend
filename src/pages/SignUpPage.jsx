import React, { useState } from "react";
import imgPlaceholder from "../assets/images/presents.webp";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/users.service";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const notyf = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
  });

  const handelSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      email: email,
      password: password,
      name: name,
    };

    authService
      .signup(newUser)
      .then((response) => {
        console.log(response);
        notyf.success(
          `user ${response.data.email} has been successfully sign up`
        );
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setErrorMessage(err.response.data.message);
        notyf.error(` ${err.response.data.message}`);
      });
  };
  return (
    <div className="container flex flex-col justify-center items-center">
      <img src={imgPlaceholder} alt="" className="w-1/3" />
      <h2 className="font-medium text-2xl m-4">
        Sign up to Swapit Love Rewards
      </h2>
      <p>
        Join and get $10 off your first online order, earn points every time you
        shop and more!
      </p>
      <form action="" className="w-96" onSubmit={handelSubmit}>
        <div className="mt-10 grid grid-cols-4 gap-x-6 gap-y-8 sm:grid-cols-4">
          <div className="sm:col-span-4">
            <div className="mt-2">
              <input
                type="text"
                placeholder="Full Name"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                value={name}
                onChange={handleName}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="mt-2">
              <input
                type="email"
                placeholder="Email"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                value={email}
                onChange={handleEmail}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="mt-2">
              <input
                type="password"
                placeholder="Password"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
                minLength={6}
                value={password}
                onChange={handlePassword}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <div className="mt-2">
              <input
                type="password"
                minLength={6}
                placeholder="Confirm Password"
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
      {errorMessage && (
        <p className="m-8 w-96 bg-red-500 p-6 text-white">
          ERROR: {errorMessage}
        </p>
      )}
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
