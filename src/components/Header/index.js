import React from "react";
import styled from "styled-components";
import Level from "components/Level";
export default function Header(props) {
  const {
    setDifficulty,
    setStartTime,
    startTime,
    counter,
    setChangeComplexity
  } = props;

  return (
    <Wrapper>
      <TimerCont>{startTime ? counter : 0}</TimerCont>
      <Span>MATCH YOUR CARDS</Span>
      <Level
        setDifficulty={setDifficulty}
        setStartTime={setStartTime}
        setChangeComplexity={setChangeComplexity}
      ></Level>
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
