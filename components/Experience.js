import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { portfolioData } from "@/data/portfolioData";

const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section className="bg-white text-gray-900">
      <div className="container max-w-6xl px-4 py-12 mx-auto">
        <div className="flex flex-col justify-center items-center mb-8 lg:mb-14">
          <h3 className="text-xl md:text-2xl font-zina lg:text-3xl xl:text-4xl 2xl:text-5xl">
            my<span className="text-fuchsia-800">Experience</span>.
          </h3>
          <br />
          <hr className="border-fuchsia-800 border-t-4 rounded w-8" />
          <br />
          <p className="text-sm md:text-base px-12 lg:px-64 lg:text-lg font-cabinet xl:text-xl 2xl:text-2xl text-gray-700">
            Here, you can find my Freelance working experience
          </p>
        </div>

        <VerticalTimeline lineColor="#701a75">
          {experiences?.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              iconStyle={{
                background: "white",
                borderColor: "#000",
                color: "#701a75",
              }}
              icon={item.icon}
              contentStyle={{
                background: "#f3f4f6",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "none",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #701a75",
              }}
            >
              <div className="font-satoshi">
                <h3 className="font-bold text-fuchsia-900 capitalize">
                  {item.company}
                </h3>
                <h3 className="uppercase text-[12px] font-bold text-gray-500 mb-3">
                  {item.date}
                </h3>
                <h3>
                  as a <b>{item.title}</b>
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
