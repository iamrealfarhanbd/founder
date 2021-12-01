import Brands from "../Components/Homepage/Brands";
const Footer = () => {
  return (
    <>
      <Brands />
      <footer
        className="footer-area pt-65 pb-45"
        data-background="assets/img/bg/fot-01-bg.png"
      >
        <div className="container">
          <div className="row mb-55 no-gutters align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div className="footer-logo">
                <a href="index.html">
                  <img src="assets/img/logo/footer-01-logo.png" alt />
                </a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-12">
              <div className="footer-social-icon text-right pb-70">
                <a className="fot-fb active pb-70" href="#">
                  <i className="fab fa-facebook-f" /> Facebook
                </a>
                <a className="fot-twitter pb-70" href="#">
                  <i className="fab fa-twitter" /> Twitter
                </a>
                <a className="fot-google pb-70" href="#">
                  <i className="fab fa-youtube" /> Youtube
                </a>
                <a className="fot-insta pb-70" href="#">
                  <i className="fab fa-instagram" /> Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-8 col-12">
              <div className="footer-widget mb-30">
                <h4 className="footer-widget-title mb-25">Our Courses</h4>
                <ul className="footer-list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Success Stories</a>
                  </li>
                  <li>
                    <a href="#">All Courses</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                  <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                  <a href="#">Terms of use</a>
                  </li>
                  <li>
                  <a href="#">Contact Us</a>
                  </li>
                  <li>
                  <a href="#">FAQ</a>
                  </li>
                  <li>
                  <a href="#">Our Partners</a>
                  </li>

                  <li>
                    <a href="#">Redeem Voucher</a>
                  </li>
                  <li>

                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-2 col-md-4 col-12">
              <div className="footer-widget widget-center text-center mb-30">
                <h4 className="footer-widget-title mb-25">Company</h4>
                <ul className="footer-list footer-02-list">
                  <li>
                    <a href="#">About Eduket</a>
                  </li>
                  <li>
                    <a href="#">Meet Advisors</a>
                  </li>
                  <li>
                    <a href="#">Join A Career</a>
                  </li>
                  <li>
                    <a href="#">Latest Courses</a>
                  </li>
                  <li>
                    <a href="#">Newsletters</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6 col-12">
              <div className="footer-widget mb-30">
                <h4 className="footer-widget-title mb-25">Newsletters</h4>
                <p className="mb-25">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accu santium doloremque laudantium totam rem aperiam{" "}
                </p>
                <form className="slider-search-form">
                  <input type="text" placeholder="Enter Your Email" />
                  <button type="submit">
                    <i className="far fa-long-arrow-alt-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="copyright-area mt-15 text-center pt-20 pb-20">
            <div className="row">
              <div className="col-xl-12">
                <div className="copyright-text">
                  <p>
                    Copyright © 2020 <a href="#">BDevs</a> All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
