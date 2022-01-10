import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

function Modal(props) {
  const modal = props.show ? (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{props.title}</h3>
        </div>
        <div className={styles.body}>{props.children}</div>
        <div className={styles.footer}>
          <button className={styles.closebutton} onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
  return ReactDOM.createPortal(modal, document.getElementById('overlay'));
}

export default Modal;
