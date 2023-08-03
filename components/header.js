import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <div className={styles.logo}>
          <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
          <div className={styles.name}>
            <div className={styles.reis}>REIS</div>
            <div className={styles.realState}>Real State</div>
          </div>
        </div>
        <div className={styles.navigationRight}>
          <div className={styles.navigation}>
            <div className={styles.home}>HOME</div>
            <div className={styles.home}>ABOUT US</div>
            <div className={styles.home}>OUR AGENTS</div>
            <div className={styles.properties}>PROPERTIES</div>
            <div className={styles.home}>GALLERY</div>
            <div className={styles.home}>BLOG</div>
            <div className={styles.home}>CONTACT US</div>
            <div className={styles.home}>SEARCH</div>
          </div>
          <button className={styles.hamburger}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
