import ISeoProps from "../seo/interface";

export interface ILayoutProps {
  children: any;
  seo?: ISeoProps;
  isLoading?: boolean;
}
