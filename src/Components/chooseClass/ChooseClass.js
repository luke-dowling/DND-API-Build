import React, { useState, useEffect } from "react";
import ClassData from "./ClassData";
import Form from "react-bootstrap/Form";

const Class = () => {
  const [classes, setClasses] = useState(null);
  const [choices, setChoices] = useState([]);

  const handleChange = (e) => {
    if (e.target.value === `Choose A Class`) {
      setClasses(null);
    } else {
      setClasses(e.target.value);
    }
    e.preventDefault();
  };

  useEffect(async () => {
    const response = await fetch("https://www.dnd5eapi.co/api/classes");
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
          <Form.Label>Pick A Class</Form.Label>
          <Form.Control
            as="select"
            size="sm"
            custom
            onChange={(e) => handleChange(e)}
          >
            <option>Choose A Class</option>
            {choices}
          </Form.Control>
        </Form.Group>
      </Form>

      {classes && <ClassData classes={classes.toLowerCase()} id={classes.id} />}
    </div>
  );
};

export default Class;
