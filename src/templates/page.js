import React from 'react';


export default ({pageContext}) => {
    
    console.log(pageContext)
    return (
        <div>
        <h1>{pageContext.title}</h1>
      </div>
    )
  
}