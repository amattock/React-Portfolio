import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselCaption, MDBRow, MDBCol } from 'mdbreact';

const agro = require("../../assets/Agrnomix.png");
const weather = require("../../assets/WthrDash.png");
const fitness = require("../../assets/wlnswrzrd.png");
const note = require("../../assets/NtTakr.png");
const quiz = require("../../assets/CodeQuiz.png");
const scheduler = require("../../assets/WrkDaySchdlr.png");

const Portfolio = () => {
  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '75%' }}>
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2> My Portfoloios</h2>
          <hr className="solid bg-dark" />
        </MDBCol>
      </MDBRow>
        <MDBCarousel
          activeItem={1}
          length={6}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            
            <MDBCarouselItem itemId="1">
              <img
                className="d-block w-100"
                src={agro}
                alt="Agronomix Weather App for Farmers"
              />
              <MDBCarouselCaption>
                <a className="h3-responsive" href="https://github.com/amattock/Agronomix">Agronomix Weather App for Farmers</a>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="2">
                  <img
                    className="d-block w-100"
                    src={weather}
                    alt="Weather Dashboard App by City and State"
                  />
                  <MDBCarouselCaption>
                    <a className="h3-responsive" href= "https://github.com/amattock/Weather-Dashboard">Weather Dashboard App by City and State</a>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <img
                    className="d-block w-100"
                    src={fitness}
                    alt="Wellness Wizard App for Fitness Tracking"
                  />
                  <MDBCarouselCaption>
                    <a className="h3-responsive" href="https://github.com/JackStendeback/WellnessWizard">Wellness Wizard App for Fitness Tracking</a>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <img
                    className="d-block w-100"
                    src={note}
                    alt="Note Taker App"
                  />
                  <MDBCarouselCaption>
                    <a className="h3-responsive" href="https://github.com/amattock/Note-Taker">Note Taker App for notes on the fly</a>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                  <img
                    className="d-block w-100"
                    src={quiz}
                    alt="Code Quiz"
                  />
                  <MDBCarouselCaption>
                    <a className="h3-responsive" href="https://github.com/amattock/Multiple-Choice-Quiz">Code Quiz for testing your Knowledge!</a>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="6">
                  <img
                    className="d-block w-100"
                    src={scheduler}
                    alt="Work Day Scheduler"
                  />
                  <MDBCarouselCaption>
                    <a className="h3-responsive"href="https://github.com/amattock/Work-Day-Scheduler" >Work Day Scheduler for Keeping Track of Events!</a>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
            {/* Carousel wrapper */}
          </div>
          {/* Second column */}
        </section>
      );
    }

export default Portfolio;