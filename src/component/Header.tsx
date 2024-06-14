import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";

const HeaderDiv = styled.div`
  display: flex;
  text-align: center;
  background-color: skyblue;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  width: auto;
  margin: 0px 15px;
  gap: 5px;
`;

const Header = () => {
  const nav = useNavigate();
  return (
    <>
      <HeaderDiv>
        <Nav>
          <button onClick={()=>(nav("/login"))}>Login</button>
          <Link to={"/write"}>Posting</Link>
        </Nav>
        <Nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/post"}>Post</Link>
          <Link to={"/post"}>Search</Link>
          <button>햄버거</button>
        </Nav>
      </HeaderDiv>
    </>
  );
};
export default Header;
