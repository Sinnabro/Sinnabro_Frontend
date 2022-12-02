import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";

const LeftCalendar = ({ day, setDay }) => {
  return (
    <>
      <Calendar onChange={setDay} value={day} />
    </>
  );
};

export default LeftCalendar;
