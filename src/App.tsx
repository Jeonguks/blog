import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage.tsx";
import AboutPage from "./page/AboutPage.tsx";
import NotFoundPage from "./page/NotFoundPage.tsx";
import Header from "./component/Header.tsx";
import PostingPage from "./page/PostingPage.tsx";
import PostListPage from "./page/PostListPage.tsx";
import LoginPage from "./page/LoginPage.tsx";
import styled from "styled-components";
import PostDetail from "./page/PostDetail.tsx";

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 60px;
`;

function App() {
  return (
    <>
      <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/write" element={<PostingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post" element={<PostListPage />} />
            <Route path="/post/:postId" element={<PostDetail />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      <Wrapper />
    </>
  );
}

export default App;
