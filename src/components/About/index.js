const About = () => {
  return (
    <section
      className="container flex flex-col justify-center mx-auto"
      id="about-section"
    >
      <div className="mx-auto py-4">
        <h1 className="text-3xl">
          About <span className="text-rose-800">me</span>
        </h1>
        <hr className="border-neutral-800 border-1 my-4" />
        <div className="grid portrait:grid-cols-1">
          <div className="text-md text-neutral-300">
            <p className="pb-4">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              👨‍💻 Currently I am 23 y/o, I'm currently a software engineer which
              studying and doing pet projects.
            </p>
            <p className="pb-4">
              🎓 I am getting a higher education at the Belarusian State
              University of Informatics and Radioelectronics (BSUIR) at the
              Faculty of Computer Systems and Networks. Previously, he was
              educated as a software engineer at a local college.
            </p>
            <p className="pb-4">
              🏓 I have hobbies such as watching 📺 TV series and anime, 🚴‍♀️
              cycling, 🏐 playing volleyball. I am also fond of system
              administration and 🧪 experiments. I have little experience in
              reverse engineering. Familiar with the basics of electrical
              engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
