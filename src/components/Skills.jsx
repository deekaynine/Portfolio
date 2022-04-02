import React from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Python from "../assets/python.png";
import Redux from "../assets/redux.png";
import Postgre from "../assets/pgadmin.png";
import Tailwind from "../assets/tailwind.png";

import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-black text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen ">
        <div className="flex flex-col justify-center items-center content-center">
          <p className="text-4xl font-bold inline  ">Skills</p>
          <p className="py-4">These are the technologies I've worked with:</p>
        </div>
        {/*Container for icons*/}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636]">
            <img src={JavaScript} alt="JavaScript" className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636]">
            <img src={ReactImg} alt="React" className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636]">
            <img src={Node} alt="HTML" className="w-20 mx-auto" />
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636]">
            <img src={Mongo} alt="HTML" className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636]">
            <img src={Tailwind} alt="tailwinds" className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636]">
            <img src={Redux} alt="Redux" className="w-20 mx-auto" />
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636]">
            <img src={Python} alt="Python" className="w-20 mx-auto" />
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636]">
            <img src={Postgre} alt="postgre" className="w-20 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
