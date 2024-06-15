import styled from "styled-components";
import PostList from "../component/PostList";

const Wrapper = styled.div`
padding-top: 50px;
height: 600px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;
`;
// const Post = styled.div`
//   border: 1px solid #ccc;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 70%;
//   height: 200px;
// `;
// const PostThumbnail = styled.div`
//   width: 140px;
//   height: 80%;
//   border: 1px solid #ccc;
//   margin-inline: 10px;
// `;
// const PostDescribe = styled.div`
//   width: 80%;
//   height: 80%;
//   margin: 10px;
//   border: 1px solid #ccc; //TODO FIX
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
const PostListPage = () => {
  return (
    <Wrapper>
      <h2 style={{ textAlign: "center" }}>Posts</h2>
      <PostList />
    </Wrapper>
  );
};

export default PostListPage;
