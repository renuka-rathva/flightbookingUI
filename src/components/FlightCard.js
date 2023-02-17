import React from "react";
import { Link } from "react-router-dom";
const FlightCard = (props) => {
  const data = props?.item;
  return (
    <>
      {" "}
      {data && (

<div className="card p-3 mt-5">
            <div className="card-body">
            <table className="table">
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Airlines</th>
              <th>Date</th>
              <th>Time</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val?.flightNumber}</td>
                  <td>{val?.operatingAirlines}</td>
                  <td>{val?.dateOfDeparture}</td>
                  <td>{val?.estimatedDepartureTime}</td>
                  <td>
                  <Link
                    to={`/reservation?flightnumber=${val?.flightNumber}`}
                  >
                    <button className="btn btn-sm btn-primary">BOOK</button>
                  </Link>
                  </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
            </div>
        </div>

       
       
      )}
    </>
  );
};

export default FlightCard;
