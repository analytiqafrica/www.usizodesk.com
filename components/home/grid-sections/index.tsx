import { ERoutes } from "@/app/enums";
import Group53 from "@/assets/images/Group_53.svg";
import Group50 from "@/assets/images/Group_50.svg";
import Group48 from "@/assets/images/Group_48.svg";
import DSC1822 from "@/assets/images/woi/DSC_1822.webp";
import DSC1823 from "@/assets/images/woi/DSC_1823.webp";
import Image from "next/image";
import Link from "next/link";

export default function GridSections() {
  return (
    <>
      <section className="section reveal">
        <div
          id="section-template--22712425840918__77c4bed3-0107-4a77-be6d-6bebe177c0da"
          className="grid-banner color-background-1 gradient no-heading wdt-custom-grid-one"
        >
          <div className="page-full-width section-template--22712425840918__77c4bed3-0107-4a77-be6d-6bebe177c0da-padding isolate custom-grid">
            <div className="row">
              <div className="grid-banner-wrapper">
                <div className="grid-banner-section one-column list  background-primary">
                  <div className="grid-banner-wrapper">
                    <div className="grid-banner-block-image">
                      <Image
                        src={DSC1822}
                        className="grid-banner-image"
                        loading="lazy"
                        sizes="100vw"
                        height="1374"
                        width="1958"
                        alt=""
                      />
                    </div>
                    <div className="grid-banner-content ">
                      <div className="grid-banner-inner banner--content-align-left">
                        <h6 className="sub-title">2006</h6>
                        <h2 className="main-title">Establishment</h2>
                        <p className="description">
                          I Am A Woman of Influence was officially launched,
                          bringing together women from various backgrounds to
                          create a unified voice for gender equality.
                        </p>
                        <Link
                          href={ERoutes.about}
                          className="banner-button button button--primary"
                        >
                          Read more
                        </Link>
                        <ul className="grid-banner-list-section"></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section reveal">
        <div
          id="section-template--22712425840918__2b04eb63-8498-4ebf-9462-937492633e57"
          className="grid-banner color-background-1 gradient no-heading wdt-video-grid-banner"
        >
          <div className="page-full-width section-template--22712425840918__2b04eb63-8498-4ebf-9462-937492633e57-padding isolate custom-grid">
            <div className="row">
              <div className="grid-banner-wrapper">
                <div className="grid-banner-section one-column list  background-primary">
                  <div className="grid-banner-wrapper">
                    <div className="grid-banner-block-image">
                      <Image
                        src={DSC1823}
                        className="grid-banner-image"
                        width="1880"
                        height="1374"
                        sizes="100vw"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="grid-banner-content ">
                      <div className="grid-banner-inner banner--content-align-left">
                        <h6 className="sub-title">I AM WOI</h6>

                        <h2 className="main-title">Our Programs</h2>

                        <ul className="grid-banner-list-section">
                          <li className="grid-banner-list__item">
                            <div className="grid-banner-list-card">
                              <div className="grid-banner-block-card">
                                <Image
                                  src={Group53}
                                  width="84"
                                  height="71"
                                  loading="lazy"
                                  sizes="(min-width: 990px) 710px, (min-width: 750px) 710px, calc(100vw - 30px)"
                                  className="support-block-card__image"
                                  alt=""
                                />{" "}
                              </div>
                              <div
                                className="grid-block-card__info"
                                style={{ width: "calc(100% - 134px)" }}
                              >
                                <h3>Monthly Mentorship Program</h3>
                                <div className="rte">
                                  <p>
                                    Focused discussions on professional
                                    development and personal growth.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li className="grid-banner-list__item">
                            <div className="grid-banner-list-card">
                              <div className="grid-banner-block-card">
                                <Image
                                  src={Group50}
                                  width="84"
                                  height="78"
                                  loading="lazy"
                                  sizes="(min-width: 990px) 710px, (min-width: 750px) 710px, calc(100vw - 30px)"
                                  className="support-block-card__image"
                                  alt=""
                                />{" "}
                              </div>
                              <div
                                className="grid-block-card__info"
                                style={{ width: "calc(100% - 134px)" }}
                              >
                                <h3>Leadership Training Workshops</h3>
                                <div className="rte">
                                  <p>
                                    A hands-on workshop designed to enhance
                                    leadership skills among participants.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>

                          <li className="grid-banner-list__item">
                            <div className="grid-banner-list-card">
                              <div className="grid-banner-block-card">
                                <Image
                                  src={Group48}
                                  width="84"
                                  height="80"
                                  loading="lazy"
                                  sizes="(min-width: 990px) 710px, (min-width: 750px) 710px, calc(100vw - 30px)"
                                  className="support-block-card__image"
                                  alt=""
                                />{" "}
                              </div>
                              <div
                                className="grid-block-card__info"
                                style={{ width: "calc(100% - 134px)" }}
                              >
                                <h3>High Tea Networking Events</h3>
                                <div className="rte">
                                  <p>
                                    An elegant networking high tea event,
                                    providing an opportunity for women to
                                    connect, share experiences, and build
                                    relationships.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
