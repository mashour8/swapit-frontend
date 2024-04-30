import { MdDeleteOutline } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
const OrderDetailsPage = () => {
  return (
    <div>
      <h1 className="font-medium text-2xl mb-6">Order Details</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
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
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4 flex gap-4">
                <button>
                  <MdDeleteOutline className="size-6" />
                </button>
                <button>
                  <IoMdMore className="size-6" />
                </button>
              </td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
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

export default OrderDetailsPage;
