import React from "react";
import styles from "../styles.module.css"; // Import the CSS module

const FlightDetails = () => {
  return (
    <div style={{marginTop:25}} >
      <p className={styles.flightDetailsText}>
        <span className={styles.flightDetailsBoldText}>Indigo Airline . </span>
        IX3486
        <span className={styles.aircraftType}>Airbus A350-900</span>
      </p>
      <div className={styles.flightTimingsContainer}>
        <div className={styles.timeDisplay}>
          <p>12:10</p>
          <p>06:10</p>
        </div>
        <div className={styles.flightPath}>
          <div className={styles.circle}></div>
          <div className={styles.dottedLine}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.airportDetails}>
          <p>
            <span>New Delhi .</span>
            Indira Gandhi Airport, Terminal, Terminal T3
          </p>
          <p>2h 20m</p>
          <p>
            <span>Mumbai .</span>
            Chhatrapati Shivaji International Airport, Terminal T2
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;