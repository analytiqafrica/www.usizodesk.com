import Image from "next/image";
import Svg from "@/components/svg";
import ImageDesktop from "@/assets/images/about/structure/DSC_1773.webp";
import GuguImage from "@/assets/images/about/structure/DSC_1864.webp";
import { ITeamMemberSlide } from "@/app/types";

export default function Slide({ name, role, text, socials }: Readonly<ITeamMemberSlide>) {
  return (
    <div
      className="team-section-wrapper-1 swiper-slide swiper-slide-active"
      role="group"
      aria-label="1 / 4"
      // style="width: 348.75px; margin-right: 30px;"
    >
      <div className="team-section-block-image">
        <Image
          className="team-section-image"
          sizes="100vw"
          src={ImageDesktop}
          loading="lazy"
          alt={name}
          width="940"
          height="638"
        />

        <Image
          className="team-section-image-duplicate"
          style={{ minHeight: "100%" }}
          src={GuguImage}
          loading="lazy"
          sizes="100vw"
          height="180"
          width="180"
          alt={name}
        />
      </div>
      <div className="team-section-content ">
        <div className="team-section-inner banner--content-align-left">
          <h4 className="main-title ">{name}</h4>

          <h6 className="sub-title">{role}</h6>

          <p className="description">{text}</p>
        </div>
        <div className="team-section-content-icon">
          <ul
            className="team__list-social list-unstyled list-social"
            role="list"
          >
            <li className="list-social__item">
              <a href=" " className="link list-social__link">
                <Svg name="twitter" />
                <span className="visually-hidden">TW</span>
              </a>
            </li>
            <li className="list-social__item">
              <a href=" " className="link list-social__link">
                <Svg name="facebook" />
                <span className="visually-hidden">FB</span>
              </a>
            </li>
            <li className="list-social__item">
              <a href=" " className="link list-social__link">
                <Svg name="instagram" />
                <span className="visually-hidden">IN</span>
              </a>
            </li>
            <li className="list-social__item">
              <a href=" " className="link list-social__link">
                <Svg name="youtube" />
                <span className="visually-hidden">YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
