export interface IEventLocation {
  venue: string;
  city: string;
}

export interface IMenuItem {
  title: string;
  routeLink: string;
  children?: IMenuItem[];
}

export interface IEvent {
  id: number | string;
  eventTitle: string;
  eventDate: string;
  eventLocation: IEventLocation;
  eventDescription?: string;
}

export interface IDimensions {
  height: string | null;
  width: string | null;
}

export interface ISponsorSlide {
  id: string | number;
  name: string;
}

export interface ISocialLinks {
  twitter?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

export interface ITeamMemberSlide {
  id: string | number;
  name: string;
  role: string;
  text: string;
  socials?: ISocialLinks;
}

export interface IEmailJsSettings {
  serviceId: string;
  publicKey: string;
  contactTemplateId: string;
  contactReceiptTemplateId: string;
};

export interface IContactForm {
  name: string;
  phone: string;
  message: string;
  email: string;
}

export interface ISubscriptionForm {
  name: string;
  phone: string;
  message?: string;
  email: string;
}