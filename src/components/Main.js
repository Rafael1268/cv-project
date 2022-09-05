import React, { Component } from "react";
import Education from "./Education";
import EducationPreview from "./EducationPreview";
import Experience from "./Experience";
import ExperiencePreview from "./ExperiencePreview";
import uniqid from "uniqid";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      personal: {},
      education: [],
      experience: [],
    };
  };

  saveEdu = () => {
    let eduCopy = [];
    this.state.education.forEach((edu) => {
      const eduDiv = document.getElementById(edu.id);
      eduCopy.push({
        id: edu.id,
        school: eduDiv.children[0].children[1].value,
        degree: eduDiv.children[1].children[1].value,
        from: eduDiv.children[2].children[1].value,
        to: eduDiv.children[3].children[1].value,
      });
    });
    return eduCopy;
  };

  saveExp = () => {
    let expCopy = [];
    this.state.experience.forEach((exp) => {
      const expDiv = document.getElementById(exp.id);
      expCopy.push({
        id: exp.id,
        school: expDiv.children[0].children[1].value,
        degree: expDiv.children[1].children[1].value,
        from: expDiv.children[2].children[1].value,
        to: expDiv.children[3].children[1].value,
      });
    });
    return expCopy;
  };

  addEdu = () => {
    const eduCopy = this.saveEdu();
    const expCopy = this.saveExp();
    this.setState({ 
      education: eduCopy,
      experience: expCopy 
    }, () => {
      const eduCopy2 = [...this.state.education];
      eduCopy2.push({
        id: uniqid()
      });
      this.setState({ education: eduCopy2 });
    });
  };

  removeEdu = (id) => {
    const eduCopy = this.saveEdu();
    const expCopy = this.saveExp();
    this.setState({ 
      education: eduCopy,
      experience: expCopy 
    }, () => {
      const deleteNum = this.state.education.findIndex(edu => edu.id === id)
      const eduCopy2 = [...this.state.education];
      eduCopy2.splice(deleteNum, 1);
      this.setState({ education: eduCopy2 });
    });
  };

  addExp = () => {
    const eduCopy = this.saveEdu();
    const expCopy = this.saveExp();
    this.setState({ 
      education: eduCopy,
      experience: expCopy 
    }, () => {
      const expCopy2 = [...this.state.experience];
      expCopy2.push({
      id: uniqid()
        });
      this.setState({ experience: expCopy2 });
    });
  };

  removeExp = (id) => {
    const eduCopy = this.saveEdu();
    const expCopy = this.saveExp();
    this.setState({ 
      education: eduCopy,
      experience: expCopy 
    }, () => {
      const deleteNum = this.state.experience.findIndex(exp => exp.id === id)
      const expCopy2 = [...this.state.experience];
      expCopy2.splice(deleteNum, 1);
      this.setState({ experience: expCopy2 });
    });
  };

  preview = () => {
    const personalInfo = document.getElementById('personalInfo');
    this.setState({
      personal: {
        fName: personalInfo.children[1].children[1].value,
        lName: personalInfo.children[2].children[1].value,
        email: personalInfo.children[3].children[1].value,
        phone: personalInfo.children[4].children[1].value,
        address: personalInfo.children[5].children[1].value,
      }
    });
    const eduCopy = [...this.state.education];
    let eduCopy2 = [];
    eduCopy.forEach((edu) => {
      const eduDiv = document.getElementById(edu.id);
      eduCopy2.push({
        id: edu.id,
        school: eduDiv.children[0].children[1].value,
        degree: eduDiv.children[1].children[1].value,
        from: eduDiv.children[2].children[1].value,
        to: eduDiv.children[3].children[1].value,
      });
    });
    this.setState({ education: eduCopy2 },);
    const expCopy = [...this.state.experience];
    let expCopy2 = [];
    expCopy.forEach((exp) => {
      const expDiv = document.getElementById(exp.id);
      expCopy2.push({
        id: exp.id,
        position: expDiv.children[0].children[1].value,
        company: expDiv.children[1].children[1].value,
        from: expDiv.children[2].children[1].value,
        to: expDiv.children[3].children[1].value,
      });
    });
    this.setState({ experience: expCopy2 },);
  };

  render() {
    return (
      <div id="mainContainer">
        <div id="form">
          <div id="personalInfo">
            <h2 className="no-margin">Personal Information</h2>
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
          </div>
          <h2>Education</h2>
          <Education education={this.state.education} removeEdu={this.removeEdu}></Education>
          <button onClick={() => {this.addEdu()}}>Add</button>
          <h2>Experience</h2>
          <Experience experience={this.state.experience} removeExp={this.removeExp}></Experience>
          <button onClick={() => {this.addExp()}}>Add</button>
          <button onClick={() => {this.preview()}} id="submitBtn">Submit</button>
        </div>
        <div id="preview">
          <h2 className="no-margin">Personal Information</h2>
          <h6 className="margin">First Name</h6>
          <p>{this.state.personal.fName}</p>
          <hr></hr>
          <h6>Last Name</h6>
          <p>{this.state.personal.lName}</p>
          <hr></hr>
          <h6>Email Address</h6>
          <p>{this.state.personal.email}</p>
          <hr></hr>
          <h6>Phone Number</h6>
          <p>{this.state.personal.phone}</p>
          <hr></hr>
          <h6>Address</h6>
          <p>{this.state.personal.address}</p>
          <hr></hr>
          <h2>Education</h2>
          <EducationPreview education={this.state.education}></EducationPreview>
          <h2>Experience</h2>
          <ExperiencePreview experience={this.state.experience}></ExperiencePreview>
        </div>
      </div>
     );
  };
};

export default Main;