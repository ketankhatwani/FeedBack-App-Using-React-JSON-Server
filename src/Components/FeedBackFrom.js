import React from 'react';
import Card from './Card';
import {useState, useContext, useEffect} from 'react';
import '../App.css';
import RattingSelect from './RattingSelect';
import FeedBackContext from '../Context/FeedbackContex';


function FeedBackFrom() {

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedBackContext);

    const [text, setText] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRatting] = useState(10);

    useEffect(() => {
        if(feedbackEdit.edit === true)
        {
            setDisabled(false);
            setText(feedbackEdit.item.text);
            setRatting(feedbackEdit.item.rating);
        }
    },[feedbackEdit])

    const changeRating = (ratting) => {
        setRatting(Number(ratting));
    }

    const handleText = (e) =>{
        setText(e.target.value);

        if(e.target.value.trim().length > 10)
        {
            setMessage('');
            setDisabled(false);
        }
        else if(e.target.value !== '')
        {
            setDisabled(true);
            setMessage('FeedBack should of atleast 10 charaters long.');
        }
        else
        {
            setDisabled(true);
            setMessage('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            text,
            rating
        }

        if(feedbackEdit.edit === true)
        {
            updateFeedback(feedbackEdit.item.id,newFeedback)
        }
        else
        {
            addFeedback(newFeedback);
        }
        
        setText('');
        setDisabled(true);
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
          <h2>Give us Rating for Servise.</h2>
          <RattingSelect changeRating={changeRating}></RattingSelect>
          <div className="input-group">
              <input type="text" placeholder='Enter Feedback'
              onChange={handleText} value={text}
               />
               <button type="submit" disabled={disabled} className='btn btn-secondary'>Send</button>
          </div>
          {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackFrom;
