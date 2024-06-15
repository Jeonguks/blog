import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsFillHouseFill, BsFillPersonFill, BsPostcardFill, BsSearch } from "react-icons/bs";

const HeaderDiv = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 40px;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  width: auto;
  margin: 0px 15px;
  gap: 20px;
& > *:hover{
  cursor: pointer;
}

`;

const Header = () => {
  const nav = useNavigate();
  return (
    <>
      <HeaderDiv>
        <Nav>
          <BsFillPersonFill onClick={()=>(nav("/login"))}/>
        </Nav>
        <Nav>
          <BsFillHouseFill onClick={()=>(nav("/"))} />
          <BsPostcardFill onClick={()=>(nav("/post"))}/>
          <BsSearch/>
        </Nav>
      </HeaderDiv>
    </>
  );
};
export default Header;
