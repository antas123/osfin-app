import styles from "./styles.module.css";

const PassengerList = ({ onSelectPassenger }) => {
  let passengerList = [
    {
      name: "Oliver Thompson",
      age: 29,
      gender: "male",
    },
    {
      name: "Sophia Merin",
      age: 29,
      gender: "female",
    },
    {
      name: "Liam Jhonson",
      age: 74,
      gender: "male",
    },
    {
      name: "Ava Max",
      age: 45,
      gender: "female",
    },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.header}>Saved Passengers</p>
      <div className={styles.list}>
        {passengerList.map((data, index) => {
          return (
            <div style={{ display: "flex", gap: 3 }}>
              <input type="checkbox" onChange={(e) => onSelectPassenger(data,e.target.checked)} />
              {data.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PassengerList;
