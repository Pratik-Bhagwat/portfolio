import reactSVG from "./assets/svgs/LogosReact.svg";
import gitSVG from "./assets/svgs/LogosGit.svg";
import javaSVG from "./assets/svgs/LogosJava.svg";
import javascriptSVG from "./assets/svgs/LogosJavascript.svg";
import mysqlSVG from "./assets/svgs/LogosMysql.svg";
import reduxSVG from "./assets/svgs/LogosRedux.svg";
import tailwindSVG from "./assets/svgs/LogosTailwindcssIcon.svg";
import typescriptSVG from "./assets/svgs/LogosTypescriptIcon.svg";
import htmlSVG from "./assets/svgs/LogosHtml5.svg";
import cssSVG from "./assets/svgs/LogosCss3.svg";
import nodejsSVG from "./assets/svgs/LogosNodejsIcon.svg";
import mongoDbSVG from "./assets/svgs/LogosMongodbIcon.svg";
import socketioSVG from "./assets/svgs/LogosSocketIo.svg";
import appwriteSVG from "./assets/svgs/LogosAppwriteIcon.svg";
import stripeSVG from "./assets/svgs/LogosStripe.svg";
import nextjsSVG from "./assets/svgs/LogosNextjsIcon.svg";

import messenger3 from "./assets/project-images/message 3.png";
import messenger1 from "./assets/project-images/messenger 1.png";
import messenger2 from "./assets/project-images/messenger 2.png";
import shoestore1 from "./assets/project-images/shoe-store 1.png";
import shoestore2 from "./assets/project-images/shoe-store 2.png";
import shoestore3 from "./assets/project-images/shoe-store 3.png";
import portfolio from "./assets/project-images/portfolio.png";

const navItems = [
  {
    id: 1,
    item: "Home",
    href: "#home",
  },
  {
    id: 2,
    item: "About us",
    href: "#about",
  },
  {
    id: 3,
    item: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    item: "Skills",
    href: "#skills",
  },
  {
    id: 5,
    item: "Contact us",
    href: "#contact",
  },
];

const skillsList = [
  {
    id: 1,
    skill: "ReactJs",
    icon: reactSVG,
  },
  {
    id: 2,
    skill: "TypeScript",
    icon: typescriptSVG,
  },
  {
    id: 3,
    skill: "JavaScript",
    icon: javascriptSVG,
  },
  {
    id: 4,
    skill: "Tailwind css",
    icon: tailwindSVG,
  },
  {
    id: 5,
    skill: "Redux",
    icon: reduxSVG,
  },
  {
    id: 6,
    skill: "Git",
    icon: gitSVG,
  },
  {
    id: 7,
    skill: "HTML",
    icon: htmlSVG,
  },
  {
    id: 8,
    skill: "CSS",
    icon: cssSVG,
  },
  {
    id: 9,
    skill: "MySQL",
    icon: mysqlSVG,
  },
  {
    id: 10,
    skill: "Java",
    icon: javaSVG,
  },
];

const whatIDoList = [
  {
    id: 1,
    task: "Crafting",
  },
  {
    id: 2,
    task: "interactive",
  },
  {
    id: 3,
    task: "user experience",
  },
  {
    id: 4,
    task: "designs",
  },
];

const projectList = [
  {
    id: 1,
    name: "Messenger",
    description:
      "Seamlessly chat and create group conversations with our real-time messenger. Leveraging React.js, TypeScript, Node.js, and MongoDB, it offers a robust platform powered by Socket.io for live interactions.",
    thumbnail: messenger1,
    images: [messenger1, messenger2, messenger3],
    techstacks: [
      {
        id: 1,
        name: "React Js",
        image: reactSVG,
      },
      {
        id: 2,
        name: "TypeScript",
        image: typescriptSVG,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        image: tailwindSVG,
      },
      {
        id: 4,
        name: "Node JS",
        image: nodejsSVG,
      },
      {
        id: 5,
        name: "MongoDB",
        image: mongoDbSVG,
      },
      {
        id: 6,
        name: "Socket io",
        image: socketioSVG,
      },
    ],
    completed: false,
    URL: "",
    videoURL:
      "https://res.cloudinary.com/dtvux1tgv/video/upload/v1711428603/dvdsl88fwyi03kvlj5jb.mp4",
  },
  {
    id: 2,
    name: "WalkInStyle Shoe Store",
    description:
      "Step into style with our online shoe store. Utilizing React.js, TypeScript, and Appwrite backend, we offer a seamless shopping experience. Secure payments are made easy with Stripe.",
    thumbnail: shoestore1,
    images: [shoestore1, shoestore2, shoestore3],
    techstacks: [
      {
        id: 1,
        name: "React Js",
        image: reactSVG,
      },
      {
        id: 2,
        name: "TypeScript",
        image: typescriptSVG,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        image: tailwindSVG,
      },
      {
        id: 4,
        name: "Appwrite",
        image: appwriteSVG,
      },
      {
        id: 5,
        name: "Stripe",
        image: stripeSVG,
      },
    ],
    completed: true,
    URL: "https://walk-in-style-store.vercel.app/",
    videoURL:
      "https://res.cloudinary.com/dtvux1tgv/video/upload/v1711427597/bbgdsig6f6icfhiu6jto.mp4",
  },
  {
    id: 3,
    name: "Portfolio",
    description:
      "Experience the seamless blend of creativity and technology in this portfolio, crafted with React and Next.js for robust functionality, and styled with Tailwind CSS for a sleek, modern aesthetic. Dive into a world where poetry meets digital artistry.",
    thumbnail: portfolio,
    images: [],
    techstacks: [
      {
        id: 1,
        name: "Next Js",
        image: nextjsSVG,
      },
      {
        id: 2,
        name: "React Js",
        image: reactSVG,
      },
      {
        id: 3,
        name: "TypeScript",
        image: typescriptSVG,
      },
      {
        id: 4,
        name: "Tailwind CSS",
        image: tailwindSVG,
      },
    ],
    completed: true,
    URL: "https://portfolio-umber-seven.vercel.app/",
    videoURL:
      "https://res.cloudinary.com/dtvux1tgv/video/upload/v1711437254/x2sn9px63chwf84vmi1e.mp4",
  },
];

export { navItems, skillsList, whatIDoList, projectList };
