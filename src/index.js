import web1 from './assets/web1.webp'
import web2 from './assets/web2.webp'
import web3 from './assets/web3.webp'
import web4 from './assets/web4.webp'

const Navlinks = [
  {
    name: "HOME",
    id: 1,
    active: true,
  },
  {
    name: "ABOUT",
    id: 2,
  },
  {
    name: "SERVICES",
    id: 3,
  },
  {
    name: "PORTFOLIO",
    id: 4,
  },
  {
    name: "PAGES",
    id: 5,
  },
  {
    name: "BLOG",
    id: 6,
  },
  {
    name: "CONTACT",
    id: 7,
  },
];

const Abouts = {
  h3: `LET'S INTRODUCE ABOUT MYSELF`,
  about1: `I  am a skilled frontend developer and freelancer
   who brings projects to life with expertise in JavaScript, React, and Tailwind
    CSS`,
  about2: `I crafts visually appealing 
    and functional web applications.My dedication to clean code and seamless user experiences extends
     to using Framer Motion like libraries for smooth animations.`,
  about3: `Passionate about transforming Figma designs into responsive websites,
      i values minimalistic, efficient solutions that maintain project integrity. With a knack for solving complex problems,
       i delivers quality
   results in web development while continuously expanding his skill set`,
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



export { Navlinks, Abouts , services ,servicemessage};
