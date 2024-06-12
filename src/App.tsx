import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage.tsx";
import AboutPage from "./page/AboutPage.tsx";
import NotFoundPage from "./page/NotFoundPage.tsx";
import Header from "./component/Header.tsx";
import PostingPage from "./page/PostingPage.tsx";
import PostListPage from "./page/PostListPage.tsx";
import { PostProvider } from "./stores/PostContext.tsx";
import PostPage from "./page/PostPage.tsx";
import TestPage from "./page/TestPage.tsx";

function App() {
  return (
    <>
      <Header />
      <PostProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<PostingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/list" element={<PostListPage />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PostProvider>
    </>
  );
}

export default App;
