import React from "react";
import FeedBackItem from "./FeedBackItem";
import { useContext } from "react";
import FeedBackContext from "../Context/FeedbackContex";

function FeedBackList(props) {
  const { feedback } = useContext(FeedBackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack yet.</p>;
  }

  return (
    <>
      {feedback.map((item) => (
        <FeedBackItem item={item} />
      ))}
    </>
  );
}

export default FeedBackList;
