import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import ninja from "../assets/ninja.png";

const About = () => {
  const [isAnimated, setIsAnimated] = useState("");
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      setIsAnimated("animatable");
    }
  }, [inView]);

  return (
    <div name="about" className="w-full h-screen bg-[#000000] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="sm:text-right pb-8 flex">
          <p className={`text-4xl font-bold ${isAnimated}`} ref={ref}>
            About Me
          </p>
          <img src={ninja} className="pl-4 relative bottom-2 " alt="fire" />
        </div>

        <div className="max-w-[1000px] w-full grid  sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold ">
            <p className={`${isAnimated}`}>
              Nice to meet you. Happy to see you here!
            </p>
          </div>

          <div>
            <p className={`${isAnimated} py-2`}>
              I like to build applications with seamless UIs and provide a great
              user experience. Always looking for difficult challenges to push
              past my limits and to learn from it. My goal is to dive deeper in
              the development industry and collaborate with others to bring a
              memorable experience to users globally. Let us collaborate with
              one another!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
