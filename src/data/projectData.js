import { spendAway, gerg } from "./images";

export const projects = [
  {
    id: 1,
    name: "SpendAway",
    excerpt:
      "Fun little android app to help users keep track of their purchases. I made it using Android Studio, Kotlin and Java!",
    description: [
      "This is an android app that I made after taking an android app development course. I like to record all my purchases, including price, location and item. So I was inspired to make this app for myself, since I always just use a plain note to do so.",
      "Users can store their purchases as entries into this app, along with a picture. The entries can also be exported into pdf.",
      "This app is made using Kotlin and some Java in Android Studio. The app also utilizes firebase's authentication system and realtime database. This one of my favorite apps to make because I really enjoyed building and playing around in the android enviroment. I also enjoyed testing out Kotlin, some parts of the language is really amazing.",
    ],
    categories: ["android studio", "java", "kotlin", "firebase"],
    type: "personal",
    images: spendAway,
    featured: true,
    year: 2019,
    links: {
      githubLink: "https://github.com/chouweihan/SpendAway",
      hostedLink: "",
    },
  },
  {
    id: 2,
    name: "HomeSafe",
    excerpt:
      "Homesafe is a web application to help students find affordable and safe housing. This is a group project where we worked with a real client",
    description: "",
    categories: [],
    type: "group",
    images: [],
    featured: true,
    year: 2020,
    links: {
      githubLink: "",
      hostedLink: "",
    },
  },
  {
    id: 3,
    name: "Gerg's Beans Management",
    excerpt:
      "A web application that provides a management and timesheet system to manage employees, projects and work packages. Made this app in a group with 12 others.",
    description: "",
    categories: [
      "This was a big project that was part of a school course. Our professor acted as the client. This project is an authentication, management and timesheet system for employees. Employees would be assigned managers, and managers can assign projects to the employees. The projects would have work packages. There are also other features such as an filter and sorting system.",
      "This was done in a group of 12 as a part of a school course. The project spanned multiple weeks, and we emulated a real work enviroment. Conducting weekly meetings and presentations with the client, gathering requirements and defining roles for each team member.",
      "My role in the project initially was to gather requirements with the client, I did this alongside the project lead. Later on, I contributed to building the backend, which was done in dotNET Core. As part of the backend team, we communicated closely with the frontend team.",
    ],
    type: "group",
    images: gerg,
    featured: true,
    year: 2020,
    links: {
      githubLink: "https://github.com/aiyuni/COMP4911WebApi",
      hostedLink: "",
    },
  },
];
