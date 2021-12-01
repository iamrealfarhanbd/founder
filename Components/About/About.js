import Blog from "../Homepage/Blog";
import TeamMembers from "../Homepage/Team-members";
import Testimonial from "../Homepage/Testimonial";

const About = () => {
  return (
    <>
      <section
        className="page-title-area"
        style={{ backgroundImage: "url(assets/img/bg/page-title-bg-01.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="page-title text-center">
                <h1>About Us</h1>
                <div className="breadcrumb">
                  <ul className="breadcrumb-list">
                    <li>
                      <a href="index.html">
                        Home <i className="far fa-chevron-right" />
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        About Us
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
      {/*about-eduplus-area start*/}
      <section className="about-eduplus-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="about-img-box pos-rel mb-30">
                <div className="about-one">
                  <img src="assets/img/about/about1.jpg" alt="" />
                </div>
                <div className="about-two d-none d-lg-block">
                  <img src="assets/img/about/about2.jpg" alt="" />
                </div>
                <div className="about-tag d-none d-sm-block">
                  <div className="about-tag-inner">
                    <h2>25</h2>
                    <p>Years of experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="about-wrapper mb-30">
                <div className="section-title text-left mb-60">
                  <span>
                    <i className="fal fa-ellipsis-h" /> Introduced About EduPlus
                  </span>
                  <h2>Welcome To EduPlus</h2>
                  <p className="left-line pos-rel pl-30">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa quae ab illo inventore veritatis et quase
                  </p>
                </div>
                <div className="about-inner-text">
                  <ul className="inner-content-list">
                    <li>
                      <div className="inner-content d-flex">
                        <div className="inner-content-icon">
                          <i className="fal fa-book" />
                        </div>
                        <div className="inner-content-text">
                          <h6>Professional &amp; Expert</h6>
                          <p>
                            Quis autem vel eum iure reprehenderit qui in ea
                            voluptate velit esse quam nihil molestiae
                            consequatur vels{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner-content d-flex mb-25">
                        <div className="inner-content-icon">
                          <i className="fal fa-trophy" />
                        </div>
                        <div className="inner-content-text">
                          <h6>Job Placement Support</h6>
                          <p>
                            Quis autem vel eum iure reprehenderit qui in ea
                            voluptate velit esse quam nihil molestiae
                            consequatur vels{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <a className="c-btn btn-theme f-left mr-15" href="about.html">
                  learn more <i className="fal fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*about-eduplus-area end*/}
      {/* counter-area-start */}
      <div className="counter-area counter-area-03">
        <div className="container">
          <div className="counter-bg">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper counter-wrapper-03 mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-users" />
                  </div>
                  <div className="counter-text">
                    <h1>
                      <span className="counter">3045</span>+
                    </h1>
                    <span>Saticfied Students</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper counter-wrapper-03 mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-books" />
                  </div>
                  <div className="counter-text">
                    <h1>
                      <span className="counter">7852</span>+
                    </h1>
                    <span>Available Courses</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper counter-wrapper-03 mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-graduation-cap" />
                  </div>
                  <div className="counter-text">
                    <h1>
                      <span className="counter">9862</span>+
                    </h1>
                    <span>Graduate Students</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="counter-wrapper counter-wrapper-03 mb-30">
                  <div className="counter-icon f-left">
                    <i className="fal fa-laptop-code" />
                  </div>
                  <div className="counter-text">
                    <h1>
                      <span className="counter">8963</span>+
                    </h1>
                    <span>Active Courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="we-are-area grey-bg pt-160 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="skill-wrapper">
                <div className="section-title text-left mb-35">
                  <span>
                    <i className="fal fa-ellipsis-h" /> Who We Are
                  </span>
                  <h2>Institute Goals</h2>
                  <p>
                    Sed ut perspiciat unde omnis iste natus voluptate
                    accusantium doloremque laudantium totam rem ape riam eaque
                    ipsa quae ab illo inventore{" "}
                  </p>
                </div>
                <div className="skill-area">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="skills mb-40">
                        <div className="skills-box">
                          <div className="chart" data-percent={83}>
                            <h3>
                              83<span>%</span>
                            </h3>
                          </div>
                        </div>
                        <h6>Enginering Studies</h6>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div className="skills mb-40">
                        <div className="skills-box">
                          <div className="chart2" data-percent={79}>
                            <h3>
                              79<span>%</span>
                            </h3>
                          </div>
                        </div>
                        <h6>General &amp; Other Studies</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="our-video pos-rel">
                <div className="video-thumb">
                  <img src="assets/img/bg/video-bg-02.jpg" alt="" />
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
            </div>
          </div>
        </div>
      </section>
      <TeamMembers />
      <Testimonial />
      <Blog />
    </>
  );
};

export default About;
