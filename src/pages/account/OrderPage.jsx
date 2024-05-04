import { MdDeleteOutline } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

const OrderPage = () => {
  return (
    <div className="continer flex flex-col justify-center">
      <h1 className="font-medium text-2xl mb-6">Orders</h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-base text-gray-700 uppercase bg-white ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                02/02/2022
              </th>
              <td className="px-6 py-4">5 items</td>
              <td className="px-6 py-4">completed</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 flex gap-4">
                <button>
                  <MdDeleteOutline className="size-6" />
                </button>
                <button>
                  <IoMdMore className="size-6" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
