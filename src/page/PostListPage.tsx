import PostList from "../component/PostList";


const PostListPage=() => {

  return (
    <div>
      <h2>포스트 리스트를 보여주는 페이지</h2>
      <PostList/>
      <div style={{borderTop:`1px solid black`, width:`100%`}}></div>
    </div>
  );
};

export default PostListPage;
