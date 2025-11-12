import React from 'react'
import './Fashion.css'
function Fashion({props}) {
  return (
    <div>
        <div>
            <h1>Fashion Show</h1>
        </div>
        <div id="card">
            <img src={props.image} alt='' height={80} width={80}></img>
            <h4>title{props.title}</h4>
            <h4>price{props.price}</h4>

        </div>
    </div>
  )
}

export default Fashion