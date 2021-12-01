const Coursesingle = () => {
  return (
    <div>
      <section
        className="page-title-area"
        style={{ backgroundImage: "url(assets/img/bg/page-title-bg-01.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="page-title text-center">
                <h1>Our Courses</h1>
                <div className="breadcrumb">
                  <ul className="breadcrumb-list">
                    <li>
                      <a href="index.html">
                        Home <i className="far fa-chevron-right" />
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        Courses
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*page-title-area end*/}
      {/* course-area-start */}
      <section className="course-curriculumn-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="course-left-area">
                <div className="improve-skill-area mb-50">
                  <div className="video-learn-area pos-rel mb-30">
                    <div className="skill-thumb pos-rel">
                      <img src="assets/img/course/c-19.jpg" alt />
                    </div>
                    <div className="video-area">
                      <a
                        className="popup-video"
                        href="https://www.youtube.com/watch?v=D-goSWGqI2U"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="review-icon">
                    <a href="#">
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      <i className="fas fa-star" />
                    </a>
                    <a href="#">
                      <i className="fas fa-star-half-alt" />
                    </a>
                  </div>
                  <h3 className="course-title-03 mb-25">
                    How To Improve Wed Design Skills
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur
                  </p>
                </div>
                <div className="curriculumn-area mb-65">
                  <h3 className="course-title-03 mb-20">Curriculum</h3>
                  <p className="mb-25">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam
                  </p>
                  <ul className="curriculumn-list">
                    <li>
                      <a href="#">
                        Lesson 01 : Introduced About Web Design{" "}
                        <span className="f-right">
                          <i className="far fa-play-circle" /> 05:59 hr
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lesson 02 : What Is UX/UI Design ?{" "}
                        <span className="f-right">
                          <i className="far fa-play-circle" /> 05:59 hr
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lesson 03 : Why Need UX/UI Role In Web Design ?{" "}
                        <span className="f-right">
                          <i className="far fa-play-circle" /> 05:59 hr
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lesson 04 : What Is UX Manager ?{" "}
                        <span className="f-right">
                          <i className="far fa-play-circle" /> 05:59 hr
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lesson 05 : What’s Your Design Goals?{" "}
                        <span className="f-right">
                          <i className="far fa-play-circle" /> 05:59 hr
                        </span>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="faq-area mb-60">
                  <div className="faq-thumbs mb-40">
                    <img src="assets/img/course/c-20.jpg" alt />
                  </div>
                  <h3 className="course-title-03 mb-20">
                    Frequently Asked Questions
                  </h3>
                  <p>
                    Wuisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi
                    tempora incidunt ut labore et dolore magnam aliquam
                  </p>
                  <div id="accordion">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Best Online Course For Basic Web Design For
                            Beginners
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <div className="card-content fix">
                            <div className="card-thumb f-left">
                              <img src="assets/img/course/c-21.jpg" alt />
                            </div>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusan mque laud totam rem
                              aperiam, eaque ipsa quae ab illo inventore
                              veritatis etq ectosd beatae vitae dicta sunt
                              explicabo. Nemo enim ipsam voluptatem quiatas sit
                              asperatur aut odit aut fugit sed quia consequuntur
                              magni dolores
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Why We Are The Best Online Courses ?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <div className="card-content fix">
                            <div className="card-thumb f-left">
                              <img src="assets/img/course/c-21.jpg" alt />
                            </div>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusan mque laud totam rem
                              aperiam, eaque ipsa quae ab illo inventore
                              veritatis etq ectosd beatae vitae dicta sunt
                              explicabo. Nemo enim ipsam voluptatem quiatas sit
                              asperatur aut odit aut fugit sed quia consequuntur
                              magni dolores
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Creating Secure Password Flows With NodeJS And MySQL
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <div className="card-content fix">
                            <div className="card-thumb f-left">
                              <img src="assets/img/course/c-21.jpg" alt />
                            </div>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusan mque laud totam rem
                              aperiam, eaque ipsa quae ab illo inventore
                              veritatis etq ectosd beatae vitae dicta sunt
                              explicabo. Nemo enim ipsam voluptatem quiatas sit
                              asperatur aut odit aut fugit sed quia consequuntur
                              magni dolores
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Creating Secure Password Flows With NodeJS And MySQL
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <div className="card-content fix">
                            <div className="card-thumb f-left">
                              <img src="assets/img/course/c-21.jpg" alt />
                            </div>
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusan mque laud totam rem
                              aperiam, eaque ipsa quae ab illo inventore
                              veritatis etq ectosd beatae vitae dicta sunt
                              explicabo. Nemo enim ipsam voluptatem quiatas sit
                              asperatur aut odit aut fugit sed quia consequuntur
                              magni dolores
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="course-intructor-area">
                  <h3 className="course-title-03 mb-20">Course Instructors</h3>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="instructors text-center mb-30">
                        <div className="instructors-thumb mb-30">
                          <img src="assets/img/team/t-01.png" alt />
                        </div>
                        <div className="instructors-name">
                          <h4>
                            <a href="team-details.html">Somalia D Silva</a>
                          </h4>
                          <span>Math Teacher</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="instructors text-center mb-30">
                        <div className="instructors-thumb mb-30">
                          <img src="assets/img/team/t-02.png" alt />
                        </div>
                        <div className="instructors-name">
                          <h4>
                            <a href="team-details.html">David Warner</a>
                          </h4>
                          <span>Math Teacher</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="instructors text-center mb-30">
                        <div className="instructors-thumb mb-30">
                          <img src="assets/img/team/t-03.png" alt />
                        </div>
                        <div className="instructors-name">
                          <h4>
                            <a href="team-details.html">Zavib Makaullah</a>
                          </h4>
                          <span>Math Teacher</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="instructors text-center mb-30">
                        <div className="instructors-thumb mb-30">
                          <img src="assets/img/team/t-04.png" alt />
                        </div>
                        <div className="instructors-name">
                          <h4>
                            <a href="team-details.html">Jhonson Maxwell</a>
                          </h4>
                          <span>Math Teacher</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="course-right-area">
                <div className="widget mb-40">
                  <ul className="widget-course-list">
                    <li>
                      <a href="#">
                        <i className="far fa-usd-circle" /> Course Price
                        <span className="f-right">
                          <i className="far fa-dollar-sign" />
                          59
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-user-circle" /> Instructor{" "}
                        <span className="f-right">David Warner</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-clock" /> Duration{" "}
                        <span className="f-right">360 Hours</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-book" /> Lectures{" "}
                        <span className="f-right">20 Lessons</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-users" /> Enrolled{" "}
                        <span className="f-right">963 Students</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-flag" /> Language{" "}
                        <span className="f-right">English</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-calendar-alt" /> Deadline{" "}
                        <span className="f-right">06 March 2021</span>
                      </a>
                    </li>
                  </ul>
                  <div className="enroll-btn mb-40 text-center">
                    <a className="c-btn btn-round-02" href="contact.html">
                      Enrolled now <i className="far fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
                <div className="widget">
                  <div className="widget-advertisement">
                    <img src="assets/img/course/add-01.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coursesingle;
