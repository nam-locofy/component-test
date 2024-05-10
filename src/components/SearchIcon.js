import styles from "./SearchIcon.module.css";

const SearchIcon = ({ className = "" }) => {
  return (
    <div className={[styles.searchIcon, className].join(" ")}>
      <b className={styles.planYourNext}>Plan your next trip</b>
      <div className={styles.filtersButton}>
        <div className={styles.filterDropdown}>
          <h2 className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </h2>
        </div>
        <div className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </div>
      </div>
    </div>
  );
};

SearchIcon.propTypes = {
  className: PropTypes.string,
};

export default SearchIcon;
