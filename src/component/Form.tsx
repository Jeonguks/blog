import { ChangeEvent, useState, useRef, useContext } from "react";
import { PostsContext } from "../stores/PostContext";
import styled from "styled-components";

const FormTag = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 5px;
`;
const InputTag = styled.input`
  font-size: 15px;
  font-weight: bold;
  height: 30px;
`
const TextareaTag = styled.textarea`
  height: 100px;
`;

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
    <FormTag onSubmit={onSubmit}>
      <InputTag
        type="text"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        placeholder="제목을 입력하세요"
        required
      />
      <TextareaTag
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="내용을 입력하세요"
        required
      />
      <button type="submit">작성완료!</button>
    </FormTag>
  );
};
export default Form;
