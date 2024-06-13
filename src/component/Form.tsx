import { ChangeEvent, useState } from "react";
import { usePostDispatch } from "../stores/PostContext";
import styled from "styled-components";
import { useNavigate } from "react-router";

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
  const nav = useNavigate();
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
    setPostTitle("");
    setPostContent("");
    nav(`/post/${idRef}`);
    idRef += 1;
    localStorage.setItem("POSTID", String(idRef));
  };
  const discardHandler = () => {
    if (confirm("글 작성을 취소 하시겠습니까?")) alert("취소되었습니다.");
    nav(-1);
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
      <button onClick={discardHandler}>취소하기</button>
    </FormTag>
  );
};
export default Form;
