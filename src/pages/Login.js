import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../components/services/UserService";
import loginImg from "../Images/login.png";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loginAlert, setLoginAlert] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  const LoginUser = (e) => {
    console.log(user);
    e.preventDefault();

    UserService.logUser(user)
      .then((response) => {
        console.log(response);
        navigate("/flightSearch");
      })
      .catch((err) => {
        console.log(err);
        setLoginAlert(true);
      });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="card p-5 mb-3">
              <div className="row g-0">
                <div className="col-md-6">
                  <img src={loginImg} className="img-fluid rounded-start"alt="Login..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title mb-5">Login</h5>
                    {loginAlert && (
                      <div className="alert alert-danger" role="alert">
                        {" "}
                        Username and password is not correct{" "}
                      </div>
                    )}

                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <button
                      onClick={LoginUser}
                      type="button"
                      className="btn btn-primary text-center"
                    >
                      Login
                    </button>
                    {/* <button
              onClick={reset}
              type="button"
              className="btn btn-danger"
            >
              Clear
            </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
