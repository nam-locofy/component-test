import { useMemo } from "react";
import styles from "./HotelCard.module.css";

const HotelCard1 = ({
  className = "",
  discoveryShoresImage,
  storyBeachfrontSuite,
  discoveryShores,
  night,
  emptySpaceVector,
  separator,
  reviews,
  propMinWidth,
  propWidth,
  propWidth1,
  propPadding,
  propMinWidth1,
}) => {
  const storyBeachfrontSuiteStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const logoFrameStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const logoFrame1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const reviewsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.hotelCard2, className].join(" ")}>
      <div className={styles.hotelCard}>
        <img
          className={styles.discoveryShoresImage}
          loading="lazy"
          alt=""
          src={discoveryShoresImage}
        />
        <div className={styles.frameParent}>
          <div className={styles.storyBeachfrontSuiteParent}>
            <div
              className={styles.storyBeachfrontSuite}
              style={storyBeachfrontSuiteStyle}
            >
              {storyBeachfrontSuite}
            </div>
            <img className={styles.videoIcon} alt="" src="/video.svg" />
          </div>
          <div className={styles.logoFrame} style={logoFrameStyle}>
            <h3 className={styles.discoveryShores}>{discoveryShores}</h3>
          </div>
          <div className={styles.logoFrame1} style={logoFrame1Style}>
            <div className={styles.night}>{night}</div>
          </div>
          <div className={styles.vectorFrameParent} style={frameDivStyle}>
            <div className={styles.vectorFrame}>
              <img
                className={styles.emptySpaceVector}
                alt=""
                src={emptySpaceVector}
              />
              <div className={styles.separator}>{separator}</div>
            </div>
            <div className={styles.reviews} style={reviewsStyle}>
              {reviews}
            </div>
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </div>
    </div>
  );
};

HotelCard1.propTypes = {
  className: PropTypes.string,
  discoveryShoresImage: PropTypes.string,
  storyBeachfrontSuite: PropTypes.string,
  discoveryShores: PropTypes.string,
  night: PropTypes.string,
  emptySpaceVector: PropTypes.string,
  separator: PropTypes.string,
  reviews: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default HotelCard1;
