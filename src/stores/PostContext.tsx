import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useReducer,
  useRef,
  useContext,
} from "react";

interface Post {
  postId: number;
  postDate: number;
  postTitle: string;
  postContent: string;
}

type PostAction =
  | { type: "INIT"; data: Post[] }
  | { type: "CREATE"; data: Post }
  | { type: "DELETE"; id: number };

function reducer(state: Post[], action: PostAction): Post[] {
  let nextState: Post[];
  switch (action.type) {
    case "INIT":
      nextState = action.data;
      break;
    case "CREATE":
      nextState = [action.data, ...state];
      break;
    case "DELETE":
      nextState = state.filter((item) => item.postId !== action.id);
      break;
    default:
      return state;
  }
  localStorage.setItem("posts", JSON.stringify(nextState));
  return nextState;
}

const PostStateContext = createContext<Post[] | undefined>(undefined);
const PostDispatchContext = createContext<
  React.Dispatch<PostAction> | undefined
>(undefined);

const PostProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, dispatch] = useReducer(reducer, []);
  const postIdRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("posts");
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData: Post[] = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (item.postId > maxId) {
        maxId = item.postId;
      }
    });
    postIdRef.current = maxId + 1;

    dispatch({ type: "INIT", data: parsedData });
    setIsLoading(false);
  }, []);

  const addPost = (post: Post) => {
    dispatch({
      type: "CREATE",
      data: { ...post, postId: postIdRef.current++ },
    });
  };

  const deletePost = (postId: number) => {
    dispatch({ type: "DELETE", id: postId });
  };

  return (
    <PostStateContext.Provider value={posts}>
      <PostDispatchContext.Provider value={dispatch}>
        {!isLoading && children}
      </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
};

const usePosts = () => {
  const context = useContext(PostStateContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
};

const usePostDispatch = () => {
  const context = useContext(PostDispatchContext);
  if (context === undefined) {
    throw new Error("usePostDispatch must be used within a PostProvider");
  }
  return context;
};

export { PostProvider, usePosts, usePostDispatch };
