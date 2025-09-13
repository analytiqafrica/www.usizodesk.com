import { ERoutes } from "@/app/enums";
import { IDimensions } from "@/app/types";
import { useEffect, useState } from "react";
import Link from "next/link";
import Menu from "./menu";

export default function Header() {
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

  return (
    <header className="header-area header-style-2">
      <nav className="header-main">
        <div className="container-fluid">
          <div className="navbar">
            <Link className="navbar-brand mr-auto" href={ERoutes.home}>
              <img src="assets/img/logo-light.png" alt="Usizo" />
            </Link>
            <div id="header-bottom-toggle" className="navbar-nav-wrapper">
              <Menu />
            </div>
            <div className="align-items-center search-and-text-info ml-auto d-xl-flex d-none">
              <div className="d-flex align-items-center header-text-info">
                <span className="icon">
                  <img src="assets/img/icon/phone.png" alt="" />
                </span>
                <div className="text-info">
                  <p>
                    <span className="text-theme fw-bold">Need a demo?</span>{" "}
                    Talk to us
                  </p>
                  <a href="#">+27 86 737 6284</a>
                </div>
              </div>
              <span className="separator"></span>
              <button className="searh-icon-wrapper toggle-lg-search d-flex align-items-center">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>
                  Search <br />
                  ON !
                </span>
              </button>
            </div>
            <button
              className="nav-toggle-btn d-lg-none ml-3 nav_toggle_btn"
              data-toggle="#header-bottom-toggle"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className="search-box-wrap">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <button className="close-btn toggle-lg-search" />
          <div className="search-lg-input-wrapper">
            <input
              type="text"
              className="search-form"
              placeholder="Search here"
            />
            <button className="search-btn">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
