import { useCallback } from "react";
import styles from "./TopHeader.module.css";

const TopHeader = ({ className = "" }) => {
  const onSearchTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProfilePictureIconClick = useCallback(() => {
    window.location.href = "mailto:abc@xyz.com";
  }, []);

  return (
    <header className={[styles.topHeader, className].join(" ")}>
      <div className={styles.topContainer}>
        <div className={styles.footerSection}>
          <div className={styles.fickleflightLogo}>
            <img
              className={styles.symbolsIcon}
              loading="lazy"
              alt=""
              src="/symbols.svg"
            />
          </div>
        </div>
        <img
          className={styles.hamburgerMenuIcon}
          alt=""
          src="/hamburgermenu@2x.png"
        />
        <div className={styles.shareYourTravelsForm}>
          <div className={styles.formHeader}>
            <div className={styles.explore}>Explore</div>
          </div>
          <div className={styles.formHeader1}>
            <div className={styles.search} onClick={onSearchTextClick}>
              Search
            </div>
          </div>
          <div className={styles.formHeader2}>
            <div className={styles.hotels}>Hotels</div>
          </div>
          <div className={styles.formHeader3}>
            <div className={styles.offers}>Offers</div>
          </div>
          <div className={styles.formTitle}>
            <div className={styles.input}>
              <img
                className={styles.notificationBellIcon}
                loading="lazy"
                alt=""
                src="/notification-bell@2x.png"
              />
            </div>
            <img
              className={styles.profilePictureIcon}
              loading="lazy"
              alt=""
              src="/profile-picture@2x.png"
              onClick={onProfilePictureIconClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

TopHeader.propTypes = {
  className: PropTypes.string,
};

export default TopHeader;
