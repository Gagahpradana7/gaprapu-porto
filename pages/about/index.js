import react, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiBlogger,
  SiExpress,
  SiMongodb,
  SiEmberdotjs,
  SiApollographql,
  SiAxios,
  SiSequelize,
  SiPostgresql,
  SiGraphql,
  SiRedis,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Full Stack Developer",
        icons: [
          <div key="fullstack-icons" className="text-xl flex gap-3">
            <FaJs />
            <FaHtml5 />
            <FaCss3 />
            <FaReact />
            <SiNextdotjs />
            <SiExpress />
            <SiMongodb />
            <SiEmberdotjs />
            <SiApollographql />
            <SiAxios />
            <FaNodeJs />
            <SiSequelize />
            <SiPostgresql />
            <SiGraphql />
            <SiRedis />
            <FaAws />
          </div>,
        ],
      },
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="javascript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiBlogger key="blogger" />,
          <FaWordpress key="wordpress" />,
          <SiMongodb key="mongodb" />,
        ],
      },
      {
        title: "Front-End Dev",
        icons: [
          <FaHtml5 key="frontend-html5" />,
          <FaCss3 key="frontend-css3" />,
          <FaReact key="frontend-react" />,
          <SiNextdotjs key="frontend-nextjs" />,
          <SiAxios key="frontend-axios" />,
          <SiApollographql key="frontend-apollo" />,
        ],
      },
      {
        title: "Back-End Dev",
        icons: [
          <SiNextdotjs key="backend-nextjs" />,
          <SiExpress key="backend-express" />,
          <SiMongodb key="backend-mongodb" />,
          <SiApollographql key="backend-apollo" />,
          <FaNodeJs key="backend-nodejs" />,
          <SiSequelize key="backend-sequelize" />,
          <SiPostgresql key="backend-postgresql" />,
          <SiGraphql key="backend-graphql" />,
          <SiRedis key="backend-redis" />,
          <FaAws key="backend-aws" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Designer",
        stage: "Studio Web, Warungpring - 11/12/2023 - 1/12/2024",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Full Stack Javascript - Hacktiv8, Jakarta, Indonesia",
        stage: "2024",
      },
      {
        title: "Network & Computer engineering - Smk Muhammdiyah Belik",
        stage: "2024",
      },
    ],
  },
];

const About = () => {
  const [idx, setIdx] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0, 2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      ></motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0, 2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-12 text-5xl"
          >
            Passionate <span className="text-accent">Developer</span> Ready to
            Take on New <span className="text-accent"> Challenges.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0, 4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            As a new graduate, I’m genuinely excited to dive into the world of
            development and tackle fresh challenges head-on. Whether it’s
            crafting beautiful frontend designs, building robust backend
            systems, or exploring full-stack projects, I’m all about learning
            and growing in every opportunity. I love collaborating with teams to
            brainstorm ideas and create solutions that not only meet business
            goals but also make a positive impact on users. Let’s connect and
            build something amazing together!
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0, 6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={0} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 ml-32">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Project
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0, 4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIdx) => (
              <div
                key={`about-item-${itemIdx}`}
                className={`${
                  idx === itemIdx &&
                  `text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300`
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] 
                after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIdx(itemIdx)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[idx].info.map((item, itemIdx) => (
              <div
                key={`info-item-${itemIdx}`}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/70"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIdx) => (
                    <div
                      key={`icon-${iconIdx}`}
                      className="text-2xl text-white"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
