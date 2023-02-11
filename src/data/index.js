const skills = [
  {name: "Python", tools: ["FastAPI", "Django", "Flask", "OpenCV"]},
  {name: "JavaScript", tools: ["React", "Next"]},
  {name: "C/C++", tools: ["SFML", "OpenGL", "STL 11"]},
  {name: "Java", tools: ["Core"]},
  {name: "Linux", tools: ["Bash", "Docker"]},
  {name: "Databases", tools: ["PostgreSQL", "SQLite", "Redis"]}
]

const projects = [
  {
    title: "Todoist clone",
    stack: ["React", "Tailwind", "PostgreSQL", "FastAPI"],
    description: "Todoist is a web service and a set of task management software. This project implements a copy of it.",
    links: {
      github: "https://github.com/IllusionOfControl/todoist-clone",
      // demo: "https://example.com/"
    }
  },
  {
    title: "USB Computer Status Display",
    stack: ["С", "Microcontrollers/PIC", "USB", "C#"],
    description:  "The device displays system information about the status of the computer: " +
                  "CPU, Ram, Disk, Network load, uptime, world datetime. " +
                  "The device consists of a PIC18 microcontroller and a 40x04 display and a USB adapter.",
    links: {
      github: "https://github.com/",
      demo: "https://example.com/"
    }
  },
  {
    title: "Personal page",
    stack: ["Next.js", "JavaScript", "Tailwind"],
    description: "A static website to present me & my projects. My first use of the Next.js framework",
    links: {
      github: "https://github.com/",
      demo: "https://example.com/"
    }
  },
  {
    title: "Todoist clone",
    img: "/projects/todoist-clone.jpg",
    stack: ["React", "Tailwind", "PostgreSQL", "FastAPI"],
    description: "Todoist is a web service and a set of task management software. This project implements a copy of it.",
    links: {
      github: "https://github.com/IllusionOfControl/todoist-clone",
      // demo: "https://example.com/"
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