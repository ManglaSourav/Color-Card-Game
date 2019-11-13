import React, { useState, useEffect } from "react";
import CardGrid from "components/CardGrid";
import Header from "components/Header";
import "./App.css";
import { getColors } from "utils/colorsUtils";

function App() {
  const [difficulty, setDifficulty] = useState(12);
  const [colors, setColors] = useState(getColors(difficulty) || []);

  useEffect(() => {
    setColors(getColors(difficulty));
  }, [difficulty]);

  return (
    <div className="App">
      <Header setDifficulty={setDifficulty}></Header>
      <CardGrid difficulty={difficulty} colors={colors}></CardGrid>
    </div>
  );
}

export default App;
