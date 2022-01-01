import SidebarToggler from "../sidebar/sidebartoggler/SidebarToggler";
import ThemeToggler from "../themetoggler/ThemeToggler";
import styles from "./Header.module.css";

const Header = ({title}) => {
  return(
    <header className={styles.header}>
      <SidebarToggler/>
      <h1 className={styles.title}>{title}</h1>
      <ThemeToggler/>
    </header>
  )
}

export default Header;
