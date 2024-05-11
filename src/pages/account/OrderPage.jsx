import { MdDeleteOutline } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import userService from "../../services/users.service";
import authService from "../../services/users.service";
import orderServer from "../../services/orders.service";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const OrderPage = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  var notyf = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
  });

  const getUser = () => {
    authService
      .user(user._id)
      .then((response) => {
        setUserInfo(response.data);
        setOrders(response.data.orders);
        console.log("current user: ", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (user && user.orders) {
      getUser();
    }
  }, [user]);

  const deleteOrder = (orderId) => {
    //todo
    orderServer
      .deleteOrder(orderId)
      .then((response) => {
        console.log(response.data);
        getUser();
        notyf.success(`order ${orderId} has been successfully deleted`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-semibold text-3xl mb-6">Orders</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-800">
          <thead className="text-base text-gray-700 uppercase bg-gray-200 shadow-md rounded-lg">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Shipping Address</th>
              <th className="px-6 py-3">Options</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                className="bg-white border-b hover:bg-gray-50 transition-colors duration-300"
                key={order._id}
              >
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">{order.products.length}</td>
                <td className="px-6 py-4">
                  {order.isActive ? "Active" : "Completed"}
                </td>
                <td className="px-6 py-4">
                  {order.shippingAddress ? (
                    <>
                      <div>{order.shippingAddress.street}</div>
                      <div>
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.country}
                      </div>
                    </>
                  ) : (
                    <span>N/A</span>
                  )}
                </td>
                <td className="px-6 py-4 flex gap-4">
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  >
                    <MdDeleteOutline className="w-6 h-6" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                    <IoMdMore className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
