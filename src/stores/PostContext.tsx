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
    postContent: "내용테스트",
  },
  {
    postId: 1,
    postDate: new Date().getTime(),
    postTitle: "제목테스트2",
    postContent: "내용테스트22",
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
