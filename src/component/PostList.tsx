import { useEffect, useState } from "react";
import { getAllPosts } from "../stores/db"
import styled from "styled-components";

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

interface Post {
  id?: number;
  content: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    getAllPosts().then((posts) => {
      setPosts(posts);
    });
  };

  return (
    <ListWrapper>
      {posts.map((post) => (
        <ListItem key={post.id}>{post.content}</ListItem>
      ))}
    </ListWrapper>
  );
};

export default PostList;
