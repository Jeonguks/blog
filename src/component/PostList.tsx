import { useContext } from "react";
import { PostsContext } from "../stores/PostContext";
import styled from "styled-components";

const PostListDiv = styled.div`
  display:flex;

`

const PostList = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("wrong!");
  }

  const { posts } = context;

  return (
    <PostListDiv>
      <ul>
        {posts.map((post) => (
          <>
          <div>
            <h3>{post.postTitle}</h3>
            <p>{post.postContent}</p>
            <small>{`작성일: ${new Date(post.postDate).toLocaleString()}`}</small>
          </div>
          </>
        ))}
      </ul>
      
    </PostListDiv>
  );
};

export default PostList;
