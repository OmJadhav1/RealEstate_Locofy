import Head from "next/head";
import Header from "../components/header";
import HeroPropertiesGrid from "../components/hero-properties-grid";
import Footer from "../components/footer";
import styles from "./index.module.css";
const PropertiesGridView = () => {
  return (
    <>
      <Head>
        <title>Real Estate Rental</title>
        <meta
          name="description"
          content="Rent the best properties out there."
        />
      </Head>
      <div className={styles.propertiesGridView}>
        <Header />
        <div className={styles.category}>
          <div className={styles.properties}>
            <div className={styles.properties1}>Properties</div>
            <div className={styles.homePropertiesContainer}>
              <span>{`Home / `}</span>
              <span className={styles.properties2}>Properties</span>
            </div>
          </div>
        </div>
        <HeroPropertiesGrid />
        <Footer
          imageIds="/houseline1.svg"
          smallImageIds="/social-media-logo.svg"
          mediumImageIds="/social-media-logo1.svg"
          smallImageIds2="/social-media-logo2.svg"
          smallImageIds3="/social-media-logo3.svg"
          largeImageIds="/social-media-logo4.svg"
        />
      </div>
    </>
  );
};

export default PropertiesGridView;
