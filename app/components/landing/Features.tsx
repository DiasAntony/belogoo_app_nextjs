"use client";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export const FeaturesData: {
  imgSrc: string;
  heading: string;
  subheading: string;
}[] = [
  {
    imgSrc: "/landing/athletes-carrying-different-sport-icons.png",
    heading: "Sports",
    subheading: "Team won the match after overtime",
  },
  {
    imgSrc:
      "/landing/ai-content-creation-generated-art-music-creative-writing-flowchart-isometric-vector-illustration.png",
    heading: "Tech",
    subheading: "Technology shapes the future with innovation",
  },
  {
    imgSrc:
      "/landing/political-scientist-concept-studying-political-ideas-institutions.png",
    heading: "Politican",
    subheading: "The politician promised change for everyone",
  },
  {
    imgSrc: "/landing/quills-old-books-paper-vector-illustrations-set.png",
    heading: "History",
    subheading: "History teaches valuable lessons for humanity",
  },
];

const Features = () => {
  return (
    <section className="mt-10">
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md"
        id="about-section"
      >
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-lg text-blue-500 font-semibold mb-3 tracking-widest uppercase text-glow">
            Explore
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 lg:max-w-[60%] mx-auto leading-tight">
            Get a many of interesting Topics
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {FeaturesData.map((items, i) => (
            <div
              className={`p-8 pt-0 relative rounded-3xl glass-card group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer animate-fade-in-up flex flex-col items-center`}
              style={{ animationDelay: `${i * 0.15}s` }}
              key={i}
            >
              <div className="flex justify-center -mt-12 mb-6 transition-transform duration-500 group-hover:scale-110">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-lg border border-gray-100 dark:border-slate-700">
                  <Image
                    src={items.imgSrc}
                    alt={items.heading}
                    width={100}
                    height={100}
                    className="drop-shadow-lg object-contain w-[100px] h-[100px]"
                  />
                </div>
              </div>
              <h3 className="text-2xl text-slate-800 dark:text-white font-bold text-center transition-colors group-hover:text-blue-500">
                {items.heading}
              </h3>
              <p className="text-md font-medium text-slate-500 dark:text-slate-400 text-center mt-4 mb-4 flex-grow">
                {items.subheading}
              </p>
              <div className="flex items-center justify-center mt-6">
                <Link
                  href="/home"
                  className="text-center text-blue-500 font-semibold text-lg flex items-center gap-2 group/link relative"
                >
                  Learn More
                  <MdArrowForwardIos size={15} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover/link:w-full"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
