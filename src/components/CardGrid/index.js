import React from "react";
import ColorCard from "components/ColorCard";
import styled from "styled-components";
import { device } from "utils/device";
import { getColors } from "utils/colorsUtils";

export default function CardGrid() {
  const colors = getColors(3);
  return (
    <GridWrapper>
      {colors.length > 0 &&
        colors.map(color => <ColorCard color={color}></ColorCard>)}
      {/* <ColorCard></ColorCard>
      <ColorCard></ColorCard>
      <ColorCard></ColorCard>
      <ColorCard></ColorCard>
      <ColorCard></ColorCard>
      <ColorCard></ColorCard> */}
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px 10px;
  justify-content: center;
  margin-top: 10%;
  @media ${device.mobileL} {
    display: block;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 10px;
    justify-content: normal;
  }
`;
