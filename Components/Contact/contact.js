const Contact = () => {
  return (
    <>
      <section
        className="page-title-area"
        style={{ backgroundImage: "url(assets/img/bg/page-title-bg-01.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="page-title text-center">
                <h1>Contact Us</h1>
                <div className="breadcrumb">
                  <ul className="breadcrumb-list">
                    <li>
                      <a href="index.html">
                        Home <i className="far fa-chevron-right" />
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        Contact Us
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
      {/*cta-area start*/}
      <section className="cta-area grey-bg pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="cta-content mb-30">
                <div className="section-title text-left mb-20 pr-160">
                  <span>
                    <i className="fal fa-ellipsis-h" /> Quick Contact
                  </span>
                  <h2>Get In Touch</h2>
                  <p>
                    Sed ut perspiciati unde omnis iste natus error sit
                    voluptatem accusanc doloremque laudantium totam rem aperiam
                    eaque ipsa quae
                  </p>
                </div>
                <ul className="contact-list mb-40">
                  <li>
                    <div className="cta-box d-flex align-items-center mb-20">
                      <div className="cta-icon">
                        <i className="fal fa-envelope-open" />
                      </div>
                      <div className="cta-text">
                        <h6>Locations</h6>
                        <span>250 Main Street, New York</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cta-box d-flex align-items-center mb-20">
                      <div className="cta-icon">
                        <i className="fal fa-phone" />
                      </div>
                      <div className="cta-text">
                        <h6>Email Us</h6>
                        <span>support@gmail.com</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cta-box d-flex align-items-center mb-20 pb-20">
                      <div className="cta-icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="cta-text">
                        <h6>Phone Us</h6>
                        <span>+012 (345) 6789 99</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="contact-icon">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-6">
              <div className="map-area contact-map mb-30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  width={600}
                  height={450}
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*cta-area end*/}
      {/* contact-area-start */}
      <div className="contact-area grey-bg pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center mb-60">
                <span>
                  <i className="fal fa-ellipsis-h" /> Get In Touch{" "}
                  <i className="fal fa-ellipsis-h" />
                </span>
                <h2>Leave Us Message</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-form-area">
                <form
                  action
                  className="subscribe contact-post-form contact-form"
                >
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="input-text">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Full Name Here"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="input-text email-text">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Email Here"
                        />
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="input-text phone-text">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-text message-text">
                        <textarea
                          name
                          id
                          cols={30}
                          rows={10}
                          placeholder="Write  Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="lg-btn lg-btn-03 text-center">
                        <a className="c-btn" href="#">
                          send message{" "}
                          <i className="far fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
