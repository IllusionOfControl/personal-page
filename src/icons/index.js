import NextJsIcon from "./nextjs";
import TailwindCssIcon from "./tailwindcss";
import ReactIcon from "./react";
import FastApiIcon from "./fastapi";
import FlaskIcon from "./flask";
import DjangoIcon from "./django";


const mapIconWithComponent = {
  react: ReactIcon,
  nextjs: NextJsIcon,
  tailwindcss: TailwindCssIcon,
  fastapi: FastApiIcon,
  flask: FlaskIcon,
  django: DjangoIcon,
}

const PortfolioIcon = ({icon}) => {
  console.log(icon);
  const iconComponent = mapIconWithComponent[icon]

  console.log(iconComponent);

  if (!iconComponent) {
    console.warn(`Icon component for "${icon}" not found.`);
    return null;
  }

  return iconComponent();
}

export default PortfolioIcon;