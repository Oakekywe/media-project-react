import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "./shares/Api";
import Loading from "./shares/Loading";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const apiRegister = async (user) => {
    let res = await fetch(API_URL + "/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await res.json();
    if (data.con) {
      navigate("/login");
    } else {
      console.log("error", data.errors);
    }
    setIsLoading(false);
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let user = {
      name,
      email,
      password,
      phone,
    };
    apiRegister(user);

    setEmail("");
    setName("");
    setPhone("");
    setPassword("");
  };

  return (
    <div className="container my-5">
      {isLoading && <Loading />}
      <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
        <h1 className="text-white text-center">Register To Be A Member</h1>
        <form onSubmit={loginUser}>
          <div className="input-group mt-5 my-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div className="input-group mt-4 mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className="input-group mt-4 mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-phone"></i>
            </span>
            <input
              type="tel"
              className="form-control"
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
          </div>

          <div className="input-group mt-4 mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/login">Already member! login here</Link>

            <div>
              <button
                type="reset"
                className="btn btn-outline-warning btn-sm mx-2 text-white"
              >
                Cancle
              </button>
              <button type="submit" className="btn btn-success btn-sm">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
