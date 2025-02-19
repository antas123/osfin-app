import { useState } from "react";
import PassengerDetails from "../../Screens/PassengerDetails";
import ProgressBar from "../ProgressBar";
import SideNavbar from "../SideNavbar";
import AdditionalInformation from "../../Screens/AdditionalInformation";
import ReviewStep from "../../Screens/ReviewStep";
import SuccessScreen from "../../Screens/SuccessScreen";

const DashBoard = ({ isLoggedIn, setIsLoggedIn, setNonLoggedIn }) => {
  const [screenStatus, setScreenStatus] = useState({
    step1: "progress",
    step2: "pending",
    step3: "pending",
  });
  const [secureTrip, setSecureTrip] = useState(false);
  return (
    <>
      {screenStatus.step3 === "complete" ? (
        <SuccessScreen />
      ) : (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "15%", height: "100vh" }}>
            <SideNavbar />
          </div>
          <div
            style={{
              width: "85%",
              paddingLeft: 40,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <p style={{ fontWeight: 700, fontSize: 20 }}>Booking Information</p>
            <ProgressBar
              step1Status={screenStatus.step1}
              step2Status={screenStatus.step2}
              step3Status={screenStatus.step3}
            />
            {screenStatus.step1 === "progress" ? (
              <div>
                <PassengerDetails
                  screenStatus={screenStatus}
                  setScreenStatus={setScreenStatus}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setNonLoggedIn={setNonLoggedIn}
                />
              </div>
            ) : screenStatus.step2 === "progress" ? (
              <div>
                <AdditionalInformation
                  screenStatus={screenStatus}
                  setScreenStatus={setScreenStatus}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setNonLoggedIn={setNonLoggedIn}
                  setSecureTrip={setSecureTrip}
                />
              </div>
            ) : (
              <ReviewStep
                screenStatus={screenStatus}
                setScreenStatus={setScreenStatus}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setNonLoggedIn={setNonLoggedIn}
                secureTrip={secureTrip}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
