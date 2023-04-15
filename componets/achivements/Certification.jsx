import React from "react";
import "./style.css";

const certification = () => {
  // <img src="https://i.ibb.co/Ltx67kc/81e67250-4f79-4d64-a457-c7a285d6f980-1.png" alt="81e67250-4f79-4d64-a457-c7a285d6f980-1" border="0"></img>
  // <img src="https://i.ibb.co/L05kg7d/3360d65f-a566-45f8-9957-e3935a81ef3b-1.png" alt="3360d65f-a566-45f8-9957-e3935a81ef3b-1" border="0">
  const certificationData = [
    {
      id: 1,
      divColor: "whiteDiv",
      image:
        "https://i.ibb.co/Ltx67kc/81e67250-4f79-4d64-a457-c7a285d6f980-1.png",
      title: "Next JS Full Stack Crash Course",
      description1:
        " Next JS Full Stack Crash Course is a online course that coversbuilding full-stack web applications using Next.js, a popular React framework",
      description2:
        " learned how to create dynamic server-side rendered pages, staticsite generator, use APIs to fetch and display data",
      description3:
        " In addition to the core concepts of Next.js, the course coversother important features like SEO optimization,",
      description4: "",
      certificateLink:
        "https://learn.ineuron.ai/certificate/81e67250-4f79-4d64-a457-c7a285d6f980",
    },
    {
      id: 2,
      divColor: "redDiv",
      image:
        "https://i.ibb.co/L05kg7d/3360d65f-a566-45f8-9957-e3935a81ef3b-1.png",
      title: "TypeScript Crash Course",
      description1:
        "TypeScript Crash Course is an online course that provides an introduction to TypeScript, a popular programming language that adds type annotations to JavaScript.",
      description2:
        "The course covers the basics of TypeScript concepts like interfaces, classes, and generics",
      description3:
        " use popular TypeScript frameworks like React and Next.js.",
      description4: "",
      certificateLink:
        "https://learn.ineuron.ai/certificate/3360d65f-a566-45f8-9957-e3935a81ef3b",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center my-4 ">Certification Section </h1>
      <div className="row my-4">
        {certificationData?.map((item) => {
          return (
            <div
              key={item.id}
              className={`col-lg-5 ${item.divColor} mx-auto my-4`}
            >
              <div className="row p-5">
                <div className="col-12 text-center ">
                  <img
                    className="img-fluid"
                    width={500}
                    src={item.image}
                    alt="projectimage"
                    border="0"
                  />
                </div>
                <div className="col-lg-12">
                  <h4 className="my-4">{item.title}</h4>
                  <p>{item.description1} </p>
                  <p>{item.description2} </p>
                  <p>{item.description3} </p>
                  <p>{item.description4} </p>

                  <a
                    className="my-2"
                    target="_blank"
                    href={item.certificateLink}
                  >
                    Get Details
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default certification;
