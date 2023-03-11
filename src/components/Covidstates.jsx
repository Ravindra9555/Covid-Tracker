import React from "react";
import { useState, useEffect } from "react";
import covImg from "./assets/coImg.png";
import "./covidstaes.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_HOST_API,
  },
};

const Covidstates = () => {
  const [data, setData] = useState([]);

  const Getdata = async () => {
    //  fetch(
    //  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
    //   options
    // )
    //     .then((response) => response.json())
    //   // .then(response => console.log(response))
    //   .then((response) => setData(response))
    //     .catch((err) => console.error(err));

    //or we can fetch throurg await
    const response = await fetch(
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
      options
    );
    setData(await response.json());
  };
  useEffect(() => {
    // fetch(
    //   "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
    //   options
    // )
    //   .then((response) => response.json())
    // // .then(response => console.log(response))
    // .then((response) => setData(response))
    //   .catch((err) => console.error(err));
    // or we can call api with this function

    Getdata();
  }, []);
  return (
    <div>
      {data.map((curr) => {
        return (
          <div className="covid-states" id="covid-states">
            <div className="row">
              <div className=" col-sm-4 co-img">
                <img className="coImg" src={covImg} alt="this is amn imagew " />
              </div>
              <div className="col-sm-8">
                <h1 className="co-heading">
                  Statics of Corona Viruses in World
                </h1>
                <h3 className="cov-heading">
                  THESE ARE THE CURRENT SITUATION OF WORLD{" "}
                </h3>
              </div>
            </div>
            <div className="row data-item">
              <div className="col-sm-2 data">
                <h3 className="covi-heading">ActiveCases</h3>
                <p className="para-a"> {curr.ActiveCases}</p>
              </div>
              <div className="col-sm-2 data">
                <h3 className="covi-heading">Total Recovered</h3>
                <p className="para-a">{data[0].TotalRecovered}</p>
              </div>
              <div className="col-sm-2 data">
                <h3 className="covi-heading">Total Cases</h3>
                <p className="para-a">{data[0].TotalCases}</p>
              </div>
              <div className="col-sm-2 data">
                <h3 className="covi-heading"> Total Deaths</h3>
                <p className="para-a">{data[0].TotalDeaths}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Covidstates;
