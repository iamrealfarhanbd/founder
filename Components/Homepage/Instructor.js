const Instructor = () => {
  return (
    <>
      <div className="instructor-area grey-bg pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
              <div className="instructor-img">
                <img className="img-fluid" src="assets/img/bg/01.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
              <div className="instructor-wrapper">
                <div className="section-title mb-45">
                  <span>
                    <i className="fal fa-ellipsis-h" /> Build A Career
                  </span>
                  <h2>Why us?</h2>
                  <p>
                    Founder is an interactive e-learning platform which has all
                    the vital factors to drive you close to your goals. With the
                    premium quality training from the top-notch expert tutor and
                    a highly resourceful curriculum, we will train you to be one
                    of the finest of the entrepreneurial community.
                  </p>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                    <div className="instructor-text">
                      <div className="instructor-icon">
                        <i className="fal fa-laptop-code" />
                      </div>
                      <h4>Digitalization</h4>
                      <p>Sed ut perspia unde omnis aste natus error sit volu</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                    <div className="instructor-text ins-info">
                      <div className="instructor-icon">
                        <i className="fal fa-book-heart" />
                      </div>
                      <h4>Book Friendly</h4>
                      <p>Sed ut perspia unde omnis aste natus error sit volu</p>
                    </div>
                  </div>
                </div>
                <div className="instructor-button mt-15">
                  <a
                    className="c-btn btn-theme f-left mr-15"
                    href="contact.html"
                  >
                    join with us <i className="fal fa-long-arrow-right" />
                  </a>
                  <a className="c-btn btn-white" href="contact.html">
                    Become a Partner
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
