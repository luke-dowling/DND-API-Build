import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./spell.module.css";

function Spells() {
  const [spells, setSpell] = useState();

  return (
    <div>
      <h1>Spells: </h1>
      <div className={styles.spells}>{spells}</div>
    </div>
  );
}

export default Spells;
