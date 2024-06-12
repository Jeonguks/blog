import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 50px;
  height: 100px;
  background-color: blue;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

const Button = (value: string) => {
  return <ButtonStyle></ButtonStyle>;
};

export default Button;
