import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SigninModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <button
        className="btn btn-outline-success btn-block"
        type="button"
        data-toggle="modal"
        data-target="#login"
      >
        Log in
      </button>

      <div
        className="modal fade bg-md-white"
        role="dialog"
        tabIndex="-1"
        id="login"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header align-items-center px-lg-4">
              <h3 className="modal-title" style={{ letterSpacing: '1px' }}>
                Please Login
              </h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="my-lg-5 px-lg-5 px-md-3">
                <div className="form-group">
                  <label htmlFor="email" className="text-muted">
                    * Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    className="form-control"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group my-2">
                  <label htmlFor="password" className="text-muted">
                    * Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    className="form-control"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </div>
                <div className="d-flex justify-content-between my-5">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheck-1"
                    />
                    <label
                      className="form-check-label text-muted"
                      htmlFor="formCheck-1"
                    >
                      Remember me
                    </label>
                  </div>
                  <h6 className="text-capitalize text-success">
                    lost yout account
                  </h6>
                </div>
                <div className="form-row">
                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <button
                      className="btn btn-success btn-block btn-lg mb-5"
                      type="button"
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <div>
                    <span className="text-capitalize text-muted">
                      Dont have an account?&nbsp;
                    </span>
                    <Link to="pricing-plans">
                      <span className="text-success">Sign in</span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninModal;
