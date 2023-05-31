import { skills } from "../../data";
import { FaCode } from "react-icons/fa";

const Skills = () => {
  return (
    <section
      className="bg-black bg-neutral-800 py-16 sm:py-28"
      id="skills-section"
    >
      <div className="max-w-[1240px] px-4 mx-auto md:px-10">
        <h1 className="text-5xl w-full pb-4">
          I can work <span className="text-rose-800">with</span>
        </h1>
        <div className="md:grid portrait:grid-cols-1 grid-cols-[2fr_4fr]">
          <div className="portrait:hidden text-[128px] max-h-[500px] text-rose-700 flex justify-center items-center">
            <FaCode/>
          </div>
          <div className="portrait:mx-8">
            <ul className="grid md:grid-cols-2 text-2xl gap-6">
              {skills.map((skill) => {
                return (
                  <li
                    key={skill.name}
                    id={skill.name}
                  >
                    <p className="text-4xl text-rose-400">
                      {skill.name}
                    </p>
                    <ul className="pl-4 pt-2">
                      {skill.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
