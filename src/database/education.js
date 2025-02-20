let edNum = 0;
let certNum = 0;

export const schools = [
  {
    id: (edNum += 1),
    school: "Mission College",
    study: "Associate of Science - Computer Information Systems",
    schoolImg:
      "https://jeffreyleeportfolio.s3.us-west-1.amazonaws.com/mission+college.png",
    location: "Santa Clara, CA USA",
    duration: "01/2017 - 08/2024",
    description:
      "Completed Associate level study of Computer Information Systems",
    achievements: [
      "Learned Software development using C/C++, Java, and Python.",
      "Developed skills in Data Structures and Algorithms using Java.",
      "Gained understanding of Computing for Engineers.",
    ],
  },
  {
    id: (edNum += 1),
    school: "Mission College",
    study: "Associate of Arts - Liberal Arts: Natural Sciences and Mathematics",
    schoolImg:
      "https://jeffreyleeportfolio.s3.us-west-1.amazonaws.com/mission+college.png",
    location: "Santa Clara, CA USA",
    duration: "01/2017 - 08/2024",
    description:
      "Completed Associate level study of Physical Sciences and high level Mathematics. ",
    achievements: [
      "Learned high level mathematics such as Calculus, Linear Equations, and Differential Equations.",
      "Developed understanding of high level of Physics such as Mechanics, and Electromagnetism.",
      "Obtained knowledge about General Chemistry.",
    ],
  },
  {
    id: (edNum += 1),
    school: "UCBerkeley Extension",
    study: "Technical Project Management",
    schoolImg:
      "https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/UC-Berkeley-Extension.png",
    location: "USA",
    duration: "01/2021 - 06/2021",
    description:
      "500+ hours of intensive development of in-demand technical leadership and business management skills for the Software Development Life Cycle.",
    achievements: [
      "Learned and developed project launch plans using multiple development methodologies.",
      "Learned how to proficiently use tools such as Jira, Confluence, Asana, Wrike, and more.",
      "Obtained Professional Scrum Master I certification from Scrum.org.",
    ],
  },
  {
    id: (edNum += 1),
    school: "Hack Reactor",
    study: "Software Engineering, Full-Stack Development",
    schoolImg:
      "https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/galvanize.png",
    location: "USA",
    duration: "08/2019 - 11/2019",
    description:
      "1000+ hours of intensive HTML, CSS, and JavaScript/React study for Full Stack Development with an admission rate of less than 3%.",
    achievements: [
      "Learned and developed useing NodeJS and ExpressJS for backend development.",
      "Used the MERN stack to develope several in class projects.",
      "Deployed several projects using AWS.",
      "Learned and implemented unit and end-to-end testing to check if applications are developed to the best of their capability.",
    ],
  },
];

export const certifications = [
  {
    id: (certNum += 1),
    school: "Mission College",
    schoolImg:
      "https://jeffreyleeportfolio.s3.us-west-1.amazonaws.com/mission+college.png",
    location: "Santa Clara, CA USA",
    achievements: [
      "Computer Information Systems Certificate of Achievement, https://www.parchment.com/u/award/10bdadf682d9bbd43c3240ff0405fb95",
    ],
  },
  {
    id: (certNum += 1),
    school: "Scrum.org",
    schoolImg:
      "https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/Scrumorg-Logo_tagline-TM_(1)_(1)_(2).jpg",
    location: "USA",
    achievements: [
      "Professional Scrum Master I, https://www.credential.net/1535fe5d-9e0f-4158-904d-102d9864f3fe?username=jeffreylee97355#gs.vxg5nt",
      "Profession Scrum Product Owner I, https://www.credential.net/d52236ed-185d-4e0e-b5a7-5bc98689386e?username=jeffreylee97355",
    ],
  },
  {
    id: (certNum += 1),
    school: "Codecademy",
    schoolImg:
      "https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/codecademy.jpg",
    location: "USA",
    achievements: [
      "Learn Testing for Web Development, https://www.credential.net/19136812-e790-45c6-a014-94c18e49276b?username=jeffreylee97355#gs.hx34p2",
      "Create a Front-End App with React, https://www.credential.net/701a8551-8460-4bc2-b7f0-8c8116ae266a?username=jeffreylee97355#gs.hx3a8x",
    ],
  },
  {
    id: (certNum += 1),
    school: "Zero to Mastery",
    schoolImg:
      "https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/ztm.jpeg",
    location: "USA",
    achievements: [
      "Mastering the Coding Interview: Data Structures and Algorithms, https://www.credential.net/85da0aa1-0955-4236-acda-a65ea2be838c?username=jeffreylee97355",
      "The Complete Web Developer in 2021: Zero to Mastery, https://www.credential.net/e3619e58-0a24-4a65-a0fb-c7efcaddfc2b?username=jeffreylee97355#gs.xecnoc",
    ],
  },
  {
    id: (certNum += 1),
    school: "Forage",
    schoolImg:
      "https://jeffreyleeportfolio.s3-us-west-1.amazonaws.com/forage.png",
    location: "USA",
    achievements: [
      "Software Engineering, https://www.credential.net/d077a204-2a74-408f-ae6e-057c4cf50152?username=jeffreylee97355#gs.hx6sjm",
    ],
  },
];
