import TeamSlideshow from "./team-slideshow";

export default function Structure() {
  return (
    <section
      id="shopify-section-template--22712426070294__5a6081b5-e6df-47c8-92a9-7898b6c23634"
      className="section reveal"
    >
      <div className="team-section color-background-1 gradient">
        <div
          className="banner__media media fixed-banner"
          style={{
            background:
              "url(//dt-morgana.myshopify.com/cdn/shop/files/Group_123912_2x_cf252955-4995-40cd-b398-b245c10dae52.png?v=1684742500&width=3840)",
            backgroundAttachment: "scroll",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            position: "absolute",
            width: "100%",
            maxWidth: 500,
            left: 'auto',
            height: 600,
            zIndex: 1,
            right: 0,
            top: 0,
          }}
        >&nbsp;</div>
        <div className=" page-width  section-template--22712426070294__5a6081b5-e6df-47c8-92a9-7898b6c23634-padding isolate custom-team">
          <div className="row">
            <div className="team-section-wrapper-heading">
              <div className="title-wrapper-with-link title-wrapper--self-padded-mobile title-wrapper--no-top-margin content-align--center">
                <h2 className="title h1">Organizational Structure</h2>
                <p className="team-description">
                  Our Board of Directors is composed of diverse women leaders
                  from various sectors, responsible for strategic
                  decision-making, governance, and oversight of the
                  organization’s mission and values.
                </p>
              </div>
              <TeamSlideshow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
