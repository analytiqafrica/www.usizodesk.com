// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Slide from "./slide";
import { getDeviceInfo } from "@/lib/device";
import { useEffect, useMemo, useState } from "react";
import { companyStructure } from "@/app/data";

export default function TeamSlideshow() {
  const [deviceInfo, setDeviceInfo] = useState(getDeviceInfo());

  useEffect(() => {
    const handleResize = () => {
      setDeviceInfo(getDeviceInfo());
    };

    // Set initial state on client side
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slidesPerView: number = useMemo(() => {
    if (deviceInfo?.isMobile) {
      return 1;
    }
    return 4;
  }, [deviceInfo]);

  return (
    <div className="team-section-slider background-primary">
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {companyStructure.map((item) => (
            <SwiperSlide key={item.id}>
              <Slide {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
