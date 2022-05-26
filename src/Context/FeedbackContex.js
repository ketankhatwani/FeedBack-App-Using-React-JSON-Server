import { createContext, useState, useEffect } from "react";

const FeedBackContext = createContext();

export const FeedbackProider = ({ children }) => {
  
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbacEdit] = useState({
    item: {},
    edit: false
  });

  useEffect(() =>{
    fetchData();  
  },[])

  const fetchData = async () => {
    const res = await fetch(`/feedback?sort=id`);
    const data = await res.json();
    setFeedback(data);
  }


  const addFeedback = async (newFeedback) => {
    const res = await fetch('/feedback', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newFeedback)
    })  

    const data = await res.json()
    setFeedback([data, ...feedback]);
  }


  const editFeedback = (item) => {
    setFeedbacEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = async (id, updFeedback) => {
    
    const res = await fetch(`/feedback/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updFeedback)
      })

      const data = await res.json();

    setFeedback(
      feedback.map(
        (item) => (item.id === id ? {...item, ...data} : item)
      )
    )
  }

    const deleteFeedBack = async (id) => {
    if(window.confirm('Are you want to delete item?'))
    {
      await fetch(`/feedback/${id}`, {
        method: 'DELETE'
      })
      setFeedback(feedback.filter((item)=> item.id !== id ));
    }
  }

  return (
    <FeedBackContext.Provider value={{ 
      feedback,
      feedbackEdit, 
      deleteFeedBack,
      addFeedback,
      editFeedback,
      updateFeedback
      }}>
      {children}
    </FeedBackContext.Provider>
  );
} ;

export default FeedBackContext;