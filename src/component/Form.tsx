import { useState } from "react";
import usePostStore from "../stores/usePostStore";

const Form = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const addPost = usePostStore((state)=>state.addPost);

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addPost({ postTitle, postContent });
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
      <input
        type="text"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />
      <button type="submit">작성완료!</button>
    </form>
  );
};
export default Form;
