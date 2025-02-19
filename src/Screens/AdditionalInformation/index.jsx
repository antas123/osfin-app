import React from "react";
import styles from "./styles.module.css";
import StepHeader from "../../components/StepHeader";
import Button from "../../customInputComponents/Button";
import BaggageDeatials from "./components/baggage";
import SecureTripBox from "./components/secureTrip";

const AdditionalInformation = ({ setScreenStatus, screenStatus, isLoggedIn, setIsLoggedIn , setSecureTrip}) => {
  const handleNext = () => {
    setScreenStatus({ ...screenStatus, step2: "complete", step3: "progress" });
  };

  const handleBack = () => {
    setScreenStatus({
      step1: "progress",
      step3: "pending",
      step2: "pending",
    });
  };

  const handleCancel = () => {
    localStorage.removeItem("passengers"); 
    localStorage.removeItem("contactDetails"); 
    setIsLoggedIn(false)
  };

  return (
    <div>
      <StepHeader text={"Additional Information"} step={2} />
      <BaggageDeatials />
      <SecureTripBox step={2} setSecureTrip={setSecureTrip}/>
      <div className={styles.container}>
        <p className={styles.cancelText} onClick={handleCancel}>Cancel</p>
        <div className={styles.buttonContainer}>
          <Button
            onClick={handleBack}
            color="black"
            backgroundColor="#F6F6F6"
            label="< Previous"
          />
          <Button onClick={handleNext} backgroundColor="black" label="Next" />
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
