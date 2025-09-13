// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Slide from "./slide";
import { getDeviceInfo } from "@/lib/device";
import { useEffect, useMemo, useState } from "react";
import { sponsors } from "@/app/data";
import { delay } from "lodash-es";

export default function Slideshow() {
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
    <div className="page-width">
      <div>
        <Swiper
          spaceBetween={30}
          autoplay={{ delay: 5000 }}
          slidesPerView={slidesPerView}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {sponsors.map((item) => (
            <SwiperSlide key={item.id}>
              <Slide {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
