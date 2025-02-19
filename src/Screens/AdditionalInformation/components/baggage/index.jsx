import React from "react";
import styles from "./baggage.module.css"; // Import the CSS module
import check from "../../../../assets/check.png";
import suitcase from "../../../../assets/Suitcase.png";
import luggage from "../../../../assets/luggage.png";
import info from "../../../../assets/info.png";

const BaggageDetails = ({ step }) => {
  return (
    <div>
      <h3>Baggage Options</h3>

      <div
        style={{ backgroundColor: step === 3 ? "#ECEFFF" : "#F6F6F6" }}
        className={styles.container}
      >
        <div className={styles.option}>
          <img height={24} width={24} src={check} alt="check" />
          <p className={styles.header}>
            <span>Included -</span> Baggage per person
          </p>
        </div>

        <div className={styles.baggageOptions}>
          <div className={styles.option}>
            <img height={24} width={24} src={suitcase} alt="cabin baggage" />
            <p>
              <span>Cabin Baggage</span> 7 kgs (1 piece only) / Adult
            </p>
          </div>

          <div className={styles.option}>
            <img height={24} width={24} src={luggage} alt="check-in baggage" />
            <p>
              <span>Check-In Baggage</span> 15 Kgs (1 piece only) / Adult
            </p>
          </div>
        </div>
        {!step === 3 && (
          <div className={styles.infoBox}>
            <img src={info} height={24} width={24} alt="info" />
            <div>
              <p>One-way Trip Combination</p>
              <p>
                This trip combines 2 independent one-way with separate terms for
                changes. For more information, see our Terms and Conditions
                here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BaggageDetails;
