import React from "react";

const Ticket = (props) => {
  const data = props?.item;
  return (
    <>
      {" "}
      {data && (
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-9 ">
              <div className="row bg-white p-4">
                <div className="col-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="currentColor"
                    className="bi bi-qr-code"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2h2v2H2V2Z" />
                    <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                    <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                    <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                    <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
                  </svg>
                </div>
                <div className="col-5 border-end">
                  <p className="mb-1">Passenger Name</p>
                  <h4 className="pb-4 text-uppercase">{data.passenger.firstName +" "+data.passenger.lastName}</h4>

                  <div className="d-flex justify-content-between mt-5">
                    <div>
                      <p className="mb-1">Flight</p>
                      <h5>{data.flight.operatingAirlines+" - "+data.flight.flightNumber}</h5>
                    </div>
                   
                  </div>
                </div>
                <div className="col-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                      <p>From</p>
                      <h4>{data.flight.arrivalCity}</h4>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      fill="currentColor"
                      className="bi bi-airplane-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                    </svg>
                    <div className="text-end">
                      <p>To</p>
                      <h4>{data.flight.departureCity}</h4>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="text-end">
                      <p className="mb-1">Boarding Time</p>
                      <h5>{data.flight.estimatedDepartureTime}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ticket;
