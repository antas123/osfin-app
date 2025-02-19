import { useState, useEffect } from "react";
import LoginScreen from "./Screens/LoginScreen";
import DashBoard from "./components/DashBoard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nonLoggedIn, setNonLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  return isLoggedIn || nonLoggedIn ? <DashBoard setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>: <LoginScreen setNonLoggedIn={setNonLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
}

export default App;
