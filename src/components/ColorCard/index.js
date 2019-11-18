import React, { useState, useEffect } from "react";
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
    clickedCards,
    changeComplexity
    // foldCards,
    // setFoldCards,
    // flipCard
  } = props;
  const [clicked, setClicked] = useState(false);

  const onCardClicked = e => {
    setClicked(true);
    if (shouldUpdate) {
      if (clickedCards.filter(card => card.index === index).length === 0) {
        setClickedCard(prev => [...prev, { color, index }]);
      }
      // if (clickedCards.length >= 2) {
      //   const lastValues = clickedCards.slice(-2);

      // if (lastValues[0].color !== lastValues[1].color) {
      // const foldItems = lastValues.map(item => item.index);
      // console.log(lastValues, "lastValues");

      // const newCards = clickedCards
      //   .filter(item => item.index !== lastValues[1].index)
      //   .filter(item => lastValues[0].index !== item.index);
      // console.log(clickedCards, newCards, lastValues);
      // console.log(newCards, "new", clickedCards);

      // setClickedCard([...newCards]);

      // setFoldCards([...foldItems]);
      // }
      // }
    }
  };
  useEffect(() => {
    setClicked(false);
  }, [changeComplexity]);

  return (
    <>
      <Card
        visibility={visibility ? "visible" : "hidden"}
        color={color}
        // flip={flipCard}
        clicked={clicked ? true : ""}
        // clicked={clickedCards.filter(item => item.index === index).length > 0}
        onClick={onCardClicked}
      ></Card>
    </>
  );
}

const Card = styled.div`
  visibility: ${props => props.visibility};
  height: 200px;
  width: 200px;
  /* background-color:"tomato"; */
  background: ${props => (props.clicked ? props.color : "tomato")};
  margin: 10px;
  align-self: center;
  justify-self: center;
  border-radius: 20px;
  box-shadow: 1px 1px 1px;
  transition: all 0.8s;
  /* transform: $ */
  ${({ flip }) =>
    flip &&
    `
    background: tomato;
    transform: rotateY(180deg);
  `}

   &:active{
    transform: ${props => `rotateY(180deg)`};
  }
 
  @media ${device.mobileL} {
    height: 100px;
    width: 100px;
  }
  /* @media ${device.laptopL} {

  } */
`;
