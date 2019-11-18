import styled from "styled-components";
const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 20px;
  margin: 15px;
  padding: 0 30px;
  border-radius: 100px;
  border: 2px solid palevioletred;
`;

export default Button;
