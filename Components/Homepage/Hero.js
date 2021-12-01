const Hero = () => {
  return (
    <>
      <section className="hero-area pos-rel">
        <div className="slider-img d-none d-sm-block">
          <img className="img-fluid" src="assets/img/slider/01.png" alt="" />
        </div>
        <div className="hero-slider">
          <div
            className="single-slider slider-height d-flex align-items-center"
            data-background="assets/img/slider/01.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-9">
                  <div className="hero-content mt-80">
                    <div className="hero-slider-caption">
                      <span data-animation="fadeInUp" data-delay=".5s">
                        <i className="fal fa-ellipsis-h" />
                        Master the craft of turning your innovative idea into a
                        successful business
                      </span>
                      <h2
                        className="mb-45"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        Grow a startup mindset to begin your entrepreneurial
                        journey
                      </h2>
                      <form className="slider-search-form">
                        <input type="text" placeholder="Search Courses" />
                        <button type="submit">
                          <i className="far fa-search" />
                        </button>
                      </form>
                    </div>
                    <div className="row support-area align-items-center">
                      <div className="col-xl-6">
                        <p>
                          Sed ut perspiciatis unde omnis natus error sit
                          voluptatem
                        </p>
                      </div>
                      <div className="col-xl-6">
                        <div className="support d-flex align-items-center">
                          <div className="support-icon">
                            <i className="flaticon-24-hours" />
                          </div>
                          <div className="support-text">
                            <span>online support</span>
                            <h6>+012 (345) 6789</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
