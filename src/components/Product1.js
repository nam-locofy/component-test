import { useMemo } from "react";
import styles from "./Product1.module.css";

const Product1 = ({
  className = "",
  image,
  regularStar4,
  prop,
  dELL215InchFullHDMonitorE,
  prop1,
  propMinWidth,
  propMinWidth1,
}) => {
  const div2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div3Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.product, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
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
          <div className={styles.div} style={div2Style}>
            {prop}
          </div>
        </div>
        <div className={styles.dell215Inch}>{dELL215InchFullHDMonitorE}</div>
        <div className={styles.price}>
          <div className={styles.div1}>$865.99</div>
          <div className={styles.div2} style={div3Style}>
            {prop1}
          </div>
        </div>
      </div>
    </div>
  );
};

Product1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  regularStar4: PropTypes.string,
  prop: PropTypes.string,
  dELL215InchFullHDMonitorE: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Product1;
