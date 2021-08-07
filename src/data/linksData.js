import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
  },
  {
    id: 4,
    text: "contact",
    url: "contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "github",
    icon: <AiFillGithub />,
    url: "https://github.com/chouweihan",
  },
  {
    id: 2,
    name: "linkedin",
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/chouweihan/",
  },
];
