import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{ height: '60vh' }}
    >
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>Sorry, this page isn't available. </h1>
            <p className="mt-3" style={{ fontWeight: 500 }}>
              The link you followed may be broken, or the page may have been
              removed.
              <br />
              <br />
              <Link to="/" className="text-success">
                Go back to Welcome page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
