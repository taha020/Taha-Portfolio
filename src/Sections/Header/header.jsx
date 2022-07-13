import React,{useEffect} from 'react'
import "./header.scss"
import Solidbuttondark from '../../Components/Buttons/solidbuttondark';
import { HiOutlineMenuAlt3 } from "@react-icons/all-files/hi/HiOutlineMenuAlt3";
import { IoIosContact } from "@react-icons/all-files/io/IoIosContact";
import {Link} from "react-router-dom";


function Header() {
   
  return (
    <div className='navbarsimple px-4' >

    <div className="name"> <h5 className='myname' > Taha rasheed </h5></div>


   

    <div className="menuebar"  >
        <ul className='menue' >
            <li className='menuelink mx-4' > <a href="#topsliderbody">Home</a></li>
            <li className='menuelink mx-4' > <a href="#projectsection">Projects</a></li>
            <li className='menuelink mx-4' > <a href="#Skillbackground">Skills</a></li>
            <li className='menuelink mx-4' > <a href="#Educationarea">Education</a></li>
        </ul>
    </div>

    <div className="contact m-0 mt-2">
    <a href="#contactsection"><Solidbuttondark text="Contact"  /></a>
    </div>

    <div className="collapsingmenue" style={{display:"none"}}>
      {/* collapsingmenueicon */}
      
      <button class="btn btn-primary" type="button" id='collapsingmenueicon' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <HiOutlineMenuAlt3/> </button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Menu</h5>
    <button type="button" class="btn-close text-reset " style={{color:"white"}} data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body" id='slidingmenue'>
  
  <ul className='offcanvasmenue' >
    <li><a onClick={()=>{ document.getElementById("collapsingmenueicon").click() }}  className='' href="#topsliderbody">Home</a></li>
    <li><a onClick={()=>{ document.getElementById("collapsingmenueicon").click() }}  className='' href="#projectsection">Projects</a></li>
    <li><a onClick={()=>{ document.getElementById("collapsingmenueicon").click() }}  className='my-4' href="#Skillbackground">Skills</a></li>
    <li><a onClick={()=>{ document.getElementById("collapsingmenueicon").click() }}  className='' href="#Educationarea">Education</a></li>
    <li><button className='collapsingmenuebutton my-3 px-3 py-2' > <span> <IoIosContact/> </span> <a onClick={()=>{ document.getElementById("collapsingmenueicon").click() }}  href="#contactsection">Contact</a> </button></li>
  </ul>

  </div>
</div>
  
      </div>

    </div>
  )
}

export default Header