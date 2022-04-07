import React from 'react'

function Header({bgColor,textColor,text}) {
    const headerStyle={
        backgroundColor:bgColor,
        color:textColor,
    }
  return (
      <header style={headerStyle}>
           <div>
                <h2>{text} </h2>
           </div>
      </header>
    
  )
 
}

Header.defaultProps={
    text:"Feedback UI",
    bgColor:"rgba(0,0,0,0.4)",
    textColor: "#ff6a95"
}
export default Header