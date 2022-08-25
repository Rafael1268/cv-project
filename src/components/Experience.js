import React from "react";

const Experience = ({experience, removeExp}) => {
  return (
    <div>
      {experience.map((exp) => {
        return (
          <div className="ExperienceDiv" id={exp.id} key={exp.id}>
            <div className="inputContainer">
              <label htmlFor="position">Position</label>
              <input id="position" type="text"></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="company">Company</label>
              <input id="company" type="text"></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="from">From</label>
              <input id="from" type="text"></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="to">To</label>
              <input id="to" type="text"></input>
            </div>
            <button onClick={() => removeExp(exp.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;