import React from "react";

const Main = () => {
 return (
  <div id="mainContainer">
    <div id="form">
      <div className="inputContainer">
        <label htmlFor="firstName" id="noMargin">First Name</label>
        <input id="firstName" type="text"></input>
      </div>
      <div className="inputContainer">
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text"></input>
      </div>
    </div>
    <div id="preview">
      <input type="text"></input>
    </div>
  </div>
 )
}

export default Main;