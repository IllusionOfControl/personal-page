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
    img: "/projects/todoist-clone.jpg",
    stack: ["React", "Tailwind", "PostgreSQL", "FastAPI"],
    description: "Todoist is a web service and a set of task management software. This project implements a copy of it.",
    links: {
      github: "https://github.com/IllusionOfControl/todoist-clone",
      // demo: "https://example.com/"
    }
  },
  {
    title: "Lorem ipsum",
    img: "/projects/example.jpg",
    stack: ["React", "JavaScript", "MongoDB", "Tailwind"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    links: {
      github: "https://github.com/",
      demo: "https://example.com/"
    }
  },
]

const socials = {
  email: "sergeyskorokhod2@gmail.com",
  email_link: "mailto:sergeyskorokhod2@gmail.com",
  telegram: "@illusion_of_control",
  telegram_link: "https://t.me/illusion_of_control",
  instagram: "@illus1on_of_control",
  instagram_link: "https://instagram.com/illusqon_of_control",
  github: "IllusionOfControl",
  github_link: "https://github.com/IllusionOfControl"
}

export {skills, projects, socials};