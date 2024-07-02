"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsBoxArrowInUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "React-ecommerce Website",
    title: "React-ecommerce Website",
    description:
      "An innovative React eCommerce project delivering seamless user experience with responsive design.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/ecomm.jpg",
    live: "https://simpleecommerce.vercel.app/",
    github: "https://github.com/Simplevhick/EcommerceWebsite",
  },
  {
    num: "02",
    category: "A real-time chat messaging app",
    title: "project 2",
    description:
      "Where real-time communication meets sleek design and seamless performance.",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Node.js",
      },
    ],
    image: "/assets/chatty.jpg",
    live: "https://simplechat-six.vercel.app/",
    github: "https://github.com/Simplevhick/simplechat",
  },
  {
    num: "03",
    category: "Simpletweet",
    title: "project 3",
    description:
        "Experience the pulse of social media through a seamless interface",
    stack: [
      {
        name: "Next.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "Node.js",
      },
    ],
    image: "/assets/tweet.jpg",
    live: "https://simpletweet.vercel.app/",
    github: "https://github.com/Simplevhick/simpletweet",
  },
  {
    num: "04",
    category: "To-Do List",
    title: "project 4",
    description:
        "typically involves creating and managing a list of tasks and activities that need to be completed within a specific timeframe",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Css 3",
      },
      
    ],
    image: "/assets/todo.jpg",
    live: "https://calm-puppy-c96b5b.netlify.app/",
    github: "https://github.com/Simplevhick/TodoList",
  },
  {
    num: "05",
    category: "Youtube Clone",
    title: "project 5",
    description:
        "Youtube Clone with react",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Css 3",
      },
      
    ],
    image: "/assets/ytclone.jpg",
    live: "https://simpleyt.vercel.app/",
    github: "https://github.com/Simplevhick/simpleyt",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="pix"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
