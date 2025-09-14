"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";

export default function HomeSlider() {
  const interleaveOffset = 0.4;

  return (
    <section className="hero-area">
      <Swiper
        modules={[Pagination, Parallax]}
        loop={true}
        speed={1200}
        grabCursor={true}
        watchSlidesProgress={true}
        resistance={true}
        resistanceRatio={0.5}
        parallax={true}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" data-index="0${index + 1}">0${
              index + 1
            }</span>`;
          },
        }}
        on={{
          progress(swiper) {
            swiper.slides.forEach((slide: HTMLElement) => {
              const slideProgress = (slide as any).progress;
              const innerOffset = swiper.width * interleaveOffset;
              const innerTranslate = slideProgress * innerOffset;
              const bg = slide.querySelector(".slide_bg") as HTMLElement;
              if (bg) {
                bg.style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
              }
            });
          },
          touchStart(swiper) {
            swiper.slides.forEach((slide: HTMLElement) => {
              slide.style.transition = "";
            });
          },
          setTransition(swiper, speed) {
            swiper.slides.forEach((slide: HTMLElement) => {
              slide.style.transition = `${speed}ms`;
              const bg = slide.querySelector(".slide_bg") as HTMLElement;
              if (bg) {
                bg.style.transition = `${speed}ms`;
              }
            });
          },
        }}
        className="hero-slide-container"
      >
        {/* === Example Slides === */}
        <SwiperSlide>
          <div
            className="slide-wrapper slide_bg d-flex align-items-center"
            style={{ backgroundImage: "url(/assets/img/Slide/1.jpg)" }}
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
                    <img src="/assets/img/icon/brash.png" alt="" />
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
        </SwiperSlide>

        {/* add more <SwiperSlide> like above */}
      </Swiper>

      {/* Custom Pagination container */}
      <div className="hero-pagination" />
    </section>
  );
}
