import styles from "./App.module.css";
import Footer from "components/layout/footer/Footer";
import Header from "components/layout/header/Header";
import Sidebar from "components/layout/sidebar/Sidebar";
import About from "containers/about/About";
import Home from "containers/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Header title={"Simple React Template"} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer
        title="Footer Title"
        name="Your Name Here"
        email="Your Email Here"
      />
    </div>
  );
}

export default App;
