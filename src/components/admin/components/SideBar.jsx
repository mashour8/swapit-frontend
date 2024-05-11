/* eslint-disable react/prop-types */
import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  Link,
  LogOut,
} from "lucide-react";
import { createContext, useContext, useState } from "react";
import logo from "../../../assets/images/log.png";
import { IsLogedInContext } from "../../../App";
import { AuthContext } from "../../../context/auth.context";

export const SideBarContext = createContext();

export default function SideBar({ children }) {
  const { user, isLoggedIn, isAdmin, logOutUser } = useContext(AuthContext);
  const [expanded, setExpanded] = useState(true);
  const value = useContext(IsLogedInContext);
  // console.log("isLogedIn", value);
  return (
    <div className={`h-fit`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SideBarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SideBarContext.Provider>

        <div className="border-t flex p-3 mt-10">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{user.name}</h4>
              <span className="text-xs text-gray-600">{user.email}</span>
            </div>
            <MoreVertical size={20} />
          </div>
          <Link onClick={logOutUser} to={"/"}>
            Logout
          </Link>
        </div>
      </nav>
      {/* <div className="h-full w-full bg-slate-600">hello</div> */}
    </div>
  );
}
