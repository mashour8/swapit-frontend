import SideBar from "../../components/admin/components/SideBar";
import { SidebarItem } from "../../components/admin/components/SidebarItem";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
} from "lucide-react";

const AdminNavbar = () => {
  return (
    <SideBar>
      <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text={"DashBoard"}
        path={"dashboard"}
      />
      <SidebarItem
        icon={<BarChart3 size={20} />}
        text="Products"
        path={"products"}
      />
      <SidebarItem icon={<Package size={20} />} text="Orders" path={"#"} />
      <SidebarItem icon={<Boxes size={20} />} text="Inventory" path={"#"} />
      <SidebarItem icon={<Receipt size={20} />} text="Billings" path={"#"} />
      <hr className="my-3" />
      <SidebarItem
        icon={<UserCircle size={20} />}
        text="Users"
        path={"users"}
      />
      <SidebarItem icon={<Settings size={20} />} text="Settings" path={"#"} />
      <SidebarItem icon={<LifeBuoy size={20} />} text="Help" path={"#"} />
    </SideBar>
  );
};

export default AdminNavbar;
