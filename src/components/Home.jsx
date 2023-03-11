import React from "react";
import "./Home.css";
import doctor from "./assets/doctors.png";

const Home = () => {
  return (
    <div className=" home-body">
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="/">
            Covid19.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#symptoms">
                  Symptoms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#prevention">
                  Prevention
                </a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </nav>
      <div className="home-frame row">
        <div className="col-sm-6 covid">
          <h3 className="h3-heading">Covid19 Awareness</h3>
          <h1 className="h1-heading">Stay Safe. Stay Home</h1>
          <p className="para">
            "Stay home, stay safe" is a simple but effective message to help
            control the spread of COVID-19. By following guidelines such as
            wearing masks, washing hands frequently, and practicing physical
            distancing, we can protect ourselves and our communities.
          </p>
          <div>

          <button type="button" class="btn btn-primary  pre-button"><a className="link-prevent" href="#prevention">Prevention from Covid </a></button>
          </div>
        </div>
        
        <div className="col-sm-6">
          <img className="home-image " src={doctor} alt="contacts" />
        </div>
      </div>
    </div>
  );
};

export default Home;
