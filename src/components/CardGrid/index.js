import React, { useState, useRef } from "react";
import ColorCard from "components/ColorCard";
import styled from "styled-components";
import { device } from "utils/device";
import { getColors } from "utils/colorsUtils";

export default function CardGrid() {
  const difficulty = 4;
  const colors = useRef(getColors(difficulty) || []);
  const [clickedCards, setClickedCard] = useState([]);

  return (
    <GridWrapper rows={`repeat(${difficulty > 4 ? 4 : difficulty},1fr)`}>
      {colors.current.length > 0 &&
        colors.current.map((color, i) => (
          <ColorCard
            shouldUpdate={clickedCards.length < colors.current.length}
            setClickedCard={setClickedCard}
            clickedCards={clickedCards}
            key={i}
            index={i}
            color={color}></ColorCard>
        ))}
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, 30%); */
  grid-template-columns: ${props => props.rows};
  grid-gap: 15px 10px;
  justify-content: center;
  margin-top: 10%;
  @media ${device.mobileL} {
    grid-gap: 5px 5px;
  }
`;
