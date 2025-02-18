import PassengerDetails from "../../Screens/PassengerDetails";
import ProgressBar from "../ProgressBar";
import SideNavbar from "../SideNavbar";

const DashBoard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "15%" }}>
        <SideNavbar />
      </div>
      <div style={{ width: "85%", paddingLeft: 40 }}>
        <p style={{ fontWeight: 700, fontSize: 20 }}>Booking Information</p>
        <ProgressBar />
        <div>
          <PassengerDetails />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
