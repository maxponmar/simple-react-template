import { useState } from "react";
import styles from "./Sidebar.module.css";
import SidebarToggler from "./sidebartoggler/SidebarToggler";

function Sidebar() {
  const [SidebarStatus, setSidebarStatus] = useState(true);

  const toggleSidebar = () => {
    setSidebarStatus(oldState => !oldState);
  };

  return (
    <>
      <SidebarToggler toggleSidebarHandler={toggleSidebar} />
      <aside
        className={
          SidebarStatus
            ? `${styles.sidebar} ${styles.showed}`
            : `${styles.sidebar} ${styles.hidden}`
        }
      >
        Sidebar
      </aside>
    </>
  );
}

export default Sidebar;
