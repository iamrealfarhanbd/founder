const AllCourses = () => {
    return (
        <>
  
  <section className="page-title-area" style={{backgroundImage: 'url(assets/img/bg/page-title-bg-01.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2">
          <div className="page-title text-center">
            <h1>Our Courses</h1>
            <div className="breadcrumb">
              <ul className="breadcrumb-list">
                <li><a href="index.html">Home <i className="far fa-chevron-right" /></a></li>
                <li><a className="active" href="#">Courses</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="course-area course-area-02 pt-130 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="portfolio-menu portfolio-menu-02 pr-menu-03 text-center mb-30 pr-70 pl-70">
            <button className="active" data-filter="*">Show All </button>
            <button data-filter=".cat1" className>Design</button>
            <button data-filter=".cat2" className>Computer</button>
            <button data-filter=".cat3" className>Development</button>
            <button data-filter=".cat4" className>Medical</button>
            <button data-filter=".cat5" className>Photography</button>
            <button data-filter=".cat6" className>Marketing</button>
            <button data-filter=".cat7" className>Driving</button>
            <button data-filter=".cat8" className>Business</button>
          </div>
        </div>
      </div>
      <div id="portfolio-grid" className="row row-portfolio">
        <div className="col-xl-3 col-lg-4 col-md-6 grid-item cat1 cat4 cat5">
          <div className="course-wrapper course-wrapper-03 white-bg mb-30">
            <div className="course-inner">
              <div className="course-img course-img-02 pos-rel mb-25">
                <a href="courses-details.html"><img src="assets/img/course/c-04.jpg" alt /></a>
                <div className="course__instructor pos-abl d-flex align-items-center">
                  <div className="course__instructor--thumb">
                    <img src="assets/img/course/instructor1.png" alt />
                    <h5>Warner</h5>
                  </div>
                  <div className="course__instructor--price-tag">
                    <span>$59</span>
                  </div>
                </div>
              </div>
              <div className="course-text course-text-inner">
                <div className="course-cat-meta d-flex align-items-center mb-15">
                  <span><a href="courses-details.html">english</a></span>
                  <div className="review-icon">
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star-half-alt" /></a>
                  </div>
                </div>
                <h5 className="semi-title pb-25 mb-25"><a href="courses-details.html">Best Courses For Learning
                    English Courses</a></h5>
                <div className="course-meta">
                  <span><i className="far fa-users" /> <a href="#">25</a></span>
                  <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                  <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
                </div>
              </div>
            </div>
            <div className="course-text course-text-02 course-text-inner theme-bg2">
              <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">
                <span><a href="courses-details.html">business</a></span>
                <div className="review-icon">
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star-half-alt" /></a>
                </div>
              </div>
              <h5 className="semi-title mb-30"><a href="courses-details.html">Best Courses For Learning
                  English Courses</a></h5>
              <div className="course__instructor d-flex align-items-center mb-25">
                <div className="course__instructor--thumb">
                  <img src="assets/img/course/instructor1.png" alt />
                  <h5>Warner</h5>
                </div>
                <div className="course__instructor--price-tag">
                  <span>$59</span>
                </div>
              </div>
              <p>Sed ut perspiciatis unde omnis ist
                natus error sit voluptate accusane
                tium dolorque laudantium</p>
              <a className="c-btn btn-round-02 mb-45" href="courses-details.html">get enrolled <i className="far fa-arrow-right" /></a>
              <div className="course-meta">
                <span><i className="far fa-users" /> <a href="#">25</a></span>
                <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 grid-item cat5 cat6 cat4">
          <div className="course-wrapper course-wrapper-03 white-bg mb-30">
            <div className="course-inner">
              <div className="course-img course-img-02 pos-rel mb-25">
                <a href="courses-details.html"><img src="assets/img/course/c-07.jpg" alt /></a>
                <div className="course__instructor pos-abl d-flex align-items-center">
                  <div className="course__instructor--thumb">
                    <img src="assets/img/course/instructor1.png" alt />
                    <h5>Warner</h5>
                  </div>
                  <div className="course__instructor--price-tag">
                    <span>$59</span>
                  </div>
                </div>
              </div>
              <div className="course-text course-text-inner">
                <div className="course-cat-meta d-flex align-items-center mb-15">
                  <span><a href="courses-details.html">english</a></span>
                  <div className="review-icon">
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star-half-alt" /></a>
                  </div>
                </div>
                <h5 className="semi-title pb-25 mb-25"><a href="courses-details.html">Best Courses For Learning
                    English Courses</a></h5>
                <div className="course-meta">
                  <span><i className="far fa-users" /> <a href="#">25</a></span>
                  <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                  <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
                </div>
              </div>
            </div>
            <div className="course-text course-text-02 course-text-inner theme-bg2">
              <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">
                <span><a href="courses-details.html">business</a></span>
                <div className="review-icon">
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star-half-alt" /></a>
                </div>
              </div>
              <h5 className="semi-title mb-30"><a href="courses-details.html">Best Courses For Learning
                  English Courses</a></h5>
              <div className="course__instructor d-flex align-items-center mb-25">
                <div className="course__instructor--thumb">
                  <img src="assets/img/course/instructor1.png" alt />
                  <h5>Warner</h5>
                </div>
                <div className="course__instructor--price-tag">
                  <span>$59</span>
                </div>
              </div>
              <p>Sed ut perspiciatis unde omnis ist
                natus error sit voluptate accusane
                tium dolorque laudantium</p>
              <a className="c-btn btn-round-02 mb-45" href="courses-details.html">get enrolled <i className="far fa-arrow-right" /></a>
              <div className="course-meta">
                <span><i className="far fa-users" /> <a href="#">25</a></span>
                <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 grid-item cat2 cat1 cat7">
          <div className="course-wrapper course-wrapper-03 white-bg mb-30">
            <div className="course-inner">
              <div className="course-img course-img-02 pos-rel mb-25">
                <a href="courses-details.html"><img src="assets/img/course/c-05.jpg" alt /></a>
                <div className="course__instructor pos-abl d-flex align-items-center">
                  <div className="course__instructor--thumb">
                    <img src="assets/img/course/instructor1.png" alt />
                    <h5>Warner</h5>
                  </div>
                  <div className="course__instructor--price-tag">
                    <span>$59</span>
                  </div>
                </div>
              </div>
              <div className="course-text course-text-inner">
                <div className="course-cat-meta d-flex align-items-center mb-15">
                  <span><a href="courses-details.html">business</a></span>
                  <div className="review-icon">
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star-half-alt" /></a>
                  </div>
                </div>
                <h5 className="semi-title pb-25 mb-25"><a href="courses-details.html">How To Improve Business
                    Studies For Beginners</a></h5>
                <div className="course-meta">
                  <span><i className="far fa-users" /> <a href="#">25</a></span>
                  <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                  <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
                </div>
              </div>
            </div>
            <div className="course-text course-text-02 course-text-inner theme-bg2">
              <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">
                <span><a href="courses-details.html">business</a></span>
                <div className="review-icon">
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star-half-alt" /></a>
                </div>
              </div>
              <h5 className="semi-title mb-30"><a href="courses-details.html">How To Improve Business
                  Studies For Beginners</a></h5>
              <div className="course__instructor d-flex align-items-center mb-25">
                <div className="course__instructor--thumb">
                  <img src="assets/img/course/instructor1.png" alt />
                  <h5>Warner</h5>
                </div>
                <div className="course__instructor--price-tag">
                  <span>$59</span>
                </div>
              </div>
              <p>Sed ut perspiciatis unde omnis ist
                natus error sit voluptate accusane
                tium dolorque laudantium</p>
              <a className="c-btn btn-round-02 mb-45" href="#">get enrolled <i className="far fa-arrow-right" /></a>
              <div className="course-meta">
                <span><i className="far fa-users" /> <a href="#">25</a></span>
                <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 grid-item cat4 cat2 cat3">
          <div className="course-wrapper course-wrapper-03 white-bg mb-30">
            <div className="course-inner">
              <div className="course-img course-img-02 pos-rel mb-25">
                <a href="courses-details.html"><img src="assets/img/course/c-06.jpg" alt /></a>
                <div className="course__instructor pos-abl d-flex align-items-center">
                  <div className="course__instructor--thumb">
                    <img src="assets/img/course/instructor1.png" alt />
                    <h5>Warner</h5>
                  </div>
                  <div className="course__instructor--price-tag">
                    <span>$59</span>
                  </div>
                </div>
              </div>
              <div className="course-text course-text-inner">
                <div className="course-cat-meta d-flex align-items-center mb-15">
                  <span><a href="courses-details.html">PHP</a></span>
                  <div className="review-icon">
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star-half-alt" /></a>
                  </div>
                </div>
                <h5 className="semi-title pb-25 mb-25"><a href="courses-details.html">Best Courses For Learning
                    English Courses</a></h5>
                <div className="course-meta">
                  <span><i className="far fa-users" /> <a href="#">25</a></span>
                  <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                  <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
                </div>
              </div>
            </div>
            <div className="course-text course-text-02 course-text-inner theme-bg2">
              <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">
                <span><a href="courses-details.html">PHP</a></span>
                <div className="review-icon">
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star-half-alt" /></a>
                </div>
              </div>
              <h5 className="semi-title mb-30"><a href="courses-details.html">Best Courses For Learning
                  English Courses</a></h5>
              <div className="course__instructor d-flex align-items-center mb-25">
                <div className="course__instructor--thumb">
                  <img src="assets/img/course/instructor1.png" alt />
                  <h5>Warner</h5>
                </div>
                <div className="course__instructor--price-tag">
                  <span>$59</span>
                </div>
              </div>
              <p>Sed ut perspiciatis unde omnis ist
                natus error sit voluptate accusane
                tium dolorque laudantium</p>
              <a className="c-btn btn-round-02 mb-45" href="courses-details.html">get enrolled <i className="far fa-arrow-right" /></a>
              <div className="course-meta">
                <span><i className="far fa-users" /> <a href="#">25</a></span>
                <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 grid-item cat5 cat7 cat6">
          <div className="course-wrapper course-wrapper-03 white-bg mb-30">
            <div className="course-inner">
              <div className="course-img course-img-02 pos-rel mb-25">
                <a href="courses-details.html"><img src="assets/img/course/c-07.jpg" alt /></a>
                <div className="course__instructor pos-abl d-flex align-items-center">
                  <div className="course__instructor--thumb">
                    <img src="assets/img/course/instructor1.png" alt />
                    <h5>Warner</h5>
                  </div>
                  <div className="course__instructor--price-tag">
                    <span>$59</span>
                  </div>
                </div>
              </div>
              <div className="course-text course-text-inner">
                <div className="course-cat-meta d-flex align-items-center mb-15">
                  <span><a href="courses-details.html">marketing</a></span>
                  <div className="review-icon">
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star-half-alt" /></a>
                  </div>
                </div>
                <h5 className="semi-title pb-25 mb-25"><a href="courses-details.html">Best Courses For Learning
                    English Courses</a></h5>
                <div className="course-meta">
                  <span><i className="far fa-users" /> <a href="#">25</a></span>
                  <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                  <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
                </div>
              </div>
            </div>
            <div className="course-text course-text-02 course-text-inner theme-bg2">
              <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">
                <span><a href="courses-details.html">marketing</a></span>
                <div className="review-icon">
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star-half-alt" /></a>
                </div>
              </div>
              <h5 className="semi-title mb-30"><a href="courses-details.html">Best Courses For Learning
                  English Courses</a></h5>
              <div className="course__instructor d-flex align-items-center mb-25">
                <div className="course__instructor--thumb">
                  <img src="assets/img/course/instructor1.png" alt />
                  <h5>Warner</h5>
                </div>
                <div className="course__instructor--price-tag">
                  <span>$59</span>
                </div>
              </div>
              <p>Sed ut perspiciatis unde omnis ist
                natus error sit voluptate accusane
                tium dolorque laudantium</p>
              <a className="c-btn btn-round-02 mb-45" href="courses-details.html">get enrolled <i className="far fa-arrow-right" /></a>
              <div className="course-meta">
                <span><i className="far fa-users" /> <a href="#">25</a></span>
                <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 grid-item cat6 cat1 cat8">
          <div className="course-wrapper course-wrapper-03 white-bg mb-30">
            <div className="course-inner">
              <div className="course-img course-img-02 pos-rel mb-25">
                <a href="courses-details.html"><img src="assets/img/course/c-08.jpg" alt /></a>
                <div className="course__instructor pos-abl d-flex align-items-center">
                  <div className="course__instructor--thumb">
                    <img src="assets/img/course/instructor1.png" alt />
                    <h5>Warner</h5>
                  </div>
                  <div className="course__instructor--price-tag">
                    <span>$59</span>
                  </div>
                </div>
              </div>
              <div className="course-text course-text-inner">
                <div className="course-cat-meta d-flex align-items-center mb-15">
                  <span><a href="courses-details.html">films</a></span>
                  <div className="review-icon">
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star-half-alt" /></a>
                  </div>
                </div>
                <h5 className="semi-title pb-25 mb-25"><a href="courses-details.html">Introduce Movie &amp;
                    Photo For Beginners</a></h5>
                <div className="course-meta">
                  <span><i className="far fa-users" /> <a href="#">25</a></span>
                  <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                  <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
                </div>
              </div>
            </div>
            <div className="course-text course-text-02 course-text-inner theme-bg2">
              <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">
                <span><a href="courses-details.html">films</a></span>
                <div className="review-icon">
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star-half-alt" /></a>
                </div>
              </div>
              <h5 className="semi-title mb-30"><a href="courses-details.html">Introduce Movie &amp;
                  Photo For Beginners</a></h5>
              <div className="course__instructor d-flex align-items-center mb-25">
                <div className="course__instructor--thumb">
                  <img src="assets/img/course/instructor1.png" alt />
                  <h5>Warner</h5>
                </div>
                <div className="course__instructor--price-tag">
                  <span>$59</span>
                </div>
              </div>
              <p>Sed ut perspiciatis unde omnis ist
                natus error sit voluptate accusane
                tium dolorque laudantium</p>
              <a className="c-btn btn-round-02 mb-45" href="courses-details.html">get enrolled <i className="far fa-arrow-right" /></a>
              <div className="course-meta">
                <span><i className="far fa-users" /> <a href="#">25</a></span>
                <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 grid-item cat7 cat5 cat1">
          <div className="course-wrapper course-wrapper-03 white-bg mb-30">
            <div className="course-inner">
              <div className="course-img course-img-02 pos-rel mb-25">
                <a href="courses-details.html"><img src="assets/img/course/c-09.jpg" alt /></a>
                <div className="course__instructor pos-abl d-flex align-items-center">
                  <div className="course__instructor--thumb">
                    <img src="assets/img/course/instructor1.png" alt />
                    <h5>Warner</h5>
                  </div>
                  <div className="course__instructor--price-tag">
                    <span>$59</span>
                  </div>
                </div>
              </div>
              <div className="course-text course-text-inner">
                <div className="course-cat-meta d-flex align-items-center mb-15">
                  <span><a href="courses-details.html">medical</a></span>
                  <div className="review-icon">
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star-half-alt" /></a>
                  </div>
                </div>
                <h5 className="semi-title pb-25 mb-25"><a href="courses-details.html">How To Improve Medical
                    Studies For Beginners</a></h5>
                <div className="course-meta">
                  <span><i className="far fa-users" /> <a href="#">25</a></span>
                  <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                  <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
                </div>
              </div>
            </div>
            <div className="course-text course-text-02 course-text-inner theme-bg2">
              <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">
                <span><a href="courses-details.html">medical</a></span>
                <div className="review-icon">
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star-half-alt" /></a>
                </div>
              </div>
              <h5 className="semi-title mb-30"><a href="courses-details.html">How To Improve Medical
                  Studies For Beginners</a></h5>
              <div className="course__instructor d-flex align-items-center mb-25">
                <div className="course__instructor--thumb">
                  <img src="assets/img/course/instructor1.png" alt />
                  <h5>Warner</h5>
                </div>
                <div className="course__instructor--price-tag">
                  <span>$59</span>
                </div>
              </div>
              <p>Sed ut perspiciatis unde omnis ist
                natus error sit voluptate accusane
                tium dolorque laudantium</p>
              <a className="c-btn btn-round-02 mb-45" href="courses-details.html">get enrolled <i className="far fa-arrow-right" /></a>
              <div className="course-meta">
                <span><i className="far fa-users" /> <a href="#">25</a></span>
                <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 grid-item cat8 cat3 cat2">
          <div className="course-wrapper course-wrapper-03 white-bg mb-30">
            <div className="course-inner">
              <div className="course-img course-img-02 pos-rel mb-25">
                <a href="courses-details.html"><img src="assets/img/course/c-10.jpg" alt /></a>
                <div className="course__instructor pos-abl d-flex align-items-center">
                  <div className="course__instructor--thumb">
                    <img src="assets/img/course/instructor1.png" alt />
                    <h5>Warner</h5>
                  </div>
                  <div className="course__instructor--price-tag">
                    <span>$59</span>
                  </div>
                </div>
              </div>
              <div className="course-text course-text-inner">
                <div className="course-cat-meta d-flex align-items-center mb-15">
                  <span><a href="courses-details.html">Apps ui</a></span>
                  <div className="review-icon">
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star" /></a>
                    <a href="#"><i className="fas fa-star-half-alt" /></a>
                  </div>
                </div>
                <h5 className="semi-title pb-25 mb-25"><a href="courses-details.html">Learning How To Improve
                    Mobile Ui Design</a></h5>
                <div className="course-meta">
                  <span><i className="far fa-users" /> <a href="#">25</a></span>
                  <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                  <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
                </div>
              </div>
            </div>
            <div className="course-text course-text-02 course-text-inner theme-bg2">
              <div className="course-cat-meta course-cat-meta-02 d-flex align-items-center mb-15">
                <span><a href="courses-details.html">Apps ui</a></span>
                <div className="review-icon">
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star" /></a>
                  <a href="#"><i className="fas fa-star-half-alt" /></a>
                </div>
              </div>
              <h5 className="semi-title mb-30"><a href="courses-details.html">Learning How To Improve
                  Mobile Ui Design</a></h5>
              <div className="course__instructor d-flex align-items-center mb-25">
                <div className="course__instructor--thumb">
                  <img src="assets/img/course/instructor1.png" alt />
                  <h5>Warner</h5>
                </div>
                <div className="course__instructor--price-tag">
                  <span>$59</span>
                </div>
              </div>
              <p>Sed ut perspiciatis unde omnis ist
                natus error sit voluptate accusane
                tium dolorque laudantium</p>
              <a className="c-btn btn-round-02 mb-45" href="courses-details.html">get enrolled <i className="far fa-arrow-right" /></a>
              <div className="course-meta">
                <span><i className="far fa-users" /> <a href="#">25</a></span>
                <span><i className="far fa-book" /> <a href="#">36hr</a></span>
                <span><i className="far fa-book" /> <a href="#">2.5k</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>

        </>
    )
}

export default AllCourses;