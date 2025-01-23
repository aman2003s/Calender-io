import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import MyCalender from "./components/MyCalender";
import { fetchEvents } from "./actions/actions";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

const MainApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div>
      <h1>React Big Calendar with Bar Graph</h1>
      <MyCalender />
    </div>
  );
};

export default App;
