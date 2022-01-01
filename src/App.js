import styles from './App.module.css';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header title={"Simple React Template"}/>
      <div className={styles.container}>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
