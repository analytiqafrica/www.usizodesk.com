import { EModalIds, ERoutes } from "@/app/enums";
import { useAppDispatch } from "@/app/store/hooks";
import { showModal } from "@/app/store/reducers/modalReducer";
import SectionFooterImg from "@/assets/images/section-footer.jpg";
import FooterLogo from "@/assets/images/woi-logo-04@500.png";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function Footer() {
  const dispatch = useAppDispatch();
  return (
    <div className="shopify-section reveal">
      <footer
        id="Banner-footer"
        className="index-footer footer color-background-1 gradient"
      >
        <div className="banner__media media">
          <Image
            src={SectionFooterImg}
            height="1196.0"
            loading="lazy"
            sizes="100vw"
            width="3840"
            alt="WOI"
          />
        </div>
        <div className="footer__content-top page-width">
          <div className="row">
            <div className="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet border-right section-footer-padding">
              <div className="footer-block grid__item footer-text-heading left">
                <div className="footer-block">
                  <Link href={ERoutes.home}>
                    <Image
                      style={{ maxWidth: 150 }}
                      src={FooterLogo}
                      loading="lazy"
                      height="100"
                      width="220"
                      alt="WOI"
                    />
                  </Link>
                  <h2 className="footer-block__heading left">
                    Empowering &amp; Inspiring South African Women
                  </h2>
                  <div className="footer-block__details-content rte left">
                    <p>
                      Our mission is to unite women across South Africa to
                      advocate for equal rights, challenge gender narratives,
                      and support one another in unlocking their full potential
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-block grid__item footer-block--menu footer-links footer-link_list-heading ">
                <h2 className="footer-block__heading footer__title ">
                  company
                </h2>
                <ul className="footer-block__details-content footer_menu list-unstyled ">
                  <li>
                    <Link
                      href={ERoutes.home}
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ERoutes.about}
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ERoutes.programs}
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Our Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ERoutes.events}
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Events Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ERoutes.subscribe}
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Subscribe
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-block grid__item footer-block--menu footer-links footer-link_list-heading ">
                <h2 className="footer-block__heading footer__title ">
                  help &amp; support
                </h2>
                <ul className="footer-block__details-content footer_menu list-unstyled ">
                  <li>
                    <Link
                      target="_blank"
                      rel="noreferrer noopener"
                      href="tel:+27637016721"
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Call us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ERoutes.contact}
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Visit our offices
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noreferrer noopener"
                      href="mailto:info@iamwoi.co.za"
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Drop us an email
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://wa.me/27637016721?text=Hello%20I%20am%20interested%20in%20your%20services"
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Message us on WhatsApp
                    </Link>
                  </li>
                  <li>
                    <a
                      href=" "
                      className="link link--text list-menu__item list-menu__item--link"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(showModal({ id: EModalIds.becomeASponsor }));
                      }}
                    >
                      Become a Sponsor
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-block grid__item footer-block--menu footer-links footer-link_list-heading ">
                <h2 className="footer-block__heading footer__title ">legal</h2>
                <ul className="footer-block__details-content footer_menu list-unstyled ">
                  <li>
                    <Link
                      href={ERoutes.legal.disclaimer}
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ERoutes.legal.terms}
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Terms of use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ERoutes.legal.privacy}
                      className="link link--text list-menu__item list-menu__item--link"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__content-bottom">
              <div className="footer__content-bottom-wrapper">
                <div className="footer__column footer__column--info">
                  <div className="footer__copyright caption">
                    <small className="copyright__content">
                      <p>
                        Copyright &copy; {moment().format("YYYY")} Women of
                        Influence. All Right Reserved
                      </p>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
