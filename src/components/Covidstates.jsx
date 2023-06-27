import React from "react";
import { useState, useEffect } from "react";
import covImg from "./assets/coImg.png";
import "./covidstaes.css";


const Covidstates = () => {
  const [data, setData] = useState([]);
  
  
    const fetchData = async () => {
    const url = 'https://covid-19-statistics.p.rapidapi.com/reports/total?date=2020-04-07';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bd65decf96msha6db61ea8d22351p1c77f1jsn7d2b322ca022',
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
      }
     

    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
    
      
      setData(result.data);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  } 

  useEffect(() => {

    fetchData();
  }, []
);

  return (
    <div>
    
        
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
                <p className="para-a"> {data.active}</p>
              </div>
              <div className="col-sm-2 data">
                <h3 className="covi-heading">Total Recovered</h3>
                <p className="para-a">{data.recovered}</p>
              </div>
              <div className="col-sm-2 data">
                <h3 className="covi-heading">Total Deaths</h3>
                <p className="para-a">{data.deaths}</p>
              </div>
              <div className="col-sm-2 data">
                <h3 className="covi-heading"> Last Updated </h3>
                <p className="para-a">{data.last_update}</p>
              </div>
            </div>
          </div>
        
    
    </div>
  );
};

export default Covidstates;
