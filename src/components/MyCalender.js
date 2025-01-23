import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BarChart from './BarChart';

const localizer = momentLocalizer(moment);

const transformEvents = (data) => {
  return Object.entries(data).flatMap(([date, dateEvents]) =>
    dateEvents.map(event => ({
      start: new Date(date.split('-').reverse().join('-')),
      end: new Date(date.split('-').reverse().join('-')),
      title: JSON.stringify(event)
    }))
  );
};

const MyCalender = () => {
  const events = useSelector(state => state.events);
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

  const memoizedEvents = useMemo(() => transformEvents(events), [events]);

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

export default MyCalender;
