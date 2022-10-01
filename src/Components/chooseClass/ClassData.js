import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

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

  classesData.proficiencies.forEach((element) => {
    const profList = document.getElementById("profList");
    profList.createElement("");
  });

  return (
    <Card>
      <Card.Body>
        <Card.Title>{classesData.name}</Card.Title>
        <Card.Text>Hit Dice: d{classesData.hit_die}</Card.Text>
        <ul id="profList">Hit Dice: d{classesData.hit_die}</ul>
      </Card.Body>
    </Card>
  );
};

export default ClassData;
