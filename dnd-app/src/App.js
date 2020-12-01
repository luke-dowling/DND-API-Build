import React, { useEffect, useState } from "react";
import Layout from "./Components/Layout/Layout";
// import Spells from "./Components/Spells";
import MakeCharacter from "./Components/MakeChar";
import axios from "axios";

function App() {
  return (
    <Layout>
      <MakeCharacter />
    </Layout>
  );
}

export default App;
