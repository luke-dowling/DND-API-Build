import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const Generate = () => {
  const [raceData, setRaceData] = useState({});
  const [raceAbilityBonus, setRaceAbilityBonus] = useState([]);
  const [raceLanguages, setRaceLanguages] = useState([]);
  const [raceProf, setRaceProf] = useState([]);
  const [raceProfOptions, setRaceProfOptions] = useState(null);
  const [classData, setClassData] = useState({});

  useEffect(async () => {
    try {
      const res = await fetch(`https://www.dnd5eapi.co/api/races`);
      const data = await res.json();
      const randomRace =
        data.results[Math.floor(Math.random() * data.results.length)];

      const res2 = await fetch(
        `https://www.dnd5eapi.co/api/races/${randomRace.index}`
      );
      const data2 = await res2.json();
      setRaceData(data2);

      console.log(data2);
      setRaceAbilityBonus(data2.ability_bonuses);
      setRaceLanguages(data2.languages);
      setRaceProf(data2.starting_proficiencies);
      {
        data2.starting_proficiency_options &&
          setRaceProfOptions(data2.starting_proficiency_options);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(async () => {
    const res = await fetch(`https://www.dnd5eapi.co/api/classes`);
    const data = await res.json();

    const randomClass =
      data.results[Math.floor(Math.random() * data.results.length)];

    const res2 = await fetch(
      `https://www.dnd5eapi.co/api/classes/${randomClass.index}`
    );
    const data2 = await res2.json();
    setClassData(data2);
  }, []);

  console.log(raceProfOptions);

  return (
    <Card>
      <Card.Header>
        <h3 className="p-2">
          {raceData.name} / {classData.name}
        </h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <div>
            <h5>Speed: {raceData.speed}ft</h5>
            <h5>Size: {raceData.size}</h5>
          </div>

          <div>
            <h5>Ability Bonuses</h5>
            <ul>
              {raceAbilityBonus.map((item) => (
                <li>
                  {item.ability_score.name}: {item.bonus}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Languages</h5>
            <ul>
              {raceLanguages.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
          </div>

          {raceProf.length > 0 && (
            <div>
              <h5>Starting Proficiencies</h5>
              <ul>
                {raceProf.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
          )}

          {raceProfOptions && raceProfOptions.from.length > 0 && (
            <div>
              <h5>Chosen Proficiencie(s), choose {raceProfOptions.choose}</h5>
              <ul>
                {raceProfOptions.from.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Generate;
