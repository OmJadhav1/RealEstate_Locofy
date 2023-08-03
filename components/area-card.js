import { useMemo } from "react";
import Link from "next/link";
import styles from "./area-card.module.css";
const AreaCard = ({
  cityName,
  propBackgroundImage,
  propPadding,
  propBoxSizing,
}) => {
  const card11Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propBackgroundImage, propPadding, propBoxSizing]);

  return (
    <Link className={styles.card1} href="/" style={card11Style}>
      <div className={styles.text}>
        <div className={styles.centerville}>{cityName}</div>
        <div className={styles.listings}>25 listings</div>
      </div>
    </Link>
  );
};

export default AreaCard;
