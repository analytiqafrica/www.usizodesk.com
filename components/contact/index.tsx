import Form from "./form";

export default function Contact() {
  return (
    <section className="contact-area sec-pt-120 sec-pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mb-minus-170 mx-auto">
            <div className="contact-padding bg-white">
              <div className="row">
                <div className="col-lg-7 mb-0 mb-lg-4">
                  <div className="contact-wrapper">
                    <div className="section-title">
                      <h4>Information</h4>
                      <h2>
                        <span className="text-gray">melbourne,</span>{" "}australia
                      </h2>
                      <p>18/2, Topkhana Road, Macca Surgical</p>
                      <p>Market, Melbourne, Australia</p>
                      <ul className="social-icons pt-2 pt-lg-5 d-flex flex-wrap">
                        <li>
                          <p className="text-dark font-weight-bold">
                            Follow Us:
                          </p>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="contact-wrapper">
                    <div className="section-title">
                      <h4>Say Hello</h4>
                      <h2>
                        Contact <span className="text-gray">Us</span>
                      </h2>
                      <a className="contact-info text-decoration-none" href="#">
                        <p>
                          <span className="mr-1">Email:</span>
                          example@example.com
                        </p>
                      </a>
                      <a className="contact-info text-decoration-none" href="#">
                        <p>
                          <span className="mr-1">Phone:</span>+27 55 999 2220
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-title">
                <h2 className="title-md">Leave A Comments</h2>
                <p>
                  Morbi et sagittis dui, sed fermentum ante. Pellentesque
                  molestie sit amet dolor vel euismod our angladesh come to own
                  be able.
                </p>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
