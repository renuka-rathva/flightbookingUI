import React, { useState } from "react";
import FlightCard from "../components/FlightCard";
import UserService from "../components/services/UserService";
import flightSearchImg  from "../Images/flightsearch.png";
const FlightSearch = () => {
    const [flights, setFlights] = useState({
        "arrivalCity":"",
    "departureCity":"",
    "departureDate":""
    });
    const [detail, setDetail] = useState(null);
    const [searchAlert, setSearchAlert] = useState(false);
    const handleChange=(e)=>{
        const value = e.target.value;
        setFlights({...flights,[e.target.name]:value});
        
    }
    const searchFlight=(e)=>{
       
        e.preventDefault();
       
        UserService.flightSearch(flights).then((response)=>{
            console.log(response.data)
            setDetail(response.data);
        }).catch((err)=>{
            console.log(err)
            setSearchAlert(true);
        });
      }
          const reset=(e)=>{
      e.preventDefault();
      setSearchAlert(false);
      setFlights({
        "arrivalCity":"",
        "departureCity":"",
        "departureDate":""

    })
  }
  return (
    <>
   
   
    
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="card p-3">
          <div className="row g-0">
          <div className="col-3">
          <img src={flightSearchImg} className="img-fluid rounded-start" alt="Search..."/>
          </div>
          <div className="col-9">
          <div className="card-body">
            <h5 className="card-title mb-4">Flight Search</h5>
            {searchAlert  && (
                  <div className="alert alert-danger" role="alert">
                    {" "}
                    Search is not avaiable{" "}
                  </div>
                )}
            <div className="row">
            <div className="mb-3 col-4">
              <label className="form-label">Arrival City</label>
              <input
                type="text"
                className="form-control"
                name="arrivalCity"
                value={flights.arrivalCity}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3 col-4">
              <label className="form-label">Departure City</label>
              <input
                type="text"
                className="form-control"
                name="departureCity"
                value={flights.departureCity}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-4 col-4">
              <label className="form-label">Departure Date</label>
              <input
                type="date"
                className="form-control"
                name="departureDate"
                value={flights.departureDate}
                onChange={(e) => handleChange(e)}
              />
            </div>
            </div>
         
            <button
              onClick={searchFlight}
              type="button"
              className="btn btn-primary text-center me-3"
            >
              Search
            </button>
            <button
              onClick={reset}
              type="button"
              className="btn btn-danger"
            >
              Clear
            </button>
          </div>
          </div>
          </div>
         
        </div>
        <FlightCard item={detail}/>
      </div>
    </div>
  </div>
    
    
    </>
    
  )
}

export default FlightSearch