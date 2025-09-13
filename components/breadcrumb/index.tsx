import { ERoutes } from "@/app/enums";
import { useRouter } from "next/router";
import { useBreadcrumb } from "@/app/hooks/useBreadcrumbs";
import { useMemo } from "react";
import Link from "next/link";

export default function Breadcrumb() {
  const router = useRouter();

  const { page, items } = useBreadcrumb();

  const showBreadcrumbHeader = useMemo(
    () => ERoutes.home !== router?.pathname,
    [router?.pathname]
  );

  if (!showBreadcrumbHeader) {
    return undefined;
  }

  return (
    <section
      className="page-top-wrapper parallax-img"
      data-img-src="/assets/img/bg/page-top.jpg"
      style={{ backgroundImage: "url(/assets/img/bg/page-top.jpg)" }}
    >
      <span className="position-absolute line-shape d-lg-block d-none">
        <img src="/assets/img/bg/shape-2.png" alt="" />
      </span>
      <div className="container text-left">
        <h2 className="text-white text-uppercase">{page}</h2>
        <ul className="breadcrumb">
          <li>
            <Link href={ERoutes.home}>Home</Link>
          </li>
          <li>
            <Link href=" ">{page}</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
