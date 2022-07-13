import React, { useState,useEffect } from 'react'
import "./projects.scss"
import Solidbuttondark from '../../Components/Buttons/solidbuttondark'
import Iconbuttondark from '../../Components/Buttons/iconbuttondark';
import ills from "../../../src/images/icons/Gitimage.png";


function Projects() {

    let projects=[
     
       "Hospital Management","News alert", "ERP sysem","Hospital Management","News alert", "ERP sysem"
]

  //Button Click animate div

  let animatediv=()=>{

  let b=document.getElementById("opencanvas")
  b.click()
  
  }

  let div2=()=>{
  
    return <div>
        <p>List of projects done</p>
        
        {
            projects.map((e)=>
            
          
           <span class="badge rounded-pill bg-secondary mx-2 my-2 p-2">{e}</span>

            )
        }
  
    <br />
    <br />
  
    <Solidbuttondark ids="as" action={()=>{window.URL="Www.google.com"}} text="View on Git" />
    </div>
  }
    
  return (
    <div className='projectsection' id='projectsection' > 

        <div className="row">
          
            <div className="col-lg-4  ml-lg-5 offset-lg-2">
                <div className="imagebody mx-lg-0 mx-auto shadow ">
                  <img className='illsimg' src={ills} alt="Projects Done" />
                </div>
            </div>
            <div className="projectright mx-lg-5 mx-0 col-lg-4">

            <div className='mx-lg-0 mx-auto'   >
     <p >Explore projects</p>
     <h5 className='mt-2' >See the projects done in<br />Github Respositries</h5>
     <div onClick={()=>{  window.location.replace(" https://github.com/taha020 ");  }} className="mt-4"> <Solidbuttondark ids="as" text="Open projects" /> </div>
     </div>
                
            </div>
        </div>

    <button class="btn btn-primary d-none" id='opencanvas' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
         <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Projects</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
            <div class="offcanvas-body">
             {div2()}
            </div>
         </div>

    </div>
  )
}

export default Projects