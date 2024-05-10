import FlightMainContainer from "./FlightMainContainer";
import PropTypes from "prop-types";
import styles from "./SearchIcon1.module.css";

const SearchIcon1 = ({ className = "" }) => {
  return (
    <div className={[styles.searchIcon, className].join(" ")}>
      <div className={styles.mainContent}>
        <FlightMainContainer
          sIN="SIN"
          lAX="LAX"
          departOn="Depart on: "
          sep2021="7 Sep 2021"
        />
        <div className={styles.prepareForYour}>Prepare for your trip</div>
      </div>
      <FlightMainContainer
        sIN="MY"
        lAX="DUB"
        departOn="Depart on:"
        sep2021=" 9 Sep 2021"
        propBorder="1px solid var(--color-whitesmoke)"
        propPadding="var(--padding-xl) var(--padding-lgi)"
        propMarginLeft="-632.5px"
        propWidth="unset"
        propAlignSelf="stretch"
        propWidth1="unset"
        propWidth2="unset"
        propAlignSelf1="stretch"
      />
    </div>
  );
};

SearchIcon1.propTypes = {
  className: PropTypes.string,
};

export default SearchIcon1;
