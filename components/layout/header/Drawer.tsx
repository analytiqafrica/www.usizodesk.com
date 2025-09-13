import { useState } from "react";
import FooterLinks from "./FooterLinks";
import MenuNav from "./MenuNav";
import Svg from "@/components/svg";

export default function Drawer() {
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);
  return (
    <div className="header-drawer" data-breakpoint="tablet">
      <details
        id="Details-menu-drawer-container"
        className={`menu-drawer-container ${
          showMenuDrawer ? "menu-opening" : ""
        }`}
        open={showMenuDrawer}
      >
        <summary
          aria-expanded={showMenuDrawer}
          className="header__icon header__icon--menu header__icon--summary link focus-inset"
          aria-controls="menu-drawer"
          aria-label="Menu"
          role="button"
          onClick={(e) => {
            e.preventDefault();
            setShowMenuDrawer((prev) => !prev);
          }}
        >
          <span>
            <Svg name="hamburger" />
          </span>
        </summary>
        <div
          id="menu-drawer"
          className="gradient menu-drawer motion-reduce"
          style={{ top: 0 }}
        >
          <button
            type="button"
            aria-label="Close"
            className="header-drawer__close close_icon_button"
            onClick={() => setShowMenuDrawer(false)}
          >
            <Svg name="close" />
          </button>
          <div className="menu-drawer__inner-container">
            <div className="menu-drawer__navigation-container">
              <MenuNav />
              <FooterLinks />
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}
