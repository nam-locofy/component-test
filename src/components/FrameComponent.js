import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.activeFiltersResultsWrapper, className].join(" ")}>
      <div className={styles.activeFiltersResults}>
        <div className={styles.activeFilters}>
          <div className={styles.activeFilters1}>Active Filters:</div>
          <div className={styles.activeFilters2}>
            <div className={styles.wingChair}>Electronics Devices</div>
            <img className={styles.duotonexIcon} alt="" src="/duotonex1.svg" />
          </div>
          <div className={styles.activeFilters3}>
            <div className={styles.wingChair1}>5 Star Rating</div>
            <img className={styles.duotonexIcon1} alt="" src="/duotonex1.svg" />
          </div>
        </div>
        <div className={styles.resultsFound}>
          <span>
            <span className={styles.span}>65,867</span>
          </span>
          <span className={styles.resultsFound1}>
            <span>{` `}</span>
            <span>Results found.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
