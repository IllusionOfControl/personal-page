import { FaVolleyballBall } from "react-icons/fa";
import React from "react";

const About = () => {
  return (
    <section className="bg-neutral-900 py-16 sm:py-28" id="about-section">
      <div className="max-w-[1240px] px-4 mx-auto md:px-10">
        <h1 className="text-5xl">
          About <span className="text-rose-800">me</span>
        </h1>
        <div className="pt-12 grid portrait:grid-cols-1 grid-cols-[2fr_4fr]">
          <div className="portrait:hidden text-[128px] max-h-[500px] text-rose-700 flex justify-center items-center">
            <FaVolleyballBall />
          </div>
          <div className="max-w-[700px] mx-auto portrait:mx-8 text-xl text-neutral-300">
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
