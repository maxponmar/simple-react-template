import SidebarToggler from "components/layout/sidebar/sidebartoggler/SidebarToggler";
import ThemeToggler from "components/layout/themetoggler/ThemeToggler";
import styles from "./Header.module.css";

const Header = ({title}) => {
  return(
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <ThemeToggler/>
    </header>
  )
}

export default Header;
