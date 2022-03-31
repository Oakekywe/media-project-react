export default function Login() {
   return (
      <div className="container my-5">
         <div className="col-md-6 mt-5 offset-md-3 bg-dark p-5">
            <h1 className="text-white text-center">Login To Post</h1>
            <form>
               <div className="mb-3">
                  <label for="phone" className="form-label text-white">Phone</label>
                  <input type="tel" className="form-control rounded-0 bg-dark text-white" id="phone" />
               </div>
               <div className="mb-3">
                  <label for="password" className="form-label text-white">Password</label>
                  <input type="password" className="form-control rounded-0  bg-dark text-white" id="password" />
               </div>
               <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberCheck" />
                  <label className="form-check-label text-white" for="rememberCheck">Remember Me</label>
               </div>
               <div className="d-flex justify-content-between mt-4">
                  <a href="#">Not a member yet! Register herer</a>
                  <div>
                     <button type="reset" className="btn btn-outline-warning btn-sm mx-2 text-white">Cancle</button>
                     <button type="submit" className="btn btn-success btn-sm">Login</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}
