import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState("default");
  const [bigCursorVariant, setBigCursorVariant] = useState("default");
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterName = () => {
      setVariant("name");
      setBigCursorVariant("name");
    };

    const handleMouseEnter = () => {
      setVariant("link");
      setBigCursorVariant("hidden");
    };

    const handleMouseLeave = () => {
      setVariant("default");
      setBigCursorVariant("default");
    };

    const handleMouseEnterPage = () => {
      setVariant("default");
      setBigCursorVariant("default");
    };

    const handleMouseLeavePage = () => {
      setVariant("hidden");
      setBigCursorVariant("hidden");
    };

    const handleMouseDown = () => {
      setVariant("click");
      setBigCursorVariant("click");
    };

    const handleMouseUp = () => {
      setVariant("default");
      setBigCursorVariant("default");
    };

    const handleMouseEnterOnImage = () => {
      setVariant("image");
      setBigCursorVariant("hidden");
    };

    const handleMouseEnterOnButton = () => {
      setVariant("button");
      setBigCursorVariant("hidden");
    };

    window.addEventListener("mousemove", handleMouseMove);

    const nameTextElements = Array.from(
      document.getElementsByClassName("nameText")
    );
    nameTextElements.forEach((text) => {
      text.addEventListener("mouseenter", handleMouseEnterName);
      text.addEventListener("mouseleave", handleMouseLeave);
    });

    const button = Array.from(document.getElementsByClassName("cursorButton"));
    button.forEach((btn) => {
      btn.addEventListener("mouseenter", handleMouseEnterOnButton);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });

    const projectCardImage = Array.from(
      document.getElementsByClassName("projectCardImage")
    );
    projectCardImage.forEach((image) => {
      image.addEventListener("mouseenter", handleMouseEnterOnImage);
      image.addEventListener("mouseleave", handleMouseLeave);
    });

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    const body = document.querySelector("body");
    body.addEventListener("mousedown", handleMouseDown);
    body.addEventListener("mouseup", handleMouseUp);
    body.addEventListener("mouseenter", handleMouseEnterPage);
    body.addEventListener("mouseleave", handleMouseLeavePage);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
      body.addEventListener("mousedown", handleMouseDown);
      body.addEventListener("mouseup", handleMouseUp);
      body.addEventListener("mouseenter", handleMouseEnterPage);
      body.addEventListener("mouseleave", handleMouseLeavePage);

      nameTextElements.forEach((text) => {
        text.addEventListener("mouseenter", handleMouseEnterName);
        text.addEventListener("mouseleave", handleMouseLeave);
      });

      projectCardImage.forEach((image) => {
        image.addEventListener("mouseenter", handleMouseEnterOnImage);
        image.addEventListener("mouseleave", handleMouseLeave);
      });

      button.forEach((btn) => {
        btn.addEventListener("mouseenter", handleMouseEnterOnButton);
        btn.addEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [router.pathname]);

  const cursorVariants = {
    default: {
      opacity: 1,
      x: position.x - 13,
      y: position.y - 13,
    },
    click: {
      opacity: 1,
      x: position.x - 13,
      y: position.y - 13,
      scale: 0.8,
    },
    hidden: {
      x: position.x - 13,
      y: position.y - 13,
      opacity: 0,
    },
    name: {
      x: position.x - 13,
      y: position.y - 13,
      opacity: 0,
    },
  };

  const cursorDotVariants = {
    default: {
      x: position.x - 2.5,
      y: position.y - 2.5,
      opacity: 1,
    },
    link: {
      height: 36,
      width: 36,
      x: position.x - 18,
      y: position.y - 18,
      backgroundColor: "rgb(229 231 235)",
      mixBlendMode: "difference",
      opacity: 1,
    },
    click: {
      x: position.x - 2.5,
      y: position.y - 2.5,
      scale: 0.4,
      opacity: 1,
    },
    hidden: {
      x: position.x - 2.5,
      y: position.y - 2.5,
      opacity: 0,
    },
    name: {
      height: 60,
      width: 60,
      x: position.x - 30,
      y: position.y - 30,
      backgroundColor: "rgb(229 231 235)",
      mixBlendMode: "difference",
      opacity: 1,
    },
    image: {
      height: 90,
      width: 160,
      borderRadius: "20px",
      x: position.x - 80,
      y: position.y - 45,
      backgroundColor: "rgb(229 231 235)",
      mixBlendMode: "difference",
      opacity: 1,
    },
    button: {
      height: 24,
      width: 120,
      borderRadius: "9999px",
      x: position.x - 60,
      y: position.y - 12,
      backgroundColor: "rgb(229 231 235)",
      mixBlendMode: "difference",
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className="h-[26px] w-[26px] border-[1.5px] border-solid border-fuchsia-600 mix dark:border-gray-200 rounded-[50%] fixed top-0 left-0 z-[999] pointer-events-none"
        variants={cursorVariants}
        animate={bigCursorVariant}
      />
      <motion.div
        className="h-[5px] w-[5px] rounded-[50%] fixed top-0 left-0 z-[999] pointer-events-none bg-fuchsia-600 dark:bg-gray-200"
        variants={cursorDotVariants}
        animate={variant}
      />
    </>
  );
};

export default MouseFollower;
