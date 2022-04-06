import React, { useEffect, useState } from "react";

import Recipe from "../assets/recipefinder.png";
import Eshop from "../assets/eshop.png";
import cardblog from "../assets/cardblog.png";
import clothing from "../assets/clothing-store-pic.PNG";
import Music from "../assets/moosic.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [isAnimated, setIsAnimated] = useState("");
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      setIsAnimated("animatable");
    }
  }, [inView]);

  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0f0f0f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className={`${isAnimated}
            text-4xl font-bold inline  text-gray-300`}
            ref={ref}
          >
            Projects
          </p>
          <p className={`${isAnimated}  mt-4 py-6`}>
            {" "}
            Check out some of my recent work
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <div
              style={{ backgroundImage: `url(${Eshop})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://react-django-appstore.herokuapp.com/"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/deekaynine/ReactDjangoShop"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <div
              style={{ backgroundImage: `url(${cardblog})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://elated-poitras-ca80e7.netlify.app/"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/deekaynine/Card_Blog"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            {" "}
            <div
              style={{ backgroundImage: `url(${clothing})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://eshopmatt.herokuapp.com/"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/deekaynine/E-Commerce-Site"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid Item */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <div
              style={{ backgroundImage: `url(${Recipe})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://fluffy-piroshki-bd143b.netlify.app/"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/deekaynine/recipe-search-app"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0.8 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <div
              style={{ backgroundImage: `url(${Music})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Application
                </span>
                <div className="pt-8 text-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://singular-sawine-981d3d.netlify.app/"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/deekaynine/Moosic"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
