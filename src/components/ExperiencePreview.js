import React from "react";
import uniqid from "uniqid";

const ExperiencePreview = ({experience}) => {
  return (
    <div className="expDiv" key="experiencePreview">
      {experience.map((exp) => {
        return (
          <div className="expDiv" key={uniqid()}>
            <h6 className="margin">Position</h6>
            <p>{exp.position}</p>
            <hr></hr>
            <h6>Company</h6>
            <p>{exp.company}</p>
            <hr></hr>
            <h6>From</h6>
            <p>{exp.from}</p>
            <hr></hr>
            <h6>To</h6>
            <p>{exp.to}</p>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default ExperiencePreview;