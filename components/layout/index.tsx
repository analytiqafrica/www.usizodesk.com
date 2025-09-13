import { ILayoutProps } from "./interface";
import Breadcrumb from "../breadcrumb";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: Readonly<ILayoutProps>) {
  return (
    <>
      <main className="main-root">
        <Header />
        <Breadcrumb />
        {children}
        <Footer />
      </main>
      <div className="btt-progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
        <span className="arrow">
          <svg viewBox="0 0 12.462 17.5">
            <path
              d="M2.282-8.693l2.561-2.561V.313a.937.937,0,0,0,.938.938h.938A.937.937,0,0,0,7.656.313V-11.255l2.561,2.561a.937.937,0,0,0,1.326,0l.663-.663a.937.937,0,0,0,0-1.326L6.913-15.975a.937.937,0,0,0-1.326,0L.294-10.682a.937.937,0,0,0,0,1.326l.663.663A.937.937,0,0,0,2.282-8.693Z"
              transform="translate(-0.019 16.25)"
            />
          </svg>
        </span>
      </div>
    </>
  );
}
