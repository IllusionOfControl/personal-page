import {skills} from '../../data'

const Hero = () => {
  return (
    <section className="bg-black bg-neutral-800 py-16 sm:py-28" id="skills-section">
      <div className="max-w-[1240px] md:grid grid-cols-[2fr_4fr] px-4 mx-auto md:px-10">
        <h1 className="text-5xl w-full">I can work <span className="text-rose-800">with</span></h1>
        <div className="pt-20">
          <ul className="grid md:grid-cols-2 text-2xl gap-6">
            {skills.map((skill) => {
              return (
                <li key={skill.name} id={skill.name} className="grid grid-cols-[2fr_3fr] gap-8">
                  <p className="text-right text-rose-400 underline-offset-2 underline">{skill.name}</p>
                  <ul>
                    {skill.tools.map((tool) => <li key={tool}>{tool}</li>)}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;