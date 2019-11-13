import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <Wrapper>
      <TimerCont>Timer</TimerCont>
      <Span>MATCH THE CARDS</Span>
      <ButtonsContainer>
        <Button>Easy</Button>
        <Button>Medium</Button>
        <Button>Hard</Button>
      </ButtonsContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  display: flex;
  background-color: pink;
  justify-content: space-between;
`;
const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 20px;
  margin: 15px;
  padding: 0 30px;
  border-radius: 100px;
  border: 2px solid palevioletred;
`;

const Span = styled.span`
  color: palevioletred;
  align-self: center;
  font-size: 40px;
  font-weight: 500;
`;
const TimerCont = styled.div`
  color: palevioletred;
  align-self: center;
  font-size: 30px;
  font-weight: 500;
  padding-left: 10px;
`;
const ButtonsContainer = styled.div`
  display: flex;
`;
