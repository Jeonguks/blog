import React, { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for React Router v6
import Showdown from "showdown";
import "./PostForm.css";
import { addPost } from "../stores/db";

const PostForm = () => {
  const [content, setContent] = useState("");
  const previewRef = useRef<HTMLDivElement>(null);
  const sd = new Showdown.Converter({ metadata: true });
  const navigate = useNavigate(); // useNavigate for navigation

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setContent(newValue);
    if (previewRef.current) {
      previewRef.current.innerHTML = sd.makeHtml(newValue);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost({ content })
      .then((newPost) => {
        alert("작성완료");
        navigate(`/post/${newPost.id}`); // navigate to the new post's URL
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <button type="submit">작성완료</button>
      <div className="container">
        <textarea
          className="editor"
          onChange={handleChange}
          spellCheck={false}
        ></textarea>
        <div ref={previewRef} className="preview"></div>
      </div>
    </form>
  );
};

export default PostForm;
