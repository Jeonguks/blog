import { ChangeEvent, useState, useRef, useContext } from "react";
import { PostsContext } from "../stores/PostContext";

const Form = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const postIdRef = useRef(2);

  const context = useContext(PostsContext);

  if (!context) {
    throw new Error("Form must be used within a PostsProvider");
  }

  const { addPost } = context;

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost = {
      postId: postIdRef.current++,
      postDate: new Date().getTime(),
      postTitle: postTitle,
      postContent: postContent,
    };

    addPost(newPost);
    alert("작성완료!");
    setPostTitle("");
    setPostContent("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />
      <button type="submit">작성완료!</button>
    </form>
  );
};
export default Form;
