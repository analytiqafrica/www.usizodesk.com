import { ERoutes } from "@/app/enums";
import { useRouter } from "next/router";
import Link from "next/link";

const activeLinkClass: string = "menu-drawer__menu-item list-menu__item link link--text focus-inset menu-drawer__menu-item--active";
const defaultLinkClass: string = "menu-drawer__menu-item list-menu__item link link--text focus-inset";
const activeLIClass: string = "text-menu top-level-link dt-sc-child active";
const defaultLIClass: string = "text-menu top-level-link dt-sc-child";

export default function MenuNav() {
  const router = useRouter();
  return (
    <div className="menu-drawer__navigation">
      <ul
        className="menu-drawer__menu has-submenu list-menu dt-sc-list-inline"
        role="list"
      >
        <li className={router?.pathname === ERoutes.home ? activeLIClass : defaultLIClass}>
          <Link
            href={ERoutes.home}
            aria-current="page"
            className={router?.pathname === ERoutes.home ? activeLinkClass : defaultLinkClass}
          >
            Home
          </Link>
        </li>
        <li className={router?.pathname === ERoutes.about ? activeLIClass : defaultLIClass}>
          <Link
            href={ERoutes.about}
            className={router?.pathname === ERoutes.about ? activeLinkClass : defaultLinkClass}
          >
            Our Story
          </Link>
        </li>
        <li className={router?.pathname === ERoutes.programs ? activeLIClass : defaultLIClass}>
          <Link
            href={ERoutes.programs}
            className={router?.pathname === ERoutes.programs ? activeLinkClass : defaultLinkClass}
          >
            Our Programs
          </Link>
        </li>
        <li className={router?.pathname === ERoutes.events ? activeLIClass : defaultLIClass}>
          <Link
            href={ERoutes.events}
            className={router?.pathname === ERoutes.events ? activeLinkClass : defaultLinkClass}
          >
            Our Events
          </Link>
        </li>
        <li className={router?.pathname === ERoutes.subscribe ? activeLIClass : defaultLIClass}>
          <Link
            href={ERoutes.subscribe}
            className={router?.pathname === ERoutes.subscribe ? activeLinkClass : defaultLinkClass}
          >
            Subscribe
          </Link>
        </li>
        <li className={router?.pathname === ERoutes.contact ? activeLIClass : defaultLIClass}>
          <Link
            href={ERoutes.contact}
            className={router?.pathname === ERoutes.contact ? activeLinkClass : defaultLinkClass}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
