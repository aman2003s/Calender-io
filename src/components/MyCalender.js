import React, { useState, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '../data/sampleData.json';
import BarChart from './BarChart';

const localizer = momentLocalizer(moment);

// Transform sampleData.json to the events format required by react-big-calendar
const transformEvents = (data) => {
  return Object.entries(data).flatMap(([date, dateEvents]) =>
    dateEvents.map(event => ({
      start: new Date(date),
      end: new Date(date),
      title: JSON.stringify(event) // Customize this as needed
    }))
  );
};

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [noData, setNoData] = useState(false);

  const handleSelect = (start) => {
    const dateStr = moment(start).format('DD-MM-YYYY');
    if (events[dateStr] && events[dateStr].length > 0) {
      setSelectedDate(dateStr);
      setShowPopup(true);
      setNoData(false);
    } else {
      setSelectedDate(dateStr);
      setShowPopup(true);
      setNoData(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setNoData(false);
  };

  const memoizedEvents = useMemo(() => transformEvents(events), []);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={memoizedEvents}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={(event) => handleSelect(event.start)}
        onSelectSlot={({ start }) => handleSelect(start)}
        style={{ height: 500 }}
      />
      {showPopup && (
        <div className="popup">
          <button onClick={handleClosePopup}>Close</button>
          {noData ? (
            <div className="no-data-alert">
              <p>No data found for the selected date.</p>
            </div>
          ) : (
            <BarChart date={selectedDate} />
          )}
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
