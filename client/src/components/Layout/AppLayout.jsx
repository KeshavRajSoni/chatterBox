/* eslint-disable react/display-name */
import Footer from "../shared/Footer";
import Header from "../shared/Header";

import styles from "../styles/AppLayout.module.css";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div className={styles.container}>
        <Header className={styles.header} />

        <div className={styles.main}>
          <div className={styles.first}>first</div>
          <div className={styles.wrappedComponent}>
            <WrappedComponent {...props} />
          </div>
          <div className={styles.second}>second</div>
        </div>

        <Footer className={styles.footer} />
      </div>
    );
  };
};

export default AppLayout;
