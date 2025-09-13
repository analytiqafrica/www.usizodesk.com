import Form from "./form";

export default function Contact() {
  return (
    <div className="form-contact">
      <div className="contact">
        <h2 className="title title-wrapper--no-top-margin h1">Contact Form</h2>
        <p className="description">
          We’d love to hear from you! Whether you have a question, need more
          information, or just want to get in touch, feel free to reach out
          using the form below. Our team will get back to you as soon as
          possible.
        </p>
        <Form />
      </div>
      <div className="cont-img">
        <div className="layout-contact-left">
          <div className="collapsible_address-block">
            <h3 className="address-block-heading h4">Visit Us</h3>

            <ul className=" list-unstyled">
              <li className="address">
                <address>
                  1F, 173 Oxford Road
                  <br />
                  Rosebank, JHB 2196
                </address>
              </li>

              <li className="office-mail">
                <a href="mailto:info@iamwoi.co.za" className="link">
                  <span>Mail Us:&nbsp;info@iamwoi.co.za</span>
                </a>
              </li>

              <li className="contact-phone">
                <a href="tel:+27637016721" className="link">
                  Call Us: +27 63 701 6721
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
