"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home-section" className="bg-gray-50 dark:bg-gray-700">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="col-span-6 animate-fade-in-up">
            <h1 className="text-4xl lg:text-7xl font-bold mb-6 text-black dark:text-white md:4px lg:text-start text-center leading-tight tracking-tight text-glow">
              Master Your Skills with Expert Guidance
            </h1>
            <p className="text-slate-600 dark:text-slate-300 lg:text-xl font-light mb-10 lg:text-start text-center max-w-xl">
              Unlock your full potential with expert-led insights and tips.
              Explore new skills and elevate your knowledge, one blog at a time.
            </p>
            <div className="md:flex align-middle justify-center lg:justify-start gap-4">
              <Link
                href="/home"
                className="flex border-2 text-white w-full md:w-auto mt-5 md:mt-0 border-blue-500 bg-blue-500 justify-center rounded-full text-lg font-semibold items-center py-4 px-10 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1"
              >
                Explore now
              </Link>
            </div>
          </div>
          <div className="col-span-6 flex justify-center relative animate-fade-in-left">
            <div className="flex glass-card p-3 gap-5 items-center bottom-10 left-0 lg:left-10 rounded-2xl absolute z-10 animate-float" style={{ animationDelay: '0.5s' }}>
              <Image
                src={
                  "/landing/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration.png"
                }
                alt="pizza-image"
                width={68}
                height={68}
              />
              <p className="text-lg font-normal text-blue-400">
                More than 500+ <br /> recipes.
              </p>
            </div>
            <div className="animate-float">
              <Image
                src="/landing/organic-flat-blog-post-illustration-with-people.png"
                alt="blog-illustration"
                width={1000}
                height={805}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
