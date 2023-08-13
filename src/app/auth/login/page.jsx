"use client";

import "@/styles/auth.css";

import { useState } from "react";
import { userLogin } from "@/utils/authHandler";

const Login = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });
  const [result, setResult] = useState(false);

  const handleUserData = (e) => {
    const tempData = { ...authData };
    tempData[e.target.name] = e.target.value;
    setAuthData(tempData);
  };

  const handleLogin = async () => {
    const result = await userLogin(authData);

    console.log(result);

    if (result === true) {
      window.location.replace("/home");
    } else {
      console.log(result);
    }
  };

  return (
    <>
      <div className="h-100 d-flex align-items-center">
        <div className="col-4 mx-auto">
          <div className="txt-white text-center mb-5">
            <h1>Log In</h1>
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
                type="password"
                className="form-control transparent"
                name="password"
                id="password"
                placeholder=""
                onChange={handleUserData}
              />
              <label htmlFor="password">Password</label>
            </div>

            <div>
              <button
                type="button"
                className="btn btn-primary col-12"
                onClick={handleLogin}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
