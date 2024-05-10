import { useMemo } from "react";
import styles from "./HotelCard1.module.css";

const HotelCard11 = ({
  className = "",
  matterhornSuitesImage,
  entireBungalow,
  matterhornSuites,
  night,
  emptyArrow,
  reviews,
  propMinWidth,
  propBorder,
}) => {
  const entireBungalowStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const moreDetailsButtonStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className={[styles.hotelCard1, className].join(" ")}>
      <div className={styles.hotelCard}>
        <img
          className={styles.matterhornSuitesImage}
          loading="lazy"
          alt=""
          src={matterhornSuitesImage}
        />
        <div className={styles.buttonMoreDetailsParent}>
          <div className={styles.buttonMoreDetails}>
            <div className={styles.vector}>
              <div
                className={styles.entireBungalow}
                style={entireBungalowStyle}
              >
                {entireBungalow}
              </div>
              <img
                className={styles.videoIcon}
                loading="lazy"
                alt=""
                src="/video.svg"
              />
            </div>
            <h3 className={styles.matterhornSuites}>{matterhornSuites}</h3>
          </div>
          <div className={styles.night}>{night}</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.inputFieldVectorParent}>
            <img
              className={styles.inputFieldVector}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.emptyArrow}>{emptyArrow}</div>
          </div>
          <div className={styles.reviews}>{reviews}</div>
        </div>
        <button
          className={styles.moreDetailsButton}
          style={moreDetailsButtonStyle}
        >
          <div className={styles.button}>More details</div>
        </button>
      </div>
    </div>
  );
};

HotelCard11.propTypes = {
  className: PropTypes.string,
  matterhornSuitesImage: PropTypes.string,
  entireBungalow: PropTypes.string,
  matterhornSuites: PropTypes.string,
  night: PropTypes.string,
  emptyArrow: PropTypes.string,
  reviews: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propBorder: PropTypes.any,
};

export default HotelCard11;
