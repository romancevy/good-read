import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Good Read</h1>
      <a href="https://github.com/romancevy">Github Icon</a>
    </header>
  );
};
export default Header;
