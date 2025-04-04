import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  alt,
  source_code_link,
  live_link,
}) => {
  return (
    <div className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]">
      <div className="relative h-[230px] w-full">
        <img
          src={image}
          alt={alt}
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
          {/* <div
            onClick={() => window.open(live_link, "_blank")}
            className="black-gradient mr-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            <img
              src="/assets/webLink.png"
              alt="live link"
              className="h-full w-full rounded-full object-contain"
            />
          </div> */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            <img
              src="/assets/github.png"
              alt="source code"
              className="h-3/4 w-3/4 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-[24px] font-bold text-white">{name}</h3>
        <p className="mt-2 text-[14px] text-secondary">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <p key={i} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  // Separate projects into categories
  const dataAnalystProjects = projects.filter(
    (project) => project.category === "Data Analyst"
  );
  const mernStackProjects = projects.filter(
    (project) => project.category === "MERN Stack"
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] leading-[30px] text-secondary"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      {/* Data Analyst Projects */}
      <div className="mt-10">
        <h3 className="text-[20px] font-bold text-white">Data Analyst Projects</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {dataAnalystProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MERN Stack Projects */}
      <div className="mt-10">
        <h3 className="text-[20px] font-bold text-white">MERN Stack Projects</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {mernStackProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");