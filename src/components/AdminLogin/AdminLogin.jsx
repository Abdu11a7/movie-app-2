import React, { useEffect, useState } from "react";
import SharedBtn from "../../SharedBtn";
import { useNavigate } from "react-router-dom";
import { checkAdminPassword, checkIfAdminLogged } from "../../API/FetchData";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [adminPass, setAdminPass] = useState("");
  const [error, setError] = useState(false);
  const changeInput = (e) => {
    setAdminPass(e.target.value);
  };
  const handleLoginAdmin = async (e) => {
    e.preventDefault();
    if (await checkAdminPassword(adminPass)) {
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    if (checkIfAdminLogged()) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <main className="mt-5">
      <div className="container admin rounded-1  p-3 shadow-lg">
        <div className="row align-items-center">
          <figure className="col-md-6">
            <img src="../../../src/assets/admin.svg" alt="" />
          </figure>
          <form className="col-md-6" onSubmit={handleLoginAdmin}>
            <label htmlFor="admin-password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control mb-4 px-2 py-2 py-lg-3"
              placeholder="Enter Your Password"
              onChange={changeInput}
            />
            {error && <p className="text-danger">Password is Incorrect</p>}
            <SharedBtn>Login</SharedBtn>
          </form>
        </div>
      </div>
    </main>
  );
}
