import { IEvent } from "@/app/types";
import { ERoutes } from "@/app/enums";
import { cardInnerStyle, cardStyle } from "./styles";
import DSC_2225 from "@/assets/images/upcoming-events/DSC_2225.webp";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function EventCard({
  eventDate,
  eventTitle,
  eventLocation,
}: Readonly<IEvent>) {
  return (
    <div className="blog__post article grid__item blog-grid-style">
      <div className="card-wrapper underline-links-hover">
        <div
          className="card article-card card--card card--media color-background-1 gradient"
          style={cardStyle}
        >
          <div className="card__inner ratio" style={cardInnerStyle}>
            <div className="article-card__image-wrapper card__media">
              <div className="article-card__image media media--hover-effect">
                <Link href={ERoutes.events} className="full-unstyled-link">
                  <Image
                    sizes="(min-width: 1650px) 775px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                    className="motion-reduce article__image"
                    alt={eventTitle}
                    loading="lazy"
                    width="1230"
                    height="1000"
                    src={DSC_2225}
                  />
                </Link>
                <div className="article-date">
                  <div className="date">
                    <time>
                      <div className="featured-article-content">
                        <span className="art-date">
                          {moment(eventDate).format("DD")}
                        </span>
                        <span className="blog-month">
                          {moment(eventDate).format("MMM")}
                        </span>
                        <span className="blog-year">
                          {moment(eventDate).format("YYYY")}
                        </span>
                      </div>
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card__content">
            <div className="card__information">
              <div className="article-card__info caption-with-letter-spacing h5 custom-article-section">
                <div className="blog-tag">
                  <div className="blog-tag-icon">
                    <i className="fa fa-tags" />
                  </div>

                  <div className="custom-blog-tag">
                    <Link href={ERoutes.events} className="blog-tags">
                      {eventLocation.venue}
                      <br />
                      {eventLocation.city}
                    </Link>
                  </div>
                </div>
              </div>
              <h3 className="card__heading h2">
                <Link href={ERoutes.events} className="full-unstyled-link">
                  {eventTitle}
                </Link>
              </h3>

              <div className="article-card__footer">
                <Link href={ERoutes.events} className="blog__button button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
