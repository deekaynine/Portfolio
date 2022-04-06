import React, { useState, useEffect } from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Python from "../assets/python.png";
import Redux from "../assets/redux.png";
import Postgre from "../assets/pgadmin.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import { motion } from "framer-motion";

const Skills = ({ useInView }) => {
  const [isAnimated, setIsAnimated] = useState("");
  const { ref, inView } = useInView({});

  useEffect(() => {
    if (inView) {
      setIsAnimated("animatable");
    }
    console.log("use effect book, inView = ", inView);
  }, [inView]);

  return (
    <div name="skills" className="bg-black text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen ">
        <div
          ref={ref}
          className="flex flex-col justify-center items-center content-center"
        >
          <p
            className={`${isAnimated}
            }} text-4xl font-bold inline mb-4`}
          >
            Skills
          </p>
          <p className={`${isAnimated} py-4`}>
            These are the technologies I've worked with:
          </p>
        </div>
        {/*Container for icons*/}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
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
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              class="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636] "
            >
              <img className="w-20 mx-auto " src={JavaScript} alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0.1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              class="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636] "
            >
              <img className="w-20 mx-auto " src={ReactImg} alt="" />
            </motion.div>
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
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              class="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636] "
            >
              <img className="w-20 mx-auto " src={Node} alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              class="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636] "
            >
              <img className="w-20 mx-auto " src={Mongo} alt="" />
            </motion.div>
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
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              class="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636] "
            >
              <img className="w-20 mx-auto " src={Tailwind} alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              class="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636] "
            >
              <img className="w-20 mx-auto " src={Redux} alt="" />
            </motion.div>
          </motion.div>

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
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              class="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636] "
            >
              <img className="w-20 mx-auto " src={Python} alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 0.7 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
              class="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black border-[0.5px] border-[#363636] "
            >
              <img className="w-20 mx-auto " src={Postgre} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
