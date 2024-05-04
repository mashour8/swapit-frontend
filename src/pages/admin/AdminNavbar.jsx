import SideBar from "../../components/admin/components/SideBar";
import { SidebarItem } from "../../components/admin/components/SidebarItem";
import {
  LifeBuoy,
  ScanBarcode,
  Boxes,
  Package,
  UserCircle,
  PencilRuler,
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
        icon={<ScanBarcode size={20} />}
        text="Products"
        path={"products"}
      />
      <SidebarItem icon={<Package size={20} />} text="Orders" path={"#"} />
      <SidebarItem
        icon={<Boxes size={20} />}
        text="Categories"
        path={"categories"}
      />
      <SidebarItem
        icon={<PencilRuler size={20} />}
        text="Sizes"
        path={"sizes"}
      />
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
