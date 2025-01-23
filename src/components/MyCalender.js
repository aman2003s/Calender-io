import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "../data/sampleData.json";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BarChart from "./BarChart";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (event) => {
    setSelectedDate(event.start);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelect}
      />
      {selectedDate && <BarChart date={selectedDate} />}
    </div>
  );
};

export default MyCalendar;
