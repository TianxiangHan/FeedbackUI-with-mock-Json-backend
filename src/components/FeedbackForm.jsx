import React,{useState,useContext,useEffect} from 'react';
import Button from './Button';
import Rating from './Rating';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const{HandleFeedbackAdd,editFeedback,UpdateFeedback}=useContext(FeedbackContext);
    const [text,setText]=useState("");
    const [message,setMessage]=useState("");
    const [buttonDisabled,setButtonDisabled]=useState(true);
    const [rating, setRating]=useState(10);

    useEffect(()=>{
       if(editFeedback.edit===true){
        setButtonDisabled(false);
        setText(editFeedback.item.text);
        setRating(editFeedback.item.rating);
       }
    },[editFeedback])
    function HandleSubmit(e){
          e.preventDefault();
          if(text.trim().length>=10){
              const feedback={
                  text:text,
                  rating:rating
              };
              if(editFeedback.edit===true){
                UpdateFeedback(editFeedback.item.id,feedback);
              }
              else{
                HandleFeedbackAdd(feedback);
              }
              
              setText("");
          }
    }
    function TextOnChange(e){
       
        if(text===""){
            setButtonDisabled(true);
            setMessage(null)
        }
        else if(text!=""&&text.trim().length<=10){
            setButtonDisabled(true);
            setMessage("please type in at least 10 characters");
        }
        else{
            setButtonDisabled(false);
            setMessage(null);
            
        }

        setText(e.target.value);
        

    }
   
  return (
      <Card >
      <form onSubmit={HandleSubmit}>
      <h2>How would you rate your service with us?</h2>
      <Rating ratingFunctionInFeedbackForm={(PassedInRating)=>setRating(PassedInRating)}/>
      <div className='input-group'>
      
          <input type="text" onChange={TextOnChange} value={text} placeholder='write a review'/>
          <Button type="submit" isDisabled={buttonDisabled}>Send Me</Button>
      </div>
      </form>
          {message&&<div className='message'>{message}</div>}
      </Card>
    
  )
}

export default FeedbackForm