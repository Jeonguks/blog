import styled from "styled-components";

const HomePage = () => {
  const HomeDiv = styled.div`
    padding: 70px 0px;
    margin: auto;
    text-align: center;
    font-size: 70px;
  `;
  const StyledDiv = styled.div`
    padding: 70px 0px;
    margin: auto;
    text-align: center;
    font-size: 20px;
    background-color: #ccc;
  `;
  const BorderLine = styled.div`
    border-top: 1px solid #f1dddd;
  `;

  return (
    <>
      <HomeDiv>Jeonguk's Blog!</HomeDiv>
      <BorderLine />
      <h2> - Recent Post</h2>
      <StyledDiv>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil placeat minus praesentium assumenda suscipit quas. Tempora, maxime minus quibusdam reprehenderit aut illum quos cupiditate dolorem ex ab quo corrupti.</StyledDiv>
      <BorderLine />
      <StyledDiv>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit similique perferendis temporibus earum pariatur, inventore provident quaerat adipisci veniam quisquam a nulla nesciunt itaque deleniti, saepe in possimus dolore.</StyledDiv>
      <BorderLine />
      <StyledDiv>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit similique perferendis temporibus earum pariatur, inventore provident quaerat adipisci veniam quisquam a nulla nesciunt itaque deleniti, saepe in possimus dolore.</StyledDiv>
      <BorderLine />
      <StyledDiv>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit similique perferendis temporibus earum pariatur, inventore provident quaerat adipisci veniam quisquam a nulla nesciunt itaque deleniti, saepe in possimus dolore.</StyledDiv>
    </>
  );
};
export default HomePage;
