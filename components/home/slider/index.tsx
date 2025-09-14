"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";

export default function HeroSlider() {
  return (
    <section className="hero-area">
      <div className="hero-slide-container swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="slide-wrapper slide_bg d-flex align-items-center"
              data-img-src="assets/img/Slide/1.jpg"
            >
              <div className="container">
                <div
                  className="text-content text-white col-lg-10 p-0 text-center mx-auto"
                  data-swiper-parallax="-200"
                >
                  <h2 className="xl-title text-uppercase text-white">
                    Smart
                    <span className="bg-brash">
                      Ideas
                      <img src="assets/img/icon/brash.png" alt="" />
                    </span>
                    <br />
                    Our Digital Agency.
                  </h2>

                  <p className="text-uppercase">
                    Morbi eget pharetra felis. Nam pulvinar tincidunt purus eget
                    convallis. Nulla eget arcu vitae velit suscipit mattis.
                    Quisque at molestie odio.
                  </p>

                  <div className="btn-area">
                    <a href="services.html" className="btn btn-lg btn-primary">
                      <span className="btn-text">Discover More +</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="slide-wrapper slide_bg d-flex align-items-center"
              data-img-src="assets/img/Slide/2.jpg"
            >
              <div className="container">
                <div
                  className="text-content text-white col-lg-10 p-0 text-center mx-auto"
                  data-swiper-parallax="-200"
                >
                  <h2 className="xl-title text-uppercase text-white">
                    Smart
                    <span className="bg-brash">
                      Ideas
                      <img src="assets/img/icon/brash.png" alt="" />
                    </span>
                    <br />
                    Our Digital Agency.
                  </h2>

                  <p className="text-uppercase">
                    Morbi eget pharetra felis. Nam pulvinar tincidunt purus eget
                    convallis. Nulla eget arcu vitae velit suscipit mattis.
                    Quisque at molestie odio.
                  </p>

                  <div className="btn-area">
                    <a
                      href="portfolio-details.html"
                      className="btn btn-lg btn-primary"
                    >
                      <span className="btn-text">Discover More +</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div
              className="slide-wrapper slide_bg d-flex align-items-center"
              data-img-src="assets/img/Slide/1.jpg"
            >
              <div className="container">
                <div
                  className="text-content text-white col-lg-10 p-0 text-center mx-auto"
                  data-swiper-parallax="-200"
                >
                  <h2 className="xl-title text-uppercase text-white">
                    Smart
                    <span className="bg-brash">
                      Ideas
                      <img src="assets/img/icon/brash.png" alt="" />
                    </span>
                    <br />
                    Our Digital Agency.
                  </h2>

                  <p className="text-uppercase">
                    Morbi eget pharetra felis. Nam pulvinar tincidunt purus eget
                    convallis. Nulla eget arcu vitae velit suscipit mattis.
                    Quisque at molestie odio.
                  </p>

                  <div className="btn-area">
                    <a href="services.html" className="btn btn-lg btn-primary">
                      <span className="btn-text">Discover More +</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-pagination"></div>
    </section>
  );
}
