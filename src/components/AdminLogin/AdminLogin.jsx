import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAdminPassword, checkIfAdminLogged } from "../../API/FetchData";
import SharedBtn from "../../SharedBtn";
import "./AdminLogin.css";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [adminPass, setAdminPass] = useState("");
  const [error, setError] = useState(false);

  const changeInput = (e) => setAdminPass(e.target.value);

  const handleLoginAdmin = async (e) => {
    e.preventDefault();
    if (await checkAdminPassword(adminPass)) {
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (checkIfAdminLogged()) navigate("/dashboard");
  }, []);

  return (
    <main className="admin-login-page d-flex align-items-center justify-content-center min-vh-100">
      <motion.div
        className="admin-login-container container p-4 p-md-5 rounded-4 shadow-lg bg-dark text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row align-items-center">
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0 text-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src="../../../src/assets/admin.svg"
              alt="Admin Login"
              className="img-fluid w-75"
            />
          </motion.div>

          <motion.div
            className="col-lg-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.h2
              className="mb-4 fw-bold text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Admin Login
            </motion.h2>

            <form onSubmit={handleLoginAdmin}>
              <label htmlFor="admin-password" className="form-label">
                Password
              </label>
              <motion.input
                type="password"
                id="admin-password"
                name="password"
                className={`form-control px-3 py-2 mb-3 ${
                  error ? "is-invalid" : ""
                }`}
                placeholder="Enter your admin password"
                onChange={changeInput}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
              {error && (
                <motion.div
                  className="invalid-feedback d-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Password is incorrect. Please try again.
                </motion.div>
              )}
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <SharedBtn>Login</SharedBtn>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
