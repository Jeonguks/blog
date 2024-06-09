import styled from "styled-components";

const HomePage = () => {
  const HomeDiv = styled.div`
    padding: 70px 0px;
    margin: auto;
    text-align: center;
    font-size: 70px;
  `;
  const BorderLine = styled.div`
    border-top: 1px solid #ccc;
  `;

  return (
    <>
      <HomeDiv>Jeonguk's Blog!</HomeDiv>
      <BorderLine />
    </>
  );
};
export default HomePage;
