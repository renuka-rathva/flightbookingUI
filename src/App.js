import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import FlightSearch from "./pages/FlightSearch";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Registration />}></Route>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/flightSearch" element={<FlightSearch />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
