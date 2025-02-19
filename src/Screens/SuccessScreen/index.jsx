import { useEffect, useState } from "react";
import tick from "../../assets/successtick.png";

const SuccessScreen = () => {
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

  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth); 
    const today = new Date(); 
    let age = today.getFullYear() - dob.getFullYear(); 

    const monthDiff = today.getMonth() - dob.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < dob.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:20
      }}
    >
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <img height={100} width={100} src={tick} alt="" />
        <p
          style={{
            margin: 0,
            fontSize: 32,
            fontWeight: 600,
            color: "#31A91D",
            marginTop: 10,
          }}
        >
          Congratulations! You have successfully booked tickets
        </p>
        <p
          style={{ color: "#808080", margin: 0, fontSize: 16, fontWeight: 600 }}
        >
          Please carry ERS / VRM / SMS / Mail sent to your contact details,
          along with a relevant ID proof while travelling
        </p>
      </div>
      <div
        style={{
          border: "1px solid grey",
          padding: 30,
          borderRadius: 10,
          width: "60%",
          marginTop: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p style={{ margin: 0 }}>PNR No: 1234567890</p>
          <p style={{ margin: 0 }}>Transaction ID : 351511859256378</p>
        </div>
        <p style={{ fontSize: 16, fontWeight: 700 }}>Airbus A350-900</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p style={{ margin: 0 }}>Nov 10</p>
          <p style={{ margin: 0 }}>Nov 11</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: 400,
              fontSize: 13.8,
              marginTop: 10,
              textAlign: "left",
            }}
          >
            12:10 <span>Delhi</span>{" "}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              width: "100%",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 9.6,
                fontWeight: 500,
                color: "#80808080",
              }}
            >
              2 hours 18 min
            </p>
            <div
              style={{ width: "90%", height: 1, backgroundColor: "#80808080" }}
            ></div>
          </div>

          <p
            style={{
              margin: 0,
              fontWeight: 400,
              fontSize: 13.8,
              marginTop: 10,
              textAlign: "right",
            }}
          >
            6:00 <span>Mumbai</span>{" "}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 35,
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#202020",
              fontWeight: 400,
              fontSize: 12.8,
            }}
          >
            E-Tickets has been sent to:
          </p>
          <div>
            <p
              style={{
                margin: 0,
                color: "#404040",
                fontWeight: 400,
                fontSize: 12.8,
              }}
            >
              {passengers[0]?.name}{" "}
            </p>
            <p
              style={{
                margin: 0,
                color: "#404040",
                fontWeight: 400,
                fontSize: 12.8,
              }}
            >
              {contactDetails?.email}
            </p>
          </div>
        </div>
        <div>
          <h3>Traveller Details</h3>
          {passengers.map((data, index) => (
            <div key={index}>
              <p>{data.name}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ margin: 0 }}>
                  Age: {calculateAge(data.age)} years
                </p>
                <p style={{ margin: 0 }}>Booking Status: Confirmed</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ margin: 0 }}>Gender: {data.gender}</p>
                <p style={{ margin: 0 }}>Seat No: {index + 11}A</p>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop:30
          }}
        >
          <p style={{ margin: 0 , fontSize:16, fontWeight:600}}>Total Fare</p>
          <p style={{ margin: 0 , fontSize:16, fontWeight:600}}>${passengers.length*300}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;