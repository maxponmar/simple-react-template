import styles from "./SidebarToggler.module.css";

const SidebarToggler = ({ toggleSidebarHandler }) => {
  return(
    <div className={styles.toggler}>
      <input id="navi-toggle" type="checkbox" className={styles.checkbox} onClick={toggleSidebarHandler}/>
        <label htmlFor="navi-toggle" className={styles.button}>
        <span className={styles.icon}>&nbsp;</span>
      </label>
    </div>
  )
}

export default SidebarToggler;
