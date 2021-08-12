import { AiFillGithub, AiFillLinkedin, AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMailSharp, IoFolderSharp } from "react-icons/io5";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    text: "about",
    url: "/about",
    icon: <BsFillPersonFill />,
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
    icon: <IoFolderSharp />,
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
    icon: <IoMailSharp />,
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
