import styles from "./Footer1.module.css";

const Footer1 = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.fickleflightBio}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.fickleFlightIs}>
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <div className={styles.facebookIconParent}>
          <img
            className={styles.facebookIcon}
            loading="lazy"
            alt=""
            src="/facebook-icon.svg"
          />
          <img
            className={styles.instagramIcon}
            loading="lazy"
            alt=""
            src="/instagram-icon.svg"
          />
          <img
            className={styles.twitterIcon}
            loading="lazy"
            alt=""
            src="/twitter-icon.svg"
          />
        </div>
      </div>
      <div className={styles.seperator} />
      <div className={styles.footerLinks}>
        <div className={styles.company}>
          <div className={styles.company1}>Company</div>
          <div className={styles.supportFrame}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.news}>News</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.howWeWork}>How we work</div>
          </div>
        </div>
        <div className={styles.support}>
          <div className={styles.support1}>Support</div>
          <div className={styles.accountParent}>
            <div className={styles.account}>Account</div>
            <div className={styles.supportCenter}>Support Center</div>
            <div className={styles.faq}>FAQ</div>
            <div className={styles.accessibility}>Accessibility</div>
          </div>
        </div>
        <div className={styles.more}>
          <div className={styles.more1}>More</div>
          <div className={styles.covidAdvisoryParent}>
            <div className={styles.covidAdvisory}>Covid Advisory</div>
            <div className={styles.airlineFees}>Airline Fees</div>
            <div className={styles.tips}>Tips</div>
            <div className={styles.quarantineRules}>Quarantine Rules</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
