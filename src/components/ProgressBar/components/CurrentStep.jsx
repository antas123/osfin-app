const Step = ({ number, stepName, stepStatus }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: 34,
          height: 36,
          borderRadius: "50%",
          border: "1px solid #D9D9D9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: stepStatus === "pending" ? "#D9D9D9" : "black"
        }}
      >
        {number}
      </div>
    </div>
  );
};

export default Step;
