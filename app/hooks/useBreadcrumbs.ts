import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { ERoutes } from "../enums";

export interface IItem {
  routeLink: string;
  title?: string;
}

export interface IBreadcrumb {
  page: string;
  items?: IItem[];
}

export const useBreadcrumb = (): IBreadcrumb => {
  const router = useRouter();
  const [breadcrumb, setBreadcrumb] = useState<IBreadcrumb>({
    page: ERoutes.home as string,
  });

  const getBreadcrumb = (pathname: string): IBreadcrumb => {
    const cleanPath = pathname.split("?")[0];
    const pathSegments = cleanPath.split("/").filter(Boolean);

    if (pathSegments.length === 0) {
      return {
        page: "Home",
        items: [],
      };
    }

    const breadcrumbItems = pathSegments
      .slice(0, pathSegments.length - 1)
      .map((segment, index) => {
        const title = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        const routeLink = `/${pathSegments.slice(0, index + 1).join("/")}`;
        return { title, routeLink };
      });

    const lastItem = pathSegments[pathSegments.length - 1];
    const page = lastItem
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      page,
      items: breadcrumbItems,
    };
  };

  useEffect(() => {
    if (router?.asPath) {
      setBreadcrumb(getBreadcrumb(router?.asPath));
    }
  }, [router?.asPath]);

  return useMemo(() => ({ ...breadcrumb }), [breadcrumb]);
};
