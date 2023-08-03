import { useMemo } from "react";
import styles from "./info-card.module.css";
const InfoCard = ({
  homeSaleRentId,
  homeSaleRentText,
  propPadding,
  propWidth,
}) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  return (
    <div className={styles.sellYourHome} style={sellYourHomeStyle}>
      <div className={styles.contents}>
        <img className={styles.icon} alt="" src={homeSaleRentId} />
        <div className={styles.contents}>
          <div className={styles.sellYourHome1}>{homeSaleRentText}</div>
          <div className={styles.weDoA}>
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div className={styles.readMore}>Read more</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
