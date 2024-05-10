import { useMemo } from "react";
import styles from "./Product2.module.css";

const Product2 = ({
  className = "",
  image,
  hOT,
  regularStar4,
  prop,
  dELL215InchFullHDMonitorE,
  prop1,
  propBackgroundColor,
  propPadding,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const badgeStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const hOTStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={[styles.product, className].join(" ")}>
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.badge} style={badgeStyle}>
          <div className={styles.hot} style={hOTStyle}>
            {hOT}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.starParent}>
          <div className={styles.star}>
            <img
              className={styles.regularstarIcon}
              alt=""
              src="/regularstar.svg"
            />
            <img
              className={styles.regularstarIcon1}
              alt=""
              src="/regularstar.svg"
            />
            <img
              className={styles.regularstarIcon2}
              alt=""
              src="/regularstar.svg"
            />
            <img
              className={styles.regularstarIcon3}
              alt=""
              src="/regularstar.svg"
            />
            <img
              className={styles.regularstarIcon4}
              alt=""
              src={regularStar4}
            />
          </div>
          <div className={styles.div} style={divStyle}>
            {prop}
          </div>
        </div>
        <div className={styles.dell215Inch}>{dELL215InchFullHDMonitorE}</div>
        <div className={styles.price}>
          <div className={styles.div1}>$865.99</div>
          <div className={styles.div2} style={div1Style}>
            {prop1}
          </div>
        </div>
      </div>
    </div>
  );
};

Product2.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  hOT: PropTypes.string,
  regularStar4: PropTypes.string,
  prop: PropTypes.string,
  dELL215InchFullHDMonitorE: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Product2;
