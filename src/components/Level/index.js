import React from "react";
import styled from "styled-components";
import Text from "Reusable/Text";
import Button from "Reusable/Button";
export default function Level({
  setDifficulty,
  closeModal = false,
  setStartTime,
  showComplexity,
  setChangeComplexity
}) {
  const commonTask = () => {
    closeModal && closeModal();
    setStartTime(true);
    setChangeComplexity(prev => prev + 1);
  };

  return (
    <>
      {showComplexity && <Text>Complexity</Text>}
      <ButtonsContainer>
        <Button
          onClick={() => {
            setDifficulty(12);
            commonTask();
          }}
        >
          Easy pesy
        </Button>
        <Button
          onClick={() => {
            setDifficulty(18);
            commonTask();
          }}
        >
          Medium
        </Button>
        <Button
          onClick={() => {
            setDifficulty(24);
            commonTask();
          }}
        >
          Hard
        </Button>
      </ButtonsContainer>
    </>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
`;
