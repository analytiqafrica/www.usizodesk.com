import { ILayoutProps } from "./interface";
import Seo from "../seo";
import Loader from "../loader";
import Header from "./header";
import Footer from "./footer";
import SocialBar from "./header/social-bar";
import Breadcrumb from "../breadcrumb";
import BecomeASponsor from "../sponsors/become-a-sponsor";

export default function Layout({
  children,
  seo = {},
  breadcrumb,
  isLoading = false,
}: Readonly<ILayoutProps>) {
  return (
    <div className="">
      <Seo {...seo} />
      {isLoading && <Loader />}
      <SocialBar />
      <Header />
      {breadcrumb && <Breadcrumb {...breadcrumb} />}
      <BecomeASponsor />
      <main id="MainContent" className="content-for-layout focus-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
