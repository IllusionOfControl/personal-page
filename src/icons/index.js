import NextJsIcon from "./nextjs";
import TailwindCssIcon from "./tailwindcss";
import ReactIcon from "./react";
import FastApiIcon from "./fastapi";
import FlaskIcon from "./flask";
import DjangoIcon from "./django";
import ReduxIcon from "./redux";
import PostgreSqlIcon from "./postgresql";
import RedisIcon from "./redis";
import MongoDbIcon from "./mongodb";
import DockerIcon from "./docker";
import GitIcon from "./git";
import PostmanIcon from "./postman";
import BashIcon from "./bash";
import PyTestIcon from "./pytest";

const mapIconWithComponent = {
  react: ReactIcon,
  redux: ReduxIcon,
  nextjs: NextJsIcon,
  tailwindcss: TailwindCssIcon,
  fastapi: FastApiIcon,
  flask: FlaskIcon,
  django: DjangoIcon,
  postgresql: PostgreSqlIcon,
  redis: RedisIcon,
  mongodb: MongoDbIcon,
  docker: DockerIcon,
  git: GitIcon,
  postman: PostmanIcon,
  bash: BashIcon,
  pytest: PyTestIcon,
};

const PortfolioIcon = ({ icon }) => {
  const iconComponent = mapIconWithComponent[icon];

  if (!iconComponent) {
    console.warn(`Icon component for "${icon}" not found.`);
    return null;
  }

  return iconComponent();
};

export default PortfolioIcon;
