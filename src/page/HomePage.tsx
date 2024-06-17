import {
  BsFillChatFill,
  BsFillSendFill,
  BsGithub,
  BsHeart,
} from "react-icons/bs";
import styled from "styled-components";
import Tooltip from "../ui/Tooltip";

const HomePage = () => {
  const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 280px;
    width: 100%;
  `;
  const ProfileDiv = styled.div`
    height: 200px;
    width: 60%;
    display: flex;
    align-items: center;
    gap: 50px;
    border-bottom: 1px solid #ccc;
  `;
  const ProfileImg = styled.img`
    height: 120px;
    width: 120px;
    border: 1px solid #ccc;
    border-radius: 50%;
  `;
  const ProfileBannder = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    height: 50px;
    width: 60%;
    & > * > * > .icon {
      color: gray;
      height: 30px;
      width: 30px;
    }
    & > .icon:hover {
      cursor: pointer;
    }
  `;
  return (
    <>
      <ProfileWrapper>
        <ProfileDiv>
          <ProfileImg alt={"profileImg"} />
          <div>
            <h1>UUGI</h1>
            <p>코딩하는 공대생</p>
            <BsHeart className="icon" />
          </div>
        </ProfileDiv>
        <ProfileBannder>
          <a href="https://github.com/Jeonguks/">
            <Tooltip message={"GitHub"}>
              <BsGithub className="icon" />
            </Tooltip>
          </a>
          <a href="#">
            <Tooltip message={"ju460648@gmail.com"}>
              <BsFillSendFill className="icon" />
            </Tooltip>
          </a>
          <a href="#">
            <Tooltip message={"Chat"}>
              <BsFillChatFill className="icon" />
            </Tooltip>
          </a>
        </ProfileBannder>
      </ProfileWrapper>
    </>
  );
};
export default HomePage;
