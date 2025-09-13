import { IEvent } from "@/app/types";
import EventCard from "./EventCard";

const upcomingEvents: IEvent[] = [
  {
    id: 1,
    eventDate: "08 March 2024",
    eventTitle: "International Women's Day Celebration",
    eventLocation: { venue: "Sandton Convention Centre", city: "Johannesburg"},
  },
  {
    id: 2,
    eventDate: "15 August 2024",
    eventTitle: "Annual Women’s Empowerment Conference",
    eventLocation: { venue: "Durban Raddisson Hotel", city: "Durban"},
  },
  {
    id: 3,
    eventDate: "28 September 2024",
    eventTitle: "Community Involvement Day",
    eventLocation: { venue: "Various locations", city: "Across South Africa"},
  },
  {
    id: 4,
    eventDate: "07 December 2024",
    eventTitle: "End-of-Year Gala",
    eventLocation: { venue: "The Table Bay Hotel", city: "Cape Town"},
  },
];

export default function UpcomingEvents() {
  return (
    <section className="section featured-blog reveal">
      <div className="blog color-background-1 gradient no-heading">
        <div className="page-width section-template--22712425840918__2316f5a1-33e7-4784-953e-658b8347dee0-padding isolate">
          <div className="row">
            <div>
              <div className="title-wrapper-with-link title-wrapper--self-padded-tablet-down title-wrapper--no-top-margin content-align--left">
                <h6 className="sub-heading">Calendar</h6>
                <h2 className="title h1">Upcoming Events</h2>
              </div>
              <div className="slider-component slider-mobile-gutter">
                <div className="blog__posts articles-wrapper contains-card contains-card--article grid grid--peek grid--1-col-tablet-down grid--3-col-desktop">
                  {upcomingEvents.map((item: IEvent) => (
                    <EventCard key={item.id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
