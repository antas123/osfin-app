import Step from "./components/CurrentStep";
import styles from "./progressbar.module.css";
import complete from "../../assets/stepComplete.png";

const ProgressBar = ({ step1Status, step2Status, step3Status }) => {
  const steps = [
    { number: 1, name: "Passenger Details", status: step1Status },
    { number: 2, name: "Additional Information", status: step2Status },
    { number: 3, name: "Review and Submit", status: step3Status },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {steps.map((step, index) => (
          <>
            {step.status === "complete" ? (
              <img key={step.number} src={complete} alt="" />
            ) : (
              <Step
                key={step.number}
                number={step.number}
                stepName={step.name}
                stepStatus={step.status}
              />
            )}
            {index < steps.length - 1 && (
              <div
                key={`bar-${index}`}
                className={`${styles.bar} ${
                  step.status === "complete" ? styles.complete : ""
                }`}
              ></div>
            )}
          </>
        ))}
      </div>
      <div className={styles.label}>
        {steps.map((step) => (
          <div key={step.number}>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>
              {step.name}
            </p>
            <p
              className={`${styles.pending} ${
                step.status === "complete" ? styles.complete : ""
              }`}
            >
              {step.status === "complete"
                ? "Complete"
                : step.status === "progress"
                ? "In progress"
                : "Pending"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;