import React from 'react';
import SpinnerImage from "../assets/Spinner.gif";

function Spinner() {
  return (
    <img src={SpinnerImage} alt="Loading..." style={{width:"100px" , margin:"auto", display:"block"}} />
  )
}

export default Spinner