import Col from "./Col";
import PropTypes from "prop-types";
import styles from "./CardsContainer.module.css";

const CardsContainer = ({ className = "" }) => {
  return (
    <div className={[styles.cardsContainer, className].join(" ")}>
      <div className={styles.col1}>
        <img
          className={styles.pariscardIcon}
          loading="lazy"
          alt=""
          src="/pariscard@2x.png"
        />
      </div>
      <div className={styles.col2}>
        <div className={styles.greececard}>
          <img
            className={styles.greeceimageIcon}
            loading="lazy"
            alt=""
            src="/greeceimage@2x.png"
          />
          <div className={styles.greeceParent}>
            <b className={styles.greece}>Greece</b>
            <div className={styles.from}>from</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.div}>$1079</div>
          </div>
        </div>
      </div>
      <Col norwayImage="/norwayimage@2x.png" norway="Norway" prop="$895" />
      <Col
        norwayImage="/tuscanyimage@2x.png"
        norway="Tuscany"
        prop="$1245"
        propPadding="90px 50px"
        propWidth="94.8px"
      />
    </div>
  );
};

CardsContainer.propTypes = {
  className: PropTypes.string,
};

export default CardsContainer;
