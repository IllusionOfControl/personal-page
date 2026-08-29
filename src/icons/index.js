import React from "react";
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

import {
  SiPython,
  SiApacheairflow,
  SiCelery,
  SiRabbitmq,
  SiClickhouse,
  SiQdrant,
  SiSqlite,
  SiLangchain,
  SiPytorch,
  SiKubernetes,
  SiCplusplus,
  SiRust,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTensorflow,
  SiGo,
  SiMinio,
  SiOllama,
  SiApachekafka,
} from "react-icons/si";

import { FaAws, FaBrain, FaRobot, FaServer } from "react-icons/fa6";

const mapIconWithComponent = {
  // Local JSX icons
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

  // React-icons
  python: (props) => <SiPython className="text-amber-400" size={props.width || 24} {...props} />,
  golang: (props) => <SiGo className="text-cyan-400" size={props.width || 24} {...props} />,
  go: (props) => <SiGo className="text-cyan-400" size={props.width || 24} {...props} />,
  airflow: (props) => <SiApacheairflow className="text-teal-400" size={props.width || 24} {...props} />,
  celery: (props) => <SiCelery className="text-green-400" size={props.width || 24} {...props} />,
  rabbitmq: (props) => <SiRabbitmq className="text-orange-500" size={props.width || 24} {...props} />,
  kafka: (props) => <SiApachekafka className="text-red-500" size={props.width || 24} {...props} />,
  clickhouse: (props) => <SiClickhouse className="text-yellow-400" size={props.width || 24} {...props} />,
  qdrant: (props) => <SiQdrant className="text-rose-500" size={props.width || 24} {...props} />,
  minio: (props) => <SiMinio className="text-pink-500" size={props.width || 24} {...props} />,
  sqlite: (props) => <SiSqlite className="text-sky-400" size={props.width || 24} {...props} />,
  langchain: (props) => <SiLangchain className="text-emerald-400" size={props.width || 24} {...props} />,
  pytorch: (props) => <SiPytorch className="text-orange-500" size={props.width || 24} {...props} />,
  tensorflow: (props) => <SiTensorflow className="text-amber-500" size={props.width || 24} {...props} />,
  ollama: (props) => <SiOllama className="text-neutral-100" size={props.width || 24} {...props} />,
  kubernetes: (props) => <SiKubernetes className="text-blue-500" size={props.width || 24} {...props} />,
  aws: (props) => <FaAws className="text-amber-500" size={props.width || 24} {...props} />,
  cplusplus: (props) => <SiCplusplus className="text-blue-600" size={props.width || 24} {...props} />,
  rust: (props) => <SiRust className="text-orange-400" size={props.width || 24} {...props} />,
  nodejs: (props) => <SiNodedotjs className="text-emerald-500" size={props.width || 24} {...props} />,
  typescript: (props) => <SiTypescript className="text-sky-500" size={props.width || 24} {...props} />,
  javascript: (props) => <SiJavascript className="text-yellow-400" size={props.width || 24} {...props} />,
  ai: (props) => <FaBrain className="text-rose-400" size={props.width || 24} {...props} />,
  llm: (props) => <FaRobot className="text-purple-400" size={props.width || 24} {...props} />,
  server: (props) => <FaServer className="text-neutral-400" size={props.width || 24} {...props} />,
};

const PortfolioIcon = ({ icon, width = 24, className }) => {
  const IconComponent = mapIconWithComponent[icon];

  if (!IconComponent) {
    return <FaServer className="text-neutral-400" size={width} />;
  }

  return <IconComponent width={width} className={className} />;
};

export default PortfolioIcon;
