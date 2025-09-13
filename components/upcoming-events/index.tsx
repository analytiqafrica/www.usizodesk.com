import { IEvent } from "@/app/types";
import EventCard from "./EventCard";
import { cardInnerStyle, cardStyle } from "./styles";

const upcomingEvents: IEvent[] = [
  {
    id: 1,
    eventDate: "08 March 2024",
    eventTitle: "International Women's Day Celebration",
    eventLocation: { venue: "Sandton Convention Centre", city: "Johannesburg" },
  },
  {
    id: 2,
    eventDate: "15 August 2024",
    eventTitle: "Annual Women’s Empowerment Conference",
    eventLocation: { venue: "Durban Raddisson Hotel", city: "Durban" },
  },
  {
    id: 3,
    eventDate: "28 September 2024",
    eventTitle: "Community Involvement Day",
    eventLocation: { venue: "Various locations", city: "Across South Africa" },
  },
  {
    id: 4,
    eventDate: "07 December 2024",
    eventTitle: "End-of-Year Gala",
    eventLocation: { venue: "The Table Bay Hotel", city: "Cape Town" },
  },
];

export default function UpcomingEvents() {
  return (
    <section className="section reveal">
      <div className="page-width section-template--22712425382166__main-padding isolate">
        <div className="row">
          <div className="main-blog no-sidebar">
            <div className="blog-template-content-template--22712425382166__main-padding blog-content__area">
              <h1 className="title--primary visually-hidden">Our Events</h1>
              <div className="blog-articles">
                {upcomingEvents.map((item) => (
                  <EventCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
