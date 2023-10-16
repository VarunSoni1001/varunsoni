import { portfolioData } from "@/data/portfolioData";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CertificationsSection = () => {
  const { certifications } = portfolioData;
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [isCardExpanded, setIsCardExpanded] = useState(
    Array(certifications.length).fill(false)
  );
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardClick = (index) => {
    if (isSmallDevice) {
      const updatedIsCardExpanded = [...isCardExpanded];
      updatedIsCardExpanded[index] = !isCardExpanded[index];
      setIsCardExpanded(updatedIsCardExpanded);
      setExpandedIndex(index);
    }
  };

  const controls = certifications?.map(() => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return {
      ref,
      inView,
      animationControls: useAnimation(),
    };
  });

  useEffect(() => {
    controls.forEach((control, index) => {
      if (control.inView) {
        control.animationControls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 },
        });
      }
    });
  }, [controls]);

  return (
    <section className="p-8 md:p-16 font-satoshi bg-white">
      <div className="container mx-auto text-center">
        <div className="flex flex-col justify-center items-center mb-8 lg:mb-14">
          <h3 className="text-xl md:text-2xl font-zina lg:text-3xl xl:text-4xl 2xl:text-5xl">
            my<span className="text-fuchsia-800">Certificates</span>.
          </h3>
          <br />
          <hr className="border-fuchsia-800 border-t-4 rounded w-8" />
          <br />
          <p className="text-sm md:text-base px-12 lg:px-64 lg:text-lg font-cabinet xl:text-xl 2xl:text-2xl text-gray-700">
            Here, you can find my certifications
          </p>
        </div>
        <div className="max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] grid grid-cols-1 mx-auto gap-10">
          {certifications?.map((cert, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden rounded-3xl ${
                isSmallDevice ? "cursor-pointer" : ""
              }`}
              onClick={() => handleCardClick(index)}
              initial={
                index % 2 ? { opacity: 0, x: -20 } : { opacity: 0, x: 20 }
              }
              animate={controls[index].animationControls}
              ref={controls[index].ref}
              transition={{ ease: "linear" }}
            >
              {/* Image */}
              <img
                loading="lazy"
                src={cert.img}
                alt={cert.title}
                className="w-full h-auto border border-fuchsia-300 rounded-3xl group-hover:border-fuchsia-800 transition-all ease-in-out transform"
              />

              {/* Title Text */}
              {isSmallDevice && (
                <div
                  className={`absolute inset-0 max-h-[70%] flex items-center justify-center rounded-3xl bg-fuchsia-900 bg-opacity-90 transition-all duration-500 ease-in-out ${
                    isCardExpanded[index]
                      ? "translate-y-[30%]"
                      : "translate-y-[130%]"
                  }`}
                >
                  <div className="text-white text-sm lg:text-base p-5 relative w-full">
                    {cert.title}
                  </div>
                </div>
              )}

              {/* Title on large devices */}
              {!isSmallDevice && (
                <div className="absolute inset-0 max-h-[70%] flex items-center justify-center bg-fuchsia-900 bg-opacity-90 transition-all duration-500 ease-in-out p-5 transform translate-y-[130%] group-hover:translate-y-[30%] rounded-3xl">
                  <div className="text-white text-sm lg:text-base p-5 relative w-full">
                    {cert.title}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
