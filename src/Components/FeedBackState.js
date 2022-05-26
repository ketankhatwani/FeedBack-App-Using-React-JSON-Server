import React from 'react';
import {useContext} from 'react';
import FeedBackContext from '../Context/FeedbackContex';

function FeedBackState() {

  const { feedback } = useContext(FeedBackContext);

    const sum = (acc, current) => {
        return acc + current.rating;
    }

    const total = feedback.reduce(sum, 0)/feedback.length;

  return (
    <div className='feedback-stats container'>
      <h4>No. of Reviews: {feedback.length}</h4>
      <h4>Average Rating: {total}</h4>
    </div>
  );
}

export default FeedBackState;
