import React, { useState, useEffect } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import axios from "axios";
import "./App.css";

const App = () => {
  const [addCount, setAddCount] = useState(0);

  useEffect(() => {
    // Fetching counts on component mount
    axios
      .get("http://localhost:5000/api/count")
      .then((response) => {
        setAddCount(response.data.addCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>API Call Counts</h1>
      <p>Add Count: {addCount}</p>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default App;
