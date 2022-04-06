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
              Hi. I'm Matthew, nice to meet you. Please take a look around.
            </p>
          </div>

          <div>
            <p className={`${isAnimated} py-2`}>
              I am passionate about building applications that improves the
              lives of others. Learning new ways to improve my coding
              capabilities is what I love doing and I wish to dive deeper to the
              development industry. How may I help you today?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
