import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./spell.module.css";

function Spells() {
  const [spells, setSpell] = useState();
  useEffect(async () => {
    const result = await axios("https://www.dnd5eapi.co/api/spells/");
    console.log(result.data);
    setSpell(result.data.results.map((item) => <h3>{item.name}</h3>));
  });

  return (
    <div>
      <h1>Spells: </h1>
      <div className={styles.spells}>{spells}</div>
    </div>
  );
}

export default Spells;
