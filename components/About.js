import { portfolioData } from "@/data/portfolioData";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { linkedin, skills } = portfolioData;

  const sectionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  };

  const sectionParagraphVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.2 } },
  };

  const aboutVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.2 } },
  };

  const skillsVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.3 } },
  };

  const hrVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1, delay: 0.1 } },
  };

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const aboutControls = useAnimation();
  const skillsControls = useAnimation();

  useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    } else {
      aboutControls.start("hidden");
    }
  }, [aboutInView, aboutControls]);

  useEffect(() => {
    if (skillsInView) {
      skillsControls.start("visible");
    } else {
      skillsControls.start("hidden");
    }
  }, [skillsInView, skillsControls]);

  return (
    <section className="font-serif dark:bg-black pt-24">
      <div className="flex justify-center flex-col items-center text-center">
        <motion.h1
          className="text-xl md:text-2xl font-zina lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-gray-200"
          initial="hidden"
          animate={aboutControls}
          variants={sectionVariants}
        >
          about<span className="from-purple-600 via-pink-600 to-fuchsia-600 bg-gradient-to-r bg-clip-text text-transparent background-animate dark:text-transparent">Me</span>.
        </motion.h1>
        <br />
        <motion.hr
          initial="hidden"
          animate={aboutControls}
          variants={hrVariants}
          className="border-fuchsia-800 border-t-4 rounded w-8 dark:border-gray-200"
        />
        <br />
        <motion.p
          className="text-sm md:text-base px-12 lg:px-64 lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 dark:text-gray-300"
          initial="hidden"
          animate={aboutControls}
          variants={sectionParagraphVariants}
        >
          Discover more about me, my skills, and my interests in the field of
          technology here
        </motion.p>
      </div>
      <br />
      <br />
      <div className="flex justify-around flex-col px-4 md:px50 lg:flex-row items-stretch">
        {/* About Section */}
        <section className="py-12 px-4">
          <motion.div
            initial="hidden"
            animate={aboutControls}
            variants={aboutVariants}
            className="container mx-auto"
          >
            <h2 className="text-base font-mono md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 text-gray-900 dark:text-gray-300">
              getToKnowMe <span className="text-fuchsia-700">=</span>{" "}
              <span className="text-blue-700">{"{"}</span>
              <span className="text-green-800">&#8220;</span>
            </h2>
            <motion.p
              initial="hidden"
              animate={aboutControls}
              variants={skillsVariants}
              className="text-sm md:text-base font-satoshi lg:text-base xl:text-base px-2 md:px-8 2xl:text-xl text-gray-600 dark:text-gray-300"
              ref={aboutRef}
            >
              I'm a <b>Computer Science</b> undergrad student. I'm passionate
              about <b>Web Development</b> and <b>Android App Development</b>,
              aiming to create seamless user experience and interfaces. Also,
              check out some of my work on the{" "}
              <Link
                href={"/projects"}
                className="underline text-fuchsia-800 font-bold italic dark:text-fuchsia-400"
              >
                {" "}
                Projects
              </Link>{" "}
              page.
              <br />
              <br />
              Feel free to connect or follow me on my{" "}
              <Link
                className="underline text-fuchsia-800 font-bold italic dark:text-fuchsia-400"
                href={linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </Link>{" "}
              where I share valuable insights on{" "}
              <b>Web Development and Programming</b>.
              <br />
              <br />
              I'm <b>open</b> to job opportunities where I can apply,{" "}
              <b>learn</b> and <b>expand</b> my skills & experience. If you have
              a good opportunity that matches my skills, feel free to{" "}
              <b>contact</b> me.
            </motion.p>
            <br />
            <h2 className="text-base font-mono md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 text-gray-900 dark:text-gray-300">
              <span className=" text-green-800">&#8221;</span>
              <span className="text-blue-700">{"}"}</span>;
            </h2>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-12 px-4" id="skills">
          <motion.div
            initial="hidden"
            animate={skillsControls}
            variants={skillsVariants}
            className="container mx-auto"
          >
            <h2 className="text-base font-mono md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 text-gray-900 dark:text-gray-300">
              <span className="text-fuchsia-700">const</span> mySkills{" "}
              <span className="text-fuchsia-700">=</span>{" "}
              <span className="text-blue-700">{"["}</span>
            </h2>
            <div
              className="flex flex-wrap gap-3 md:gap-4 px-2 md:px-8 dark:text-gray-200"
              ref={skillsRef}
            >
              {skills?.map((skill, index) => (
                <motion.p
                  initial="hidden"
                  animate={skillsControls}
                  variants={{
                    hidden: { y: 50, opacity: 0 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, delay: index * 0.1 },
                    },
                  }}
                  key={index}
                  className="bg-neutral-200 font-bold font-satoshi text-gray-700 p-3 rounded-md text-[0.8rem] md:text-[0.95rem] dark:bg-neutral-900 dark:text-gray-200"
                >
                  {skill}
                </motion.p>
              ))}
            </div>
            <br />
            <h2 className="text-base font-mono md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 text-gray-900 dark:text-gray-300">
              <span className="text-blue-700">{"]"}</span>
              {";"}
            </h2>
          </motion.div>
        </section>
      </div>
    </section>
  );
};

export default About;
