import React, { useState } from 'react'
import "./topbanner.scss"
import 'animate.css';
import { Link } from 'react-router-dom';

//Images import
import slidericon from "../../images/icons/bannerrocket.gif"



//Importing icons from react icons library
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";



function Topbanner() {

  return (
    <div>
       <div className="topsliderbody " id='topsliderbody'>
        <div className="row">
          <div className="col-lg-2">
            <div className="links mt-lg-5 mt-5 mb-lg-0 mb-5">
              <div onClick={()=>{ window.location.replace("https://www.facebook.com/taha.rasheed.125760/"); }} className="bannerlink">   <FaFacebookF/></div>
              <div onClick={()=>{window.location.replace("https://www.instagram.com/taharasheed2273/");}} className="bannerlink my-lg-4 my-0">   <FaInstagram/></div>
              <div onClick={()=>{ window.location.replace("https://www.linkedin.com/in/taha-rasheed-990a14241/"); }} className="bannerlink">  <FaLinkedinIn/></div>
           
            
             
            </div>
          </div>
          <div className="col-lg-8  text-center " id='bannermidletext'>
            <img src={slidericon} id='slidericon' alt="" />
            <p>bonjour!</p>
            <h5>Taha Rasheed</h5>
            <h6 id='animatedtextslider'>Full stack web Developer</h6>
          </div>
          {/* d-md-block d-none */}
          <div className="col-lg-2 ">
            <p className='sliderrighttext'> Creativity with passion </p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Topbanner