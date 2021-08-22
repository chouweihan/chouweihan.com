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
  comfy,
  redux,
  airtable,
  mdx,
  gatsbyStrapi,
  strapiBackEnd,
  comfyJS,
  gallery,
  tea,
  backroad,
  portfolio,
  chouweihan,
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
      "Homesafe is a web application to help students find affordable and safe housing. This is a group project where we worked with client.",
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
    name: "Gerg's Beans",
    excerpt:
      "A web application that provides a management and timesheet system to manage employees, projects and work packages. I worked on this app in a group with 11 others.",
    description: [
      "This project is an authentication, management and timesheet system for employees. Employees would be assigned managers, and managers can assign projects to the employees. The projects would have work packages. There are also other features such as a filter and sorting system.",
      "This was done in a group of 11 as a part of a school course. The project spanned multiple weeks, and we emulated a real work enviroment with the professor, who acted as the client. We conducted weekly meetings and presentations, gathering requirements and defining roles for each team member.",
      "My role in the project initially was to gather requirements from the client, I did this alongside the project lead. Later on, I contributed to building the backend, which was done in .NET Core. As part of the backend team, we communicated closely with the frontend team.",
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
      "A frontend React app that features third party APIs and libraries. The app can search up github users and display information in charts.",
    description: [
      "This app uses github's API to grab information about github users. Users can search up github account names, and find information about them. The data is displayed using FusionCharts.",
      "The app also features a simple implementation of Auth0's authentication system as a learning experiment.",
    ],
    categories: ["React", "Auth0", "FusionCharts"],
    type: "personal",
    images: githubUser,
    featured: true,
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
    excerpt:
      "This project is the website you're currently on! Enjoy your stay.",
    description: [
      "This is my very own website, I'm using it as my portfolio and for my own self interests!",
      "This website uses React for frontend. All components and data shown are static. The styling on the website is a mixture of CSS and Styled Components.",
      "The contact section connects to my express backend, which will email me the messages",
    ],
    categories: ["React", "Styled Components", "Javascript"],
    type: "personal",
    images: chouweihan,
    featured: true,
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
      "A simple node express backend app using Nodemailer to send emails from my website.",
    description: [
      "This is a backend written in express. It uses Nodemailer to send emails. There are basic validations implemented. The Nodemailer uses gmail OAUTH to send mails.",
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
      "An Express backend app, that has an authentication system and a basic CRUD api.",
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
    featured: true,
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
      "This is an app where users can draw shapes and modify them on a canvas. It is made with Java and JavaFX.",
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
      "This is a continuation of my chess project. Pieces can now move vertically up and down three boards. Built in Java and JavaFX.",
    description: [
      "This is a continuation of my chess project. Pieces can now move vertically up and down three boards. Built in Java and JavaFX. Pieces still follow chess rules when moving up and down the board.",
    ],
    categories: ["Java", "JavaFX"],
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
      "This is a chess game made to practice object orientated programming. It is built with Java and JavaFX.",
    description: [
      "This is a chess game I made to practice object orientated programming. It is built with Java and JavaFX. Notable feature includes saving of the game state with Serializable class.",
    ],
    categories: ["Java", "JavaFX"],
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
    name: "ParkAway",
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
      "Notable features of this app includes images to word processing and export text to pdf. It also has a text-to-speech function. The pdf, image processing and text-to-speech are all third party APIs",
    ],
    categories: ["HTML", "CSS", "Javascript"],
    type: "group",
    images: dyslexia,
    featured: false,
    year: 2018,
    links: {
      githubLink: "https://github.com/alhg/BCIT-Co-op-Hackathon-Team5",
      hostedLink: "",
    },
  },
  {
    id: 14,
    name: "Comfy Store",
    excerpt:
      "A React web app that reads from a products api and displays it. It uses Auth0 authentication system and stripe as a merchant.",
    description: [
      "Comfy store is a web app built to be like an actual online vendor. It has cart functions, localstorage, authentication and stripe purchases.",
      "The products can also be filtered and sorted. Cart items are stored in localstorage.",
      "Check out the hosted project!",
      "This is the React version of my pure Javascript project",
    ],
    categories: ["React", "CSS", "Auth0", "Stripe"],
    type: "personal",
    images: comfy,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/React/React_Comfy",
      hostedLink: "https://project-react-comfysloth.netlify.app/",
    },
  },
  {
    id: 15,
    name: "React Redux Cart",
    excerpt: "A very simple application made to test React's redux.",
    description: ["A very simple application made to test React's redux"],
    categories: ["React"],
    type: "personal",
    images: redux,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/React/React-redux-cart",
      hostedLink: "https://project-react-redux-cart.netlify.app/",
    },
  },
  {
    id: 16,
    name: "Airtable",
    excerpt:
      "A Gatsby project that connects to Airtable and grabs information and images from Airtable.",
    description: [
      "A Gatsby project that connects to Airtable and grabs information and images from Airtable",
      "This web app mainly created to test out airtable, including writing to the Airtable.",
      "Check out the hosted project!",
    ],
    categories: ["Gatsby", "Airtable"],
    type: "personal",
    images: airtable,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/Gatsby/gatsby-airtable",
      hostedLink: "https://project-gatsby-airtable.netlify.app/",
    },
  },
  {
    id: 17,
    name: "Gatsby MDX blog",
    excerpt: "A Gatsby web application that displays different MDX files.",
    description: [
      "This is a gatsby application that takes MDX files and displays them in a visually appealing manner",
      "The images are rendered using gatsby remark images",
      "Check out the hosted project!",
    ],
    categories: ["Gatsby", "MDX"],
    type: "personal",
    images: mdx,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/Gatsby/gatsby-blog",
      hostedLink: "https://project-gatsby-mdxblog.netlify.app/",
    },
  },
  {
    id: 18,
    name: "Gatsby Strapi",
    excerpt:
      "This is part 1 of a 2 part project for gatsby and strapi. This is the frontend used to display information grabbed from a strapi backend.",
    description: [
      "This is part 1 of a 2 part project for gatsby and strapi. This is the frontend used to display information grabbed from a strapi backend.",
    ],
    categories: ["Gatsby", "Strapi"],
    type: "personal",
    images: gatsbyStrapi,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/Gatsby/gatsby-strapi",
      hostedLink: "https://project-gatsby-portfolio-strapi.netlify.app/",
    },
  },
  {
    id: 19,
    name: "Strapi Back End",
    excerpt: "This is the back end to my Gatsby Strapi project.",
    description: [
      "This is the back end to my Gatsby Strapi project, it has a few simple collections used to store images and information.",
    ],
    categories: ["Strapi"],
    type: "personal",
    images: strapiBackEnd,
    featured: false,
    year: 2021,
    links: {
      githubLink: "https://github.com/chouweihan/strapi-backend",
      hostedLink: "",
    },
  },
  {
    id: 20,
    name: "Comfy Store (JS)",
    excerpt:
      "This is the Javascript version of my comfy project. It grabs products api and displays it like an actual store vendor site.",
    description: [
      "This is the Javascript version of my comfy project. It grabs products api and displays it like an actual store vendor site.",
      "The app has basic filter and sorting features for products, and a functional cart sidebar.",
    ],
    categories: ["Javascript"],
    type: "personal",
    images: comfyJS,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/Javascript/JS_Comfy_Store",
      hostedLink: "https://project-javascript-comfystore.netlify.app",
    },
  },
  {
    id: 21,
    name: "Javascript Gallery",
    excerpt:
      "This is a javascript project to dispaly a gallery of images. It includes a Modal when clicking on images.",
    description: [
      "This is a javascript project to dispaly a gallery of images. It includes a Modal when clicking on images.",
    ],
    categories: ["Javascript"],
    type: "personal",
    images: gallery,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/Javascript/JS_Gallery",
      hostedLink: "https://project-javascript-gallery.netlify.app/",
    },
  },
  {
    id: 22,
    name: "Backroad",
    excerpt: "This is a pure HTML and CSS project used to practice flexbox!",
    description: [
      "This is pure a HTML and CSS project used to practice flexbox!",
      "Check it the hosted project!",
    ],
    categories: ["HTML", "CSS"],
    type: "personal",
    images: backroad,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/HTML_CSS/Backroad",
      hostedLink: "https://project-htmlcss-backroad.netlify.app",
    },
  },
  {
    id: 23,
    name: "Portfolio",
    excerpt:
      "This is pure a HTML and CSS project used to practice display Grid!",
    description: [
      "This is pure a HTML and CSS project used to practice display Grid!",
      "Check it the hosted project!",
    ],
    categories: ["HTML", "CSS"],
    type: "personal",
    images: portfolio,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/HTML_CSS/Portfolio",
      hostedLink: "https://project-htmlcss-portfolio.netlify.app/",
    },
  },
  {
    id: 24,
    name: "Tea Station",
    excerpt:
      "This is a pure HTML and CSS project to practice styling and floats.",
    description: [
      "This is a pure HTML and CSS project to practice styling and floats",
      "Check it the hosted project!",
    ],
    categories: ["HTML", "CSS"],
    type: "personal",
    images: tea,
    featured: false,
    year: 2021,
    links: {
      githubLink:
        "https://github.com/chouweihan/LearningProjects/tree/main/HTML_CSS/Tea",
      hostedLink: "https://project-htmlcss-tea.netlify.app/",
    },
  },
];
