import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import uniqid from "uniqid";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      education: [],
      experience: [],
    };
  };

  addEdu = () => {
    const eduCopy = [...this.state.education];
    eduCopy.push({
      id: uniqid()
    });
    this.setState({ education: eduCopy });
  };

  removeEdu = (id) => {
    const deleteNum = this.state.education.findIndex(edu => edu.id === id)
    const eduCopy = [...this.state.education];
    eduCopy.splice(deleteNum, 1);
    this.setState({ education: eduCopy });
  }

  addExp = () => {
    const expCopy = [...this.state.experience];
    expCopy.push({
      id: uniqid()
    });
    this.setState({ experience: expCopy });
  };

  removeExp = (id) => {
    const deleteNum = this.state.experience.findIndex(exp => exp.id === id)
    const expCopy = [...this.state.experience];
    expCopy.splice(deleteNum, 1);
    this.setState({ experience: expCopy });
  }

  render() {
    return (
      <div id="mainContainer">
        <div id="form">
          <h2 id="no-margin">Personal Information</h2>
          <div className="inputContainer">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text"></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text"></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="text"></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="text"></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="address">Address</label>
            <input id="address" type="text"></input>
          </div> 
          <h2>Education</h2>
          <Education education={this.state.education} removeEdu={this.removeEdu}></Education>
          <button onClick={() => {this.addEdu()}}>Add</button>
          <h2>Experience</h2>
          <Experience experience={this.state.experience} removeExp={this.removeExp}></Experience>
          <button onClick={() => {this.addExp()}}>Add</button>
          <button id="submitBtn">Submit</button>
        </div>
        <div id="preview">
          <input type="text"></input>
        </div>
      </div>
     );
  };
};

export default Main;