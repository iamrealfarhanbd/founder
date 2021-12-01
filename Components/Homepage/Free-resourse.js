const FreeResourse = () => {
  return (
    <>
      <div className="events-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center mb-60">
                <span>
                  <i className="fal fa-ellipsis-h" /> Latest Events{" "}
                  <i className="fal fa-ellipsis-h" />
                </span>
                <h2>Get ahead of your competition with the free resources</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="events-wrapper mb-30">
                <div className="events-img pos-rel">
                  <div className="fix">
                    <a href="#">
                      <img src="assets/img/events/01.jpg" alt="" />
                    </a>
                  </div>
                  <div className="eventsa-tag">
                    <a href="#">$20</a>
                  </div>
                </div>
                <div className="events-text grey-bg">
                  <div className="events-meta">
                    <span>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 Nov 2020</a>
                    </span>
                    <span>
                      <i className="far fa-book" />{" "}
                      <a href="#">08 am - 09 pm</a>
                    </span>
                    <span>
                      <i className="far fa-map-marker-alt" />{" "}
                      <a href="#">Paris, France</a>
                    </span>
                  </div>
                  <h3>
                    <a href="events-details.html">
                      Web Design &amp; Development Conference 2020
                    </a>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                  </p>
                  <a className="c-btn" href="events-details.html">
                    join event <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-6">
                  <div className="events-single mb-30">
                    <div className="events-02-img pos-rel">
                      <a href="events-details.html">
                        <img src="assets/img/events/02.jpg" alt="" />
                      </a>
                      <div className="events-tag">
                        <a href="#">$20</a>
                      </div>
                      <div className="events-content">
                        <div className="events-02-meta">
                          <span>
                            <i className="far fa-calendar-alt" />{" "}
                            <a href="#">25 Nov 2020</a>
                          </span>
                          <span>
                            <i className="far fa-book" />{" "}
                            <a href="#">08 am - 09 pm</a>
                          </span>
                        </div>
                        <h3>
                          <a href="#">Annual Conference 2020</a>
                        </h3>
                        <a href="events-details.html">
                          join event <i className="fal fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-6">
                  <div className="events-single mb-30">
                    <div className="events-02-img pos-rel">
                      <a href="#">
                        <img src="assets/img/events/03.jpg" alt="" />
                      </a>
                      <div className="events-tag">
                        <a href="#">$20</a>
                      </div>
                      <div className="events-content">
                        <div className="events-02-meta">
                          <span>
                            <i className="far fa-calendar-alt" />{" "}
                            <a href="#">25 Nov 2020</a>
                          </span>
                          <span>
                            <i className="far fa-book" />{" "}
                            <a href="#">08 am - 09 pm</a>
                          </span>
                        </div>
                        <h3>
                          <a href="events-details.html">
                            Annual Conference 2020
                          </a>
                        </h3>
                        <a href="events-details.html">
                          join event <i className="fal fa-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="events-button text-center mt-30">
                <a className="c-btn" href="events.html">
                  view all events <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeResourse;
