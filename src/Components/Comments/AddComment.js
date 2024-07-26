import { Timestamp } from "firebase/firestore";
import { ref } from "firebase/storage";
import React, { useState } from "react";
import styled from "styled-components";
import { storage } from "../../firebase";

const AddComment = () => {
  const [formData, setFormData] = useState({
    description: "",
    commentedOn: Timestamp.now().toDate(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = () => {
    if (!formData.description) {
      alert("Please fill out the comment before commenting!");
      return;
    }
  };
  return (
    <>
      {/* Your comment */}
      <label htmlFor="">Add comment!</label> <br />
      <textarea
        name="description"
        id=""
        cols="50"
        rows="5"
        value={formData.description}
        onChange={(e) => handleChange(e)}
        style={{
          border: "2px solid white",
          borderRadius: "10px",
          background: "transparent",
          color: "#fff",
          padding: "10px 15px",
          margin: "10px 0",
        }}
      ></textarea>{" "}
      <br />
      <button onClick={handlePublish}>Publish Comment!</button>
    </>
  );
};

export default AddComment;
