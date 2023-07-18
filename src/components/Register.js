import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container my-5">
      <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
        <h1 className="text-white text-center">Register To Be A Member</h1>
        <form>
          <div class="input-group mt-5 my-3">
            <span class="input-group-text" id="basic-addon1">
              <i className="fa fa-user"></i>
            </span>
            <input type="text" class="form-control" placeholder="name" />
          </div>
          <div class="input-group mt-4 mb-3">
            <span class="input-group-text" id="basic-addon1">
              <i className="fa fa-phone"></i>
            </span>
            <input type="tel" class="form-control" placeholder="phone" />
          </div>
          <div class="input-group mt-4 mb-3">
            <span class="input-group-text" id="basic-addon1">
              <i className="fa fa-lock"></i>
            </span>
            <input type="tel" class="form-control" placeholder="password" />
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
