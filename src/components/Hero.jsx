import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ParticlesContainer from "./ParticlesContainer";

const Hero = () => {
  return (
    <section
      className={`flex-between-center relative mx-auto h-screen w-full flex-col`}
    >
      <ParticlesContainer />
      <div className="flex-between-center flex-col-reverse md:flex-row">
        {/* Text Section */}
        <div
          className={`top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-col items-center gap-5 md:items-start`}
        >
          <motion.div variants={textVariant()}>
            <h1
              className={`${styles.heroHeadText} text-center text-white md:text-left`}
            >
              Welcome to my <span className="text-[#915EFF]">Portfolio!</span>
            </h1>
            {/* <p
              className={`${styles.heroSubText} mt-2 text-center text-white-100 md:text-left`}
            >
              I am a front-end developer with expertise in <br />
              <span className="gradient-text">MERN / MEVN Stack</span>.
            </p> */}
          </motion.div>
          <div className="mt-5 flex gap-4">
            <a
              href="/Ritesh_Pathak_DataResume.pdf"
              download="Ritesh resume.pdf"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:from-indigo-500 hover:to-purple-500"
            >
              <span className="relative z-10">📄 Download Resume</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          variants={textVariant()}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative z-[1] flex items-center justify-center"
        >
          {/* Background Element */}
          <div className="absolute -z-[1] h-[350px] w-[350px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-50 blur-3xl md:h-[450px] md:w-[450px]" />

          {/* Image */}
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full shadow-lg md:h-[400px] md:w-[400px]">
            <img
              src="./myImage2.png"
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
