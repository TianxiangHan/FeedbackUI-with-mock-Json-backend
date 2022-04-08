import React from 'react';
import{useContext} from "react";
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';
// import if use animatePresence for animation
// import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
    const {feedback,isLoading} =useContext(FeedbackContext);
    //if isLoading is false and then 
    if((!isLoading)&&(!feedback|| feedback.length===0)){
        return <p>No Feedback Yet</p>
    }

  // if isLoading is false return the later in the brackets
  return isLoading? (<Spinner/>):(
  
  
  <div className='feedback-list' >
    
  {feedback.map((eachFeedback)=>(
     
        <FeedbackItem key={eachFeedback.id} item={eachFeedback} />
  ))}
  
  </div>
  );
}

export default FeedbackList