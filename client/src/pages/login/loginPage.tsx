import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );
      dispatch(setUser(res.data.user));
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="container container-auth">
      <div className="card">
        <div className="card-header">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="row">
              <input
                placeholder="Email:"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control"
                type="email"
              />
            </div>
            <div className="row">
              <input
                placeholder="Senha:"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
          </div>
          <div className="card-footer">
            <div className="row">
              <button type="submit" className="btn btn-submit">
                Login
              </button>
            </div>
            <div className="row">
                <Link className="btn btn-all" to="/register">
                  Criar conta
                </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
