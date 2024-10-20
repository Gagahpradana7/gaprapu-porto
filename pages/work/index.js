import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import WorkSliderBtns from "../../components/WorkSliderBtns";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { fadeIn } from "../../variants";

const projects = [
  {
    num: "01",
    title: "Gmovie",
    category: "Web",
    description:
      "A website offering a comprehensive movie browsing experience. Users can explore a vast collection of movies, view detailed information, and ask AI about recommendation movies.",
    stack: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Express" },
      { name: "Node JS" },
      { name: "Sequelize" },
      { name: "PostgreSQL" },
      { name: "Rest API" },
      { name: "AWS" },
    ],
    image: "/Gmovie.png",
    live: "https://individual-project-cb18b.web.app/",
    github: "#",
  },
  {
    num: "02",
    title: "GGgame",
    category: "Web",
    description:
      "A website offering a comprehensive game browsing experience. Users can explore a vast collection of games, view detailed information, and add their favorites to a personalized wishlist. The site features advanced search functionality and infinite scrolling for seamless navigation.",
    stack: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Next.JS" },
      { name: "MongoDB" },
    ],
    image: "/ggame.png",
    live: "https://gggame.vercel.app/",
    github: "",
  },
  {
    num: "03",
    title: "Fitmate",
    category: "Web",
    description:
      "A web application for online clothing fitting, where users can try on outfits and receive personalized recommendations. Users can browse stores created by themselves or others, use tokens for fitting sessions, and purchase additional tokens to access more fittings before making a purchase.",
    stack: [
      { name: "React JS" },
      { name: "Tailwind CSS" },
      { name: "Next.JS" },
      { name: "MongoDB" },
    ],
    image: "/Fitmate.png",
    live: "https://fitmate-six.vercel.app/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <Bulb />
      <Circles />
      <motion.section
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="min-h-[80vh] flex flex-col justify-center xl:h-full xl:px-0 xl:mt-0 mt-28"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl font-extrabold text-transparent outlined-text xl:mt-0 mt-8">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex flex-wrap gap-4">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex gap-6">
                  <div className="relative group">
                    <Link href={project.live} target="_blank">
                      <div className="bg-white/10 p-4 rounded-full transition-all duration-300">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-colors duration-300" />
                      </div>
                    </Link>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Live
                    </div>
                  </div>
                  <div className="relative group">
                    <Link href={project.github} target="_blank">
                      <div className="bg-white/10 p-4 rounded-full transition-all duration-300">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-colors duration-300" />
                      </div>
                    </Link>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      GitHub Repository
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px]"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, idx) => {
                  return (
                    <SwiperSlide key={idx} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative h-full w-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute left-0 bottom-[calc(50%_-_22px)]
                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-blue-600 text-primary text-[22px] w-[44px] h-[44px] flex
                justify-center items-center transision-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Work;
