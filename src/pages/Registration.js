import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../components/services/UserService";
import signupImg from "../Images/signup.png";
const Registration = () => {
  const [user, setUser] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };
  const RegisterUser = (e) => {
    e.preventDefault();
    navigate("/login");
    UserService.saveUser(user)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   const reset=(e)=>{
  //     e.preventDefault();
  //     setUser({
  //       "id":"",
  //       "firstName":"",
  //       "lastName":"",
  //       "emailId":""

  //   })
  // }
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="card p-5">
            <div className="row justify-content-center">
          <div className="col-6">
          <img src={signupImg} className="img-fluid rounded-start" alt="Sign up..."/>
          </div>
          <div className="col-6">
          <div className="card-body">
                <h5 className="card-title">Sign up</h5>
               
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={user.firstName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={user.lastName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
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
                    id="exampleFormControlInput1"
                    name="password"
                    value={user.password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <button
                  onClick={RegisterUser}
                  type="button"
                  className="btn btn-primary text-center"
                >
                  Sign up
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

export default Registration;
