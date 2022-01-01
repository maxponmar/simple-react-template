import styles from "./ThemeToggler.module.css";

const ThemeToggler = () => {
  return(
    <div className={styles.toggler}>
      <input className={styles.time} type='checkbox' id='time'/>
      <label for='time'>Night</label>
    </div>
  )
}

export default ThemeToggler;
