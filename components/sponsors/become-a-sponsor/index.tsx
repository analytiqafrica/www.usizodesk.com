import { EModalIds } from "@/app/enums";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { getModalId, hideModal } from "@/app/store/reducers/modalReducer";
import { useEffect } from "react";

export default function BecomeASponsor() {
  const dispatch = useAppDispatch();
  const modalId = useAppSelector(getModalId);

  useEffect(() => {
    if (modalId === EModalIds.becomeASponsor) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [modalId]);

  return (
    <div
      className={`drawer is-empty animate ${
        modalId === EModalIds.becomeASponsor ? "active" : ""
      }`}
    >
      <div className="cart-drawer">
        <div
          id="CartDrawer-Overlay"
          className="cart-drawer__overlay"
          onClick={() => dispatch(hideModal())}
        />
        <div className="drawer__inner" role="dialog">
          <div className="drawer__inner-empty">
            <div className="cart-drawer__warnings center">
              <div
                className="cart-drawer__empty-content"
                style={{
                  overflowY: "auto",
                  height: "100vh",
                }}
              >
                <h2 className="cart__empty-text">Become a Sponsor</h2>
                <button
                  onClick={() => dispatch(hideModal())}
                  className="drawer__close close_icon_button"
                  aria-label="Close"
                  type="button"
                >
                  <svg
                    id="Group_24924"
                    data-name="Group 24924"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_8252"
                          data-name="Rectangle 8252"
                          width="25"
                          height="25"
                          fill="currentcolor"
                        ></rect>
                      </clipPath>
                    </defs>
                    <g id="Group_24923" data-name="Group 24923">
                      <path
                        id="Path_38934"
                        data-name="Path 38934"
                        d="M23.214,25a1.78,1.78,0,0,1-1.263-.523L.523,3.048A1.786,1.786,0,0,1,3.048.523L24.477,21.952A1.786,1.786,0,0,1,23.214,25"
                        transform="translate(0)"
                        fill="currentcolor"
                      ></path>
                      <path
                        id="Path_38935"
                        data-name="Path 38935"
                        d="M1.786,25A1.786,1.786,0,0,1,.523,21.952L21.952.523a1.786,1.786,0,1,1,2.525,2.525L3.048,24.477A1.78,1.78,0,0,1,1.786,25"
                        transform="translate(0 0)"
                        fill="currentcolor"
                      ></path>
                    </g>
                  </svg>
                </button>
                <p className="cart__login-paragraph">
                  Interested in joining us as a sponsor? Your support can help
                  us broaden our reach and impact the lives of women across
                  South Africa. Here’s how you can get involved:
                </p>
                <ul className="custom-list text-left">
                  <li>
                    <strong>1. Express Your Interest:</strong> Reach out to us
                    at contact@womenofinfluence.org to express your interest in
                    sponsoring.
                  </li>
                  <li>
                    <strong>2. Discuss Opportunities:</strong> We’ll set up a
                    meeting to discuss sponsorship opportunities that align with
                    your company’s values and goals.
                  </li>
                  <li>
                    <strong>3. Choose a Sponsorship Package:</strong> We offer a
                    variety of sponsorship packages designed to fit different
                    budgets and level of engagement.
                  </li>
                  <li>
                    <strong>4. Make an Impact:</strong> Once confirmed, your
                    logo and company information will be featured on our website
                    and promotional materials, showcasing your support for women
                    empowerment.
                  </li>
                </ul>
                <a
                  onClick={() => dispatch(hideModal())}
                  href="mailto:contact@womenofinfluence.org?subjet=Become a Sponsor Website Query"
                  className="button"
                >
                  Reach out now
                </a>
                <p className="cart__login-title h3">Thank you!</p>
                <p className="cart__login-paragraph">
                  Thank you to all our sponsors for standing with us in our
                  mission to uplift and empower women across South Africa! Your
                  support is invaluable.
                </p>
                <br/><br/><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
