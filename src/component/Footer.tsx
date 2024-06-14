import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  height: 60px;
  position: relative;
  transform: translateY(0%);
  border-top: 1px solid #ccc;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: skyblue;
`;
const Footer = () => {
  return (
    <>
      <FooterDiv>
        <small>Copyright 2024. (Jeonguk Kim) all rights reserved.</small>
      </FooterDiv>
    </>
  );
};
export default Footer;
