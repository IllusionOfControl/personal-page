const skills = [
  {name: "Python", tools: ["FastAPI", "Django/DRF", "Flask", "OpenCV", "Celery"]},
  {name: "JavaScript", tools: ["React", "Next.js", "Redux"]},
  {name: "C/C++", tools: ["SFML", "OpenGL", "STL 11"]},
  {name: "Java", tools: ["Core", "Spring Boot"]},
  {name: "Tools", tools: ["Shell", "Docker", "Postman", "Git", "WebRTC"]},
  {name: "Databases", tools: ["PostgreSQL", "SQLite", "Redis"]}
]

const cvPdfUrl = "https://drive.google.com/file/d/17oqcjAg94V_Kgj7geIr3CN2pF_QDLGsr/view?usp=share_link"

const projects = [
  {
    title: "Personal page",
    stack: ["JavaScript", "Next.js", "JavaScript", "Tailwind"],
    description: "A static website to present me & my projects. My first use of the Next.js framework",
    links: {
      github: "https://github.com/IllusionOfControl/personal-portfolio",
      demo: "https://illusion-of-control-portfolio.vercel.app/"
    }
  },
  {
    title: "React projects",
    stack: ["JavaScript", "React", "Tailwind", "Redux"],
    description: "A wide variety of small projects using React.",
    links: {
      github: "https://github.com/IllusionOfControl/react-projects",
    }
  },
  {
    title: "Todoist clone",
    stack: ["JavaScript", "Python", "React", "PostgreSQL", "FastAPI"],
    description: "Todoist is a web service and a set of task management software. This project implements a copy of it.",
    links: {
      github: "https://github.com/IllusionOfControl/todoist-clone",
    }
  },
  {
    title: "USB Computer Status Display",
    stack: ["C#", "С", "Microcontrollers/PIC", "USB"],
    description: "The device displays system information about the status of the computer: " +
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
    description: "The repository contains laboratory and practical work done at the university. " +
      "Contains a variety of computer science examples",
    links: {
      github: "https://github.com/IllusionOfControl/bsuir-repo",
    }
  },
  {
    title: "Minesweeper",
    stack: ["C++", "SFML"],
    description: "Own implementation of the legendary Minesweeper game.",
    links: {
      github: "https://github.com/IllusionOfControl/minesweeper",
    }
  },
  {
    title: "Candle",
    stack: ["Python", "Django", "DRF", "Bootstrap", "Unittest"],
    description: "An educational project that allows you to catalog books by author, book series, publisher and tags. " +
      "Allows you to search.",
    links: {
      github: "https://github.com/IllusionOfControl/candle",
    }
  },
  {
    title: "Pixie",
    stack: ["Golang", "Telegram"],
    description: "This is a Golang Telegram bot that can pixilize images. " +
      "It uses the go-telegram-bot-api library to interact with the Telegram Bot API " +
      "and the gocv library for image processing.",
    links: {
      github: "https://github.com/IllusionOfControl/pixie",
    }
  },
  {
    title: "Coub-dl",
    stack: ["Golang", "FFmpeg"],
    description: "Coub-dl is a Go application that allows you to download videos from the coub.com",
    links: {
      github: "https://github.com/IllusionOfControl/coub-dl",
    }
  },
  {
    title: "torrent-dump",
    stack: ["Python", "Flask"],
    description: "Personal project for organization torrent files, that used Bencode parser.",
    links: {
      github: "https://github.com/IllusionOfControl/torrent_dump",
    }
  },
  {
    title: "Octoprofile",
    stack: ["JavaScript", "Next.js", "Github API"],
    description: "A nicer look at your personal GitHub Profile! With charts!",
    links: {
      github: "https://github.com/IllusionOfControl/octoprofile",
      demo: "https://octoprofile-six.vercel.app/"
    }
  },
  {
    title: "Alien Invasion Game",
    stack: ["Python", "Pygame"],
    description: "This is a simple alien invasion game written in Python and Pygame. ",
    links: {
      github: "https://github.com/IllusionOfControl/alien-invasion-game.git",
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

export {skills, projects, socials, location, cvPdfUrl};