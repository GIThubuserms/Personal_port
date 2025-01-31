import web1 from './assets/web1.webp'
import web2 from './assets/web2.webp'
import web3 from './assets/web3.webp'
import web4 from './assets/web4.webp'
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.jpeg'
import project4 from './assets/project4.jpeg'
import client1 from './assets/client1.webp'
import client2 from './assets/client2.webp'
import Murtazadeep from './assets/Murtazadeep.png'

const Navlinks = [
  {
    name:"HOME",
    id: 1,
    active: true,
    path:""
  },
  {
    name:"ABOUT",
    id: 2,
    path:"/about"
  },
  {
    name:"TECHSTACK",
    id: 3,
    path:"/Techstack"
  },
  {
    name:"SERVICES",
    id: 4,
    path:"/services"
  },
  {
    name:"PROJECTS",
    id: 5,
    path:"/portfolio"
  },
  {
    name:"FEEDBACKS",
    id: 6,
    path:"/feedback"
  },
  {
    name:"CONTACT",
    id: 7,
    path:"/contact"
  },
];

const Abouts = {
  h3: `LET'S INTRODUCE ABOUT MYSELF`,
  about1: `I am a skilled MERN stack developer and freelancer, bringing projects to life with expertise in JavaScript, React, Node.js, Express, MongoDB, and Tailwind CSS.`,
  about2: `I specialize in crafting full-stack web applications that are both visually appealing and highly functional. My dedication to clean code and seamless user experiences and efficient client-side interactions.`,
  about3: `Passionate about transforming Figma designs into responsive websites, I also excel at building robust APIs and handling backend logic. I deliver quality results in full-stack development while continuously expanding my skill set.`,
};


const servicemessage={
  tittle:'Service Offers',
  disp:'I craft digital experiences with precision, bringing together creativity and technology. From design to development, I build solutions that connect and inspire, guiding your vision to reality in every detail'
}

const services = [
  {
    Title: "Frontend Development",
    img: web4,
    Description:
      "Building visually appealing and interactive user interfaces using modern technologies like React and Tailwind CSS. We ensure your website is responsive, fast, and delivers a seamless experience across all devices",
  },
  {
    Title: "Backend Development",
    img: web2,
    Description:
      "Developing robust and scalable server-side solutions to support your web applications. Our backend services include API development, database management, and ensuring data security and performance",
  },
  {
    Title: "Full Stack Development",
    img: web1,
    Description:
      "Offering complete web development services, from frontend to backend. We build fully functional applications that integrate user-friendly interfaces with powerful server-side capabilities for a comprehensive solution",
  },
  {
    Title: "Web Designing",
    img: web3,
    Description:
      "Crafting visually stunning and user-focused designs that captivate your audience. Our web design services prioritize aesthetics, user experience, and accessibility to create websites that leave a lasting impression",
  },
];

const projectsmessage={
  disp:"quality work Recently done project"
}

const projects=[
  {
    img:project1,
    link:'https://ecommerce-ms.vercel.app/',
   title:'MS Ecommerce',
   disp:'Animated,Landing page'
  },
  {
    img:project2,
    link:'https://resturant-ms.vercel.app/',
    title:'Restuarant Web',
   disp:'Animated,Landing page'
  },
  {
    img:project3,
    link:'https://expensetracker57.vercel.app/',
   title:'Expense Tracker',
   disp:'Animated,Landing page'
  },
  {
    img:project4,
    link:'https://movie-app-zeta-steel.vercel.app/',
    title:'Movie Web',
    disp:'Animated,Landing page'
   }
]

const Clientmessage={
  disp:'client say about me',
  message:"I’m grateful for the positive feedback from my clients. Here are a few words from those I've worked with sharing their experiences and results"
}

const Client=[
  {
    name:"DAVIL SADEN",
    img:client1,
    disp:"Working with Murtaza has been an absolute pleasure. His attention to detail and commitment to delivering high-quality work exceeded my expectations."
  },
  {
    name:"ELITE MARTIN",
    img:client2,
    disp:"Murtaza’s expertise in frontend development helped our project go live smoothly and on time. His ability to solve problems and communicate effectively made the entire process seamless. Highly recommended!"
  }
]
const contact={
  h1:"FEEL FREE TO REACH OUT",
  disp:"From design to development, I build solutions that connect and inspire, guiding your vision to reality in every detail",
}


const fotter={
logo:Murtazadeep,
tittle:"FOLLOW ME :)",
disp1:"Copyright ©2024 All rights reserved",
disp2:"--MS--"
}

export { Navlinks, Abouts , services ,servicemessage, projectsmessage,projects,Client,Clientmessage,contact,fotter};
