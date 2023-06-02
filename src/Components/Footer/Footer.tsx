import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Written in TypeScript and React. Design inspired by{" "}
        <a href="https://backstagetalks.com/">Backstage Talks</a>
      </p>
    </footer>
  );
};
export default Footer;
