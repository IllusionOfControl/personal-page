import {skills} from '../../data'

const Hero = () => {
  return (
    <section className="bg-black py-16 sm:py-28">
      <div className="max-w-[1240px] sm:grid grid-cols-[2fr_4fr] px-4 mx-auto md:px-10">
        <h1 className="text-5xl w-full opacity-80">I can work <span className="text-rose-800">with</span></h1>
        <div className="pt-20">
          <ul className="grid sm:grid-cols-2 text-2xl gap-4">
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