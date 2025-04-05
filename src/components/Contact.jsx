import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Button } from "@mui/material";
import { Email, LinkedIn, GitHub, ArrowOutward } from "@mui/icons-material";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 overflow-hidden md:mt-12 md:flex-row ">
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.5)}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <div className="flex-center-center mt-8 flex-wrap gap-2">
            <div>
              <a href="mailto:pathakriteesh982@gmail.com">
                <Button variant="outlined" endIcon={<Email />}>
                  Email
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/ritesh-pathak-a6b729306/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<LinkedIn />}>
                  LinkedIn
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/RiteshPathak15"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<GitHub />}>
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="md:h-auto md:flex-1"
        >
          <img
            src="/assets/contactUs.png"
            alt="contact-us"
            className="mx-auto h-[300px] w-[300px] object-contain md:h-[400px] md:w-[400px]"
          />
        </motion.div>
      </div>
      <div className="mb-4 ml-5">
        <h1 className="my-3  text-xl font-semibold text-slate-50">
          Thanks for scrolling.
        </h1>
        <div>
          <a
            target="_blank"
          
             href="/Ritesh_Pathak_DataResume.pdf"
          >
            <Button variant="outlined" endIcon={<ArrowOutward />}>
              Resume
            </Button>
          </a>
        </div>
      </div>
      <hr className="ml-2" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
