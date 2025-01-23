import eventsData from '../data/sampleData.json';

export const setEvents = (events) => ({
  type: 'SET_EVENTS',
  payload: events
});

export const fetchEvents = () => {
  return (dispatch) => {
    // Simulate fetching data from a server
    setTimeout(() => {
      dispatch(setEvents(eventsData));
    }, 1000);
  };
};
