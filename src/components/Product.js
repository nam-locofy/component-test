import { useMemo } from "react";
import styles from "./Product.module.css";

const Product = ({
  className = "",
  image,
  oFF,
  regularStar4,
  prop,
  dELL215InchFullHDMonitorE,
  prop1,
  dataAggregator,
  propBackgroundColor,
  propColor,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const badge1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const oFFStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const div4Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const dataAggregatorStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={[styles.product, className].join(" ")}>
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.badge} style={badge1Style}>
          <div className={styles.off} style={oFFStyle}>
            {oFF}
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
          <div className={styles.div}>{prop}</div>
        </div>
        <div className={styles.dell215Inch}>{dELL215InchFullHDMonitorE}</div>
        <div className={styles.price}>
          <div className={styles.div1} style={div4Style}>
            {prop1}
          </div>
          <div className={styles.dataAggregator} style={dataAggregatorStyle}>
            {dataAggregator}
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  oFF: PropTypes.string,
  regularStar4: PropTypes.string,
  prop: PropTypes.string,
  dELL215InchFullHDMonitorE: PropTypes.string,
  prop1: PropTypes.string,
  dataAggregator: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default Product;
