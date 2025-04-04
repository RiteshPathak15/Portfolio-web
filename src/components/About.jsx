import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, technologies, tools } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useMediaQuery } from "@mui/material";

const ServiceCard = ({ index, title, icon }) => (
  <div className="w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.1 + 0.2, 0.6)}
      className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
      >
        <img src={icon} alt={title} className="h-16 w-16 object-contain" />

        <h3 className="text-center text-[20px] font-bold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  const isSmallScreen = useMediaQuery("(max-width:587px)");
  const isLargeScreen = useMediaQuery("(min-width:1248px)");
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        Hi, I'm a passionate <strong>Data Analyst</strong> &{" "}
        <strong>Software Developer</strong> with hands-on experience in{" "}
        <strong>Python</strong>, <strong>SQL</strong>, <strong>Excel</strong>,{" "}
        <strong>Power BI</strong>, and <strong>Scikit-learn</strong> for turning
        complex data into actionable insights. I also bring strong{" "}
        <strong>full-stack development</strong> skills using the{" "}
        <strong>MERN stack</strong> (<strong>MongoDB</strong>,{" "}
        <strong>Express.js</strong>, <strong>React</strong>,
        <strong>Node.js</strong>) to build dynamic, user-focused web
        applications. I love working at the intersection of{" "}
        <strong>data</strong> and <strong>technology</strong>—whether it's{" "}
        <strong>analyzing trends</strong>, <strong>automating workflows</strong>
        , or building <strong>interactive dashboards</strong> and{" "}
        <strong>web apps</strong>. I thrive on solving{" "}
        <strong>real-world problems</strong> with <strong>clean</strong>,{" "}
        <strong>scalable solutions</strong>.
      </motion.p>

      <div
        className={`flex-center-center ${
          isSmallScreen ? "linearToL" : isLargeScreen ? "linearToB" : "circle"
        } mt-20 flex-wrap gap-10`}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="flex-center-center mt-20 flex-col">
        <h3 className={`${styles.sectionHeadText} marker`}>Skills</h3>
        <div className="mt-2 flex flex-wrap  justify-center gap-10 ">
          {technologies.map((item, i) => (
            <div key={i} className="flex-around-center w-[80px] flex-col">
              <img src={item.icon} width="100%" alt={item.name} />
              <p className="text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-center-center mt-20 flex-col">
        <h3 className={styles.sectionSubText}>Tools and Software</h3>
        <div className="mt-2 flex flex-wrap  justify-center gap-10 ">
          {tools.map((item, i) => (
            <div key={i} className="flex-around-center w-[80px] flex-col">
              <img src={item.icon} width="100%" alt={item.name} />
              <p className="text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
