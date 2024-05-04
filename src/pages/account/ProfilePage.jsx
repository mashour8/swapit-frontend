import DashboardPage from "../admin/AdminNavbar";

const ProfilePage = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-8">
      {/* <DashboardPage className="w-72" isLogedIn={isLogedIn}></DashboardPage> */}
      <h1 className="font-medium text-xl text-center">Account</h1>
      <form action="" className="w-[400px]" onSubmit={handelSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <div className="mt-2">
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
          <div className="col-span-full">
            <div className="mt-2">
              <input
                type="text"
                placeholder="Last name"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <div className="mt-2">
              <input
                type="email"
                placeholder="Email"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <div className="mt-2">
              <input
                type="password"
                placeholder="Password"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <div className="mt-2">
              <input
                type="password"
                placeholder="Re-Password"
                className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
        <div className="address">
          <button
            type="submit"
            className="mt-8 p-2 shadow-md bg-[#ededed] rounded-md text-sm font-medium w-1/3"
          >
            Add new Address
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-8 p-2 shadow-md bg-[#b7f088] rounded-md text-sm font-medium w-1/2"
          >
            Profile Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
