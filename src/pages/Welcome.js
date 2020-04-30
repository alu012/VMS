import React from 'react';

// Component staff
import Section from '../components/util/Section';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center"
        id="hero"
      >
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1 id="welcome-heading">
                Welcome to VMS<span className="text-success">.</span>
              </h1>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: 'rgb(202, 206, 210)',
                }}
              >
                Watch the largest collection of Movies and TV series anytime
                anywhere!
              </p>
              <Link to="/pricing-plans">
                <button
                  className="btn btn-success"
                  type="button"
                  style={{
                    width: '200px',
                    height: '50px',
                    fontSize: '17px',
                    fontWeight: '400',
                  }}
                >
                  Start Your Free Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Section
        img="assets/img/macbook-ipad-pro-iphone-x-apple-news-app-hero.jpg?h=d5823646b13921bc341ced598f9d19b8"
        header="watch on any device"
        buttonText="Learn More"
      />
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h1 className="text-capitalize content-heading">
                Make your own playlist
              </h1>
              <div className="divide"></div>
              <p style={{ marginBottom: '45px' }}>
                Lorem ipsum dolor sit amet consectetur adipiscing nula
                pellentesquemagna a convallis nula facilisi. Praesent consequat
                eget elementumconsectetur. Nullam interdum, quam ac sagittis
                facilisis sapien dolor ipsum consequat ellit tristique senectus.
              </p>
              <button
                className="btn btn-success"
                type="button"
                style={{ height: '50px', width: '200px' }}
              >
                Start Watching
              </button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img
                className="img-fluid"
                src="assets/img/behind_the_mac_boniface_large.jpg?h=31045e32920d40fa4eb9571caac7ebe0"
                alt="images"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>
      <Section
        img="assets/img/macbook_pro_performance_largetall.png?h=a2acaa61afc3fa404566743723026d5c"
        header="watch on ultra HD"
        buttonText="Start Your Free Plan"
      />
    </>
  );
};

export default Welcome;
