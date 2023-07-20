import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "./shares/Api";
import Loading from "./shares/Loading";
import { addUser, removeUser } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [phone, setPhone] = useState("12345678");
  const [password, setPassword] = useState("12345678");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  const apiLogin = async (user) => {
    let res = await fetch(API_URL + "/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    });

    const data = await res.json();

    if (data.con) {
      navigate("/admin");
      dispatch(addUser(data.data));
      console.log(userData);
    } else {
      console.log("errors:", data.message);
    }
    setIsLoading(false);
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let user = { phone, password };
    apiLogin(user);
  };

  return (
    <div className="container my-5">
      {isLoading && <Loading />}
      <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
        <h1 className="text-white text-center">Login To Post</h1>
        <form onSubmit={loginUser}>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label text-white">
              Phone
            </label>
            <input
              type="tel"
              className="form-control rounded-0 bg-dark text-white"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0  bg-dark text-white"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberCheck"
            />
            <label
              className="form-check-label text-white"
              htmlFor="rememberCheck"
            >
              Remember Me
            </label>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/register">Not a member yet! Register here</Link>
            <div>
              <button
                type="reset"
                className="btn btn-outline-warning btn-sm mx-2 text-white"
              >
                Cancle
              </button>
              <button type="submit" className="btn btn-success btn-sm">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
