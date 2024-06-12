import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 100px;
  height: 50px;
  background-color: skyblue;
  border: 0px;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
&:hover{
    background-color: blue;
    cursor: pointer;
}
`;

const TestPage = ()=>{

    return (
        <>
        <div>테스트하는공간</div>
        <ButtonStyle>이게이 뭐야</ButtonStyle>
        </>
    )
}

export default TestPage;