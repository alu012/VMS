import React from 'react';
import { Link } from 'react-router-dom';

const PricingPlans = () => {
  return (
    <section id="pricing">
      <div class="text-center container py-5" id="header">
        <p class="mt-4">For one low month price</p>
        <h1 class="m-0">instantly watch TV shows &amp; Movies</h1>
      </div>
      <div class="container my-3">
        <div class="row no-gutters">
          <div class="col-8 mx-auto mt-5">
            <div class="row">
              <div class="col-md-6 col-lg-4 col-xl-4 plan mb-3">
                <div class="card">
                  <div class="card-body">
                    <h3 class="pt-2">Free Trail</h3>
                    <h2 class="text-center p-4">$0.00</h2>
                    <div class="plan-list pb-5">
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>20 Movies &amp;
                        Shows
                      </h5>
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>Watch on any
                        Device
                      </h5>
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>Movies &amp; TV
                        shows
                      </h5>
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>Upgrade Plan
                        Anytime
                      </h5>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link to="register">
                        <button
                          className="btn btn-success"
                          style={{ width: '120px', letterSpacing: '1px' }}
                        >
                          Next Step
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-4 plan mb-3">
                <div class="card">
                  <div class="card-body">
                    <h3 class="pt-2">Starter</h3>
                    <h2 class="text-center p-4">
                      $10.00
                      <span style={{ fontSize: '14px' }}>/mounth</span>
                    </h2>
                    <div class="plan-list pb-5">
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>70 Movies &amp;
                        Shows
                      </h5>
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>Watch on any
                        Device
                      </h5>
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>Movies &amp; TV
                        shows
                      </h5>
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>Upgrade Plan
                        Anytime
                      </h5>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link to="register">
                        <button
                          className="btn btn-success"
                          style={{ width: '120px', letterSpacing: '1px' }}
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-4 plan mb-3">
                <div class="card">
                  <div class="card-body">
                    <h3 class="pt-2">Premium</h3>
                    <h2 class="text-center p-4">
                      $14.00
                      <span style={{ fontSize: '14px' }}>/mounth</span>
                    </h2>
                    <div class="plan-list pb-5">
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>Unlimited Movies
                        &amp; Shows
                      </h5>
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>Watch on any
                        Device
                      </h5>
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>Movies &amp; TV
                        shows
                      </h5>
                      <h5>
                        <i class="fas fa-caret-right mr-2"></i>Ultimate Video
                        Package
                      </h5>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link to="register">
                        <button
                          className="btn btn-success"
                          style={{ width: '120px', letterSpacing: '1px' }}
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="hr" class="my-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
