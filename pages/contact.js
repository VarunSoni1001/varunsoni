import ContactInfo from "@/components/Contact";
import PageTransition from "@/components/PageTransition";
import React, { useEffect } from "react";

const contact = () => {
  useEffect(() => {
    document.title = "Contact | Varun Soni - Software & Web Developer";
  }, []);

  return (
    <>
      <PageTransition />
      <div className="min-h-screen">
        <ContactInfo />
      </div>
    </>
  );
};

export default contact;
