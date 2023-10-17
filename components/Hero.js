import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const Hero = () => {
  const { name } = portfolioData;

  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.6 } },
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const nameControls = useAnimation();
  const descriptionControls = useAnimation();

  useEffect(() => {
    nameControls.start("visible");
    descriptionControls.start("visible");
  }, [nameControls, descriptionControls]);

  return (
    <section className="px-4 relative font-satoshi">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-200 via-rose-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black" />
      <div className="container mx-auto text-center flex justify-center flex-col min-h-screen relative items-center z-10">
        <motion.h1
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 dark:text-white"
          initial="hidden"
          animate={nameControls}
          variants={nameVariants}
        >
          Hi👋, I'm{" "}
          <span className="nameText font-bold from-purple-600 via-pink-600 to-fuchsia-600 bg-gradient-to-r bg-clip-text text-transparent background-animate dark:text-transparent">
            {name}
          </span>
        </motion.h1>
        <motion.p
          className="text-sm md:text-sm lg:text-lg xl:text-lg 2xl:text-xl dark:text-white"
          initial="hidden"
          animate={descriptionControls}
          variants={descriptionVariants}
        >
          A passionate{" "}
          <b>
            <span className="nameText">Web</span>
          </b>{" "}
          &{" "}
          <b>
            <span className="nameText">Software Developer</span>
          </b>
        </motion.p>
      </div>

      <div className="absolute bottom-20 md:bottom-14 lg:bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 relative">
          <div className="w-6 h-10 border-2 border-fuchsia-600 dark:border-gray-200 rounded-full absolute left-1/2 transform -translate-x-1/2">
            <div
              className={`w-2 h-2 rounded-full bg-fuchsia-600 mx-auto ${
                !scrolled ? "animate-slide-fade" : ""
              } dark:bg-gray-200 dark:border-black dark:border-opacity-50`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
