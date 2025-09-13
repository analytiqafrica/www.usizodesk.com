import Form from "./form";

export default function Subscribe() {
  return (
    <div className="form-contact">
      <div className="contact">
        <h2 className="title title-wrapper--no-top-margin h1">
          Subscription Form
        </h2>
        <p className="description">
          Stay updated with the latest events, workshops, mentorship
          opportunities, and inspiring stories from women making an impact in
          South Africa. Sign up for our newsletter to be part of our community!
        </p>
        <Form />
      </div>
      <div className="cont-img">
        <div className="layout-contact-left">
          <div className="collapsible_address-block">
            <h3 className="address-block-heading h5">
              <strong>What to Expect from the Newsletter</strong>
            </h3>
            <ul className="custom-list" style={{ paddingLeft: 0, listStyle: "inherit" }}>
              <li style={{ marginBottom: "1.5rem", listStyle: "inherit" }}>Event Updates:  Receive notifications about upcoming events and workshops.</li>
              <li style={{ marginBottom: "1.5rem", listStyle: "inherit" }}>Inspiring Stories:  Read about women leaders and their journeys.</li>
              <li style={{ marginBottom: "1.5rem", listStyle: "inherit" }}>Training Opportunities:  Get the latest information on training sessions and mentorship programs.</li>
              <li style={{ marginBottom: "1.5rem", listStyle: "inherit" }}>Exclusive Content:  Access articles, tips, and resources to empower you personally and professionally.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
