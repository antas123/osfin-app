import StepHeader from "../../components/StepHeader";
import BaggageDetails from "../AdditionalInformation/components/baggage";
import FlightDetails from "./components/FlightDetails";
import PassengerListing from "./components/PassengersListing";
import styles from "./styles.module.css";
import Button from "../../customInputComponents/Button";
import { useEffect } from "react";
import SecureTripBox from "../AdditionalInformation/components/secureTrip";

const ReviewStep = ({ setScreenStatus, screenStatus,isLoggedIn, setIsLoggedIn, secureTrip  }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const handleNext = () => {
    setScreenStatus({ ...screenStatus, step3: "complete" });
  };

  const handleBack = () => {
    setScreenStatus({
      step1: "complete",
      step3: "pending",
      step2: "progress",
    });
  };
  const handleCancel = () => {
    localStorage.removeItem("passengers"); 
    localStorage.removeItem("contactDetails"); 
    setIsLoggedIn(false)
  };

  return (
    <div>
      <StepHeader text="Review and Submit" step={3} />
      <FlightDetails />
      <PassengerListing />
      <BaggageDetails step={3} />
      {
        secureTrip && <SecureTripBox step={3}/>
      }
      <div style={{ marginTop: 20 }} className={styles.container}>
        <p className={styles.cancelText}  onClick={handleCancel} >Cancel</p>
        <div className={styles.buttonContainer}>
          <Button
            onClick={handleBack}
            color="black"
            backgroundColor="#F6F6F6"
            label="< Previous"
          />
          <Button onClick={handleNext} backgroundColor="black" label="Submit" />
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
