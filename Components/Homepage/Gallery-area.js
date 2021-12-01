const GalleryArea = () => {
  return (
    <>
      <div className="gallery-area pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center mb-60">
                <span>
                  <i className="fal fa-ellipsis-h" /> Photo &amp; Album{" "}
                  <i className="fal fa-ellipsis-h" />
                </span>
                <h2>Entrepreneurial tips to jumpstart your dreams</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="portfolio-menu text-center mb-50">
                <button className="active" data-filter="*">
                  Show All{" "}
                </button>
                <button data-filter=".cat1" className>
                  University
                </button>
                <button data-filter=".cat2" className>
                  Group Study{" "}
                </button>
                <button data-filter=".cat3" className>
                  Awards
                </button>
                <button data-filter=".cat4" className>
                  Students
                </button>
                <button data-filter=".cat5" className>
                  Teachers
                </button>
                <button data-filter=".cat6" className>
                  Campus
                </button>
              </div>
            </div>
          </div>
          <div id="portfolio-grid" className="row row-portfolio">
            <div className="grid-sizer" />
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat5">
              <div className="gallery-wrapper mb-30">
                <div className="gallery-img pos-rel">
                  <a href="#">
                    <img src="assets/img/gallery/01.jpg" alt="" />
                  </a>
                  <div className="gallery-text">
                    <h3>
                      <a href="blog-details.html">Group Study</a>
                    </h3>
                    <span>University Campus</span>
                  </div>
                  <div className="gallery-icon">
                    <a className="popup-image" href="assets/img/gallery/01.jpg">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat6 cat4">
              <div className="gallery-wrapper mb-30">
                <div className="gallery-img pos-rel">
                  <a href="#">
                    <img src="assets/img/gallery/02.jpg" alt="" />
                  </a>
                  <div className="gallery-text">
                    <h3>
                      <a href="blog-details.html">Group Study</a>
                    </h3>
                    <span>University Campus</span>
                  </div>
                  <div className="gallery-icon">
                    <a className="popup-image" href="assets/img/gallery/02.jpg">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 cat4">
              <div className="gallery-wrapper mb-30">
                <div className="gallery-img pos-rel">
                  <a href="#">
                    <img src="assets/img/gallery/03.jpg" alt="" />
                  </a>
                  <div className="gallery-text">
                    <h3>
                      <a href="blog-details.html">Group Study</a>
                    </h3>
                    <span>University Campus</span>
                  </div>
                  <div className="gallery-icon">
                    <a className="popup-image" href="assets/img/gallery/03.jpg">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat4 cat6">
              <div className="gallery-wrapper mb-30">
                <div className="gallery-img pos-rel">
                  <a href="#">
                    <img src="assets/img/gallery/04.jpg" alt="" />
                  </a>
                  <div className="gallery-text">
                    <h3>
                      <a href="blog-details.html">Group Study</a>
                    </h3>
                    <span>University Campus</span>
                  </div>
                  <div className="gallery-icon">
                    <a className="popup-image" href="assets/img/gallery/04.jpg">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat4">
              <div className="gallery-wrapper mb-30">
                <div className="gallery-img pos-rel">
                  <a href="#">
                    <img src="assets/img/gallery/05.jpg" alt="" />
                  </a>
                  <div className="gallery-text">
                    <h3>
                      <a href="blog-details.html">Group Study</a>
                    </h3>
                    <span>University Campus</span>
                  </div>
                  <div className="gallery-icon">
                    <a className="popup-image" href="assets/img/gallery/05.jpg">
                      <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat5 cat3">
              <div className="gallery-wrapper mb-30">
                <div className="gallery-img pos-rel">
                  <a href="blog-details.html">
                    <img src="assets/img/gallery/06.jpg" alt="" />
                  </a>
                  <div className="gallery-text">
                    <h3>
                      <a href="#">Group Study</a>
                    </h3>
                    <span>University Campus</span>
                  </div>
                  <div className="gallery-icon">
                    <a className="popup-image" href="assets/img/gallery/06.jpg">
                      <i className="far fa-long-arrow-right" />
                    </a>
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

export default GalleryArea;
