import { useContext } from "react";
import { PostsContext } from "../stores/PostContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
            <Link to={`/post/${post.postId}`}>
            <h3>{post.postTitle}</h3>
            </Link>
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
