import { useMemo } from "react";
import styles from "./MobileApp.module.css";

const MobileApp = ({
  className = "",
  icongooglePlay1,
  googlePlay,
  propDisplay,
  propMinWidth,
}) => {
  const googlePlayStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={[styles.mobileApp, className].join(" ")}>
      <img className={styles.icongooglePlay1} alt="" src={icongooglePlay1} />
      <div className={styles.info}>
        <div className={styles.getItNow}>Get it now</div>
        <div className={styles.googlePlay} style={googlePlayStyle}>
          {googlePlay}
        </div>
      </div>
    </div>
  );
};

MobileApp.propTypes = {
  className: PropTypes.string,
  icongooglePlay1: PropTypes.string,
  googlePlay: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default MobileApp;
