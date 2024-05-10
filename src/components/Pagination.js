import styles from "./Pagination.module.css";

const Pagination = ({ className = "" }) => {
  return (
    <div className={[styles.pagination, className].join(" ")}>
      <div className={styles.arrowButton}>
        <img
          className={styles.regulararrowleftIcon}
          alt=""
          src="/regulararrowleft.svg"
        />
      </div>
      <div className={styles.pages}>
        <div className={styles.paginationitem}>
          <div className={styles.div}>01</div>
        </div>
        <div className={styles.paginationitem1}>
          <div className={styles.div1}>02</div>
        </div>
        <div className={styles.paginationitem2}>
          <div className={styles.div2}>03</div>
        </div>
        <div className={styles.paginationitem3}>
          <div className={styles.div3}>04</div>
        </div>
        <div className={styles.paginationitem4}>
          <div className={styles.div4}>05</div>
        </div>
        <div className={styles.paginationitem5}>
          <div className={styles.div5}>06</div>
        </div>
      </div>
      <div className={styles.arrowButton1}>
        <img
          className={styles.regulararrowrightIcon}
          alt=""
          src="/regulararrowright1.svg"
        />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
};

export default Pagination;
