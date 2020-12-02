import React, { useState, useEffect } from "react";
import ClassData from "./ClassData";
import axios from "axios";

const Class = () => {
  const [classes, setClasses] = useState(null);
  const [id, setId] = useState(null);
  const [choices, setChoices] = useState([]);

  const handleChange = (e) => {
    setClasses(e.target.value);
    setId(e.target.id);
    e.preventDefault();
  };

  useEffect(async () => {
    const response = await fetch("https://www.dnd5eapi.co/api/classes");
    const data = await response.json();
    const [...items] = data.results;
    console.log("races ==>", items);
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
      <h3>
        Pick a class :
        <select onChange={(e) => handleChange(e)}>
          <option>-------------------</option>
          {choices}
        </select>
      </h3>

      <h1>Your class is: {classes}</h1>

      {classes && <ClassData classes={classes.toLowerCase()} id={id} />}

      {/*{race && <Class />}*/}
    </div>
  );
};

export default Class;
