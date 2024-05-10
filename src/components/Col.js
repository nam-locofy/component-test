import { useMemo } from "react";
import styles from "./Col.module.css";

const Col = ({
  className = "",
  norwayImage,
  norway,
  prop,
  propPadding,
  propWidth,
}) => {
  const col3Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const norwayStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.col3, className].join(" ")} style={col3Style}>
      <div className={styles.norwaycard}>
        <img
          className={styles.norwayimageIcon}
          loading="lazy"
          alt=""
          src={norwayImage}
        />
        <div className={styles.norwayParent}>
          <b className={styles.norway} style={norwayStyle}>
            {norway}
          </b>
          <div className={styles.from}>from</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.div}>{prop}</div>
        </div>
      </div>
    </div>
  );
};

Col.propTypes = {
  className: PropTypes.string,
  norwayImage: PropTypes.string,
  norway: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Col;
