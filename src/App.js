import Home from "./components/Home";
import Footer from "./components/shares/Footer";
import Nav from "./components/shares/Nav";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
