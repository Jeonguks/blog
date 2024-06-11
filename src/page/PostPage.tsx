import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PostsContext } from "../stores/PostContext";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0px;

  & > .post-title {
    margin: 10px;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 100px;
`;

const PostPage = () => {
  const params = useParams();
  const context = useContext(PostsContext);

  if (!context) {
    return <h1>데이터를 불러오는 중입니다...</h1>;
  }

  const { posts } = context;

  const filteredData = posts.filter(
    (post) => post.postId === Number(params.postId)
  );

  return (
    <>
      {filteredData.length > 0 ? (
        <>
          <TitleWrapper>
            <h1 className="post-title">{filteredData[0].postTitle}</h1>
            <small>{`작성일: ${new Date(
              filteredData[0].postDate
            ).toLocaleString()}`}</small>
          </TitleWrapper>
          <ContentWrapper>
            <p>{filteredData[0].postContent}</p>
          </ContentWrapper>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3>포스트가 삭제되었거나 존재하지 않습니다.</h3>
          <Link to={"/"}>Home으로 돌아가기</Link>
        </div>
      )}
    </>
  );
};

export default PostPage;
