import { useState, useEffect } from "react";
import styles from "../styles.module.css"; // Import the CSS module

const PassengerListing = () => {
  const [passengers, setPassengers] = useState([]);
  const [contactDetails, setContactDetails] = useState({
    phone: "",
    email: "",
  });

  useEffect(() => {
    const storedPassengers =
      JSON.parse(localStorage.getItem("passengers")) || [];
    const storedContact = JSON.parse(
      localStorage.getItem("contactDetails")
    ) || { phone: "", email: "" };

    setPassengers(storedPassengers);
    setContactDetails(storedContact);
  }, []);

  return (
    <div>
      <p className={styles.passengerDetailsHeading}>Passenger Details</p>
      {passengers.length > 0 ? (
        <div className={styles.passengerListContainer}>
          {passengers.map((passenger, index) => (
            <div key={index} className={styles.passengerItem}>
              <div className={styles.passengerField}>
                <p className={styles.passengerLabel}>Full Name</p>
                <p className={styles.passengerValue}>{passenger.name}</p>
              </div>
              <div className={styles.passengerField}>
                <p className={styles.passengerLabel}>Date of Birth</p>
                <p className={styles.passengerValue}>{passenger.age}</p>
              </div>
              <div className={styles.passengerField}>
                <p className={styles.passengerLabel}>Gender</p>
                <p className={styles.passengerValue}>{passenger.gender}</p>
              </div>
              <div className={styles.passengerField}>
                <p className={styles.passengerLabel}>Phone No</p>
                <p className={styles.passengerValue}>{contactDetails.phone}</p>
              </div>
              <div className={styles.passengerField}>
                <p className={styles.passengerLabel}>Email</p>
                <p className={styles.passengerValue}>{contactDetails.email}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No passenger details found.</p>
      )}
    </div>
  );
};

export default PassengerListing;