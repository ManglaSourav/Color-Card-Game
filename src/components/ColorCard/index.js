import React, { useState } from "react";
import styled from "styled-components";
import { device } from "utils/device";

//checek clickedCards array contain even number of colors and if not it should contain the incoming color than it should push into the array
export default function ColorCard(props) {
  const {
    color,
    setClickedCard,
    visibility,
    shouldUpdate,
    index,
    clickedCards
  } = props;
  const [clicked, setClicked] = useState(false);
  const onCardClicked = e => {
    console.log(e.target.value);

    setClicked(true);
    // console.log(clickedCards.filter(card => card.value === e.target.value));
    if (shouldUpdate) {
      // if(clickedCards.includes(color)){
      // }
      setClickedCard(prev => [...prev, color]);
    }
  };

  return (
    <>
      <Card
        // visibility={visibility ? "visible" : "hidden"}
        visibility={
          clickedCards.filter(clickedColor => color === clickedColor).length ===
          2
            ? false
            : true
        }
        color={color}
        value={index}
        flip={false}
        clicked={clicked ? true : ""}
        onClick={onCardClicked}></Card>
    </>
  );
}

const Card = styled.div`
  visibility: ${props => (props.visibility ? "visible" : "hidden")};
  height: 200px;
  width: 200px;
  background: ${props => (props.clicked ? props.color : "tomato")};
  margin: 10px;
  align-self: center;
  justify-self: center;
  border-radius: 20px;
  box-shadow: 1px 1px 1px;
  transition: all 0.8s;
  &:active {
    transform: ${props => props.flip && `rotateY(180deg)`};
  }
  @media ${device.mobileL} {
    height: 100px;
    width: 100px;
  }
`;
