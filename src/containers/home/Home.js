import Modal from "components/layout/modal/Modal";
import { useState } from "react";
import styles from "./Home.module.css";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Home Page</h2>
      <button
        className={styles.button}
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Modal
      </button>
      <Modal
        title="Modal Window"
        show={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div>Your Content Here</div>
      </Modal>
    </div>
  );
}

export default Home;
