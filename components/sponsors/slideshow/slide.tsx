import { ISponsorSlide } from "@/app/types";
import { cardInnerStyle, cardStyle } from "./styles";
import Shop13_1 from "@/assets/images/sponsors/shop-13.1.jpg";
import Shop13 from "@/assets/images/sponsors/shop-13.png";
import Image from "next/image";
import Link from "next/link";

export default function Slide({ name }: Readonly<ISponsorSlide>) {
  return (
    <div className="card-wrapper underline-links-hover">
      <div
        className="card card--card card--media color-background-1 gradient"
        style={cardStyle}
      >
        <div className="card__inner ratio" style={cardInnerStyle}>
          <div className="card__media">
            <Link href=" ">
              <div className="media media--transparent media--hover-effect">
                <Image
                  src={Shop13}
                  sizes="(min-width: 1650px) 380px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                  alt="Liqui-fruit"
                  className="motion-reduce loaded-image"
                  loading="lazy"
                  width="960"
                  height="1120"
                />

                <Image
                  src={Shop13_1}
                  sizes="(min-width: 1650px) 380px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                  alt={name}
                  className="motion-reduce loaded-image"
                  loading="lazy"
                  width="960"
                  height="1120"
                />
              </div>
            </Link>
          </div>
          <div className="card__content">
            <div className="card__information">
              <h3 className="card__heading">
                <Link href=" " className="full-unstyled-link">
                  {name}
                </Link>
              </h3>
            </div>
            <div className="card__badge top-left">
              <span className="badge badge--bottom-left color-background-2">
                {name}
              </span>
            </div>
            <ul className="product-icons right-aligned">
              <li></li>
            </ul>
            <div className="quick-add button-quick-add" />
          </div>
        </div>
      </div>
    </div>
  );
}
