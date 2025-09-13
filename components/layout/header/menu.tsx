import { menu } from "@/app/data";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { IMenuItem } from "@/app/types";
import Link from "next/link";

export default function Menu() {
  const router = useRouter();

  const menuItems = useMemo(() => menu, [router?.pathname]);

  const isItemActive = useCallback(
    (item: IMenuItem) => item.routeLink === router?.pathname,
    [router?.pathname]
  );

  return (
    <ul className="navbar-nav mr-auto">
      {menuItems.map((item) => (
        <li className="nav-item" key={item.title}>
          <Link
            className={`nav-link ${isItemActive(item)}`}
            href={item.routeLink}
          >
            {item.title}
          </Link>
          {item?.children && (
            <ul>
              {item.children.map((subitem) => (
                <li key={subitem.title}>
                  <Link href={subitem.routeLink}>{subitem.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
