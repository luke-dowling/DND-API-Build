import React, { useState, useEffect } from "react";
import Class from "./chooseClass/Class";
import RaceData from "./chooseRace/RaceData";

const MakeChar = () => {
  const Character = {};
  const [race, setRace] = useState(null);
  const [id, setId] = useState(null);
  const [choices, setChoices] = useState([]);

  const handleChange = (e) => {
    setRace(e.target.value);
    setId(e.target.id);
    e.preventDefault();
  };

  useEffect(async () => {
    const response = await fetch("https://www.dnd5eapi.co/api/races");
    const data = await response.json();
    const [...items] = data.results;
    //console.log("races ==>", items);
    setChoices(
      items.map((item) => (
        <option id={item.id} value={item.name} key={item.id}>
          {item.name}
        </option>
      ))
    );
  }, []);

  return (
    <div>
      <h1>Lets build</h1>
      <p>Start by picking a race to play...</p>
      <h3>
        Pick a race :
        <select onChange={(e) => handleChange(e)}>
          <option>-------------------</option>
          {choices}
        </select>
      </h3>

      <h1>Your race is: {race}</h1>

      {race && <RaceData race={race.toLowerCase()} id={id} />}

      {race && <Class />}
    </div>
  );
};

export default MakeChar;
