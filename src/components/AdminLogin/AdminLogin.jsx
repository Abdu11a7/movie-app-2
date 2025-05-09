import React from "react";
import SharedBtn from "../../SharedBtn";

export default function AdminLogin() {
  return (
    <main className="mt-5">
      <div className="container admin rounded-1  p-3 shadow-lg">
        <div className="row align-items-center">
          <figure className="col-md-6">
            <img src="../../../src/assets/admin.svg" alt="" />
          </figure>
          <form className="col-md-6">
            <label htmlFor="admin-name" className="form-label">
              Admin Name
            </label>
            <input
              type="text"
              placeholder="Enter Admin Name"
              className="form-control mb-4 px-2 py-2 py-lg-3"
              id="admin-name"
            />

            <label htmlFor="admin-password" className="form-label">
              Password
            </label>
            <input
              type="text"
              id="admin-password"
              className="form-control mb-4 px-2 py-2 py-lg-3"
              placeholder="Enter Your Password"
            />
            <SharedBtn>Login</SharedBtn>
          </form>
        </div>
      </div>
    </main>
  );
}
