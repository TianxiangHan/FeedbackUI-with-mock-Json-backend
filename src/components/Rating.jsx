import React, {useContext,useEffect, useState} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function Rating({ratingFunctionInFeedbackForm}) {
  const {editFeedback}=useContext(FeedbackContext);
  const [selected,setSelected]=useState("");
  useEffect(()=>{
    if(editFeedback.edit===true){
      ratingFunctionInFeedbackForm(editFeedback.item.rating);
      setSelected(editFeedback.item.rating);
    }
    
  },[editFeedback]);
    function handleChange(e){
        ratingFunctionInFeedbackForm(+e.target.value);
        setSelected(+e.target.value);
    }
  return (
    
     <ul className='rating'>
        {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}

     </ul>

  );
}

export default Rating