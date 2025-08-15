// src/components/Results.js
import React, { useState } from "react";
import axios from "axios";
import "./Card.css";

const Results = () => {
  const [hallTicketNumber, setHallTicketNumber] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  // Get API base URL from environment variable
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8085';

  const fetchData = async () => {
    try {
      // Use environment variable instead of hardcoded URL
      const res = await axios.get(`${API_BASE_URL}/details/${hallTicketNumber}`);
      setStudent(res.data);
      setError("");
    } catch (err) {
      setStudent(null);
      setError("No student found with this Hall Ticket Number");
      console.error("API Error:", err); // Added for debugging
    }
  };

  return (
    <div className="results-container">
      <div className="search-card">
        <h3>Enter Hall Ticket Number</h3>
        <input
          type="text"
          value={hallTicketNumber}
          onChange={(e) => setHallTicketNumber(e.target.value)}
          placeholder="Hall Ticket Number"
        />
        <button onClick={fetchData}>Get Result</button>
      </div>

      {error && <p className="error">{error}</p>}

      {student && (
        <div className="result-card">
          <h2>{student.candidateName}</h2>
          <p><strong>Hall Ticket:</strong> {student.hallTicketNumber}</p>
          <p><strong>Father's Name:</strong> {student.fatherName}</p>
          <p><strong>DOB:</strong> {student.dob}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
          <p><strong>Community:</strong> {student.community}</p>
          <p><strong>Post Applied District:</strong> {student.postAppliedDist}</p>
          <h3>Scores</h3>
          <p><strong>Exam Score:</strong> {student.examScore}</p>
          <p><strong>TET Score:</strong> {student.tet}</p>
          <p><strong>Total Score:</strong> {student.totalScore}</p>
          <p><strong>Status:</strong> {student.status}</p>
        </div>
      )}
    </div>
  );
};

export default Results;