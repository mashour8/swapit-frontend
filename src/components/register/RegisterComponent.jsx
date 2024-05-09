import { Link } from "react-router-dom";

const RegisterComponent = () => {
  return (
    <div className="registration-component bg-[#fbf6f2] bg-opacity-80 flex justify-center flex-col items-center py-10">
      <div className="container p-4  flex justify-center flex-col items-center w-dvw">
        <h3 className="text-black text-2xl text-center">
          Join Swapit Rewards today to receive quarterly vouchers, <br />
          exclusive offers, birthday rewards and more!
        </h3>
        <Link
          to={"/signUp"}
          className="text-center bg-orange-400 m-4 p-4 rounded-lg max-w-[250px] font-medium"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default RegisterComponent;
