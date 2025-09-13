import Svg from "@/components/svg";

export default function FooterLinks() {
  return (
    <div className="menu-drawer__utility-links">
      {/* <a
        href="/account/login"
        className="menu-drawer__account link focus-inset h5"
      >
        <Svg name="user" />
        Log in
      </a> */}
      <ul className="list list-social list-unstyled" role="list">
        <li className="list-social__item">
          <a href=" " className="list-social__link link">
            <Svg name="twitter" />
            <span className="visually-hidden">TW</span>
          </a>
        </li>
        <li className="list-social__item">
          <a href=" " className="list-social__link link">
            <Svg name="facebook" />
            <span className="visually-hidden">FB</span>
          </a>
        </li>
        <li className="list-social__item">
          <a href=" " className="list-social__link link">
            <Svg name="instagram" />
            <span className="visually-hidden">IN</span>
          </a>
        </li>
        <li className="list-social__item">
          <a href=" " className="list-social__link link">
            <Svg name="youtube" />
            <span className="visually-hidden">YouTube</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
