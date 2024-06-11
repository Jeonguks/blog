import { useContext } from "react";
import { PostsContext } from "../stores/PostContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const PostContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  width: 700px;
  height: 130px;
  margin: 10px 0px;
  justify-content: space-between;
  & > * {
    margin: 5px;
  }
  & > a > h3{
    margin: 0px;
  }
`;
const PostList = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("wrong!");
  }

  const { posts } = context;
  return (
    <PostListWrapper>
      <ul>
        {posts.map((post) => (
          <>
            <PostContentDiv>
              <Link to={`/post/${post.postId}`}>
                <h3>{post.postTitle}</h3>
              </Link>
              <p>{post.postContent}</p>
              <small>{`작성일: ${new Date(
                post.postDate
              ).toLocaleString()}`}</small>
            </PostContentDiv>
          </>
        ))}
      </ul>
    </PostListWrapper>
  );
};

export default PostList;
