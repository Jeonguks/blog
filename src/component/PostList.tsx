import { useEffect, useState } from "react";
import { getAllPosts } from "../stores/db";
import styled from "styled-components";
import { useNavigate } from "react-router";


const ListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ccc;
  width: 80%;
  height: 200px;
  margin: 10px;
`;
const PostThumbnail = styled.div`
  margin-left: 5px;
  width: 20%;
  height: 80%;
  border: 1px solid #ccc;
`;
const PostTitle =styled.h3`
color:blue;
&:hover{
  cursor:pointer;
}`
const PostDescribe = styled.div`
  width: 70%;
  height: 80%;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc; //TODO FIX
`;


interface Post {
  id?: number;
  content: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    getAllPosts().then((posts) => {
      setPosts(posts);
    });
  };

  return (
    <>
      {posts.map((post) => (
        <ListWrapper>
          <PostThumbnail />
          <PostDescribe key={post.id}>
            <PostTitle onClick={()=>{nav(`/post/${post.id}`)}}>{post.id}</PostTitle>
            {post.content}
          </PostDescribe>
        </ListWrapper>
      ))}
    </>
  );
};

export default PostList;
