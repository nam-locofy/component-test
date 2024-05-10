import styles from "./MiddleNav.module.css";

const MiddleNav = ({ className = "" }) => {
  return (
    <div className={[styles.middleNav, className].join(" ")}>
      <div className={styles.logo}>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <div className={styles.cliconWrapper}>
          <b className={styles.clicon}>CLICON</b>
        </div>
      </div>
      <div className={styles.searchForAnythingParent}>
        <div className={styles.searchForAnything}>Search for anything...</div>
        <img
          className={styles.regularmagnifyingglassIcon}
          alt=""
          src="/regularmagnifyingglass.svg"
        />
      </div>
      <div className={styles.iconsWrapper}>
        <div className={styles.icons}>
          <div className={styles.shoppingcartsimple}>
            <img className={styles.vectorIcon} alt="" />
            <div className={styles.shoppingcartsimpleInner}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
                <div className={styles.wrapper}>
                  <div className={styles.div}>2</div>
                </div>
              </div>
            </div>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector1.svg" />
            </div>
          </div>
          <img className={styles.heartIcon} alt="" src="/heart.svg" />
          <img
            className={styles.regularuserIcon}
            alt=""
            src="/regularuser.svg"
          />
        </div>
      </div>
    </div>
  );
};

MiddleNav.propTypes = {
  className: PropTypes.string,
};

export default MiddleNav;
