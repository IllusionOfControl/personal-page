const About = ({ about }) => {
  if (!about?.paragraphs?.length) return null;

  return (
    <section
      className="container flex flex-col justify-center mx-auto py-10 scroll-mt-24"
      id="about-details"
    >
      <div className="mx-auto py-4">
        <h1 className="text-3xl">
          About <span className="text-rose-800">me</span>
        </h1>
        <hr className="border-neutral-800 border-1 my-4" />
        <div className="grid portrait:grid-cols-1">
          <div className="text-md text-neutral-300 space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

