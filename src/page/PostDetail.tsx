import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Showdown from "showdown";
import { getPostById } from "../stores/db";

const PostDetail = () => {
  const [content, setContent] = useState("");
  const { postId } = useParams();
  const nav = useNavigate();
  const sd = new Showdown.Converter();

  useEffect(() => {
    // postId가 변할 때마다 새로운 포스트를 가져오기 위해 useEffect를 사용.
    getPostById(Number(postId))
      .then((result) => {
        setContent(result.content);
      })
      .catch((error) => {
        alert(error);
        nav("/");
      });
  }, [postId, nav]);

  // content가 변경될 때마다 HTML을 새로 만들어서 반환.
  return <div dangerouslySetInnerHTML={{ __html: sd.makeHtml(content) }} />;
};

export default PostDetail;
