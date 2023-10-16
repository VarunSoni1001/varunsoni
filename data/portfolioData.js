import { MdWorkHistory, MdWorkOutline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { LiaGraduationCapSolid } from "react-icons/lia";

export const portfolioData = {
  name: "Varun Soni",
  location: "Haryana, India",
  email: "varunsoni1001@gmail.com",
  linkedin: "https://linkedin.com/in/varunsoni1001",
  experiences: [
    {
      title: "Freelance Web Developer",
      company: "GK Jewels",
      date: "Jun 2023 - Present (4 months)",
      description:
        "Collaborated on an e-commerce website project using Next.js, integrating Sanity and Stripe for enhanced functionality.",
      icon: <MdWorkOutline />,
    },
    {
      title: "Freelance Frontend Web Developer",
      company: "Navdeep Jewellers Private Limited",
      date: "Feb 2022 - Present (1 year 8 months)",
      description:
        "Developed a static website using a combination of HTML, CSS, and JavaScript.",
      icon: <MdWorkHistory />,
    },
  ],
  education: [
    {
      school: "GD Goenka University",
      degree: "B.Tech. (Computer Science Engineering)",
      date: "2021 - Present",
      icon: <FaGraduationCap />,
    },
    {
      school: "Delhi Public School",
      degree: "12th, CBSE",
      date: "2020 - 2021",
      icon: <LiaGraduationCapSolid />,
    },
    {
      school: "Delhi Public School",
      degree: "10th, CBSE",
      date: "2018 - 2019",
      icon: <LiaGraduationCapSolid />,
    },
  ],
  certifications: [
    {
      title: "'Basics of JavaScript Programming' Bootcamp - Open Weaver",
      id: "40115968156517",
      img: "knowyourweather_project.png",
    },
    {
      title:
        "Certificate of Participation: Level 1 - E-Commerce & Tech Quiz of the Flipkart GRiD 5.0 - Health+ Track - Unstop",
      id: "0e548fe0-29f4-4e2c-ad9d-86e761e86818",
      img: "portfolio_project.png",
    },
    {
      title:
        "Certificate of Participation: Level 1.1 - E-commerce & Tech Quiz of the Flipkart GRiD 5.0 - Software Development Track - Unstop",
      id: "4412e942-ebe1-458d-b214-21eadbb72cbc",
      img: "todo_project.png",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Responsive Design",
    "React",
    "Java",
    "Data Structures & Algorithms",
    "Framer Motion",
    "Python Basics",
    "Android App Development",
    "GitHub",
    "Nodemailer",
  ],
};
