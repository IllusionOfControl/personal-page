const skills = [
  {name: "Python", tools: ["FastAPI", "Django", "Flask", "OpenCV"]},
  {name: "JavaScript", tools: ["React", "Next.js"]},
  {name: "C/C++", tools: ["SFML", "OpenGL", "STL 11"]},
  {name: "Java", tools: ["Core", "Spring Boot"]},
  {name: "Tools", tools: ["Shell", "Docker", "Postman", "Git"]},
  {name: "Databases", tools: ["PostgreSQL", "SQLite", "Redis"]}
]

const cvPdfUrl = "https://drive.google.com/file/d/17oqcjAg94V_Kgj7geIr3CN2pF_QDLGsr/view?usp=share_link"

const projects = [
  {
    title: "Personal page",
    stack: ["Next.js", "JavaScript", "Tailwind"],
    description: "A static website to present me & my projects. My first use of the Next.js framework",
    links: {
      github: "https://github.com/IllusionOfControl/personal-portfolio",
      demo: "https://illusion-of-control-portfolio.vercel.app/"
    }
  },
  {
    title: "React projects",
    stack: ["React", "Tailwind", "Redux"],
    description: "A wide variety of small projects using React.",
    links: {
      github: "https://github.com/IllusionOfControl/react-projects",
    }
  },
  {
    title: "Todoist clone",
    stack: ["React", "Tailwind", "PostgreSQL", "FastAPI"],
    description: "Todoist is a web service and a set of task management software. This project implements a copy of it.",
    links: {
      github: "https://github.com/IllusionOfControl/todoist-clone",
    }
  },
  {
    title: "USB Computer Status Display",
    stack: ["C#", "С", "Microcontrollers/PIC", "USB"],
    description:  "The device displays system information about the status of the computer: " +
                  "CPU, Ram, Disk, Network load, uptime, world datetime. " +
                  "The device consists of a PIC18 microcontroller and a 40x04 display and a USB adapter. " +
                  "For the Windows system only!",
    links: {
      github: "https://github.com/IllusionOfControl/UCSD-PIC-Source",
    }
  },
  {
    title: "BSUIR repo",
    stack: ["Algorithms", "Data Structures", "Computer Graphics", "Databases"],
    description:  "The repository contains laboratory and practical work done at the university. " +
                  "Contains a variety of computer science examples",
    links: {
      github: "https://github.com/IllusionOfControl/todoist-clone",
    }
  },
  {
    title: "Minesweeper",
    stack: ["C++", "SFML"],
    description: "Own implementation of the legendary Minesweeper game.",
    links: {
      github: "https://github.com/IllusionOfControl/todoist-clone",
    }
  },
]

const location = {
  title: "Belarus, Brest",
  link: "https://goo.gl/maps/BAi5Zq9nxcWkNVpi9",
};

const socials = {
  email: "sergeyskorokhod2@gmail.com",
  email_link: "mailto:sergeyskorokhod2@gmail.com",
  telegram: "@illusion_of_control",
  telegram_link: "https://t.me/illusion_of_control",
  instagram: "@illus1on_of_control",
  instagram_link: "https://instagram.com/illusqon_of_control",
  github: "IllusionOfControl",
  github_link: "https://github.com/IllusionOfControl",
  linkedin: "Sergey Skorokhod",
  linkedin_link: "https://www.linkedin.com/in/skorokhod-sergey/",
}

export {skills, projects, socials, location};