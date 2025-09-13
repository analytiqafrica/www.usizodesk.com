import { EModalIds } from "@/app/enums";
import { useAppDispatch } from "@/app/store/hooks";
import { showModal } from "@/app/store/reducers/modalReducer";
import Slideshow from "./slideshow";

export default function OurSponsors() {
  const dispatch = useAppDispatch();
  return (
    <section
      id="shopify-section-template--22712426463510__product-recommendations"
      className="section reveal"
    >
      <div className="color-background-1 gradient ">
        <div className="product-recommendations">
          <div className="page-width section-template--22712426463510__product-recommendations-padding isolate">
            <div className="row">
              <h2 className="product-recommendations__heading h2">
                Our Valued Sponsors
              </h2>
              <Slideshow />
              <div className="customized-collection">
                <div className="title-wrapper-with-link">
                  <p className="description">
                    Interested in joining us as a sponsor? Your support can help
                    us broaden our reach and impact the lives of women across
                    South Africa.
                  </p>
                  <a
                    href=" "
                    className="button button--secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(showModal({ id: EModalIds.becomeASponsor }));
                    }}
                  >
                    BECOME A SPONSOR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
