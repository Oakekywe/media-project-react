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

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
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
        </Route>
        <Route />
        <Route path="*" element={<FallBackRoute />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
