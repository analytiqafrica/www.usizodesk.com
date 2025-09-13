import { ERoutes } from "@/app/enums";
import Link from "next/link";

export interface IBreadcrumb {
  title: string;
  subtitle?: string;
}

export default function Breadcrumb({ title, subtitle }: Readonly<IBreadcrumb>) {
  return (
    <nav className="breadcrumb text-center" aria-label="breadcrumbs">
      <div className="page-width">
        <div className="row">
          <h1 className="breadcrumb_title">{title}</h1>
          <Link href={ERoutes.home} title="Back to the frontpage">
            Home
          </Link>
          <span aria-hidden="true" className="breadcrumb__sep">
            <i className="breadcrumb-arrow fa fa-angle-right" />
          </span>
          <span>{subtitle || title}</span>
        </div>
      </div>
    </nav>
  );
}
