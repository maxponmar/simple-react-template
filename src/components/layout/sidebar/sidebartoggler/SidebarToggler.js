import styles from "./SidebarToggler.module.css";

const SidebarToggler = () => {
  return(
    <div className={styles.toggler}>
      <input id="navi-toggle" type="checkbox" class={styles.checkbox} />
        <label for="navi-toggle" class={styles.button}>
        <span class={styles.icon}>&nbsp;</span>
      </label>
    </div>
  )
}

export default SidebarToggler;
