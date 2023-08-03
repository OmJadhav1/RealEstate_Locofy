import Link from "next/link";
import styles from "./top-header.module.css";
const TopHeader = () => {
  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <button className={styles.logo}>
          <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
          <div className={styles.name}>
            <div className={styles.reis}>REIS</div>
            <div className={styles.realState}>Real State</div>
          </div>
        </button>
        <div className={styles.navigationRight}>
          <div className={styles.navigation}>
            <a className={styles.home} href="#">
              HOME
            </a>
            <button className={styles.aboutUs}>ABOUT US</button>
            <button className={styles.aboutUs}>OUR AGENTS</button>
            <Link className={styles.properties} href="/">
              PROPERTIES
            </Link>
            <button className={styles.aboutUs}>GALLERY</button>
            <button className={styles.aboutUs}>BLOG</button>
            <button className={styles.aboutUs}>CONTACT US</button>
            <button className={styles.aboutUs}>SEARCH</button>
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

export default TopHeader;
