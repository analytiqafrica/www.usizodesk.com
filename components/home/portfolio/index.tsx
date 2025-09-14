import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const sliderSettings = {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("apps");

  const tabs = [
    {
      id: "apps",
      label: "Apps Design",
      images: ["6.jpg", "7.jpg", "8.jpg", "9.jpg", "6.jpg", "7.jpg"],
    },
    {
      id: "web",
      label: "Web Design",
      images: ["9.jpg", "8.jpg", "7.jpg", "6.jpg", "9.jpg", "8.jpg"],
    },
    {
      id: "uxui",
      label: "UX/UI Design",
      images: ["6.jpg", "8.jpg", "9.jpg", "7.jpg"],
    },
    {
      id: "mockup",
      label: "Mockup Design",
      images: ["7.jpg", "9.jpg", "6.jpg"],
    },
  ];

  return (
    <section className="sec-pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="section-title text-lg-left text-center">
              <span className="text-primary">Our New Portfolio</span>
              <h2 className="title">Our Expert Work</h2>
            </div>
          </div>
          <div className="col-lg-7 d-flex justify-content-lg-end justify-content-center mb-4 mb-md-5 mb-lg-0">
            <div className="portfolio-menu menu-dark custom-tab-nav d-flex flex-wrap justify-content-lg-end justify-content-center">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#tab-${tab.id}`}
                  className={activeTab === tab.id ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab.id);
                  }}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="custom-tab-wrapper">
          {tabs.map((tab) =>
            activeTab === tab.id ? (
              <div key={tab.id} className="tab-item active">
                <Swiper {...sliderSettings}>
                  {tab.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="portfolio-wrapper active-text">
                        <div className="portfolio-img">
                          <img
                            src={`/assets/img/work/${img}`}
                            className="img-fluid"
                            alt={`portfolio-${i}`}
                          />
                        </div>
                        <div className="portfolio-content">
                          <a href="portfolio.html" className="custom-badge">
                            UX/UI Design
                          </a>
                          <h4>
                            <a href="portfolio.html">
                              portrait of Depressed Business Man <br />
                              Stock Footage Video
                            </a>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
