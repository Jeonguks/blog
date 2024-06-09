import usePostStore from "../stores/usePostStore";

const PostList = () => {
  const posts = usePostStore((state)=>state.posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.postId}>
          <h2>{post.postTitle}</h2>
          <p>{post.postContent}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;