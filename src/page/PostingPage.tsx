import Form from "../component/Form";
import styled from "styled-components";

const PostingDiv = styled.div`
  
  display:flex;
  flex-direction: column;
  align-items:center;
`

const PostingPage = () => {
  return (
    <PostingDiv>
      <h2>글 작성하기</h2>
      <Form />
    </PostingDiv>
  );
};

export default PostingPage;
