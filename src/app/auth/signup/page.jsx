"use client";

import "@/styles/auth.css";
import { useState } from "react";
import { registerUser } from "@/utils/authHandler";

const Signup = () => {
  const [authData, setAuthData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleUserData = (e) => {
    const tempData = { ...authData };
    tempData[e.target.name] = e.target.value;
    setAuthData(tempData);
  };

  const handleSubmit = () => {
    registerUser(authData);
  };

  return (
    <>
      <div className="h-100 d-flex align-items-center">
        <div className="col-4 mx-auto">
          <div className="txt-white text-center mb-5">
            <h1>Sign Up</h1>
          </div>

          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control transparent"
                name="email"
                id="email"
                placeholder=""
                onChange={handleUserData}
              />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control transparent"
                name="username"
                id="username"
                placeholder=""
                onChange={handleUserData}
              />
              <label htmlFor="username">Usename</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control transparent"
                name="password"
                id="password"
                placeholder=""
                onChange={handleUserData}
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control transparent"
                name="confirmPassword"
                id="confirmPassword"
                placeholder=""
                onChange={handleUserData}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>

            <div>
              <button
                type="button"
                className="btn btn-primary col-12"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
