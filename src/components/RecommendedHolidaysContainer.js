import RecCard from "./RecCard";
import PropTypes from "prop-types";
import styles from "./RecommendedHolidaysContainer.module.css";

const RecommendedHolidaysContainer = ({ className = "" }) => {
  return (
    <div className={[styles.recommendedHolidaysContainer, className].join(" ")}>
      <div className={styles.recTitle}>
        <h2 className={styles.recommendedHolidays}>Recommended Holidays</h2>
        <div className={styles.viewAllHolidaysParent}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright-2.svg"
          />
        </div>
      </div>
      <div className={styles.recCardsContainer}>
        <div className={styles.recCard1}>
          <img
            className={styles.unsplash5mv818tzxeoIcon}
            loading="lazy"
            alt=""
            src="/unsplash5mv818tzxeo@2x.png"
          />
          <div className={styles.holidayDetails}>
            <div className={styles.frameParent}>
              <div className={styles.baliParent}>
                <div className={styles.bali}>Bali</div>
                <div className={styles.d3n}>4D3N</div>
              </div>
              <div className={styles.containerHeader}>$899</div>
            </div>
          </div>
        </div>
        <RecCard
          switzerlandImage="/switzerlandimage@2x.png"
          swiss="Swiss"
          d5N="6D5N"
          prop="$900"
        />
        <RecCard
          switzerlandImage="/boracayimage@2x.png"
          swiss="Boracay"
          d5N="5D4N"
          prop="$699"
          propFilter="blur(26px)"
        />
        <RecCard
          switzerlandImage="/palawanimage@2x.png"
          swiss="Palawan"
          d5N="4D3N"
          prop="$789"
          propFilter="unset"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img
          className={styles.arrowRightIcon1}
          alt=""
          src="/arrowright-2.svg"
        />
      </div>
    </div>
  );
};

RecommendedHolidaysContainer.propTypes = {
  className: PropTypes.string,
};

export default RecommendedHolidaysContainer;
