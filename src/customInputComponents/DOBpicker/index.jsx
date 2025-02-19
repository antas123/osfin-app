import React, { useState } from "react";
import "./DOBPicker.css"; // Import the CSS file

const DOBPicker = () => {
  const [dob, setDob] = useState("");

  return (
    <div className="dob-container">
      <input
        type="date"
        id="dob"
        name="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
    </div>
  );
};

export default DOBPicker;
