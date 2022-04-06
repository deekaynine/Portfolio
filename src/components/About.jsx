import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
        <div className="sm:text-right pb-8 ">
          <p className={`text-4xl font-bold inline ${isAnimated}`} ref={ref}>
            About
          </p>
        </div>

        <div className="max-w-[1000px] w-full grid  sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold ">
            <p className={`${isAnimated}`}>
              Hi. I'm Matthew, nice to meet you. Happy to see you here!
            </p>
          </div>

          <div>
            <p className={`${isAnimated} py-2`}>
              I'm passionate about building applications with seamless UIs and a
              great user experience. Alawys open to learning new ways to improve
              my coding skills. I wish to dive deeper in the development
              industry and collaborate with others to bring an memorable
              application to customers. How may I help you today?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
