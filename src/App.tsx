import { Route, Routes } from "react-router";
import HomePage from "./page/HomePage.tsx";
import AboutPage from "./page/AboutPage.tsx";
import NotFoundPage from "./page/NotFoundPage.tsx";
import Header from "./component/Header.tsx";
import PostingPage from "./page/PostingPage.tsx";
import PostListPage from "./page/PostListPage.tsx";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/write" element={<PostingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/list" element={<PostListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
