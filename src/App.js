import { useState, useEffect } from "react";
import LoginScreen from "./Screens/LoginScreen";
import DashBoard from "./components/DashBoard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nonLoggedIn, setNonLoggedIn] = useState(false);
  const [screenStatus, setScreenStatus] = useState({
    step1: "progress",
    step2: "pending",
    step3: "pending",
  });

  // useEffect(() => {
  //   // Check if the user is already logged in
  //   const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
  //   setIsLoggedIn(loggedInStatus);
  // }, []);

  // Check if the user is nonLoggedIn and has completed all steps
  const isNonLoggedInAndStepsComplete =
    nonLoggedIn && !isLoggedIn &&
    screenStatus.step1 === "complete" &&
    screenStatus.step2 === "complete" &&
    screenStatus.step3 === "complete";

  return isNonLoggedInAndStepsComplete ? (
    <LoginScreen isNonLoggedInAndStepsComplete={isNonLoggedInAndStepsComplete} setNonLoggedIn={setNonLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  ) : isLoggedIn || nonLoggedIn ? (
    <DashBoard
      screenStatus={screenStatus}
      setScreenStatus={setScreenStatus}
      setNonLoggedIn={setNonLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      isLoggedIn={isLoggedIn}
    />
  ) : (
    <LoginScreen isNonLoggedInAndStepsComplete={isNonLoggedInAndStepsComplete} setNonLoggedIn={setNonLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
}

export default App;