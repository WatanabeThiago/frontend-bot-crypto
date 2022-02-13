import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { doLogin } from "../../services/AuthService";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value); 
  }

  function onChangePassword(event) {
    setPassword(event.target.value); 
  }

  async function onSubmit(event) {
    const isValid = await doLogin(email, password);
    console.table({email, password})
    console.log('Login válido: ',isValid)
    if (isValid) {
      history.push("/settings");
    } else {
      // TODO: Lógica de erro
    }
  }

  return (
    <main>
      <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
          <p className="text-center">
            <Link
              to="/"
              className="d-flex align-items-center justify-content-center"
            >
              <svg
                className="icon icon-xs me-2"
                fillRule="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Back to homepage
            </Link>
          </p>
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <div className="text-center">
                <img
                  src="/img/favicon/mstile-150x150.png"
                  alt="Beholder"
                  width={64}
                />
              </div>
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h1 className="mb-0-3 h3">Entre para mamar</h1>
              </div>
              <form action="#" className="mt-4" onSubmit={onSubmit}>
                <div className="form-group mb-4">
                  <label htmlFor="email">E-mail do bumbum guloso:</label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <svg
                        className="icon icon-xs text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="pirocudo@sexo.com"
                      id="email"
                      autofocus
                      required
                      onChange={onChangeEmail}
                    />
                  </div>
                  <label htmlFor="password">Senha do rei do sexo:</label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <svg
                        className="icon icon-xs text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="*****"
                      id="password"
                      autofocus
                      required
                      onChange={onChangePassword}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-top mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="remember"
                    />
                    <label className="form-check-label mb-0" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-gray-800">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
