import React, {useContext, useState} from 'react';
import {FaTimes,FaEdit} from "react-icons/fa";
import Card from "./shared/Card";
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item}) {
   const{HandleDelete,editFeedbackFunction}=useContext(FeedbackContext);
    function HandleClick(){
        editFeedbackFunction(item);
    }
  return (
    <Card  >
        <div className='num-display'>{item.rating}</div>
        <button className='close' onClick={()=>HandleDelete(item.id)} >
            <FaTimes color='purple' />
        </button>
        <button className='edit' onClick={HandleClick}>
            <FaEdit color='purple'/>
        </button>
        <div className='text-display'>{item.text}</div>
     <button  >Click</button>
    </Card>
     
    
  )
}
Card.defaultProps={
    reverse:false,
}
export default FeedbackItem