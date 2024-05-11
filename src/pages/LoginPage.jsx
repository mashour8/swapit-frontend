import imgPlaceholder from "../assets/images/shoes-and-blanket-hanging-from-line.webp";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/users.service";

const LoginPage = () => {
  const { user, isLoggedIn, isAdmin } = useContext(AuthContext);

  console.log("isLoggedIn loginnnnn :", isLoggedIn);

  const [email, setEmail] = useState("ashour@gmail.com");
  const [password, setPassword] = useState("qwe123Qwe");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const { authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handelSubmit = (e) => {
    e.preventDefault();
    let userInfo = { email, password };
    // doing it with async
    authService
      .login(userInfo)
      .then(async (response) => {
        console.log("response.data login page: ", response.data);
        localStorage.setItem("authToken", response.data.authToken);
        await authenticateUser();
        navigate("/admin/products");
      })
      // .then(() => {
      //   navigate("/orders");
      // })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.message);
      });
  };

  // doing it with .then
  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   let userInfo = { email, password };
  //   authService
  //     .login(userInfo)
  //     .then( (response) => {
  //       console.log("response.data login page: ", response.data);
  //       localStorage.setItem("authToken", response.data.authToken);
  //        authenticateUser();
  //       navigate("/orders");
  //     })
  //     .then(() => {
  //       navigate("/orders");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setErrorMessage(err.response.data.message);
  //     });
  // };

  return (
    <div>
      <div className="container flex flex-col justify-center items-center">
        <img src={imgPlaceholder} alt="" className="w-1/5 m-2" />
        <h2 className="font-medium text-2xl m-4">Login to your account</h2>
        <form className="w-1/2" onSubmit={handelSubmit}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
            <div className="col-span-4">
              <div className="mt2">
                <input
                  type="email"
                  placeholder="Email: Mohammed@example.com"
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={email}
                  onChange={handleEmail}
                />
              </div>
            </div>

            <div className="col-span-4">
              <div className="mt2">
                <input
                  type="password"
                  placeholder="Password"
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={password}
                  onChange={handlePassword}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-8 p-2 shadow-md bg-[#b7f088] rounded-md text-sm font-medium w-1/2"
            >
              LOGIN
            </button>
          </div>
        </form>
        {errorMessage && (
          <p className="m-8 w-96 bg-red-500 p-6 text-white">
            ERROR: {errorMessage}
          </p>
        )}
        <div className="flex flex-col justify-center items-center text-center mt-8">
          <h3 className="text-2xl">Sign up to Swapit Rewards</h3>
          <p className="mt-2">
            Join and get $10 off your first online order, earn points every time
            you shop and more!
          </p>
          <Link
            to={"/signUp"}
            className="mt-8 p-2 border rounded-md text-sm font-medium w-1/3 hover:bg-gray-100"
          >
            Create An Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
