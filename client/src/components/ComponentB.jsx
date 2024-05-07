import React, { useState } from "react";
import axios from "axios";

const ComponentB = () => {
  const [content, setContent] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:5000/api/add", { content })
      .then((response) => {
        console.log("Data added successfully");
        setContent("");
      })
      .catch((error) => {
        console.error("Error adding data:", error);
      });
  };

  return (
    <div className="component">
      <h2>Component B</h2>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ComponentB;
