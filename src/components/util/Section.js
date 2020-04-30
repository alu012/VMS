import React from 'react';

const Section = ({ img, header, buttonText }) => {
  return (
    <section id="content">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img className="img-fluid" src={img} alt="images" width="100%" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h1 className="text-capitalize content-heading">{header}</h1>
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
              style={{
                height: '50px',
                width:
                  buttonText === 'Start Your Free Plan' ? '200px' : '120px',
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
