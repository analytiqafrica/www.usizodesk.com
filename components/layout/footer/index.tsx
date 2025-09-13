import { ERoutes } from "@/app/enums";
import Link from "next/link";
import moment from "moment";

export default function Footer() {
  return (
    <footer className="footer-area sec-pt-150 bg-dark">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="footer-wrapper">
                <div className="footer-logo">
                  <a href=" ">
                    <img src="/assets/img/logo-light.png" alt="" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    In sem dignissim enim ante sescelerigsq. Nec the is
                    misplaced that Cras.
                  </p>
                  <h5>Mirpur -12, Block-C, House-38 Dhaka, bangladesh.</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="footer-wrapper">
                <h5 className="footer-title">Top Links</h5>
                <div className="row">
                  <div className="col-6">
                    <div className="footer-link">
                      <ul className="reset-ul">
                        <li>
                          <a href="about.html">Our project</a>
                        </li>
                        <li>
                          <a href="about.html">About us</a>
                        </li>
                        <li>
                          <a href="about.html">New Camping</a>
                        </li>
                        <li>
                          <a href="about.html">Voluntecry</a>
                        </li>
                        <li>
                          <a href="about.html">Rceipes</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="footer-link">
                      <ul className="reset-ul">
                        <li>
                          <a href="about.html">Return Result</a>
                        </li>
                        <li>
                          <a href="about.html">Eftective</a>
                        </li>
                        <li>
                          <a href="about.html">Online Enquiry</a>
                        </li>
                        <li>
                          <a href="about.html">Help & Ordering</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="footer-wrapper">
                <h5 className="footer-title">Recent Posts</h5>
                <div className="footer-post d-flex align-items-center">
                  <div className="footer-thum">
                    <a href="blog-details.html">
                      <img src="assets/img/footer/1.png" alt="" />
                    </a>
                  </div>
                  <div className="footer-content">
                    <h5>
                      <a href="blog-details.html">
                        Praesent eu lorem vitae quam ornare laoreet ac a urna.
                      </a>
                    </h5>
                    <div className="footer-meta">
                      <span className="date">Nov 19, 22.</span>
                      <span className="comments"> 03 Comments</span>
                    </div>
                  </div>
                </div>
                <div className="footer-post d-flex align-items-center">
                  <div className="footer-thum">
                    <a href="blog-details.html">
                      <img src="assets/img/footer/2.png" alt="" />
                    </a>
                  </div>
                  <div className="footer-content">
                    <h5>
                      <a href="blog-details.html">
                        Praesent eu lorem vitae quam ornare laoreet ac a urna.
                      </a>
                    </h5>
                    <div className="footer-meta">
                      <span className="date">Nov 19, 22.</span>
                      <span className="comments"> 03 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-2 mb-lg-0">
              <div className="footer-bottom-link text-center text-lg-left">
                <ul className="reset-ul">
                  <li>
                    <a href=" ">Home</a>
                  </li>
                  <li>
                    <a href="about.html">Accessories </a>
                  </li>
                  <li>
                    <a href="about.html">
                      More <i className="fa fa-plus" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-center text-lg-right">
              <div className="copyright">
                <p>
                  <Link href={ERoutes.home}>Usizo Desk</Link> &copy; {moment().format("Y")}
                  . All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
