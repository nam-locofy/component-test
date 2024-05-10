import styles from "./Widget.module.css";

const Widget = ({ className = "" }) => {
  return (
    <div className={[styles.widget, className].join(" ")}>
      <img className={styles.blackIcon} alt="" src="/black@2x.png" />
      <div className={styles.fridayWrapper}>
        <div className={styles.friday}>Friday</div>
      </div>
      <div className={styles.discountWrapper}>
        <div className={styles.discount}>
          <div className={styles.upToWrapper}>
            <div className={styles.upTo}>Up to</div>
          </div>
          <div className={styles.div}>59%</div>
          <div className={styles.offWrapper}>
            <div className={styles.off}>OFF</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <b className={styles.label}>Shop now</b>
        <div className={styles.regulararrowrightWrapper}>
          <img
            className={styles.regulararrowrightIcon}
            alt=""
            src="/regulararrowright.svg"
          />
        </div>
      </div>
      <div className={styles.closeButtonWrapper}>
        <div className={styles.closeButton}>
          <img className={styles.duotonexIcon} alt="" src="/duotonex.svg" />
        </div>
      </div>
    </div>
  );
};

Widget.propTypes = {
  className: PropTypes.string,
};

export default Widget;
