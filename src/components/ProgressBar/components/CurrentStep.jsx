import styles from "../progressbar.module.css";

const Step = ({ number, stepName, stepStatus }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className={`${styles.stepCircle} ${
          stepStatus === "complete"
            ? styles.complete
            : stepStatus === "progress"
            ? styles.progress
            : ""
        }`}
      >
        {number}
      </div>
    </div>
  );
};

export default Step;