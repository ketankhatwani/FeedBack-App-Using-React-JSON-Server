import React from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <h3>About this project</h3>
      <p>This is React Project for Feedback of any Product or Service.</p>
      <p>Version: 1.0.0</p>
      <Link to="/">Go to Home page.</Link>
    </Card>
  );
}

export default About;
