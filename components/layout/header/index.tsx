import { ERoutes } from "@/app/enums";
import { useRouter } from "next/router";
import Logo from "@/assets/images/woi-logo-04@500.png";
import Image from "next/image";
import Link from "next/link";
import Drawer from "./Drawer";
import { IDimensions } from "@/app/types";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();

  const hasWindow: boolean = typeof window !== "undefined";

  const getWindowDimensions = (): IDimensions => {
    const width = hasWindow ? (window.innerWidth - 100).toString() : null;
    const height = hasWindow ? (window.innerHeight - 100).toString() : null;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState<IDimensions>(
    getWindowDimensions()
  );

  const handleWindowResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, [hasWindow]);

  console.log(windowDimensions);
  return (
    <div className="section-header reveal">
      <div className="header-wrapper">
        <header
          id="header"
          className="index-header header header--middle header--has-menu color-background-1"
        >
          <div className="page-full-width page-full-width_spacing">
            <div className="row header-row">
              <div className="header__inline-menu">
                <nav
                  role="navigation"
                  className="dt-sc-flex-space-between align-left"
                >
                  <ul className="dt-sc-list-inline dt-desktop-menu dt-nav">
                    <li
                      className={`text-menu top-level-link dt-sc-child ${
                        router?.pathname === ERoutes.home ? "active" : ""
                      }`}
                    >
                      <Link
                        href={ERoutes.home}
                        className="dt-sc-nav-link dropdown"
                      >
                        <span data-hover="Home">Home</span>
                      </Link>
                    </li>
                    <li
                      className={`text-menu top-level-link dt-sc-child ${
                        router?.pathname === ERoutes.about ? "active" : ""
                      }`}
                    >
                      <Link
                        href={ERoutes.about}
                        className="dt-sc-nav-link dropdown"
                      >
                        <span data-hover="Our Story">Our Story</span>
                      </Link>
                    </li>
                    <li
                      className={`text-menu top-level-link dt-sc-child ${
                        router?.pathname === ERoutes.programs ? "active" : ""
                      }`}
                    >
                      <Link
                        href={ERoutes.programs}
                        className="dt-sc-nav-link dropdown"
                      >
                        <span data-hover="Our Programs">Our Programs</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <h1 className="header__heading">
                <Link
                  href={ERoutes.home}
                  className="header__heading-link link link--text focus-inset"
                >
                  <Image
                    src={Logo}
                    width="140"
                    height="54"
                    loading="lazy"
                    alt="WOI"
                    className="header__heading-logo"
                    style={{ maxWidth: 100 }}
                  />
                </Link>
              </h1>
              {Number(windowDimensions.width) <= 768 ? (
                <Drawer />
              ) : (
                <div className="header__icons">
                  <nav
                    role="navigation"
                    className="dt-sc-flex-space-between align-left"
                  >
                    <ul className="dt-sc-list-inline dt-desktop-menu dt-nav">
                      <li
                        className={`text-menu top-level-link dt-sc-child ${
                          router?.pathname === ERoutes.events ? "active" : ""
                        }`}
                      >
                        <Link
                          href={ERoutes.events}
                          className="dt-sc-nav-link dropdown"
                        >
                          <span data-hover="Our Events">Our Events</span>
                        </Link>
                      </li>
                      <li
                        className={`text-menu top-level-link dt-sc-child ${
                          router?.pathname === ERoutes.subscribe ? "active" : ""
                        }`}
                      >
                        <Link
                          href={ERoutes.subscribe}
                          className="dt-sc-nav-link dropdown"
                        >
                          <span data-hover="Subscribe">Subscribe</span>
                        </Link>
                      </li>
                      <li
                        className={`text-menu top-level-link dt-sc-child ${
                          router?.pathname === ERoutes.contact ? "active" : ""
                        }`}
                      >
                        <Link
                          href={ERoutes.contact}
                          className="dt-sc-nav-link dropdown"
                        >
                          <span data-hover="Contact">Contact</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
