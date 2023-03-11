import React from "react";
import what from "./assets/what.png";
import "./Whatcorona.css";
import symp from "./assets/cough.png";
import pre from "./assets/preve.png";

const Whatcorona = () => {
  return (
    <div className="what" id="about">
      <div className="row">
        <div className=" col-sm-6 whatImg">
          <img className="corona-image" src={what}  />
        </div>
        <div className=" col-sm-5 whatText">
          <h3 className="h3-heading">What is Corona Viruses?</h3>
          <p className="para">
            <ul>
              <li>
                Coronavirus, also known as COVID-19, is a highly infectious
                respiratory illness caused by the SARS-CoV-2 virus.
              </li>
              <li>
                The virus first emerged in Wuhan, China in December 2019, and
                has since spread rapidly across the globe, leading to a pandemic
              </li>
              <li>
                The symptoms of COVID-19 can range from mild to severe, and may
                include fever, cough, fatigue, loss of taste or smell, and
                difficulty breathing.{" "}
              </li>
              <li>
                The virus can be diagnosed through laboratory tests that detect
                the presence of the virus's genetic material in respiratory
                specimens.
              </li>
              <li>
                People who are elderly, have underlying health conditions, or
                weakened immune systems are more vulnerable to severe illness or
                death.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="what" id="symptoms">
        <div className="row">
          <div className=" col-sm-6 whatText-a">
            <h3 className="h3-heading">Symptoms of Covid19</h3>
            <p className="para">
              <p className="para">
                The symptoms of COVID-19 can vary in severity and may range from
                mild to severe. Here are some of the common symptoms associated
                with COVID-19:
              </p>
              <ul>
                <li>Fever or chills</li>
                <li>Cough</li>
                <li>Shortness of breath or difficulty breathing</li>
                <li>Fatigue</li>
                <li>Muscle or body aches</li>
                <li>Headache</li>
                <li>New loss of taste or smell</li>
                <li>Sore throat</li>
                <li>Congestion or runny nose</li>>
              </ul>
            </p>
          </div>
          <div className=" col-sm-4 whatImg">
            <img className="corona-image" src={symp}  />
          </div>
        </div>
      </div>
      <div className="what" id="prevention">
        <div className="row">
          <div className="col-sm-6 whatText-a">
            <h3 className="h3-heading">Prevention</h3>
            <p className="para">

            <p className="para">Follow the guidelines to prevent Covid19</p>
            <ul>
              <li>Get vaccinated</li>
              <li>Wear a mask</li>
              <li>Practice physical distancing</li>
              <li>Wash your hands frequently</li>
              <li>Avoid large gatherings</li>
              <li>Stay home when sick</li>
              <li>Cover your mouth and nose when coughing or sneezing</li>
              <li>Disinfect frequently touched surfaces</li>
              <li>Follow local health guidelines.</li>
            </ul>
            </p>
          </div>
          <div className="col-sm-4">
            <img className="doc-img" src={pre} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatcorona;
