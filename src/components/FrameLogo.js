import HotelCard11 from "./HotelCard1";
import HotelCard1 from "./HotelCard";
import PropTypes from "prop-types";
import styles from "./FrameLogo.module.css";

const FrameLogo = ({ className = "" }) => {
  return (
    <div className={[styles.frameLogo, className].join(" ")}>
      <div className={styles.popularStays}>
        <div className={styles.popularStaysParent}>
          <h2 className={styles.popularStays1}>Popular Stays</h2>
          <div className={styles.vector}>
            <div className={styles.viewAllStaysButton}>
              <div className={styles.viewAllStays}>View all stays</div>
              <img
                className={styles.arrowRightIcon}
                alt=""
                src="/arrowright-4.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.hotelCards}>
          <div className={styles.buttonExplore}>
            <HotelCard11
              matterhornSuitesImage="/matterhorn-suites-image@2x.png"
              entireBungalow="Entire bungalow"
              matterhornSuites="Matterhorn Suites"
              night="$575/night"
              emptyArrow="4.9"
              reviews="(60 reviews)"
            />
            <HotelCard1
              discoveryShoresImage="/discovery-shores-image@2x.png"
              storyBeachfrontSuite="2-Story beachfront suite"
              discoveryShores="Discovery Shores"
              night="$360/night"
              emptySpaceVector="/vector.svg"
              separator="4.8"
              reviews="(116 reviews)"
            />
            <HotelCard1
              discoveryShoresImage="/arctic-hut-image@2x.png"
              storyBeachfrontSuite="Single deluxe hut"
              discoveryShores="Arctic Hut "
              night="$420/night"
              emptySpaceVector="/vector-2.svg"
              separator="4.7"
              reviews="(78 reviews)"
              propMinWidth="100px"
              propWidth="220px"
              propWidth1="220px"
              propPadding="unset"
              propMinWidth1="74px"
            />
            <HotelCard11
              matterhornSuitesImage="/lake-louise-image@2x.png"
              entireBungalow="Deluxe King Room"
              matterhornSuites="Lake Louise Inn"
              night="$244/night"
              emptyArrow="4.6"
              reviews="(63 reviews)"
              propMinWidth="106px"
              propBorder="1px solid var(--color-lavender-100)"
            />
          </div>
        </div>
        <div className={styles.mobileViewAllStays}>
          <div className={styles.viewAllStays1}>View all stays</div>
          <img
            className={styles.arrowRightIcon1}
            alt=""
            src="/arrowright-4.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameLogo.propTypes = {
  className: PropTypes.string,
};

export default FrameLogo;
