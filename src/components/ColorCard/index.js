import React, { useState } from "react";
import styled from "styled-components";
// import { device } from "utils/device";

export default function ColorCard({ color }) {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Card
        color={color}
        clicked={clicked ? true : ""}
        onClick={() => setClicked(true)}></Card>
    </>
  );
}

const Card = styled.div`
  height: 100px;
  width: 100px;
  background: ${props => (props.clicked ? props.color : "tomato")};
  margin: 10px;
  border-radius: 20px;
  box-shadow: 1px 1px 1px;
  transition: all 0.2s;
  &:active {
    transform: rotate(180deg);
    background: red;
  }
`;
