import React, { useState, useEffect } from "react";
import styles from "./raceData.module.css";

const RaceData = ({ race }) => {
  console.log("i am here", race);
  const [raceData, setRaceData] = useState({});
  useEffect(async () => {
    const response = await fetch(`https://www.dnd5eapi.co/api/races/${race}`);
    const data = await response.json();
    console.log(`${race} data ==>`, data);
    setRaceData(data);
  }, [race]);
  // if you put empty arr only once... if update, run every time this variable changes
  return (
    <div className={styles.container}>
      <p className={styles.item}>Name: {raceData.name}</p>
      <p className={styles.item}>Age: {raceData.age}</p>
      <p className={styles.item}>Alignment: {raceData.alignment}</p>
      <p className={styles.item}>Size: {raceData.size_description}</p>
      <p className={styles.item}>Speed: {raceData.speed}</p>
    </div>
  );
};

export default RaceData;
