import React from "react";

import Recipe from "../assets/recipefinder.png";
import Moosic from "../assets/moosic.png";
import Eshop from "../assets/eshop.png";
import cardblog from "../assets/cardblog.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000] mx-auto p-4 flex flex-col justify-center w-[90%] h-full">
        {/*Project Header*/}
        <div className="flex flex-col justify-center items-center content-center pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500">
            Projects
          </p>
          <p className="py-6">Have a look:</p>
        </div>

        {/*Project Catalog*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/*Project item 1*/}
          <div
            style={{
              backgroundImage: `url(${Recipe})`,
              backgroundSize: "cover",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Recipe Finder
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://fluffy-piroshki-bd143b.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/deekaynine/recipe-search-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Project item 2*/}
          <div
            style={{
              backgroundImage: `url(${Moosic})`,
              backgroundSize: "cover",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Music Player
              </span>
              <div className="pt-8 text-center">
                <a href="https://singular-sawine-981d3d.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/deekaynine/Moosic">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Project item 3*/}
          <div
            style={{
              backgroundImage: `url(${Eshop})`,
              backgroundSize: "cover",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Electronic Store
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-django-appstore.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/deekaynine/ReactDjangoShop">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*Project item 4*/}
          <div
            style={{
              backgroundImage: `url(${cardblog})`,
              backgroundSize: "cover",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto col-start-2 content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider">
                Card Blog
              </span>
              <div className="pt-8 text-center">
                <a href="https://elated-poitras-ca80e7.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/deekaynine/Card_Blog">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
