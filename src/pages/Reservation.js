import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserService from "../components/services/UserService";
import Ticket from "../components/Ticket";
import calenderImg from "../Images/booked.png";

const Reservation = () => {
  const [booking, setBooking] = useState({
    passenger: { firstName: "", lastName: "" },
    flight: { flightNumber: "" },
  });
  const [searchParams] = useSearchParams();
 // const [bookAlert, setbookAlert] = useState(false);
  const [detail, setDetail] = useState(null);
  const handleChange = (e) => {
    const value = e.target.value;
    setBooking({
      ...booking,
      passenger: { ...booking.passenger, [e.target.name]: value },
    });
  };
  const bookFlight = (e) => {
    let flightNumber = searchParams.get("flightnumber");
    setBooking({
      ...booking,
      flight: {
        ...booking.flight,
        flightNumber: flightNumber,
      },
    });

   // console.log(booking);

    UserService.bookingLine(booking)
      .then((response) => {
        console.log(response);
        setDetail(response.data);
       // setbookAlert(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reset = (e) => {
    e.preventDefault();
    //setbookAlert(false);
    setBooking({
      ...booking,
      passenger: { ...booking.passenger, firstName: "", lastName: "" },
    });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="card p-3 mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={calenderImg} className="img-fluid rounded-start" alt="Booked..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Flight Reservation</h5>
                    {/* {bookAlert && (
                      <div className="alert alert-success" role="alert">
                        {" "}
                        Fligth Booked{" "}
                      </div>
                    )} */}

                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={booking.passenger.firstName}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={booking.passenger.lastName}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <button
                      onClick={bookFlight}
                      type="button"
                      className="btn btn-primary text-center me-3"
                    >
                      Reservation
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
          </div>
        </div>
      </div>

      <Ticket item={detail}/>
    </>
  );
};

export default Reservation;
