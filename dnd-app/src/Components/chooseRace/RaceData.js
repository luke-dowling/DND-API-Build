import React, { useEffect } from "react";
import axios from "axios";
import styles from "./raceData.module.css";

const RaceData = ({ race, id }) => {
  let data;
  useEffect(async () => {
    const result = await axios(`https://www.dnd5eapi.co/api/races/${race}`);
    let input = result.data;
    //console.log(input);
    data = { input };
  }, {});
  console.log(data);
  return (
    <div className={styles.container}>
      {/*<p className={styles.item}>{race}</p>*/}
    </div>
  );
};

export default RaceData;
