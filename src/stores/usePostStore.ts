import { create } from "zustand";

interface postState {
  postId: number;
  postTitle: string;
  postContent: string;
}

interface postListState {
  posts: postState[];
  addPost: (newPost: { postTitle: string; postContent: string }) => void;
}

export const usePostStore = create<postListState>((set) => ({
  posts: [],
  addPost: ({ postTitle, postContent }) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          postId: state.posts.length + 1,
          postTitle,
          postContent,
        },
      ],
    })),
}));

export default usePostStore;
