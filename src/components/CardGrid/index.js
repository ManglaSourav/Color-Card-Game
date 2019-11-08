import React, { useState, useEffect, useRef } from "react";
import ColorCard from "components/ColorCard";
import styled from "styled-components";
import { device } from "utils/device";
import { getColors } from "utils/colorsUtils";

export default function CardGrid() {
  const difficulty = 3;
  const colors = useRef(getColors(difficulty) || []);
  const [clickedCards, setClickedCard] = useState([]);

  useEffect(() => {
    console.log(clickedCards);
  }, [clickedCards]);
  console.log(colors);

  return (
    <GridWrapper rows={`repeat(${difficulty},1fr)`}>
      {colors.current.length > 0 &&
        colors.current.map((color, i) => (
          <ColorCard
            visibility={true}
            shouldUpdate={
              clickedCards.length <= colors.current.length ? true : false
            }
            setClickedCard={setClickedCard}
            key={i}
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
    /* display: block; */
    /* display: grid; */
    /* grid-template-columns: repeat(3, 1fr); */
    grid-gap: 5px 5px;
  }
`;
