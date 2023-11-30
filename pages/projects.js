import React, { useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projectsData";
import PageTransition from "@/components/PageTransition";

const Projects = () => {
  const { projects } = projectsData;

  useEffect(() => {
    document.title = `Projects | Varun Soni - Software & Web Developer`;
  }, []);

  return (
    <>
      <PageTransition />
      <div className="bg-gradient-to-b inset-0 from-fuchsia-200 via-rose-50 to-white absolute dark:from-black dark:via-black dark:to-black" />
      <div className="font-satoshi relative">
        <div className="flex justify-center flex-col items-center text-center">
          <h1 className="text-xl md:text-2xl font-zina xl:text-4xl 2xl:text-5xl mt-40 dark:text-gray-200">
            my
            <span className="from-purple-600 via-pink-600 to-fuchsia-600 bg-gradient-to-r bg-clip-text text-transparent background-animate dark:text-transparent">
              Projects
            </span>
            .
          </h1>
          <br />
          <hr className="border-fuchsia-800 border-t-4 rounded w-8 dark:border-gray-200" />
          <br />
          <p className="text-sm md:text-base px-12 lg:px-64 font-cabinet lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 dark:text-gray-300">
            Feel free to explore my projects below
          </p>
        </div>
        <div className="flex flex-wrap justify-center dark:bg-transparent pt-20">
          {projects?.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              imageUrl={project.imageUrl}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
