import styles from "../styles/Header.module.css";
function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.headerleft}>
        <span>logo</span>
        <span>chatterbox</span>
      </div>

      <div className={styles.headerright}>
        <span>search</span>
        <span>Profile icon</span>
      </div>
    </header>
  );
}

export default Header;
