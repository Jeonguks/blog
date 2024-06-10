import { ChangeEvent, useState, useRef } from "react";

const sampleData = [
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

const Form = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [posts, setPost] = useState(sampleData);
  const postIdRef = useRef(2);

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost = {
      postId: postIdRef.current++,
      postDate: new Date().getTime(),
      postTitle: postTitle,
      postContent: postContent,
    };

    setPost([...posts, newPost]);
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
