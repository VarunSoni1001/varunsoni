import { sendContactForm } from "@/lib/sendContactForm";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageLength, setMessageLength] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactEmail = "varunsoni.dev@gmail.com";
  const contactEmailHref = `mailto:${contactEmail}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "message") {
      setMessageLength(value.length);
    }
  };

  useEffect(() => {
    if (formSubmitted === true) {
      setTimeout(() => {
        setFormSubmitted(false);
      }, 4000);
    }
  }, [formSubmitted]);

  useEffect(() => {
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [formData]);

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (formData.name.length > 100) {
      toast.error("Name should not exceed 100 characters");
      return;
    }
    if (formData.email.length > 500) {
      toast.error("Email should not exceed 500 characters");
      return;
    }
    if (formData.message.length > 1000) {
      toast.error("Message should not exceed 1,000 characters");
      return;
    }

    await toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          const response = await sendContactForm(formData);
          if (response.ok) {
            resolve();
            setFormSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setMessageLength(0);
          } else {
            reject("Error sending contact form");
            setFormSubmitted(false);
            return;
          }
        } catch (error) {
          reject(error);
          setFormSubmitted(false);
        }
      }),
      {
        loading: "Sending...",
        success: "Form sent!",
        error:
          "Oops! Something went wrong while sending your form. Please try again later or contact directly through email.",
      }
    );
  };

  return (
    <section className="font-satoshi min-h-screen inset-0 bg-gradient-to-b from-fuchsia-200 via-rose-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="flex justify-center flex-col items-center text-center">
        <h1 className="text-xl md:text-2xl font-zina lg:text-3xl xl:text-4xl 2xl:text-5xl mt-40 dark:text-gray-200">
          contact<span className="text-fuchsia-900">Me</span>.
        </h1>
        <br />
        <hr className="border-fuchsia-800 border-t-4 rounded w-8 dark:border-gray-200" />
        <br />
        <p className="text-sm md:text-base px-12 lg:px-64 font-cabinet lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 dark:text-gray-300">
          Fill out the form below, or email me at{" "}
          <Link
            href={contactEmailHref}
            class="text-fuchsia-900 dark:text-fuchsia-700 underline decoration-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactEmail}
          </Link>{" "}
          to get in touch
        </p>
      </div>
      <div className="flex flex-wrap justify-around sm:px-20 pt-10 pb-20">
        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="container bg-neutral-50 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 dark:bg-gray-900 dark:shadow-lg">
            {!formSubmitted ? (
              <form
                onSubmit={handleFormSubmit}
                className="flex flex-col font-sans space-y-4"
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block my-2 text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                    required
                    maxLength={100}
                    className="w-full text-[0.8rem] md:text-base caret-fuchsia-500 p-3 border rounded-lg focus:outline-none focus:border-fuchsia-500 transition-colors duration-300 bg-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block my-2 text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                    required
                    maxLength={500}
                    className="w-full text-[0.8rem] md:text-base caret-fuchsia-500 p-3 border rounded-lg focus:outline-none focus:border-fuchsia-500 transition-colors duration-300 bg-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="flex justify-between items-center"
                  >
                    <span className="my-2 text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">
                      Message <span className="text-red-600">*</span>
                    </span>
                    <span
                      className={`my-2 text-[0.75rem] md:text-sm font-cabinet ${
                        messageLength === 1000
                          ? "text-red-500"
                          : " text-gray-500"
                      }`}
                    >{`${messageLength.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}/1,000`}</span>
                  </label>
                  <textarea
                    id="message"
                    spellCheck="true"
                    name="message"
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Your Message"
                    required
                    className="w-full text-[0.8rem] md:text-base caret-fuchsia-500 p-3 border rounded-lg min-h-[150px] max-h-[400px] focus:outline-none focus:border-fuchsia-500 transition-colors duration-300 bg-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isDisabled}
                  onClick={handleFormSubmit}
                  className={` font-medium py-2 px-3 rounded-full border transition-all ease-in-out duration-300 ${
                    !isDisabled
                      ? "cursorButton bg-fuchsia-900 text-white border-transparent dark:hover:bg-transparent hover:border-fuchsia-900 hover:bg-white hover:text-fuchsia-900 dark:hover:text-gray-300 dark:hover:border-gray-300"
                      : "cursor-not-allowed border-fuchsia-900 bg-fuchsia-200 text-fuchsia-900"
                  }`}
                  title={isDisabled && "Please fill out the form to submit"}
                >
                  Send
                </button>
              </form>
            ) : (
              <div className="flex flex-col dark:bg-transparent inset-0 justify-center items-center gap-2">
                <img
                  src="tick.svg"
                  className="w-8 h-8 lg:w-12 lg:h-12 mt-12"
                  alt="Animated Tick"
                />
                <p className="mb-12 text-sm lg:text-base">
                  Form submitted successfully
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
