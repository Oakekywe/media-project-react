import React, { useEffect, useState } from "react";
import logoImg from "../../statics/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/action";
import API_URL from "./Api";

function Nav() {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cats, setCats] = useState([]);

  const loadCats = async () => {
    let res = await fetch(API_URL + "/cats");
    let data = await res.json();

    if (data.con) {
      setCats(data.data);
    } else {
      console.log("errors");
    }
  };

  useEffect(()=>{loadCats()},[])


  const logout = () => {
    dispatch(removeUser(null));
    navigate("/login");
  };

  return (
    <div className="contaner-fluid bg-dark">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <img src={logoImg} alt="bm logo" width="30" height="30" />
          <Link to="/" className="navbar-brand text-white ms-2">
            BM Media
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {cats.length > 0 && cats.map((cat) => <li key={cat.id} className="nav-item">
                <Link className="nav-link active text-white" to={`/cat-page/by-cat/${cat.id}`}>
                  {cat.name}
                </Link>
              </li>)}
              
              {userData && (
                <li className="nav-item">
                  <Link to="/admin" className="nav-link text-white">
                    Admin Panel
                  </Link>
                </li>
              )}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {!userData && (
                    <li>
                      <Link to="/login" className="dropdown-item">
                        Login
                      </Link>
                    </li>
                  )}
                  {!userData && (
                    <li>
                      {" "}
                      <Link to="/register" className="dropdown-item">
                        Register
                      </Link>
                    </li>
                  )}
                  {userData && (
                    <li>
                      <a className="dropdown-item linkDisable" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
