import React from "react";
import PortfolioIcon from "@/icons";
import { SkillCategory } from "@/types";

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="container mx-auto py-10 scroll-mt-24" id="skills">
      <h1 className="text-3xl font-bold">
        <span className="text-neutral-800 dark:text-neutral-200">I can work </span>
        <span className="text-rose-700 dark:text-rose-600">with</span>
      </h1>
      <hr className="border-neutral-200 dark:border-neutral-800 border-1 my-4" />
      <div>
        <div className="portrait:mx-4">
          <ul>
            {skills.map((skill) => (
              <li className="py-4" key={skill.name} id={skill.name}>
                <p className="text-2xl text-rose-700 dark:text-rose-500 font-semibold opacity-90 pb-2">
                  {skill.name}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {skill.tools.map((tool) => (
                    <li
                      className="bg-white dark:bg-neutral-900/90 p-2.5 rounded-xl flex items-center border border-neutral-200/90 dark:border-neutral-900 hover:border-rose-600/70 dark:hover:border-rose-800/80 shadow-xs dark:shadow-none transition-all"
                      key={tool.title}
                    >
                      <div className="p-2 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 flex shrink-0">
                        <PortfolioIcon width={28} icon={tool.icon} />
                      </div>
                      <p className="pl-3.5 text-neutral-800 dark:text-neutral-300 select-none text-sm md:text-base font-medium">
                        {tool.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
