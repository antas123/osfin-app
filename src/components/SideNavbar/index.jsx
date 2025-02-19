import Flights from "../../assets/Flightsmode.png";
import Hotels from "../../assets/Hotel.png";
import beach from "../../assets/Beach.png";
import home from "../../assets/Home filled.png";
import train from "../../assets/Train.png";
import bus from "../../assets/Directions bus.png";
import dots from "../../assets/More vert.png";
import logo from "../../assets/Subtract.png";
import styles from "./navbar.module.css";

const SideNavbar = () => {
  let options = [
    {
      name: "Flights",
      icon: Flights,
    },
    {
      name: "Hotels",
      icon: Hotels,
    },
    {
      name: "Homestays",
      icon: home,
    },
    {
      name: "Holiday plans",
      icon: beach,
    },
    {
      name: "Trains",
      icon: train,
    },
    {
      name: "Buses",
      icon: bus,
    },
    {
      name: "More",
      icon: dots,
    },
  ];

  return (
    <div style={{ backgroundColor: "#F6F6F6", height: "100%" }}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" height={31} width={32} />
        <h3 style={{ margin: 5 }}>Trailbliss</h3>
      </div>
      <>
        {options.map((data, index) => {
          return (
            <div
              style={{
                display: "flex",
                gap: 10,
                padding: "10px 24px 10px 24px",
                borderBottom:
                  index === 0 ? "1px solid black" : "1px solid #D9D9D9",
                marginBottom: 8,
                backgroundColor: index === 0 ? "#ECEFFF" : "#F6F6F6",
              }}
            >
              <img height={20} width={20} src={data.icon} alt="" />
              <p style={{ margin: 0, fontWeight: 600, fontSize: 16 }}>
                {data.name}
              </p>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default SideNavbar;
