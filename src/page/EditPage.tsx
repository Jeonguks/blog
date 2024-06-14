import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import { usePostDispatch, usePosts } from "../stores/PostContext";

const PostingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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

const EditPage = () => {
  const { postId } = useParams();
  const nav = useNavigate();
  const posts = usePosts()
  const dispatch = usePostDispatch();

  const postData = posts.find((post: { postId: number; }) => post.postId === Number(postId));

  if (!postData) {
    throw new Error("Post not found!");
  }
 
  const [postTitle, setPostTitle] = useState(postData.postTitle);
  const [postContent, setPostContent] = useState(postData.postContent);

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedPost = {
      ...postData,
      postTitle,
      postContent,
    };
    dispatch({
      type: "UPDATE", 
      data: updatedPost
    });
    
    alert("수정완료!");
    setPostTitle("");
    setPostContent("");
    nav(`/post/${postId}`);
  };
  const discardHandler = () => {
    if (confirm("글 수정을 취소 하시겠습니까?")) alert("취소되었습니다.");
    setPostTitle("");
    setPostContent("");
    nav(-1);
  };
  return (
    <PostingDiv>
      <h2>글 수정하기</h2>
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
        <button type="submit">수정완료!</button>
        <button onClick={discardHandler}>취소하기</button>
      </FormTag>
    </PostingDiv>
  );
};

export default EditPage;
