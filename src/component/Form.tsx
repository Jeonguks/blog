import { ChangeEvent, useState } from "react";
import { usePostDispatch } from "../stores/PostContext";
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
`;
const TextareaTag = styled.textarea`
  height: 100px;
`;

const Form = () => {
  let idRef = Number(localStorage.getItem("POSTID"));
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const dispatch = usePostDispatch();

  if (!dispatch) {
    throw new Error("Form must be used within a PostsProvider");
  }

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost = {
      postId: idRef,
      postDate: new Date().getTime(),
      postTitle: postTitle,
      postContent: postContent,
    };

    dispatch({ type: "CREATE", data: newPost });
    alert("작성완료!");
    idRef+=1;
    localStorage.setItem("POSTID",String(idRef))
    setPostTitle("");
    setPostContent("")
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
