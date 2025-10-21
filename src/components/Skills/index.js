import { skills } from "../../data";
import React from "react";
import PortfolioIcon from "../../icons";

const Skills = ({ skills }) => {
  return (
    <section className="container mx-auto" id="skills">
      <h1 className="text-3xl">
        <span className="text-neutral-300">I can work </span>
        <span className="text-rose-700">with</span>
      </h1>
      <hr className="border-neutral-800 border-1 my-4" />
      <div className="">
        <div className="portrait:mx-8">
          <ul className="">
            {skills.map((skill) => {
              return (
                <li className="py-4" key={skill.name} id={skill.name}>
                  <p className="text-2xl text-rose-500 opacity-70 pb-2">
                    {skill.name}
                  </p>
                  <ul className="grid grid-cols-4 gap-4">
                    {skill.tools.map((tool) => (
                      <li
                        className="bg-neutral-900 p-2 rounded-lg flex items-center border border-neutral-900 hover:border hover:border-rose-900 dark:bg-neutral-900 transition-colors"
                        key={tool.title}
                      >
                        <div className="p-2 items-center justify-center rounded-lg bg-neutral-800 ">
                          <PortfolioIcon width={32} icon={tool.icon} />
                        </div>
                        <p className="pl-4 opacity-70 select-none">{tool.title}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
