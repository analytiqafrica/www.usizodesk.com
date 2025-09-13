import { IBreadcrumb } from "../breadcrumb";
import ISeoProps from "../seo/interface";

export interface ILayoutProps {
  children: any;
  seo?: ISeoProps;
  isLoading?: boolean;
  breadcrumb?: IBreadcrumb;
}
