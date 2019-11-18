import React, { useState, useEffect } from "react";
import CardGrid from "components/CardGrid";
import Header from "components/Header";
import "./App.css";
import { getColors } from "utils/colorsUtils";
import Modal from "react-modal";
import { useCount } from "Hooks/useCount";
import Level from "components/Level";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function App() {
  const [startTime, setStartTime] = useState(false);
  const [difficulty, setDifficulty] = useState(12);
  const [changeComplexity, setChangeComplexity] = useState(0);
  const [openModal, setOpenModal] = useState(true);
  const [colors, setColors] = useState(getColors(difficulty) || []);
  const [counter, setCounter] = useCount(0);

  useEffect(() => {
    setColors(getColors(difficulty));
  }, [changeComplexity]);

  useEffect(() => {
    setCounter(0);
  }, [startTime]);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="App">
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Level
          setChangeComplexity={setChangeComplexity}
          showComplexity={true}
          setDifficulty={setDifficulty}
          closeModal={closeModal}
          setStartTime={setStartTime}
        ></Level>
      </Modal>
      <Header
        setChangeComplexity={setChangeComplexity}
        startTime={startTime}
        counter={counter}
        setCounter={setCounter}
        setDifficulty={setDifficulty}
        setStartTime={setStartTime}
      ></Header>
      <CardGrid
        changeComplexity={changeComplexity}
        setChangeComplexity={setChangeComplexity}
        setDifficulty={setDifficulty}
        counter={counter}
        difficulty={difficulty}
        colors={colors}
        setStartTime={setStartTime}
      ></CardGrid>
    </div>
  );
}

export default App;
