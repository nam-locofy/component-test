import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ className = "" }) => {
  return (
    <div className={[styles.breadcrumb, className].join(" ")}>
      <div className={styles.breadcumb}>
        <img
          className={styles.regularhouseIcon}
          alt=""
          src="/regularhouse.svg"
        />
        <div className={styles.home}>Home</div>
        <div className={styles.regularcaretrightWrapper}>
          <img
            className={styles.regularcaretrightIcon}
            alt=""
            src="/regularcaretright.svg"
          />
        </div>
        <div className={styles.shop}>Shop</div>
        <div className={styles.regularcaretrightContainer}>
          <img
            className={styles.regularcaretrightIcon1}
            alt=""
            src="/regularcaretright.svg"
          />
        </div>
        <div className={styles.shopGrid}>Shop Grid</div>
        <div className={styles.regularcaretrightFrame}>
          <img
            className={styles.regularcaretrightIcon2}
            alt=""
            src="/regularcaretright.svg"
          />
        </div>
        <div className={styles.shopGrid1}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon3}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid2}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon4}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid3}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon5}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.shopGrid4}>Shop Grid</div>
        <img
          className={styles.regularcaretrightIcon6}
          alt=""
          src="/regularcaretright.svg"
        />
        <div className={styles.behicleAccessories}>Electronics Devices</div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumb;
