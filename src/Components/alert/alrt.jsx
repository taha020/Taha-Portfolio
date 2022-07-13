import React,{useState} from 'react'
import "./alert.scss"

function warningalert(props) {

    

  return (
    <div>

        <div className="alertbody">

                
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Hello !</strong> {props.text}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

        </div>

    </div>
  )
}

export default alrt