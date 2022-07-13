import React,{useState} from 'react'
import "./contact.scss"
import Solidbuttondark from '../../Components/Buttons/solidbuttondark'

import { BiMessageAltCheck } from 'react-icons/bi';
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";


import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaRegAddressCard } from "@react-icons/all-files/fa/FaRegAddressCard";

import mypic from "../../images/icons/mypic.png"

function Contact() {

 


  let validatemessage=()=>{

    let name=document.getElementById("namefield").value
    let email=document.getElementById("emailfield").value
    let message=document.getElementById("messagefield").value
   

    if(name!="" & email!="" && message!="")
    {
      
      if(name.match(/^[a-zA-Z]+ [a-zA-Z]+$/) && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && message.length<400 )
      {
          alert("Done")
      }


      else
      {
          alert("Please enter valid detials")
      }

    }
    else
    {
        alert("Please enter all details")
    }

  }

  return (
    <div className='contactsection' id='contactsection' >

    <div className="row ">
        <div className="contactleft col-lg-6" >
           <h5> <b> Get in touch </b> </h5>
           <p>we are known as fast repliers</p>
                <br />
               
            <div className="row">
                <div className="col-lg-6">
                     <div>
                         <label for="" class="form-label">Name</label>
                         <input type="text"  class="form-control" name="" id="namefield" aria-describedby="helpId" placeholder="John smith"/>
                         <small id="helpId" class="form-text  ">*Alphabets only</small>
                     </div>
               </div>
            <div className="col-lg-6">

                    <div >
                         <label for="" class="form-label">Email</label>
                         <input type="email"  class="form-control" name="" id="emailfield" aria-describedby="helpId" placeholder="abc@xyz.com"/>
                         <small id="helpId" class="form-text ">*Enter valid email </small>
                     </div>

            </div> 
            </div>

            <div  className='message mt-4' >
                         <label for="" class="form-label">Message</label>
                         <textarea type="text"  class="form-control" name="" id="messagefield" aria-describedby="helpId" placeholder="Your message"/>
                         <small id="helpId" class="form-text ">*400 charactors maximum</small>
            </div>
            <br />
            <br />
         <button onClick={validatemessage} type="button" class="contactbutton btn btn-primary px-4 "> <span  className='' > <BiMessageAltCheck/> </span> Submit</button>



        </div>
        <div className="contactright col-lg-5">

        <div className="pictureare mx-auto" style={{width:"21.5%"}}>

        <img style={{height:"110px"}} className="contactpic mx-auto" src={mypic} alt="" />
        </div>
        <h4 className=' text-center mt-2 ' ><b>Taha Rasheed</b></h4>
        <p className=' text-center ' style={{color:"rgb(240, 240, 240)"}} >  Full stack web developer</p>

        

        <div className="dividercontact mx-auto "></div>
        <div className="contactlinks mx-auto">

        <span onClick={()=>{window.location.replace("https://www.facebook.com/taha.rasheed.125760/");}} className='contacticon shadow  '> <FaFacebookF/> </span>
        <span onClick={()=>{window.location.replace("https://www.instagram.com/taharasheed2273/");}} className='contacticon  shadow '> <FaInstagram/> </span>
        <span onClick={()=>{ window.location.replace("https://www.linkedin.com/in/taha-rasheed-990a14241/"); }} className='contacticon  shadow '> <FaLinkedinIn/> </span>
     
        </div>

        <div className="contactdivcontact ">
            
        <span className='contactlefticon   '> <FiPhoneCall/> </span> <p className='mx-4' > (+92) 309 5199778 </p> <br /> <br />
        <span className='contactlefticon my-5  '> <AiOutlineMail/> </span> <p className='mx-4' >taharasheed020@gmail.com</p> <br /> <br />
        <span className='contactlefticon  '> <FaRegAddressCard/>   </span> <p className='mx-4' >Lda Avenue-1 , Lahore Pakistan </p> <br />

        </div>

        </div>
    </div>



    </div>
  )
}

export default Contact