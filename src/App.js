import Home from "./components/Home";
import Footer from "./components/shares/Footer";
import Nav from "./components/shares/Nav";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";
import RouteGuard from "./components/shares/RouteGuard";
import { FallBackRoute } from "./components/shares/FallBackRoute";
import AllCat from "./components/admin/category/AllCat";
import AddCat from "./components/admin/category/AddCat";
import EditCat from "./components/admin/category/EditCat";
import AllTag from "./components/admin/tag/AllTag";
import EditTag from "./components/admin/tag/EditTag";
import AddTag from "./components/admin/tag/AddTag";
import AllPost from "./components/admin/post/AllPost";
import EditPost from "./components/admin/post/EditPost";
import AddPost from "./components/admin/post/AddPost";
import CatPage from "./components/CatPage";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat-page/:type/:id" element={<CatPage />} />
        <Route path="/post-detail/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <RouteGuard>
              <Admin />
            </RouteGuard>
          }
        >
          <Route path="cats">
            <Route path="all" element={<AllCat />} />
            <Route path="add" element={<AddCat />} />
            <Route path="edit/:id" element={<EditCat />} />
          </Route>
          <Route path="tags">
            <Route path="all" element={<AllTag />} />
            <Route path="add" element={<AddTag />} />
            <Route path="edit/:id" element={<EditTag />} />
          </Route>
          <Route path="posts">
            <Route path="all" element={<AllPost />} />
            <Route path="add" element={<AddPost />} />
            <Route path="edit/:id" element={<EditPost />} />
          </Route>
        </Route>
        <Route />
        <Route path="*" element={<FallBackRoute />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
