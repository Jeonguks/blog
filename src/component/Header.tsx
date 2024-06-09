import styled from "styled-components";
import LoginModal from "./LoginModal";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  background-color: #fff;
  height: 50%;
  width: auto;
  margin: 0px 15px;
  gap: 5px;
`;

const Header = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal(){
        setIsOpen(true)
    }
    function closeModal(){
        setIsOpen(false)
    }
  return (
    <>
        <HeaderDiv>
        <Nav>
            <a href="#" onClick={openModal}>Login</a>
            <Link to={'/write'}>Posting</Link>
        </Nav>
        <Nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/list'}>Post</Link>
        </Nav>
        </HeaderDiv>
        <LoginModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </>
  );
};
export default Header;
