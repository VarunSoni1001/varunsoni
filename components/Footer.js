import React from "react";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 dark:text-neutral-200 bg-white dark:bg-black">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-neutral-200"
          >
            <span className="text-2xl md:text-3xl font-zina uppercase">
              V
              <span
                className={
                  "from-purple-600 via-pink-600 to-fuchsia-600 bg-gradient-to-r bg-clip-text text-transparent background-animate dark:text-transparent"
                }
              >
                S
              </span>
            </span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-neutral-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4 font-cabinet">
            &copy; Copyright 2023. Made by{" "}
            <Link href={"/"} className="underline font-bold">
              Varun Soni
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
            <Link
              href={"https://github.com/VarunSoni1001"}
              className="text-gray-500 dark:text-neutral-200 hover:text-fuchsia-900 dark:hover:text-fuchsia-200 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on GitHub"
            >
              <BsGithub />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/varunsoni1001"}
              className="text-gray-500 dark:text-neutral-200 hover:text-fuchsia-900 dark:hover:text-fuchsia-200 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on Linkedin"
            >
              <BsLinkedin />
            </Link>
            <Link
              href={"https://x.com/Varunsoni1001"}
              className="text-gray-500 dark:text-neutral-200 hover:text-fuchsia-900 dark:hover:text-fuchsia-200 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on X (Twitter)"
            >
              <FaXTwitter />
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
