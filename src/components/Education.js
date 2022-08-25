import React from "react";

const Education = ({education, removeEdu}) => {
  return (
    <div>
      {education.map((edu) => {
        return (
          <div className="educationDiv" id={edu.id} key={edu.id}>
            <div className="inputContainer">
              <label htmlFor="school">School</label>
              <input id="school" type="text"></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="degree">Degree</label>
              <input id="degree" type="text"></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="from">From</label>
              <input id="from" type="text"></input>
            </div>
            <div className="inputContainer">
              <label htmlFor="to">To</label>
              <input id="to" type="text"></input>
            </div>
            <button onClick={() => removeEdu(edu.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Education;