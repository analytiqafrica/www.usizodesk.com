import { Close } from "./close";
import { Facebook } from "./facebook";
import { Instagram } from "./instagram";
import { Hamburger } from "./hamburger";
import { Twitter } from "./twitter";
import { YouTube } from "./youtube";
import { User } from "./user";

interface ISvgProps {
  name: string;
}
export default function Svg({ name }: Readonly<ISvgProps>) {
  switch (name) {
    case "x":
    case "close":
      return <Close />;
    case "hamburger":
      return <Hamburger />;
    case "twitter":
      return <Twitter />;
    case "facebook":
      return <Facebook />;
    case "instagram":
      return <Instagram />;
    case "youtube":
      return <YouTube />;
    case "user":
      return <User />;
    default:
      return <div />;
  }
}
