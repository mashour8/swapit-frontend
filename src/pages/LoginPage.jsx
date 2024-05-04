import imgPlaceholder from "../assets/images/shoes-and-blanket-hanging-from-line.webp";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="container flex flex-col justify-center items-center">
        <img src={imgPlaceholder} alt="" className="w-1/5 m-2" />
        <h2 className="font-medium text-2xl m-4">Login to your account</h2>
        <form action="" className="w-1/2" onSubmit={handelSubmit}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
            <div className="col-span-4">
              <div className="mt2">
                <input
                  type="email"
                  placeholder="Email: john@example.com"
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
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
