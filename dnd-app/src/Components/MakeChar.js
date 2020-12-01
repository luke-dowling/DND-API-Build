import React, { useState, useEffect } from "react";
import Class from "./chooseClass/Class";
import RaceData from "./chooseRace/RaceData";
import axios from "axios";

const MakeChar = () => {
  const Character = {};
  const [race, setRace] = useState("");
  const [id, setId] = useState(undefined);
  const [choices, setChoices] = useState([]);

  const handleChange = (e) => {
    setRace(e.target.value);
    setId(e.target.id);
    e.preventDefault();
  };

  useEffect(async () => {
    const result = await axios("https://www.dnd5eapi.co/api/races/");
    //console.log(result.data.results.map((item) => item.name));
    setChoices(
      result.data.results.map((item) => (
        <option id={item.id} value={item.name.toLowerCase()} key={item.id}>
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
        Pick a race :{" "}
        <select onChange={(e) => handleChange(e)}>{choices}</select>
      </h3>

      <h1>Your race is: {race}</h1>

      {race && <RaceData race={race} id={id} />}

      {race && <Class />}
    </div>
  );
};

export default MakeChar;
