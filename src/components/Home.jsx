import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState("");
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      setIsAnimated("animatable");
    }
  }, [inView]);
  return (
    <div
      name="home"
      className="flex flex-col w-full h-screen bg-gray-200 lg:flex lg:flex-row items-center align-end justify-start"
    >
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
        <p className="text-black mb-2">Hi, my name is </p>
        <div className="text-4xl sm:text-7xl font-bold text-black inline-block mb-3">
          <span className={`${isAnimated} `} ref={ref}>
            Matthew Tse
          </span>
        </div>
        <h2
          className={`${isAnimated} text-4xl sm:text-7xl font-bold text-red-700`}
        >
          I'm a Web Developer!
        </h2>
        <p
          className={`${isAnimated} text-black text-2xl py-4 max-w-[700px] mt-2`}
        >
          My mission is to provide exceptional digital experiences to everyone!
          Currently, I'm focused on building responsive full-stack web
          applications.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-gray-300 bg-black group border-2 px-6 py-3 my-2 flex items-center hover:text-white">
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
