import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-200">
      {/*Container */}
      <div
        className="max-w-[1000px] 
        mx-auto
        px-8
        flex
        flex-col
        justify-center
        h-full
        "
      >
        <p className="text-black">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-black ">
          Matthew Tse
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#535050]">
          I'm a Self Taught Web Developer!
        </h2>
        <p className="text-black py-4 max-w-[700px]">
          I'm an aspiring web developer specializing in building exceptional
          digital experiences. Currently, I'm focused on building responsive
          full-stack web applications.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-gray-400 bg-black group border-2 px-6 py-3 my-2 flex items-center hover:text-white">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
