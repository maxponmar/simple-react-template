import styles from "./Footer.module.css";

const Footer = ({ title, name, email }) => {
  const getYear = () => new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.information}>
        <span className={styles.copyright}>
          © {getYear()} {name}
        </span>
        <span className={styles.contact}>
          <a className={styles.link} href={`mailto:${email}`}>
            {email}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
