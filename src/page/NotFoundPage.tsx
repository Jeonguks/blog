import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>잘못된 접근 입니다! </h1>
      <Link to={"/"}>Home으로 돌아가기</Link>
    </div>
  );
};
export default NotFoundPage;
