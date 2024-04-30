import React from "react";

const CheckOutPage = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Shipping address</h1>
      <div className="flex flex-col justify-center items-center">
        <form action="" className="w-full" onSubmit={handelSubmit}>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <div className="mt2">
                <input
                  type="text"
                  placeholder="Country"
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
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
            <div className="sm:col-span-6">
              <div className="mt2">
                <input
                  type="text"
                  placeholder="Address"
                  className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
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
  );
};

export default CheckOutPage;
