import React from 'react'

import './styles.css'

export default props => {

  return (
      <ul className="list-participants">
        {props.participants.map( 
          (part, index) => <li key={index}>{part}</li>)
        }
      </ul>
  )
}