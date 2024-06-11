import { createContext, useState, ReactNode } from "react";

interface Post {
  postId: number;
  postDate: number;
  postTitle: string;
  postContent: string;
}

interface PostsContextProps {
  posts: Post[];
  addPost: (post: Post) => void;
}

const sampleData: Post[] = [
  {
    postId: 0,
    postDate: new Date().getTime(),
    postTitle: "제목테스트",
    postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit hic eum quos ut voluptatibus accusantium! Incidunt in deleniti ullam quibusdam. Esse quaerat dolor iste exercitationem praesentium, eius aut blanditiis.",
  },
  {
    postId: 1,
    postDate: new Date().getTime(),
    postTitle: "제목테스트2",
    postContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo aliquid aliquam quis provident temporibus iure, odit natus fugiat, esse veniam voluptate doloribus at iusto officiis ducimus. Nisi, minus delectus.",
  },
];

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(sampleData);

  const addPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export { PostProvider, PostsContext };
