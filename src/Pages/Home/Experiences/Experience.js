import React from "react";
import { ReactComponent as WorkIcon } from "../../../Assets/Images/work.svg";
import { ReactComponent as SchoolIcon } from "../../../Assets/Images/work.svg";
import { timeline_data } from "../../../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../Experiences/Experience.css"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Experience({Experience_ref}) {

  React.useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);


  let workIconStyles = {
    background: "#ece7e1",
  };

  let schoolIconStyles = {
    background: "#ece7e1",
  };

  return (
    <>
      <div ref={Experience_ref} className="exp-wrapper" id="exp">
        <div className="exp-title">
          <h1
            className="title"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            Work Experience
          </h1>
        </div>
        <div className="exp-subtitle">
          <h6
            className="subtitle"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"

          >
            What I'hve done so far
          </h6>
        </div>
        <VerticalTimeline>
          {timeline_data.map((elem) => {
            let isWorkIcon = elem.icon === "work";
            let showButton =
              elem.buttonText !== undefined &&
              elem.buttonText !== null &&
              elem.buttonText !== "";
            return (
              <VerticalTimelineElement
                className="sub_element"
                key={elem.id} // key props for uniquely identify the card
                date={elem.date} // date props because we want to show date on the other side of the card
                dateClassName="date" // because we want to style the date
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{fontFamily: "Gilroy-bold"}}
                >
                  {elem.role}
                </h3>

                <h5
                  className="vertical-timeline-element-subtitle"
                  // style={{fontFamily: "Gilroy-semibold"}}
                >
                  <a
                    href={elem.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    {elem.title}
                  </a>
                </h5>

                <p id="description">{elem.description1}</p>
                <p id="description">{elem.description2}</p>
                <p id="description">{elem.description3}</p>

                {elem.techStack && (
                  <div className="tech-stack">
                    <strong>Tech Stack:</strong>{" "}
                    {elem.techStack.join(", ")}
                  </div>
                )}

              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};
