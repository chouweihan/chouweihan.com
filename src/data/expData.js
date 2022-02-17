import bcit1 from "../assets/experience/bcit1.jpg";
import bcit2 from "../assets/experience/bcit2.png";
import wow1 from "../assets/experience/wow1.jpg";
import wow2 from "../assets/experience/wow2.png";
import synic01 from "../assets/experience/synic01.jpg";
import synic02 from "../assets/experience/synic02.png";

export const expData = [
  {
    id: 1,
    name: "Synic Software Inc.",
    title: "Full Stack Developer",
    excerpt:
      "I am currently working at Synic Software as a full stack developer. Outside of the projects which I am soley responsible for, I help out whichever teams needs the extra assistance.",
    description: [
      "I have built and contributed to multiple projects. During my time at Synic, I have used a variety of technology including React, Angular, Liquid Shopify, MVC, dotnet EF and more!",
      "I am responsible for building and maintaining the marketing team's website. It was my first project at Synic, and I learned to implement SEO, Google Analytics and CRM services.",
      "I am also responsible for building and maintaing a shopify website built from Liquid template language."
    ],
    images: [synic01, synic02],
    type: "work",
    year: "2021-present",
  },
  {
    id: 2,
    name: "BCIT",
    title: "Computer Systems Technology (CST)",
    excerpt:
      "I graduated with honors from British Columbia Institute of Technology's CST program. At BCIT, I learned algorithms, design, database, frontend and backend technologies.",
    description: [
      "In this program, I worked alongside others in team project, producing many different apps. I learned a variety of coding languages across technologies.",
      "BCIT has taught me to work under pressure, and how to learn new information and  technologies quickly. Most importantly, I developed the skills to stay organized and well documented in a team enviroment.",
    ],
    images: [bcit1, bcit2],
    type: "Education",
    year: "2018-2020",
  },
  {
    id: 3,
    name: "Wow! Mobile Boutique",
    title: "Sales Associate",
    excerpt:
      "At Wow! I helped customers find unique solutions to their mobile needs. My responsibilities included opening/closing the store, troubleshooting problems for customers, counting inventory, and finding the right mobile solution for them.",
    description: [
      "My biggest learning outcomes from working at Wow! is how to ask the right questions and how to communicate with customers. It is important that I find out all the crucial information from my customer.",
      "My most memorable learning moment here was when my manager asked me:",
      " \"Is it the customers fault that they didn't tell you..? or is it your fault you didn't ask?\"",
    ],
    images: [wow1, wow2],
    type: "work",
    year: "2017-2018",
  },
];
