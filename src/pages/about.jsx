import React from 'react'
import Card from '../components/shared/Card'
import {Link} from "react-router-dom";
function about() {
  return (
      <Card>
       <div className='about'>
       <h1>About</h1>
       <p>This is a react app for feedback</p>
       <p>Version:1.000</p>
       <Link to="/">
           Back to Home
       </Link>
       </div> 
       
      </Card>
    
  )
}

export default about