import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top:15px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    border: 1px solid #ccc;
    border-radius:5px;
    padding: 10px;
    width: 170px;
    margin: 3px;
  }
`;
const Button = styled.button`
  background-color: skyblue;
  color: #fff;
  border: none;
  width: 190px;
  padding: 10px;
  height: 40px;
  border-radius:5px;
  cursor: pointer;
`;
const LoginPage = () => {
  return (
    <>
      <LoginWrapper>
        <h2>Login</h2>
        <InputWrapper>
          <input placeholder="ID" type="text" />
          <input placeholder="Password" type="password" />
        </InputWrapper>
        <Button>Login</Button>
      </LoginWrapper>
    </>
  );
};
export default LoginPage;
