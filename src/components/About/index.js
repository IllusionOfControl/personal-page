const About = () => {
  return (
    <section className="bg-neutral-900 py-16 sm:py-28" id="about-me">
      <div className="px-4 mx-auto md:px-10">
        <div className="max-w-[1240px] grid grid-cols-1 sm:grid-cols-[2fr_4fr] px-4 mx-auto md:px-10">
          <h1 className="text-5xl pb-4">About <span className="text-rose-800">me</span></h1>
          <div className="max-w-[700px] mx-auto pt-20 text-xl text-neutral-300">
            <p className="pb-4">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              👨‍💻 Currently I am 22 y/o, I'm currently a software engineer which studying and doing pet projects.
            </p>
            <p className="pb-4">
              🎓 I am getting a higher education at the Belarusian State University of
              Informatics and Radioelectronics (BSUIR) at the Faculty of Computer Systems and netNetworks.
              Previously, he was educated as a software engineer at a local college.
            </p>
            <p className="pb-4">
              🏓 I have hobbies such as watching 📺 TV series and anime, 🚴‍♀️ cycling, 🏐 playing volleyball.
              I am also fond of system administration and 🧪 experiments.
              I have little experience in reverse engineering.
              Familiar with the basics of electrical engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;