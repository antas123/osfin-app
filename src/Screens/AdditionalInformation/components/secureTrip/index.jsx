import React from "react";
import styles from "./trip.module.css"; // Import the CSS module
import luggage from "../../../../assets/luggage.png";
import ambulance from "../../../../assets/ambulance.png";
import clock from "../../../../assets/clock.png";
import Card from "./Card";

const SecureTripBox = ({ setSecureTrip, step=2 }) => {
  const handleRadioChange = (value) => {
    setSecureTrip(value);
  };

  let data = [
    {
      icon: luggage,
      upperText: (
        <p className={styles.upperText}>
          <span>24 * 7</span> support
        </p>
      ),
      LowerText: <p className={styles.lowerText}>Baggage Assistance</p>,
    },
    {
      icon: ambulance,
      upperText: (
        <p className={styles.upperText}>
          Flat <span>$ 50,000</span>
        </p>
      ),
      LowerText: <p className={styles.lowerText}>Personal Accident</p>,
    },
    {
      icon: luggage,
      upperText: (
        <p className={styles.upperText}>
          Flat <span>$ 2,500</span>
        </p>
      ),
      LowerText: <p className={styles.lowerText}>Loss of checked in Baggage</p>,
    },
    {
      icon: clock,
      upperText: (
        <p className={styles.upperText}>
          Flat <span>$ 2,500</span>
        </p>
      ),
      LowerText: (
        <p className={styles.lowerText}>Delay of Checked in Baggage</p>
      ),
    },
  ];
  return (
    <div>
      <h3> {step === 3 ? "Your trip is Secured" : "Make your trip secured"}</h3>

      <div className={styles.container}>
        <p className={styles.priceText}>
          <span>360 $</span>/ Traveller (18% GST included)
        </p>
        <div className={styles.cardContainer}>
          {data.map((data, index) => (
            <Card
              key={index}
              icon={data.icon}
              upperText={data.upperText}
              LowerText={data.LowerText}
            />
          ))}
        </div>
      </div>
      {step !== 3 && (
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="secureTrip"
              onChange={() => handleRadioChange(true)}
            />
            <p style={{ margin: 0, marginLeft: 8 }}>Yes, Secure my trip</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
            <input
              type="radio"
              name="secureTrip"
              onChange={() => handleRadioChange(false)}
            />
            <p style={{ margin: 0, marginLeft: 8 }}>No, Don't Secure my trip</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecureTripBox;
