import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a passionate full-stack developer with a knack for crafting robust and scalable web applications. I've worked on various projects, honing my skills in front-end technologies like React, HTML, CSS, JavaScript, and Material UI, as well as back-end technologies like Django, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I've worked on various projects and honed my skills in front-end technologies like React, HTML, CSS, JavaScript, and Material UI, as well as back-end technologies like Django and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2023 - August 2023",
    role: "Web Developer Intern",
    company: "Anub Furniture LTD",
    description: `Contributed to the development of web applications using Python, Django and Front-End Technologies. Managed databases and implemented data storage solutions using Sqlite. Collaborated and worked closely with stakeholders to define project requirements, prioritize features and enhancements.`,
    technologies: ["Python", "Django", "HTML", "CSS", "Javascript"],
  },
  {
    year: "January 2022 - January 2022",
    role: "Cyber Security Intern",
    company: "TeleNetworks Technologies Private Limited",
    description: `Learned about protecting digital ecosystems, threat analysis, vulnerability assessment, and security solutions. Contributed to safeguarding critical infrastructure by identifying and mitigating security risks, and developed a passion for ensuring a secure digital future.`,
    technologies: ["CyberSecurity"],
  },
];

export const PROJECTS = [
  {
    title: " Weather Forecasting Website",
    image: project1,
    description:
      "A fully functional website where users can check the weather in real time using API and IoT methods. It also features machine learning for forecasting weather predictions.",
    technologies: ["HTML", "CSS", "JavaScript", "IoT", "Machine-Learning"],
    githubLink:"https://github.com/ASP124/Weather-Forecasting-ML-IoT-Project",
  },
  {
    title: "AnubFurniture Website",
    image: project2,
    description:
      "An e-commerce platform where users can browse products, view new arrivals, and inquire about items through a 'Contact Us' page. Inquiries are promptly addressed.",
    technologies: ["HTML", "CSS", "Python", "Django", "Sqlite"],
    githubLink:"https://github.com/ASP124/AnubFurniture",
  },
  {
    title: "EduConnect - A Student Support Website",
    image: project3,
    description:
      "A platform for teachers and students to connect. Teachers can upload study materials, and students can mark their attendance and access resources for aptitude preparation for top companies.",
    technologies: ["HTML", "CSS", "MERN Stack", "MUI", "MongoDB"],
    githubLink:"https://github.com/ASP124/EduConnect",
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  Ldn: "Linkedln",
  Git: "Github",
  Email: "phullsinghamarjot@gmail.com",
};
