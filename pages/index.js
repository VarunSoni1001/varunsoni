import About from "@/components/About";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CertificationsSection from "@/components/CertificationsSection";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  useEffect(() => {
    document.title = "Varun Soni - Software & Web Developer";
  }, []);

  return (
    <>
      <PageTransition />

      <div>
        {/* MAIN COMPONENT */}
        <Hero />

        {/* ABOUT COMPONENT */}
        <About />

        {/* EXPERIENCE COMPONENT */}
        {/* <Experience /> */}

        {/* EDUCATION COMPONENT */}
        {/* <Education /> */}

        {/* cERTIFICATIONS COMPONENT */}
        {/* <CertificationsSection /> */}
      </div>
    </>
  );
}
