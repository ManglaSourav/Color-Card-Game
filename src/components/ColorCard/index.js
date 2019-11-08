import React, { useState } from "react";
import styled from "styled-components";

export default function ColorCard(props) {
  const { color, setClickedCard, visibility, shouldUpdate } = props;
  const [clicked, setClicked] = useState(false);
  const onCardClicked = () => {
    setClicked(true);
    if (shouldUpdate) {
      setClickedCard(prev => [...prev, color]);
    }
  };

  return (
    <>
      <Card
        visiblity={visibility ? true : false}
        color={color}
        clicked={clicked ? true : ""}
        onClick={onCardClicked}></Card>
    </>
  );
}

const Card = styled.div`
  visibility: ${props => (props.visibility ? "hidden" : "")};
  height: 100px;
  width: 100px;
  background: ${props => (props.clicked ? props.color : "tomato")};
  margin: 10px;
  align-self: center;
  justify-self: center;
  border-radius: 20px;
  box-shadow: 1px 1px 1px;
  transition: all 0.2s;
  &:active {
    transform: rotate(180deg);
    /* background: red; */
  }
`;
