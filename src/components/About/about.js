import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const profilepic = require("../../assets/AlexHeadshot.jpg");

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow className="text-center">
        <MDBCol md="6" className="mx-auto">
          <img
            style={{ display: "block", marginBottom: "10%" }}
            src={profilepic}
            className="img-fluid"
            alt="Alex Mattock"
          />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2> About Me</h2>
          <hr className="solid bg-dark" />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Alex Mattock, I am a determined coding enthusiast, on the brink of completing an intensive coding boot camp at Washington University. 
            Fueled by a fervent passion for programming, my journey has been a relentless pursuit of knowledge and skill acquisition in the tech realm. Eager to embark on a career in software development, 
            I'm poised to transition into the professional sphere as a junior programmer.
          </p>
          <p style={{ fontSize: "27px" }}>
          I would like the opportunity to contribute fresh perspectives and exhibit hunger for growth to any programming team. With the boot camp’s conclusion in sight, 
          I am is actively seeking opportunities to apply skills honed during the program. Employers in search of a dedicated and adaptive junior programmer are encouraged to reach out for potential collaboration.
          PLease connect with me through the designated "Contact Me" page or explore navigation links at the page's footer for seamless communication and further discussions about potential opportunities.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;