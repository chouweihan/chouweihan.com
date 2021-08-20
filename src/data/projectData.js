import {
  spendAway,
  gerg,
  githubUser,
  nodemailer,
  jobauth,
  homesafe,
  osce,
  canvas,
  chess3d,
  chess01,
  dyslexia,
  parkaway,
} from "./projectImages";

export const projects = [
  {
    id: 1,
    name: "SpendAway",
    excerpt:
      "Fun little android app to help users keep track of their purchases. I made it using Android Studio, Kotlin and Java!",
    description: [
      "I like to record all my purchases, including price, location and item. So I was inspired to make this app for myself.",
      "Users can store their purchases as entries into this app, along with a picture. The entries can also be exported into pdf.",
      "This app is made using Kotlin and some Java in Android Studio. The app also utilizes firebase's authentication system and realtime database. This one of my favorite apps to make because I really enjoyed building and playing around in the android enviroment.",
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
    description: [
      "Homesafe is a web application to help students find affordable and safe housing. I worked in a group of 5 with a real client",
      "We conducted weekly meetings with the client, documented all the work, and created manuals.",
      "In this project, I mainly worked on the third parties APIs and frontend React parts. I implemented the Mapbox component and a proof of concept Stripe component.",
    ],
    categories: [
      "React",
      ".NET Core",
      "Mapbox",
      "Azure",
      "Stripe",
      "Javascript",
    ],
    type: "group",
    images: homesafe,
    featured: true,
    year: 2020,
    links: {
      githubLink: "https://github.com/lucahsieh/HomeSafeFrontend",
      hostedLink: "",
    },
  },
  {
    id: 3,
    name: "Gerg's Beans Management",
    excerpt:
      "A web application that provides a management and timesheet system to manage employees, projects and work packages. I worked on this app in a group with 12 others.",
    description: [
      "This project is an authentication, management and timesheet system for employees. Employees would be assigned managers, and managers can assign projects to the employees. The projects would have work packages. There are also other features such as an filter and sorting system.",
      "This was done in a group of 12 as a part of a school course. The project spanned multiple weeks, and we emulated a real work enviroment with the professor acting as the client. We conducted weekly meetings and presentations with the client, gathering requirements and defining roles for each team member.",
      "My role in the project initially was to gather requirements with the client, I did this alongside the project lead. Later on, I contributed to building the backend, which was done in .NET Core. As part of the backend team, we communicated closely with the frontend team.",
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
      "This is a node backend written with express. It uses Nodemailer to send emails. There are basic validations implemented. The Nodemailer uses gmail OAUTH to send mails.",
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
      "This app contains custom error handling, routes and controllers. It uses MongoDB for database storage.",
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
  {
    id: 8,
    name: "BCIT OSCE",
    excerpt:
      "This is an examination app that will be used by BCIT's nursing department. We inherited this project and continued it's development.",
    description: [
      "In a team of 4, we recieved a project that has already been previously worked on. The client is from BCIT's nursing department and wishes us to continue the development of an app that will used for examinations.",
      "This app has a vue frontend, express backend and SQL database.",
      "We worked on reorganizing the data, adding functionality the frontend, and configuring the backend for it to work. I also added user manuals and dev guides.",
      "We met with the client weekly, to establish requirements, scopes and give the client progress updates.",
    ],
    categories: ["Vue", "Node", "Express", "mySQL"],
    type: "group",
    images: osce,
    featured: false,
    year: 2020,
    links: {
      githubLink: "",
      hostedLink: "",
    },
  },
  {
    id: 9,
    name: "Canvas Shapes",
    excerpt:
      "This is an app where users can draw shapes and modify them on a canvas. It is made with Java and JavaFX",
    description: [
      "This is an app where users can draw shapes and modify them on a canvas. It is made with Java and JavaFX",
      "Users can choose between 4 different shapes, and a variety of different colors. Users can also select them and rearrange them. The most recent shape will be on top.",
      "This project was made to practice object orientated programming",
    ],
    categories: ["Java", "JavaFX"],
    type: "personal",
    images: canvas,
    featured: false,
    year: 2019,
    links: {
      githubLink: "https://github.com/chouweihan/CanvasShapes",
      hostedLink: "",
    },
  },

  {
    id: 10,
    name: "Chess3D",
    excerpt:
      "This is a continuation of my chess project. Pieces can now move vertically up and down three boards. Built in Java and JavaFX",
    description: [
      "This is a continuation of my chess project. Pieces can now move vertically up and down three boards. Built in Java and JavaFX. Pieces still follow chess rules when moving up and down the board.",
    ],
    categories: [],
    type: "personal",
    images: chess3d,
    featured: false,
    year: 2019,
    links: {
      githubLink: "https://github.com/chouweihan/ChessGame3D",
      hostedLink: "",
    },
  },
  {
    id: 11,
    name: "Chess",
    excerpt:
      "This is a chess game made to practice object orientated programming. It is built with Java and JavaFX",
    description: [
      "This is a chess game I made to practice object orientated programming. It is built with Java and JavaFX. Notable feature includes saving of the game state with Serializable class.",
    ],
    categories: [],
    type: "personal",
    images: chess01,
    featured: false,
    year: 2019,
    links: {
      githubLink: "https://github.com/chouweihan/chessGame01",
      hostedLink: "",
    },
  },
  {
    id: 12,
    name: "ParkAway ",
    excerpt:
      "ParkAway is a web application that lets users indicate parking spot availability at BCIT. This project was made in a group of 5.",
    description: [
      "ParkAway is meant to be a crowd sourced application that users will provide information of where they parked, so that other users can see if there are parking spots avaliable.",
      "This project was made in a group of 5, using vanilla HTML and Javascript, as well as Firebase's authentication and real time database systems.",
      "There are parking lots on BCIT, where users will let the app know they parked there. A map would be displayed to show availability of parking spots. Depending on the vacancy, different colors will be displayed on the map.",
    ],
    categories: ["HTML", "CSS", "Javascript", "Firebase", "Google Maps"],
    type: "group",
    images: parkaway,
    featured: false,
    year: 2019,
    links: {
      githubLink: "https://github.com/chouweihan/TEAM-07-COMP-2930",
      hostedLink: "",
    },
  },
  {
    id: 13,
    name: "Dsylexia Font Converter",
    excerpt:
      "This is a project I made at a hackathon to help people with dyslexia read better, by changing fonts and documents into dyslexic friendly fonts.",
    description: [
      "This is a web app made at a hackathon with 4 other people. We decided to build an app that changes images, documents and text into dyslexic friendly fonts.",
      "Notable features of this app includes images to word processing and export text to pdf",
    ],
    categories: ["HTML", "CSS", "Javascript"],
    type: "personal",
    images: dyslexia,
    featured: false,
    year: 2018,
    links: {
      githubLink: "https://github.com/alhg/BCIT-Co-op-Hackathon-Team5",
      hostedLink: "",
    },
  },
];

const template = [
  {
    id: 13,
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
