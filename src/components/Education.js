import React from "react";
import uniqid from "uniqid";

const Education = ({education, removeEdu}) => {
  return (
    <div key="education">
      {education.map((edu) => {
        return (
          <div className="educationDiv" id={edu.id} key={uniqid()}>
            <div className="inputContainer">
              <label htmlFor="school">School</label>
              <input id="school" type="text" defaultValue={edu.school}></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="degree">Degree</label>
              <input id="degree" type="text" defaultValue={edu.degree}></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="from">From</label>
              <input id="from" type="text" defaultValue={edu.from}></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="to">To</label>
              <input id="to" type="text" defaultValue={edu.to}></input>
            </div>
            <button onClick={() => removeEdu(edu.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Education;