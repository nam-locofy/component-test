import styles from "./SubscribeSection.module.css";

const SubscribeSection = ({ className = "" }) => {
  return (
    <div className={[styles.subscribeSection, className].join(" ")}>
      <img
        className={styles.subscribeSectionBackground}
        alt=""
        src="/subscribe-section-background@2x.png"
      />
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <b className={styles.formTitleSubtext}>subscribe to our newsletter</b>
          <h1 className={styles.formTitle}>Get weekly updates</h1>
        </div>
        <form className={styles.form}>
          <div className={styles.formFields}>
            <div className={styles.destinationNameInput}>
              <div className={styles.input}>
                <div className={styles.inactive}>
                  <div className={styles.muiautocompletetag}>
                    <div className={styles.chip}>
                      <div className={styles.container}>
                        <div className={styles.avatar}>
                          <div className={styles.op}>F</div>
                        </div>
                        <div className={styles.typography}>
                          <div className={styles.chip1}>Chip</div>
                        </div>
                        <img
                          className={styles.cancelIcon}
                          alt=""
                          src="/cancel-4.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.chip2}>
                      <div className={styles.container1}>
                        <div className={styles.avatar1}>
                          <div className={styles.op1}>F</div>
                        </div>
                        <div className={styles.typography1}>
                          <div className={styles.chip3}>Chip</div>
                        </div>
                        <img
                          className={styles.cancelIcon1}
                          alt=""
                          src="/cancel-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    className={styles.yourName}
                    placeholder="Your name"
                    type="text"
                  />
                  <div className={styles.muiAutocompleteIndicator}>
                    <div className={styles.iconbutton}>
                      <div className={styles.unstylediconbutton}>
                        <img
                          className={styles.closeIcon}
                          alt=""
                          src="/close.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.arrow}>
                    <img className={styles.arrowdropdownIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.nameInput}>
              <div className={styles.input1}>
                <div className={styles.inactive1}>
                  <div className={styles.muiautocompletetag1}>
                    <div className={styles.chip4}>
                      <div className={styles.container2}>
                        <div className={styles.avatar2}>
                          <div className={styles.op2}>F</div>
                        </div>
                        <div className={styles.typography2}>
                          <div className={styles.chip5}>Chip</div>
                        </div>
                        <img
                          className={styles.cancelIcon2}
                          alt=""
                          src="/cancel-4.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.chip6}>
                      <div className={styles.container3}>
                        <div className={styles.avatar3}>
                          <div className={styles.op3}>F</div>
                        </div>
                        <div className={styles.typography3}>
                          <div className={styles.chip7}>Chip</div>
                        </div>
                        <img
                          className={styles.cancelIcon3}
                          alt=""
                          src="/cancel-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    className={styles.emailAddress}
                    placeholder="Email address"
                    type="text"
                  />
                  <div className={styles.muiAutocompleteIndicator1}>
                    <div className={styles.iconbutton1}>
                      <div className={styles.unstylediconbutton1}>
                        <img
                          className={styles.closeIcon1}
                          alt=""
                          src="/close.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.arrow1}>
                    <img className={styles.arrowdropdownIcon1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formText}>
            <div className={styles.fillInYour}>
              Fill in your details to join the party!
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.unstyledbutton}>
              <div className={styles.button1}>submit</div>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

SubscribeSection.propTypes = {
  className: PropTypes.string,
};

export default SubscribeSection;
