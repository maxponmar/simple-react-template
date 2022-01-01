import styles from "./Header.module.css";

const Header = ({title}) => {
  return(
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <input type='checkbox' id='time'/>
      <label for='time'>Night</label>
    </header>
  )
}

export default Header;
