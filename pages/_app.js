import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        <Toaster reverseOrder={true} />
        <AnimatePresence mode="wait">
          <div key={router.pathname}>
            {!isSmallScreen && <MouseFollower />}
            <Navbar />
            <ThemeSwitcher />
            <Component {...pageProps} />
            <Footer />
          </div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
