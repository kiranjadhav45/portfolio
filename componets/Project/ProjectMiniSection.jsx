import React from "react";
import "./Stayle.css";
const ProjectMiniSection = () => {
  // <img src="https://i.ibb.co/Q6GLTjp/Screenshot-40.png" alt="Screenshot-40" border="0"></img>
  // <img src="https://i.ibb.co/2crVm3c/Screenshot-41.png" alt="Screenshot-41" border="0"></img>
  // <img src="https://i.ibb.co/Jx3WPq4/Screenshot-42.png" alt="Screenshot-42" border="0"></img>
  const projectData = [
    {
      id: 1,
      title: "Ecommerce dashboard",
      description1:
        "● This is Ecommerce Full-Stack Project that seller can add products , Update Products , Delete Products , Search Product",

      description2:
        "● Technology Used In this Project is React JS , Node JS & Express and Database MongoDB",
      description3: "",
      description4: "",
      description5: "",
      liveLink: "https://preeminent-semifreddo-b3fbcf.netlify.app/",
      codeLink: "https://github.com/kiranjadhav45/E-Commerce",
      imageUrl: "https://i.ibb.co/Q6GLTjp/Screenshot-40.png",
      class1_big_div: "ProjectPageDiv",
      class2_a_buttons: "buttonsred",
    },
    {
      id: 2,
      title: "Readitall the News Web App",
      description1:
        "● Readitall is a news web app designed to provide users with the latest news stories from around the world",
      description2:
        "● Upon visiting the app, users will be presented with a homepage that displays the top news stories of the day. They can browse different categories to find articles that interest them. Categories include politics, business, entertainment, sports, and more",
      description3:
        "● Technology used React.js , JavaScript , Bootstrap, CSS, HTML Dynamic Routing",
      description4:
        "● Recorded video API used this project can’t give permission to deployment",
      description5: "",
      liveLink: "https://www.youtube.com/watch?v=VkGY9sGR0II",
      codeLink: "https://github.com/kiranjadhav45/Readitall-News-Web-App",
      imageUrl: "https://i.ibb.co/2crVm3c/Screenshot-41.png",
      class1_big_div: "RedColorBgDiv",
      class2_a_buttons: "buttonsblack",
    },
    {
      id: 3,
      title: "SIP & lumpsum Calculator Web App",
      description1:
        "● SIP Calculator is a web app designed to help investors calculate their potential returnson investments made through a Systematic Investment Plan (SIP) and lumpsum",
      description2:
        "● Upon visiting the app, users will be presented with a form where they can enter their investment amount, SIP frequency, investment duration, and expected rate of return.   The app then calculates the future value of the investment and displays the estimated returns",
      description3: "",
      description4: "",
      description5: "",

      liveLink: "https://glittering-narwhal-dd93f5.netlify.app/",
      codeLink: "https://github.com/kiranjadhav45/SIP-Calculator-React-Web-App",
      imageUrl: "https://i.ibb.co/Jx3WPq4/Screenshot-42.png",
      class1_big_div: "ProjectPageDiv",
      class2_a_buttons: "buttonsred",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center">Projects Section</h1>

      {projectData?.map((item) => {
        return (
          <div key={item.id} className={`row ${item.class1_big_div} p-4 my-4`}>
            <div className="col-lg-4">
              <img
                className="img-fluid"
                width={500}
                src={item.imageUrl}
                alt="projectimage"
                border="0"
              />
            </div>
            <div className="col-lg-8 ">
              <h3 className="mt-3"> {item.title}</h3>
              <p>{item.description1}</p>
              <p>{item.description2}</p>
              <p>{item.description3}</p>
              <p>{item.description4}</p>
              <p>{item.description5}</p>
              <p></p>
              <div className="mx-5 mt-5 d-flex justify-content-start">
                <a
                  target="_blank"
                  href={item.liveLink}
                  className={`mx-4 ${item.class2_a_buttons}`}
                >
                  <b>Live</b>
                </a>
                <a
                  target="_blank"
                  href={item.codeLink}
                  className={`mx-4 ${item.class2_a_buttons}`}
                >
                  <b>Code</b>
                </a>
              </div>
            </div>
          </div>
        );
      })}
      {/*  */}
    </div>
  );
};

export default ProjectMiniSection;
