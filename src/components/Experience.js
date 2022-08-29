import React from "react";
import uniqid from "uniqid";

const Experience = ({experience, removeExp}) => {
  return (
    <div>
      {experience.map((exp) => {
        return (
          <div className="ExperienceDiv" id={exp.id} key={uniqid()}>
            <div className="inputContainer">
              <label htmlFor="position">Position</label>
              <input id="position" type="text" defaultValue={exp.position}></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" defaultValue={exp.company}></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="from">From</label>
              <input id="from" type="text" defaultValue={exp.from}></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="to">To</label>
              <input id="to" type="text" defaultValue={exp.to}></input>
            </div>
            <button onClick={() => removeExp(exp.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;