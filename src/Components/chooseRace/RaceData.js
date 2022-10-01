import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RaceData = ({ race }) => {
  console.log("i am here", race);
  const [raceData, setRaceData] = useState({});
  useEffect(async () => {
    const response = await fetch(`https://www.dnd5eapi.co/api/races/${race}`);
    const data = await response.json();
    console.log(`${race} data ==>`, data);
    setRaceData(data);
  }, [race]);

  return (
    <Card>
      <Card.Body>
        {/*<Card.Title>{raceData.name}</Card.Title>*/}
        <Card.Text>
          <h5>Age:</h5>
          <p>{raceData.age}</p>
          <h5>Speed:</h5>
          <p>{raceData.speed}</p>
          <p>Alignment: {raceData.alignment}</p>
          <p>Size: {raceData.size_description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RaceData;
