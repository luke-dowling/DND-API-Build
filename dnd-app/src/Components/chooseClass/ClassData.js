import React, { useState, useEffect } from "react";
import styles from "./classesData.module.css";

const ClassData = ({ classes }) => {
  const [classesData, setClassesData] = useState({});
  useEffect(async () => {
    const response = await fetch(
      `https://www.dnd5eapi.co/api/classes/${classes}`
    );
    const data = await response.json();
    console.log(`${classes} data ==>`, data);
    setClassesData(data);
  }, [classes]);
  return (
    <div className={styles.container}>
      <p className={styles.item}>Name: {classesData.name}</p>
      <p className={styles.item}>Hit Dice: {classesData.hit_die}</p>
    </div>
  );
};

export default ClassData;
