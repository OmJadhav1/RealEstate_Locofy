import InfoCard from "./info-card";
import styles from "./feature-container.module.css";
const FeatureContainer = () => {
  return (
    <div className={styles.propertiesByAreaFeatureCar}>
      <div className={styles.areaContent}>
        <div className={styles.areaLabels}>
          <div className={styles.areaTitle}>Properties by Area</div>
          <div className={styles.areaSubtitle}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.propertiesRow}>
          <InfoCard
            homeSaleRentId="/icon.svg"
            homeSaleRentText="Sell your home"
          />
          <InfoCard
            homeSaleRentId="/icon1.svg"
            homeSaleRentText="Rent your home"
            propPadding="var(--padding-3xl) var(--padding-base)"
            propWidth="312px"
          />
          <InfoCard
            homeSaleRentId="/icon2.svg"
            homeSaleRentText="Buy a home"
            propPadding="22px 80px"
            propWidth="unset"
          />
          <InfoCard
            homeSaleRentId="/icon3.svg"
            homeSaleRentText="Free marketing"
            propPadding="var(--padding-3xl) var(--padding-xl)"
            propWidth="312px"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;
