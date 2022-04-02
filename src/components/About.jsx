import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#000000] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="sm:text-right pb-8 pl-4 ">
          <p className="text-4xl font-bold inline ">About</p>
        </div>

        <div className="max-w-[1000px] w-full grid  sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Matthew, nice to meet you. Please take a look around.</p>
          </div>

          <div>
            <p className="py-2">
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
