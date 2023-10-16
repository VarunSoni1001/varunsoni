import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  githubLink,
  liveLink,
  imageUrl,
  skills,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [showReadButton, setshowReadButton] = useState(false);

  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      setshowReadButton(
        descriptionRef.current.scrollHeight !==
          descriptionRef.current.clientHeight
      );
    }
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="font-satoshi relative overflow-hidden w-full p-10 dark:text-white dark:bg-black">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Link href={liveLink} target="_blank" rel="noopener noreferrer">
            <img
              loading="lazy"
              src={imageUrl}
              alt={title}
              className="projectCardImage h-auto w-full object-cover transition-all duration-300 ease-in-out rounded-3xl border bg-white border-fuchsia-900 aspect-video dark:brightness-90 dark:border-gray-900"
            />
          </Link>
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 pb-2 dark:text-white">
              {title}
            </h3>
            <motion.p
              initial={false}
              animate={isExpanded ? "open" : "closed"}
              variants={{
                open: { opacity: 1, height: "auto" },
                closed: { opacity: 1, height: "3.35rem" },
              }}
              className={`text-gray-600 text-base md:text-lg lg:text-xl transition-colors duration-300 ease-in-out ${
                !isExpanded ? "line-clamp-2" : ""
              } dark:text-gray-400`}
              ref={descriptionRef}
            >
              {description}
            </motion.p>
            {showReadButton && (
              <button
                onClick={toggleExpand}
                className="text-fuchsia-800 text-sm lg:text-base mt-2 cursor-pointer underline underline-offset-2 dark:text-gray-50"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>

          <section className="py-6" id="projectSkills">
            <h2 className="text-sm md:text-base xl:text-lg 2xl:text-2xl mb-4 text-gray-900">
              <span className="text-fuchsia-700 dark:text-gray-50">
                Skills:
              </span>
            </h2>
            <div className="container px-auto">
              <div className="flex flex-wrap gap-[0.35rem] md:gap-2 px-2 md:px-4">
                {skills?.map((skill, index) => (
                  <p
                    key={index}
                    className="bg-neutral-200 font-semibold font-satoshi text-gray-700 p-2 rounded-md text-[0.7rem] md:text-[0.85rem] dark:bg-neutral-900 dark:text-gray-200"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <div className="py-4 flex justify-center space-x-2">
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white items-center rounded-full bg-fuchsia-900 border hover:border-fuchsia-900 py-1 px-2 focus:outline-none hover:bg-white text-sm lg:text-base mt-4 lg:mt-0 transition-all duration-300 hover:text-fuchsia-900 dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white"
            >
              <FaGithub />
            </Link>
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-white gap-2 items-center rounded-full bg-fuchsia-900 border hover:border-fuchsia-900 py-1 px-3 focus:outline-none hover:bg-transparent text-sm lg:text-base mt-4 lg:mt-0 transition-all duration-300 hover:text-fuchsia-900 dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white"
            >
              <span>View Live</span>
              <FaExternalLinkAlt size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
