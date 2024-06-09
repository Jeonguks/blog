import usePostStore from "../stores/usePostStore";

const PostListPage=() => {
  const posts = usePostStore((state)=>state.posts);

  return (
    <div>
      <h2>포스트 리스트를 보여주는 페이지</h2>
      {posts.map((post) => (
        <div key={post.postId}>
          <h2>{post.postTitle}</h2>
          <p>{post.postContent}</p>
        </div>
      ))}
    </div>
  );
};

export default PostListPage;
