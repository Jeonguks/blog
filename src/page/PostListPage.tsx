import styled from "styled-components";
import PostList from "../component/PostList";

const PageWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostListPage = () => {
  return (
    <PageWarpper>
      <h2 style={{ textAlign: "center" }}>Posts</h2>
      <PostList/>
    </PageWarpper>
  );
};

export default PostListPage;
