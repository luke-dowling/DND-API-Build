import React, { useState, useEffect } from "react";
import RaceData from "./RaceData";
import Form from "react-bootstrap/Form";

const Race = () => {
  const [race, setRace] = useState(null);
  const [choices, setChoices] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === `Choose A Race`) {
      setRace(null);
    } else {
      setRace(e.target.value);
    }
    e.preventDefault();
  };

  useEffect(async () => {
    const response = await fetch("https://www.dnd5eapi.co/api/races");
    const data = await response.json();
    const [...items] = data.results;

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
      <Form>
        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <Form.Label>Pick A Race</Form.Label>
          <Form.Control
            as="select"
            size="sm"
            custom
            onChange={(e) => handleChange(e)}
          >
            <option>Choose A Race</option>
            {choices}
          </Form.Control>
        </Form.Group>
      </Form>
      {race && <RaceData race={race.toLowerCase()} id={race.id} />}
    </div>
  );
};

export default Race;
