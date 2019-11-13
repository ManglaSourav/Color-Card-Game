import React, { useState, useRef } from "react";
import ColorCard from "components/ColorCard";
import styled from "styled-components";
import { device } from "utils/device";
import { getColors } from "utils/colorsUtils";

export default function CardGrid() {
  const difficulty = 12;
  const colors = useRef(getColors(difficulty) || []);
  const [clickedCards, setClickedCard] = useState([]);
  const [foldCards, setFoldCards] = useState([]);

  const setVisibility = color => {
    if (
      clickedCards.filter(clickedColor => color === clickedColor.color)
        .length === 2
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <GridWrapper rows={`repeat(${difficulty > 6 ? 6 : difficulty},1fr)`}>
      {colors.current.length > 0 &&
        colors.current.map((color, i) => (
          <ColorCard
            visibility={setVisibility(color)}
            shouldUpdate={clickedCards.length < colors.current.length}
            setClickedCard={setClickedCard}
            clickedCards={clickedCards}
            foldCards={foldCards}
            setFoldCards={setFoldCards}
            key={i}
            index={i}
            flipCard={foldCards.includes(i)}
            color={color}></ColorCard>
        ))}
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  /* background: #777; */
  /* grid-template-columns: repeat(auto-fill, 30%); */
  grid-template-columns: ${props => props.rows};
  grid-gap: 15px 10px;
  justify-content: center;
  /* margin-top: 10%; */
  @media ${device.mobileL} {
    grid-gap: 5px 5px;
  }
`;
