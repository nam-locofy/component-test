import styles from "./TripMenus.module.css";

const TripMenus = ({ className = "" }) => {
  return (
    <div className={[styles.tripMenus, className].join(" ")}>
      <div className={styles.logo}>
        <img
          className={styles.hotelIcon}
          loading="lazy"
          alt=""
          src="/hotel-icon.svg"
        />
        <div className={styles.subheaderText}>
          <div className={styles.hotel}>Hotel</div>
        </div>
      </div>
      <div className={styles.attractions}>
        <div className={styles.attractionsIconWrapper}>
          <div className={styles.attractionsIcon}>
            <div className={styles.background} />
            <img
              className={styles.ticketIcon}
              loading="lazy"
              alt=""
              src="/ticket.svg"
            />
          </div>
        </div>
        <div className={styles.attractions1}>Attractions</div>
      </div>
      <div className={styles.logo1}>
        <img
          className={styles.eatsIcon}
          loading="lazy"
          alt=""
          src="/eats-icon.svg"
        />
        <div className={styles.eatsWrapper}>
          <div className={styles.eats}>Eats</div>
        </div>
      </div>
      <div className={styles.logo2}>
        <div className={styles.commuteIconWrapper}>
          <div className={styles.commuteIcon}>
            <div className={styles.background1} />
            <img
              className={styles.trainIcon}
              loading="lazy"
              alt=""
              src="/train.svg"
            />
          </div>
        </div>
        <div className={styles.commute}>Commute</div>
      </div>
      <div className={styles.taxi}>
        <button className={styles.taxiIcon}>
          <div className={styles.background2} />
          <img className={styles.taxiIcon1} alt="" src="/taxi.svg" />
        </button>
        <div className={styles.taxiWrapper}>
          <div className={styles.taxi1}>Taxi</div>
        </div>
      </div>
      <div className={styles.logo3}>
        <div className={styles.moviesIcon}>
          <div className={styles.background3} />
          <img className={styles.movieIcon} alt="" src="/movie.svg" />
        </div>
        <div className={styles.moviesWrapper}>
          <div className={styles.movies}>Movies</div>
        </div>
      </div>
    </div>
  );
};

TripMenus.propTypes = {
  className: PropTypes.string,
};

export default TripMenus;
