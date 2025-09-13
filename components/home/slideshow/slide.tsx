import Image from "next/image";
import Svg from "@/components/svg";
import ImageMobile from "@/assets/images/slideshow/DSC_1847.webp";
import ImageDesktop from "@/assets/images/slideshow/DSC_1881.webp";

export default function Slide() {
  return (
    <>
      <div className="slideshow__media">
        <Image
          sizes="100vw"
          src={ImageDesktop}
          loading="lazy"
          alt=""
          width="1920"
          height="1000"
          className="desktop-slider"
        />
        <Image
          sizes="100vw"
          src={ImageMobile}
          loading="lazy"
          alt=""
          width="768"
          height="950"
          className="mobile-slider"
        />
      </div>
      <div className="slideshow__text-wrapper banner__content banner__content--bottom-left page-width">
        <div className="slideshow__text banner__box content-container content-container--full-width-mobile color-inverse gradient slideshow__text--left slideshow__text-mobile--center">
          <h2 className="banner__heading h0">I AM WOI</h2>
          <div className="banner__text">
            <span>
              Uniting women across South Africa to advocate for equal rights,
              challenge gender narratives, and support one another in unlocking
              their full potential.
            </span>
          </div>
          <ul
            className="team__list-social list-unstyled list-social"
            role="list"
          >
            <li className="list-social__item">
              <a href="#" className="link text-social__link">
                <Svg name="twitter" />
                <span className="visually-hidden">TW</span>
              </a>
            </li>
            <li className="list-social__item">
              <a href="#" className="link text-social__link">
                <Svg name="facebook" />
                <span className="visually-hidden">FB</span>
              </a>
            </li>
            <li className="list-social__item">
              <a href="#" className="link text-social__link">
                <Svg name="instagram" />
                <span className="visually-hidden">IN</span>
              </a>
            </li>
            <li className="list-social__item">
              <a href="#" className="link text-social__link">
                <Svg name="youtube" />
                <span className="visually-hidden">YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
