import { useEffect, useState } from "react";
import ticket from "../../assets/ticket.png";
import StepHeader from "../../components/StepHeader";
import Button from "../../customInputComponents/Button";
import Input from "../../customInputComponents/Input";
import PassengerList from "./components/SavedPassengerList";
import styles from "./step1.module.css";
import { validatePassengers, handlePassengerSelection } from "./helper";

const PassengerDetails = ({ setScreenStatus, screenStatus, isLoggedIn, setIsLoggedIn }) => {
  const savedPassengers = JSON.parse(localStorage.getItem("passengers")) || [
    { name: "", age: "", gender: "" },
  ];
  const savedContactDetails = JSON.parse(
    localStorage.getItem("contactDetails")
  ) || {
    phone: "",
    email: "",
  };

  const handleCancel = () => {
    localStorage.removeItem("passengers"); 
    localStorage.removeItem("contactDetails"); 
    setIsLoggedIn(false)
  };
  

  const [passengers, setPassengers] = useState(savedPassengers);
  const [contactDetails, setContactDetails] = useState(savedContactDetails);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("passengers", JSON.stringify(passengers));
  }, [passengers]);

  useEffect(() => {
    localStorage.setItem("contactDetails", JSON.stringify(contactDetails));
  }, [contactDetails]);

  useEffect(() => {
    setScreenStatus({ ...screenStatus, step1: "progress", step2: "pending" });
  }, []);

  const handleClick = () => {
    const newErrors = validatePassengers(passengers, contactDetails);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setScreenStatus({ ...screenStatus, step1: "complete", step2: "progress" });
    console.log("Form Submitted", { passengers, contactDetails });
  };

  const handleAddPassenger = () => {
    setPassengers([...passengers, { name: "", age: "", gender: "" }]);
  };

  const handleDeletePassenger = (index) => {
    if (passengers.length === 1) return;
    setPassengers(passengers.filter((_, i) => i !== index));
  };

  const handlePassengerChange = (index, field, value) => {
    setPassengers(
      passengers.map((passenger, i) =>
        i === index ? { ...passenger, [field]: value } : passenger
      )
    );
  };

  const handleSelectPassenger = (selectedPassenger, isChecked) => {
    setPassengers(
      handlePassengerSelection(passengers, selectedPassenger, isChecked)
    );
  };

  return (
    <div>
      <img src={ticket} alt="Ticket" />
      <StepHeader step={1} />
      {isLoggedIn && (
        <PassengerList onSelectPassenger={handleSelectPassenger} />
      )}

      <div>
        {passengers.map((passenger, index) => (
          <div key={index}>
            <p className={styles.detailsHeader}>
              Passenger {index + 1} Details
            </p>
            <div className={styles.passengerContainer}>
              <Input
                label="Full Name"
                placeholder="Name"
                name={`name_${index}`}
                value={passenger.name}
                onChange={(v) => handlePassengerChange(index, "name", v)}
                error={errors[`name_${index}`]}
              />
              <Input
                type="date"
                label="Date of Birth"
                name={`age_${index}`}
                value={passenger.age}
                onChange={(v) => handlePassengerChange(index, "age", v)}
                error={errors[`age_${index}`]}
              />
              <div className={styles.genderContainer}>
                <p>Gender</p>
                <div className={styles.radioGroup}>
                  <label>
                    <input
                      type="radio"
                      name={`gender_${index}`}
                      value="Male"
                      checked={passenger.gender === "Male"}
                      onChange={(e) =>
                        handlePassengerChange(index, "gender", e.target.value)
                      }
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`gender_${index}`}
                      value="Female"
                      checked={passenger.gender === "Female"}
                      onChange={(e) =>
                        handlePassengerChange(index, "gender", e.target.value)
                      }
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`gender_${index}`}
                      value="Others"
                      checked={passenger.gender === "Others"}
                      onChange={(e) =>
                        handlePassengerChange(index, "gender", e.target.value)
                      }
                    />
                    Others
                  </label>
                </div>
                {errors[`gender_${index}`] && (
                  <p className={styles.errorText}>
                    {errors[`gender_${index}`]}
                  </p>
                )}
              </div>
              {passengers.length > 1 && (
                <button
                  onClick={() => handleDeletePassenger(index)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
        <p className={styles.addPassengerText} onClick={handleAddPassenger}>
          + Add a Passenger
        </p>
      </div>

      <div>
        <p className={styles.detailsHeader}>Contact Details</p>
        <div className={styles.contactDetailsContainer}>
          <Input
            label="Phone Number"
            placeholder="Phone Number"
            name="phone"
            value={contactDetails.phone}
            onChange={(v) => setContactDetails({ ...contactDetails, phone: v })}
            error={errors?.phone}
          />
          <Input
            label="Email"
            placeholder="Email"
            name="email"
            value={contactDetails.email}
            onChange={(v) => setContactDetails({ ...contactDetails, email: v })}
            error={errors?.email}
          />
        </div>
        <div className={styles.footerContainer}>
          <p className={styles.cancelText} onClick={handleCancel} >Cancel</p>
          <Button onClick={handleClick} backgroundColor="black" label="Next" />
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
