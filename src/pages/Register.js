import React from 'react';
import { Link } from 'react-router-dom';
import PaypalButton from '../components/util/Paypal';
import country from '../components/util/Country';

const Register = () => {
  const countList = country.map((item) => <option value={item}>{item}</option>);

  return (
    <section id="pricing">
      <div className="text-center container py-5" id="header">
        <p className="mt-4">For one low month price</p>
        <h1 className="m-0">instantly watch TV shows &amp; Movies</h1>
      </div>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-7 mx-auto">
            <div className="row">
              <div className="col-12 p-0">
                <div className="d-flex justify-content-center">
                  <Link to="pricing-plans">
                    <button
                      className="btn btn-success"
                      type="button"
                      style={{
                        width: '300px',
                        height: '50px',
                        letterSpacing: '1px',
                        fontSize: '19px',
                      }}
                    >
                      Back to Choose a Plan
                    </button>
                  </Link>
                </div>
                <div id="signup-form" className="m-5">
                  <form>
                    <div className="form-group">
                      <label className="text-muted">* UserName</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label className="text-muted">* FullName</label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                      <label className="text-muted">* Email Address</label>
                      <input className="form-control" type="email" />
                    </div>
                    <div className="form-group">
                      <label className="text-muted">* Password</label>
                      <input className="form-control" type="password" />
                    </div>
                    <div className="form-group">
                      <label className="text-muted">* Country/Region</label>
                      <select className="form-control">{countList}</select>
                    </div>
                  </form>
                </div>
                <div id="hr" className="my-4"></div>
              </div>
              <div className="col" id="payment">
                <div className="my-3" style={{ letterSpacing: '1px' }}>
                  <h2>Your Payment</h2>
                  <p>Payment Summary</p>
                  <p>
                    Your currently selected plan:&nbsp;<strong>Starter</strong>,
                    Plan Amount:&nbsp;<strong>10.00&nbsp;USD&nbsp;</strong>
                    Coupon Discount Amount:&nbsp;<strong>0.00&nbsp;USD</strong>,
                    Final Payable Amount:&nbsp;<strong>10.00&nbsp;USD</strong>
                    <br />
                  </p>
                </div>
                <div className="text-right mt-3">
                  <PaypalButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
