import { useState } from "react";
import styles from "./Sidebar.module.css";
import SidebarToggler from "./sidebartoggler/SidebarToggler";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

function Sidebar() {
  const [SidebarStatus, setSidebarStatus] = useState(true);

  const toggleSidebar = () => {
    setSidebarStatus((oldState) => !oldState);
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
        <h2 className={styles.title}>Sidebar</h2>
        <Link className={styles.link} to="/">
          <AiFillHome className={styles.icon} /> Home
        </Link>
        <Link className={styles.link} to="/about">
          <AiFillInfoCircle className={styles.icon} /> About
        </Link>
      </aside>
    </>
  );
}

export default Sidebar;
