import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/users.service";
import orderServer from "../../services/orders.service";
import { PackagePlus } from "lucide-react";
import icon from "../../assets/images/5081356.jpg";
const CheckOutPage = () => {
  const { user, isLoggedIn, draftOrder, authenticateUser } =
    useContext(AuthContext);

  const [order, setOrder] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [orderSent, setOrderSent] = useState(false);

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const getUser = () => {
    authService
      .user(user._id)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postOrder = () => {
    if (!userInfo || !userInfo.orders || userInfo.orders.length === 0) {
      console.log("User information or orders not available.");
      return;
    }
    const body = { street, city, state, postalCode, country };
    const orderId = userInfo.orders[0];
    console.log("orderId:", orderId);
    orderServer
      .updateOrder(orderId, { shippingAddress: body })
      .then((response) => {
        setOrder(response.data);
        console.log("updateOrder(userInfo.orders[0]", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, [order]);

  useEffect(() => {
    console.log("userinfo:", userInfo);
  }, [userInfo, orderSent]);

  const handelSubmit = (e) => {
    e.preventDefault();
    postOrder();
    setOrderSent(true);
  };
  return (
    <>
      {orderSent ? (
        <>
          <div className="bg-[FBF6F2] h-full w-full flex flex-col justify-center items-center m-20">
            <h1 className="font-normal text-4xl m-10">
              We will take care of your order. See you soon!
            </h1>
            {/* <PackagePlus size={100} /> */}
            <img src={icon} alt="" className="h-[400px]" />
          </div>
        </>
      ) : (
        <>
          {" "}
          <div>
            <h1>Shipping address</h1>
            <div className="flex flex-col justify-center items-center">
              <form className="w-full" onSubmit={handelSubmit}>
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
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
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
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <div className="mt2">
                      <input
                        type="text"
                        placeholder="Address"
                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="mt2">
                      <input
                        type="text"
                        placeholder="City"
                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="mt2">
                      <input
                        type="text"
                        placeholder="PostCode"
                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <div className="mt2">
                      <input
                        type="text"
                        placeholder="Phone"
                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <div className="mt2">
                      <input
                        type="text"
                        placeholder="Country"
                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="mt-8 p-2 shadow-md bg-[#b7f088] rounded-md text-sm font-medium w-1/2"
                  >
                    Pay Now!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CheckOutPage;
