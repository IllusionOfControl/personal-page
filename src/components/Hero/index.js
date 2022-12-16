import Image from 'next/image'

const Hero = () => {
    return (
        <section className="w-full h-screen flex flex-col justify-center mx-auto bg-neutral-800">
            <div className="top-1/2 w-full max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 px-4 mx-auto md:px-10 gap-4">
                <div className="mb-5 sm:mt-24">
                    <h2 className="text-3xl mb-2">Hi, my name is </h2>
                    <h1 className="font-bold text-4xl lg:text-5xl mb-2 text-rose-700">Sergey Skorokhod</h1>
                    <p className="text-2xl">I'm a self-taught software developer with a passion for building efficient
                        applications with different technologies.</p>
                    <div className="flex">
                    </div>
                </div>
                <div className="mx-auto">
                    <Image src="/developer.png" width={400} height={400} alt="me"/>
                </div>
            </div>
        </section>
    );
}

export default Hero;