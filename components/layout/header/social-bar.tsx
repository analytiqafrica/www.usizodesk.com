import Svg from "@/components/svg";

export default function SocialBar() {
  return (
    <div id="section-top-bar" className="reveal">
      <section className="dt-sc-header-top-bar hide-mobile color-background-1 gradient">
        <div className=" page-width  ">
          <div className="row">
            <div className="dt-sc-flex-space-between">
              <div className="currency_language"></div>

              <ul className="top-bar-content">
                <li>
                  <p className="top-bar-text">
                    Empowering &amp; Inspiring South African Women
                  </p>
                </li>
              </ul>
              <ul
                className="topbar_list-social list-unstyled list-social"
                role="list"
              >
                <li className="list-social__item">
                  <a href="#" className="link list-social__link">
                    <Svg name="twitter" />
                    <span className="icon-text visually-hidden">TW</span>
                  </a>
                </li>
                <li className="list-social__item">
                  <a href="#" className="link list-social__link">
                    <Svg name="facebook" />
                    <span className="icon-text visually-hidden">FB</span>
                  </a>
                </li>
                <li className="list-social__item">
                  <a href="#" className="link list-social__link">
                    <Svg name="instagram" />
                    <span className="icon-text visually-hidden">IN</span>
                  </a>
                </li>
                <li className="list-social__item">
                  <a href="#" className="link list-social__link">
                    <Svg name="youtube" />
                    <span className="icon-text visually-hidden">YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
