import React, { useState, useEffect } from "react";
import axios from "axios";

const Class = () => {
  useEffect(async () => {
    const result = await axios(`https://www.dnd5eapi.co/api/classes/`);
    //console.log(result);
  });
  return (
    <div>
      <h2>After race is chosen your race, we will move on to classes...</h2>
    </div>
  );
};

export default Class;
