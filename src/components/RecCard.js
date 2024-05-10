import { useMemo } from "react";
import styles from "./RecCard.module.css";

const RecCard = ({
  className = "",
  switzerlandImage,
  swiss,
  d5N,
  prop,
  propFilter,
}) => {
  const recCard2Style = useMemo(() => {
    return {
      filter: propFilter,
    };
  }, [propFilter]);

  return (
    <div
      className={[styles.recCard2, className].join(" ")}
      style={recCard2Style}
    >
      <img
        className={styles.switzerlandimageIcon}
        loading="lazy"
        alt=""
        src={switzerlandImage}
      />
      <div className={styles.holidayDetails}>
        <div className={styles.cardInfo}>
          <div className={styles.swissParent}>
            <div className={styles.swiss}>{swiss}</div>
            <div className={styles.d5n}>{d5N}</div>
          </div>
          <div className={styles.div}>{prop}</div>
        </div>
      </div>
    </div>
  );
};

RecCard.propTypes = {
  className: PropTypes.string,
  switzerlandImage: PropTypes.string,
  swiss: PropTypes.string,
  d5N: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propFilter: PropTypes.any,
};

export default RecCard;
