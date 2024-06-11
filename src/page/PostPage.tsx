import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../stores/PostContext";

const PostPage = () => {
  const params = useParams();
  const context = useContext(PostsContext);
  const { posts } = context;
//TODO FIX

  const filteredData = posts.filter(post => post.postId === Number(params.postId));
//TODO FIX
  return (
    <>
    {
      filteredData.length >0 ? (
        <div>
          <h1>{filteredData[0].postTitle}</h1>
          <p>{filteredData[0].postContent}</p>
          <small>{`작성일: ${new Date(filteredData[0].postDate).toLocaleString()}`}</small>
        </div>
      ) : (
        <h1>잘못된 접근입니다!</h1>
      )
    }
    </>
  );
};

export default PostPage;
