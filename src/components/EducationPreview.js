import React from "react";
import uniqid from "uniqid";

const EducationPreview = ({education}) => {
  return (
    <div className="eduDiv" key="educationPreview">
      {education.map((edu) => {
        return (
          <div className="eduDiv" key={uniqid()}>
            <h6 className="margin">School</h6>
            <p>{edu.school}</p>
            <hr></hr>
            <h6>Degree</h6>
            <p>{edu.degree}</p>
            <hr></hr>
            <h6>From</h6>
            <p>{edu.from}</p>
            <hr></hr>
            <h6>To</h6>
            <p>{edu.to}</p>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default EducationPreview;