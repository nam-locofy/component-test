import { useMemo } from "react";
import styles from "./FlightMainContainer.module.css";

const FlightMainContainer = ({
  className = "",
  sIN,
  lAX,
  departOn,
  sep2021,
  propBorder,
  propPadding,
  propMarginLeft,
  propWidth,
  propAlignSelf,
  propWidth1,
  propWidth2,
  propAlignSelf1,
}) => {
  const flightMainContainerStyle = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
      marginLeft: propMarginLeft,
    };
  }, [propBorder, propPadding, propMarginLeft]);

  const toAndFromStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const lAXStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const reviewSectionStyle = useMemo(() => {
    return {
      width: propWidth2,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth2, propAlignSelf1]);

  return (
    <div
      className={[styles.flightMainContainer, className].join(" ")}
      style={flightMainContainerStyle}
    >
      <div className={styles.toAndFrom} style={toAndFromStyle}>
        <h3 className={styles.sin}>{sIN}</h3>
        <div className={styles.title}>
          <img
            className={styles.durationIcon}
            loading="lazy"
            alt=""
            src="/duration.svg"
          />
        </div>
        <h3 className={styles.lax} style={lAXStyle}>
          {lAX}
        </h3>
      </div>
      <div className={styles.reviewSection} style={reviewSectionStyle}>
        <div className={styles.departOn7Container}>
          <b>{departOn}</b>
          <span>{sep2021}</span>
        </div>
      </div>
    </div>
  );
};

FlightMainContainer.propTypes = {
  className: PropTypes.string,
  sIN: PropTypes.string,
  lAX: PropTypes.string,
  departOn: PropTypes.string,
  sep2021: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propPadding: PropTypes.any,
  propMarginLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
  propAlignSelf1: PropTypes.any,
};

export default FlightMainContainer;
