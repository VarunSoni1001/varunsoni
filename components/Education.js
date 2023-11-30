// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { portfolioData } from "@/data/portfolioData";

// const Education = () => {
//   const { education } = portfolioData;

//   return (
//     <section className="bg-white text-gray-900 dark:bg-black dark:text-neutral-200">
//       <div className="container max-w-6xl px-4 py-12 mx-auto">
//         <div className="flex flex-col justify-center items-center mb-8 lg:mb-14">
//           <h3 className="text-xl md:text-2xl font-zina lg:text-3xl xl:text-4xl 2xl:text-5xl dark:text-neutral-200">
//             my<span className="text-fuchsia-800">Education</span>.
//           </h3>
//           <br />
//           <hr className="border-fuchsia-800 border-t-4 rounded w-8 dark:border-gray-300" />
//           <br />
//           <p className="text-sm md:text-base px-12 lg:px-64 lg:text-lg font-cabinet xl:text-xl 2xl:text-2xl text-gray-700 dark:text-neutral-200">
//             Here, you can find my Education
//           </p>
//         </div>

//         <VerticalTimeline lineColor="#701a75">
//           {education?.map((edu, index) => (
//             <VerticalTimelineElement
//               key={index}
//               iconStyle={{
//                 background: "white",
//                 border: "1px solid #701a75",
//                 color: "#701a75",
//               }}
//               // date={edu.date}
//               icon={edu.icon}
//               contentStyle={{
//                 background: "#f3f4f6",
//                 border: "1px solid rgba(112, 26, 117, 0.5)",
//                 boxShadow: "none",
//                 textAlign: "left",
//                 padding: "1rem 2rem",
//               }}
//               contentArrowStyle={{
//                 borderRight: "0.4rem solid #701a75",
//               }}
//               // className="dark:bg-black dark:border-gray-700 dark:text-neutral-200"
//             >
//               <div className="font-satoshi dark:text-neutral-200">
//                 <h3 className="font-bold text-fuchsia-900">{edu.degree}</h3>
//                 <h3 className="uppercase text-[12px] font-bold text-gray-500 mb-3 dark:text-neutral-200">
//                   {edu.date}
//                 </h3>
//                 <p className="text-gray-700 font-generalSans dark:text-gray-500">
//                   <b>{edu.school}</b>
//                 </p>
//               </div>
//             </VerticalTimelineElement>
//           ))}
//         </VerticalTimeline>
//       </div>
//     </section>
//   );
// };

// export default Education;
