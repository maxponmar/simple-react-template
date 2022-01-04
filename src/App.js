import styles from "App.module.css";
import Footer from "components/layout/footer/Footer";
import Header from "components/layout/header/Header";
import Sidebar from "components/layout/sidebar/Sidebar";

function App() {
  return (
    <div className={styles.app}>
      <Header title={"Simple React Template"} />
      <Sidebar/>
      <div className={styles.container}></div>
      <Footer
        title="Footer Title"
        name="Your Name Here"
        email="Your Email Here"
      />
    </div>
  );
}

export default App;
