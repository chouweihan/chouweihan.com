import { spendAway01, spendAway02 } from "./images";

export const projects = [
  {
    id: 1,
    name: "SpendAway",
    excerpt: "Fun little android app to help you keep track of your purchases.",
    description: "",
    categories: ["android studio", "java", "kotlin", "firebase"],
    type: "personal",
    images: [spendAway01, spendAway02],
    featured: true,
    year: 2019,
    links: {
      githubLink: "https://github.com/chouweihan/SpendAway",
      hostedLink: "",
    },
  },
  {
    id: 2,
    name: "",
    excerpt: "",
    description: "",
    categories: [],
    type: "group",
    images: [],
    featured: false,
    year: 2018,
    links: {
      githubLink: "",
      hostedLink: "",
    },
  },
  {
    id: 3,
    name: "",
    excerpt: "",
    description: "",
    categories: [],
    type: "learning",
    images: [],
    featured: false,
    year: 2018,
    links: {
      githubLink: "",
      hostedLink: "",
    },
  },
];
