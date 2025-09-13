import MarqueeImage from "@/assets/images/maqruee-section-image.jpg";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Svg from "@/components/svg";
import Slide from "./slide";

export default function Slideshow() {
  return (
    <>
      <section className="section slideshow reveal">
        <div className="page-full-width">
          <div className="slideshow-component">
            <div className="row">
              <div>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <Slide />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Slide />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="maqruee-section-wrapper color-background-1 gradient  no-heading  ">
          <div className="banner__media media">
            <Image
              src={MarqueeImage}
              height="120.0"
              loading="lazy"
              sizes="100vw"
              width="3840"
              alt=""
            />
          </div>
          <div className="page-full-width section-template--22712425840918__10afecd6-ae49-475a-bff0-0b9225389529-padding isolate">
            <div className="row">
              <div className="marquee-section style_1">
                <ul className="marquee-wrapper">
                  <li className="marquee-block">
                    <div className="marquee-inner-wrapper">
                      <a href="">
                        <h4 className="marquee-title">
                          Our mission is to unite women across South Africa
                        </h4>
                      </a>
                    </div>
                  </li>
                  <li className="marquee-block">
                    <div className="marquee-inner-wrapper">
                      <a href="">
                        <h4 className="marquee-title">
                          Our mission is to unite women across South Africa
                        </h4>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
