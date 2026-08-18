/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
const facebookLogo = "https://via.placeholder.com/150";
const quoraLogo = "https://via.placeholder.com/150";
const airbnbLogo = "https://via.placeholder.com/150";
const saayaHealthLogo = "https://via.placeholder.com/150";
const nextuLogo = "https://via.placeholder.com/150";
const codeInLogo = "https://via.placeholder.com/150";
const googleAssistantLogo = "https://via.placeholder.com/150";
const pwaLogo = "https://via.placeholder.com/150";
import annaiCollegeLogo from "./assets/images/annaiCollegeLogo.png";
import skillSwapLogo from "./assets/images/skillSwapLogo.jpg";
import leeBeautyLogo from "./assets/images/leeBeautyLogo.png";
import qrCodeGeneratorLogo from "./assets/images/qrCodeGeneratorLogo.jpg";
import newsFeedLogo from "./assets/images/newsFeedLogo.jpg";
import slaLogo from "./assets/images/slaLogo.png";
import konguLogo from "./assets/images/konguLogo.png";
import srmLogo from "./assets/images/srmLogo.png";
import jsArrayProjectLogo from "./assets/images/jsArrayProject.jpg";
import slaAchievementLogo from "./assets/images/slaAchievementLogo.png";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "yogithasoundararajan",
  title: "Hi all, I'm yogitasoundararajan",
  subTitle: emoji(
    "Passionate MERN Stack Developer with knowledge of React.js, Node.js, Express.js, MongoDB, and JavaScript (ES6+). Strong foundation in frontend and backend development with a focus on responsive and user-friendly web applications."
  ),
  resumeLink: "/S_Yogitha_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yogithas03",
  linkedin: "https://www.linkedin.com/in/yogithasoundararajan03/",
  gmail: "mailto:yogithasoundararajan03@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "WHAT I DO",
  subTitle: "BUILD. CREATE. LEARN. AND TURN IDEAS INTO REAL PROJECTS.",
  skills: [
    "Build responsive and user-friendly websites using HTML, CSS, Bootstrap, Tailwind CSS, JavaScript and React.js.",
    "Create interactive full-stack web applications using React.js, Node.js, Express.js and REST APIs.",
    "Manage databases and secure applications using MongoDB, MySQL, CRUD operations, authentication and authorization."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      icon: FaHtml5,
      color: "text-orange-600"
    },
    {
      skillName: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-600"
    },
    {
      skillName: "Bootstrap 5",
      icon: FaBootstrap,
      color: "text-purple-600"
    },
    {
      skillName: "Tailwind CSS",
      icon: RiTailwindCssFill,
      color: "text-cyan-500"
    },
    {
      skillName: "JavaScript (ES6+)",
      icon: IoLogoJavascript,
      color: "text-yellow-500"
    },
    {
      skillName: "React.js",
      icon: FaReact,
      color: "text-cyan-400"
    },
    {
      skillName: "Node.js",
      icon: FaNodeJs,
      color: "text-green-600"
    },
    {
      skillName: "Express.js",
      icon: SiExpress,
      color: "text-gray-500"
    },
    {
      skillName: "MongoDB",
      icon: SiMongodb,
      color: "text-green-600"
    },
    {
      skillName: "MySQL",
      icon: SiMysql,
      color: "text-blue-700"
    },
    {
      skillName: "Git",
      icon: FaGitAlt,
      color: "text-orange-500"
    },
    {
      skillName: "GitHub",
      icon: FaGithub,
      color: "text-gray-500"
    },
    {
      skillName: "VS Code",
      icon: VscVscode,
      color: "text-blue-500"
    },
    {
      skillName: "REST API",
      icon: TbApi,
      color: "text-orange-500"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SLA Institute",
      logo: slaLogo,
      subHeader: "MERN Stack Developer",
      duration: "2026",
      desc: "Completion: 100%, K.K. Nagar, Chennai",
      descBullets: [],
      glowColor: "#00d3f3"
    },
    {
      schoolName: "Annai Women's Arts and Science College",
      logo: annaiCollegeLogo,
      subHeader: "MA English Literature",
      duration: "2024",
      desc: "Percentage: 67.6%, Karur",
      descBullets: [],
      glowColor: "#ec268f"
    },
    {
      schoolName: "Annai Women's Arts and Science College",
      logo: annaiCollegeLogo,
      subHeader: "BA English Literature",
      duration: "2022",
      desc: "",
      descBullets: [],
      glowColor: "#ec268f"
    },
    {
      schoolName: "Kongu Matriculation Higher Secondary School",
      logo: konguLogo,
      subHeader: "Higher Secondary Education",
      duration: "2019",
      desc: "Percentage: 60%, Paramathi Velur",
      descBullets: [],
      glowColor: "#22c55e"
    },
    {
      schoolName: "Sri Ramakrishna Matriculation School",
      logo: srmLogo,
      subHeader: "Secondary Education",
      duration: "2017",
      desc: "Percentage: 84%, Muthanur",
      descBullets: [],
      glowColor: "#eab308"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Quality Analyst",
      company: "Objectways Technologies",
      companylogo: facebookLogo,
      date: "Oct 2022 - Dec 2025",
      desc: "Experience in data annotation and quality review, ensuring accuracy and consistency.",
      descBullets: [
        "Skilled in following guidelines and meeting quality standards."
      ]
    },
    {
      role: "Senior Analyst",
      company: "Objectways Technologies",
      companylogo: quoraLogo,
      date: "Oct 2022 - Dec 2025",
      desc: "Reviewed datasets for accuracy and mentored junior annotators to improve efficiency.",
      descBullets: [
        "Produced quality reports and supported process improvements."
      ]
    },
    {
      role: "Data Analyst",
      company: "Objectways Technologies",
      companylogo: airbnbLogo,
      date: "Oct 2022 - Dec 2025",
      desc: "Performed multi-modal annotations while maintaining data quality standards.",
      descBullets: [
        "Collaborated with teams and used tools like CVAT, Labelbox, and SageMaker."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE WORKED ON",
  projects: [
    {
      image: skillSwapLogo,
      projectName: "SkillSwap – Peer to Peer Skill Exchange",
      projectDesc: "Developed a peer-to-peer skill exchange platform that allows users to showcase their skills, discover new skills, and connect with other users.",
      techStack: ["React.js", "Tailwind CSS"],
      footerLink: [
        {
          name: "Live Demo",
          url: "https://skillswapupdated.vercel.app/"
        }
      ]
    },
    {
      image: leeBeautyLogo,
      projectName: "Lee Beauty – Beauty Products E-Commerce",
      projectDesc: "Developed a responsive beauty products e-commerce website with organized product categories and an intuitive shopping interface.",
      techStack: ["React.js", "Tailwind CSS"],
      footerLink: [
        {
          name: "Live Demo",
          url: "https://lee-beauty-pied.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/yogithas03/Projects/tree/main/FrontendProject/leeBeauty"
        }
      ]
    },
    {
      image: qrCodeGeneratorLogo,
      projectName: "QR Code Generator Web App",
      projectDesc: "Developed a responsive web application to generate and download QR codes instantly from user input.",
      techStack: ["Vite", "JavaScript (ES6+)", "HTML5", "CSS3"],
      footerLink: [
        {
          name: "Live Demo",
          url: "https://qr-code-generator-ochre-three.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/yogithas03/qr-code-generator"
        }
      ]
    },
    {
      image: jsArrayProjectLogo,
      projectName: "JavaScript Array Methods Learning Platform",
      projectDesc: "Developed a responsive web application to learn JavaScript Array Methods with explanations, examples, interactive practice, and quizzes.",
      techStack: ["React.js", "JavaScript ES6+", "React Router DOM", "Tailwind CSS"],
      footerLink: [
        {
          name: "Live Demo",
          url: "https://newbackendmern-visi.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/yogithas03/newbackendmern/tree/main/JS/ArrayMethod/arrayMethods"
        }
      ]
    },
    {
      image: newsFeedLogo,
      projectName: "NewsFeed – News Aggregation Web App",
      projectDesc: "NewsFeed is a responsive web application designed to provide users with a clean and intuitive platform to browse and explore news content. It features a modern user interface with organized news sections, making it easy for users to discover and read different types of news.",
      techStack: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)"],
      footerLink: [
        {
          name: "Live Demo",
          url: "https://newsfeed-olive.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/yogithas03/newsfeed"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "MERN Full Stack Development",
      subtitle:
        "IBM SLA Institute, Chennai (Present)",
      footerLink: []
    },
    {
      title: "Best QC Achiever",
      subtitle:
        "Awarded Best QC Achiever at Objectways Technologies.",
      footerLink: []
    },
    {
      title: "Best Employee & Annotator Achiever",
      subtitle: "Awarded Best Employee & Annotator Achiever at Objectways Technologies.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "7904205770",
  email_address: "yogithasoundararajan03@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
