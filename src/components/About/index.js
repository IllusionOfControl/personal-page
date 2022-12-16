const About = () => {
    return (
        <section className="bg-neutral-900 py-16 sm:py-28">
            <div className="px-4 mx-auto md:px-10">
            <div className="max-w-[1240px] grid grid-cols-1 sm:grid-cols-[2fr_4fr] px-4 mx-auto md:px-10">
                <h1 className="text-5xl opacity-80 pb-4">About <span className="text-rose-800">me</span></h1>
                <div className="max-w-[700px] mx-auto pt-8">

                    <p className="pb-4">I'm currently a software engineer at Replit where we're building the future of programming.</p>

                    <p className="pb-4">Previously, I've worked at Coda, Google, and Expo. I've also contracted for and advised a number of other startups on the side.</p>

                    <p className="pb-4">I'm originally from St. Petersburg, Russia, grew up in the San Francisco Bay Area, and am now living in New York City.</p>
                </div>
            </div>
            </div>
        </section>
    );
}

export default About;