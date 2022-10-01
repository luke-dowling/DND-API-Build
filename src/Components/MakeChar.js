import React, { useState } from "react";
import Race from "./chooseRace/ChooseRace";
import Class from "./chooseClass/ChooseClass";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Generate from "./generateRandom/Generate";

const MakeChar = () => {
  return (
    <div>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Lets Build!</h1>
            <p>
              This is a simple DND character builder. Click the Generate button
              to random make a character.
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        {/*<Col>
          <Race />
        </Col>

        <Col>
          <Class />
        </Col>*/}
        <Col>
          <Generate />
        </Col>
      </Row>
    </div>
  );
};

export default MakeChar;
