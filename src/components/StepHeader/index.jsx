import styles from "../../Screens/PassengerDetails/step1.module.css";

const StepHeader = ({ text = "Passenger Details", step }) => {
  return (
    <div>
      <p className={styles.stepText}>{step}/3 STEP</p>
      <h2 className={styles.stepHeader}>{text}</h2>
    </div>
  );
};

export default StepHeader;
