import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiDownload, HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isProjectPage, setIsProjectPage] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const router = useRouter();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (!isSmallScreen) {
      setIsMobileMenuOpen(false);
    }
  }, [router.pathname, isSmallScreen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (router.pathname === "/") {
      setIsHomePage(true);
      setIsProjectPage(false);
      setIsContactPage(false);
    } else if (router.pathname === "/projects") {
      setIsHomePage(false);
      setIsProjectPage(true);
      setIsContactPage(false);
    } else if (router.pathname === "/contact") {
      setIsHomePage(false);
      setIsProjectPage(false);
      setIsContactPage(true);
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <nav
      className={`fixed w-full left-0 z-[100] backdrop-blur-md font-satoshi ${
        isMobileMenuOpen ? "min-h-screen" : ""
      } text-gray-600 transition duration-300 ease-in-out ${
        scrolled
          ? "bg-neutral-100 shadow-lg border-b border-fuchsia-900 dark:bg-black dark:shadow-none dark:border-white"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto container flex flex-wrap justify-between p-5 md:flex-row flex-col items-center">
        <Link
          href={"/"}
          className={`flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-black lg:items-center lg:justify-center md:mb-0`}
        >
          <span className="text-2xl md:text-3xl uppercase font-zina font-normal dark:text-gray-100">
            Varun{" "}
            <span
              className={
                scrolled
                  ? "from-purple-600 via-pink-600 to-fuchsia-600 bg-gradient-to-r bg-clip-text text-transparent background-animate dark:text-transparent transition-all ease-in-out duration-300"
                  : ""
              }
            >
              Soni
            </span>
          </span>
        </Link>
        <div className="md:hidden mt-5">
          <button
            onClick={toggleMobileMenu}
            className={`text-gray-900 hover:text-fuchsia-900 transition-colors duration-300 ease-in-out dark:hover:text-fuchsia-600 dark:text-gray-200`}
          >
            {!isMobileMenuOpen ? (
              <HiMenu
                size={20}
                className={`transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "hover:rotate-90" : "hover:-rotate-90"
                }`}
              />
            ) : (
              <HiXMark
                size={20}
                className={`transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "hover:rotate-45" : "hover:-rotate-45"
                }`}
              />
            )}
          </button>
        </div>
        <AnimatePresence>
          {(isMobileMenuOpen || !isSmallScreen) && (
            <motion.nav
              initial={variants.closed}
              animate={variants.open}
              exit={variants.closed}
              variants={variants}
              className={`text-center font-medium md:text-left lg:w-2/5 md:w-auto mt-4 md:mt-0 md:flex`}
            >
              <Link
                href={"/"}
                className={`block md:inline-block ml-0 md:ml-4 ${
                  isHomePage
                    ? "text-fuchsia-900 font-[900] hover:text-black nav-link-selected"
                    : "text-black hover:text-fuchsia-900 nav-link"
                } ${
                  isMobileMenuOpen ? "mb-4 mt-20" : ""
                } transition-colors duration-300 dark:text-gray-100 dark:hover:text-fuchsia-200`}
              >
                Home
              </Link>
              <Link
                href={"/projects"}
                className={`block md:inline-block ml-0 md:ml-4 ${
                  isProjectPage
                    ? "text-fuchsia-900 font-[900] hover:text-black nav-link-selected"
                    : "text-black hover:text-fuchsia-900 nav-link"
                } ${
                  isMobileMenuOpen ? "my-4" : ""
                } transition-colors duration-300 dark:text-gray-100 dark:hover:text-fuchsia-200`}
              >
                Projects
              </Link>
              <Link
                href={"/contact"}
                className={`block md:inline-block ml-0 md:ml-4 ${
                  isContactPage
                    ? "text-fuchsia-900 font-[900] hover:text-black nav-link-selected"
                    : "text-black hover:text-fuchsia-900 nav-link"
                } ${
                  isMobileMenuOpen ? "my-4" : ""
                } transition-colors duration-300 dark:text-gray-100 dark:hover:text-fuchsia-200`}
              >
                Contact
              </Link>
            </motion.nav>
          )}{" "}
          {/* Hide the links when the mobile menu is closed on small screens */}
        </AnimatePresence>
        <div
          className={`text-white lg:w-2/5 inline-flex items-center lg:justify-end lg:ml-0 ${
            isMobileMenuOpen ? "mt-4" : "mt-0 hidden"
          } md:flex`}
        >
          <Link
            href={"resume.pdf"}
            download={true}
            className={`inline-flex items-center rounded-3xl py-1 px-3 dark:text-gray-100 focus:outline-none text-base font-bold transition-all duration-300 ${
              scrolled
                ? "bg-fuchsia-900 hover:bg-transparent hover:text-fuchsia-900 border border-transparent hover:border-fuchsia-900 dark:hover:border-white"
                : "bg-transparent hover:bg-fuchsia-900 text-black hover:text-white border hover:border-transparent border-black dark:border-white dark:hover:border-transparent"
            }`}
          >
            <span className="text-sm">Resume</span>
            <HiDownload className="ml-1" size={12} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
