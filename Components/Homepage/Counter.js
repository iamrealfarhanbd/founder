const Counter = () => {
  return (
    <>
      <div className="counter-area pb-100">
        <div className="container">
          <div className="counter-bg">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-users" />
                  </div>
                  <div className="counter-text">
                    <h1>
                      <span className="counter">3045</span>+
                    </h1>
                    <span>Highly Interactive Courses</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-books" />
                  </div>
                  <div className="counter-text">
                    <h1>
                      <span className="counter">7852</span>+
                    </h1>
                    <span>Resourceful Curriculum</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-graduation-cap" />
                  </div>
                  <div className="counter-text">
                    <h1>
                      <span className="counter">9862</span>+
                    </h1>
                    <span>Expert Mentors</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-laptop-code" />
                  </div>
                  <div className="counter-text">
                    <h1>
                      <span className="counter">8963</span>+
                    </h1>
                    <span>Instant e-Certificates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
