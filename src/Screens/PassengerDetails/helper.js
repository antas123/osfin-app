
export const validatePassengers = (passengers, contactDetails) => {
    let errors = {};
    const today = new Date();
  
    passengers.forEach((passenger, index) => {
      const dob = new Date(passenger.age);
      const ageDiff = today.getFullYear() - dob.getFullYear();
  
      if (!passenger.name.trim())
        errors[`name_${index}`] = "Full Name is required";
      if (!passenger.age.trim()) {
        errors[`age_${index}`] = "Date of Birth is required";
      } else {
        if (dob > today)
          errors[`age_${index}`] = "Date of Birth cannot be in the future";
        if (ageDiff > 90)
          errors[`age_${index}`] = "Age should not be more than 90 years";
      }
    });
  
    if (!contactDetails.phone.trim()) errors.phone = "Phone Number is required";
  
    if (!contactDetails.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactDetails.email)) {
      errors.email = "Enter a valid email";
    }
  
    return errors;
  };
  
  export const handlePassengerSelection = (
    passengers,
    selectedPassenger,
    isChecked
  ) => {
    if (isChecked) {
      const newPassenger = {
        name: selectedPassenger.name,
        age: new Date(selectedPassenger.age).toISOString().split("T")[0],
        gender: selectedPassenger.gender.charAt(0).toUpperCase() + selectedPassenger.gender.slice(1) 
      };
  
      if (
        passengers.length === 1 &&
        !passengers[0].name &&
        !passengers[0].age
      ) {
        return [newPassenger];
      } else {
        return [...passengers, newPassenger];
      }
    } else {
      const updatedPassengers = passengers.filter(
        (passenger) => passenger.name !== selectedPassenger.name
      );
      return updatedPassengers.length === 0 ? 
        [{ name: "", age: "", gender: "" }] : 
        updatedPassengers;
    }
  };
  