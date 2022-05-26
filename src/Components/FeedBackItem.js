import React from "react";
import { useState } from "react";
import Card from "./Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedBackContext from "../Context/FeedbackContex";

function FeedBackItem(props) {
  const [reverse, setReverse] = useState(true);
  const { deleteFeedBack, editFeedback } = useContext(FeedBackContext);

  return (
    <Card reverse={reverse}>
      <button className="close" onClick={() => deleteFeedBack(props.item.id)}>
        <FaTimes color="pink"></FaTimes>
      </button>
      <button className="edit" onClick={() => editFeedback(props.item)}>
        <FaEdit color="pink"></FaEdit>
      </button>
      <div className="num-display">{props.item.rating}</div>
      <div className="text-display">{props.item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
