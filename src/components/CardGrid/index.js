import React, { useState, useEffect } from "react";
import ColorCard from "components/ColorCard";
import styled from "styled-components";
import { device } from "utils/device";
import Modal from "react-modal";
import Text from "Reusable/Text";
import Button from "Reusable/Button";
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
const customStyles2 = {
  content: {
    ...customStyles.content,
    display: "flex",
    flexDirection: "column"
  }
};

export default function CardGrid(props) {
  const {
    colors,
    setDifficulty,
    difficulty,
    setStartTime,
    counter,
    setChangeComplexity,
    changeComplexity
  } = props;
  const [clickedCards, setClickedCard] = useState([]);
  const [endGame, setEndGame] = useState(false);
  // const [foldCards, setFoldCards] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const closeModal = () => {
    setOpenModal2(false);
  };

  const closeModal2 = () => {
    setOpenModal2(false);
  };

  useEffect(() => {
    setClickedCard([]);
  }, [changeComplexity]);

  useEffect(() => {
    if (clickedCards.length === colors.length) {
      setEndGame(counter);
      setOpenModal(true);
      setStartTime(false);
    }
  }, [clickedCards]);

  const onRestart = () => {
    setOpenModal(false);
    setOpenModal2(true);
  };

  return (
    <>
      {endGame && (
        <>
          <Modal
            isOpen={openModal}
            onRequestClose={closeModal}
            style={customStyles2}
          >
            <Text> {endGame} seconds you took to Complete it!</Text>
            <Button onClick={onRestart}>Restart</Button>
          </Modal>
          <Modal
            isOpen={openModal2}
            onRequestClose={closeModal2}
            style={customStyles}
          >
            <Level
              setChangeComplexity={setChangeComplexity}
              showComplexity={true}
              setDifficulty={setDifficulty}
              closeModal={closeModal2}
              setStartTime={setStartTime}
            ></Level>{" "}
          </Modal>
        </>
      )}
      <GridWrapper rows={difficulty}>
        {colors.length > 0 &&
          colors.map((color, i) => (
            <ColorCard
              changeComplexity={changeComplexity}
              visibility={
                clickedCards.filter(
                  clickedColor => color === clickedColor.color
                ).length === 2
                  ? false
                  : true
              }
              shouldUpdate={clickedCards.length < colors.length}
              setClickedCard={setClickedCard}
              clickedCards={clickedCards}
              // foldCards={foldCards}
              // setFoldCards={setFoldCards}
              key={i}
              index={i}
              // flipCard={foldCards.includes(i)}
              color={color}
            ></ColorCard>
          ))}
      </GridWrapper>
    </>
  );
}

const GridWrapper = styled.div`
  display: grid;
  /* background: #777; */
  /* grid-template-columns: repeat(auto-fill, 30%); */
  grid-template-columns: ${props =>
    `repeat(${props.rows > 6 ? 6 : props.rows},1fr)`};
  grid-gap: 15px 10px;
  justify-content: center;
  /* margin-top: 10%; */
  @media ${device.mobileL} {
    grid-gap: 5px 5px;
  }
  @media ${device.laptopL} {
    grid-gap: 10px 8px;
    grid-template-columns: ${props =>
      `repeat(${props.rows > 5 ? 5 : props.rows},1fr)`};
  }
  @media ${device.laptop} {
    grid-gap: 5px 5px;
    grid-template-columns: ${props =>
      `repeat(${props.rows > 4 ? 4 : props.rows},1fr)`};
  }
`;
