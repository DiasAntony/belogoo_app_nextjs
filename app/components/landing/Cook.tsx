"use client";
import Image from "next/image";

const Cook = () => {
  return (
    <section className="relative" id="cook-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="absolute right-0 bottom-[-7%] hidden lg:block">
          <Image
            src={
              "/landing/creative-writing-storytelling-education-concept-learning-subject-book-review-summary.png"
            }
            alt="burger-image"
            width={200}
            height={622}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start animate-fade-in-right">
            <Image
              src="/landing/smiling-young-guy-student-graduation-costume-showing-his-diploma-graduation-ceremony-party.png"
              alt="graduation-student"
              width={636}
              height={808}
              className="drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <p className="text-blue-500 text-lg font-semibold mb-3 tracking-widest uppercase text-start text-glow">
              Read with us
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 text-start leading-tight">
              Writing together with the expert.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 md:text-lg font-light mb-6 text-start mt-4 leading-relaxed">
              Writing together with the expert opens new possibilities for your
              craft. With guidance and feedback, you can sharpen your skills and
              explore fresh perspectives. Learn the techniques that make writing
              impactful and compelling. Expert writers offer tips, tricks, and
              strategies that help you overcome common challenges. Whether
              you’re a beginner or an experienced writer, this collaboration
              helps elevate your work. Embrace the opportunity to grow and
              improve, one word at a time.
            </p>
            <p className="text-slate-600 dark:text-slate-300 md:text-lg font-light mb-10 text-start leading-relaxed">
              Reading alongside experts to refine blogers craft. Gain valuable
              insights and enhance your skills..
            </p>
            <button className="text-lg font-semibold rounded-full text-white py-4 px-10 bg-blue-500 w-fit transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cook;
