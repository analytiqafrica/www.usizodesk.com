import { ERoutes } from "@/app/enums";
import AboutImage from "@/assets/images/woi/DSC_1815-1.webp";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="section-template--22712426070294__6f6ad23b-f417-4d4e-ac41-163758d915b6"
      className="grid-banner color-background-1 gradient about-us-grid-banner"
    >
      <div className="page-width  section-template--22712426070294__6f6ad23b-f417-4d4e-ac41-163758d915b6-padding isolate custom-grid">
        <div className="row">
          <div className="grid-banner-wrapper">
            <div className="title-wrapper-with-link title-wrapper--self-padded-mobile title-wrapper--no-top-margin content-align--left">
              <h6 className="sub-heading text-center--mobile">Welcome to</h6>
              <h2 className="title h1 text-center--mobile">
                I Am A Woman of Influence
              </h2>
            </div>
            <div className="grid-banner-section one-column list background-primary">
              <div className="grid-banner-wrapper">
                <div className="grid-banner-block-image">
                  <Image
                    className="grid-banner-image"
                    sizes="100vw"
                    src={AboutImage}
                    loading="lazy"
                    alt=""
                    width="1582"
                    height="872"
                  />
                </div>
                <div className="grid-banner-content ">
                  <div className="grid-banner-inner banner--content-align-left">
                    <p className="description">
                      Founded 17 years ago, I Am A Woman of Influence emerged as a
                      response to the pressing need for gender equality and
                      female empowerment in a society steeped in patriarchal
                      norms. The organization was founded by Miss Gugulethu
                      Khathi a visionary women who recognized the power of
                      collective action in challenging the status quo and
                      inspiring others.
                    </p>
                    <p className="description">
                      Our mission is to unite women across South Africa to
                      advocate for equal rights, challenge gender narratives,
                      and support one another in unlocking their full potential.
                      Through education, mentorship, and community initiatives,
                      we aim to drive meaningful change, ensuring a brighter and
                      more equitable future for our daughters and society as a
                      whole.
                    </p>
                    <Link
                      href={ERoutes.about}
                      className="banner-button button button--primary"
                    >
                      Learn more
                    </Link>
                    <ul className="grid-banner-list-section"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
