import { spendAway, gerg, githubUser, nodemailer, jobauth } from "./images";

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
    categories: ["Android Studio", "Java", "Kotlin", "Firebase"],
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
    description: [
      "This was a big project that was part of a school course. Our professor acted as the client. This project is an authentication, management and timesheet system for employees. Employees would be assigned managers, and managers can assign projects to the employees. The projects would have work packages. There are also other features such as an filter and sorting system.",
      "This was done in a group of 12 as a part of a school course. The project spanned multiple weeks, and we emulated a real work enviroment. Conducting weekly meetings and presentations with the client, gathering requirements and defining roles for each team member.",
      "My role in the project initially was to gather requirements with the client, I did this alongside the project lead. Later on, I contributed to building the backend, which was done in dotNET Core. As part of the backend team, we communicated closely with the frontend team.",
    ],
    categories: [".NET Core", "MSSQL", "Azure", "Swagger", "Angular"],
    type: "group",
    images: gerg,
    featured: true,
    year: 2020,
    links: {
      githubLink: "https://github.com/aiyuni/COMP4911WebApi",
      hostedLink: "",
    },
  },
  {
    id: 4,
    name: "Github Users",
    excerpt:
      "A frontend React app that features third party APIs and libraries. The app can search up github users and display information in charts",
    description: [
      "This app uses github's API to grab information about github users. Users can search up github account names, and find information about them. The data is displayed using FusionCharts.",
      "The app also features a simple implementation of Auth0's authentication system as a learning experiment.",
    ],
    categories: ["React", "Auth0", "FusionCharts"],
    type: "personal",
    images: githubUser,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/React/React_github_users",
      hostedLink: "https://project-react-github-users.netlify.app/",
    },
  },
  {
    id: 5,
    name: "Chou Weihan",
    excerpt: "This is project is the website you're currently on!",
    description: [
      "This is my very own website, I'm using it as my portfolio and for my own self interests!",
      "This website uses React for frontend. All components and data shown are static. The styling on the website is a mixture of CSS and Styled Components.",
      "The contact section connects to my express backend, which will email me the messages",
    ],
    categories: ["React", "Styled Components", "Javascript"],
    type: "personal",
    images: null,
    featured: false,
    year: 2021,
    links: {
      githubLink: "https://github.com/chouweihan/chouweihan.com",
      hostedLink: "https://www.chouweihan.com",
    },
  },
  {
    id: 6,
    name: "Node Mailer",
    excerpt:
      "A simple node express backend app using Nodemailer to send emails from my website",
    description: [
      "This is a node backend written with express. It uses Nodemailer to send emails.There are basic validations implemented. The Nodemailer uses gmail OAUTH to send mails.",
      "Feel free to try it out in my Contact section!",
    ],
    categories: ["Express", "Node", "Javascript"],
    type: "personal",
    images: nodemailer,
    featured: false,
    year: 2021,
    links: {
      githubLink: "https://github.com/chouweihan/simple-nodemailer",
      hostedLink: "",
    },
  },
  {
    id: 7,
    name: "Jobs-Authentication",
    excerpt:
      "An Express backend app, that has an authentication system and a basic CRUD api",
    description: [
      "This express app allows user to create accounts and login. The password is hashed with Bcrypt, Users can then login with the created account, recieve a JWToken and used the CRUD functions of the app.",
      "This app contains custom error handling, splits up the app into routes and controllers. It also uses MongoDB for database storage.",
      "Try out this app with Swagger!",
    ],
    categories: [
      "Express",
      "Node",
      "Bcrypt",
      "JSON Web Token",
      "MongoDB",
      "Swagger",
    ],
    type: "personal",
    images: jobauth,
    featured: false,
    year: 2021,
    links: {
      githubLink: "https://github.com/chouweihan/express-job-auth",
      hostedLink: "https://express-job-auth.herokuapp.com/swagger/",
    },
  },
];

const template = [
  {
    id: 5,
    name: "",
    excerpt: "",
    description: [],
    categories: [],
    type: "personal",
    images: null,
    featured: false,
    year: 2021,
    links: {
      githubLink: "",
      hostedLink: "",
    },
  },
];
