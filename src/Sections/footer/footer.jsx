import React from 'react'
import "./footer.scss"

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

// COntact icons

import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { FaRegAddressCard } from "@react-icons/all-files/fa/FaRegAddressCard";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";



function Footer() {
  return (
    <div className='footerbackground'>


    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4" id="footersections" >
                <h4 className='footername' > <b> Taha Rasheed </b> </h4>
                <p className='p-0 my-2' style={{color:  "rgb(215, 215, 215)"}} >Full stack web developer</p>

            <p className='bio mx-md-0 mx-auto mt-4 w-75 ' > With a web developer shortage and  job growth is at 27% per year,  do you need a web developer?  </p>

            <div className="my-3">

                <span  onClick={()=>{ window.location.replace("https://www.facebook.com/taha.rasheed.125760/"); }} className='contacticon  shadow  ' id='footersocialicons1'  > <FaFacebookF/> </span>
                <span onClick={()=>{window.location.replace("https://www.instagram.com/taharasheed2273/");}} className='contacticon   shadow mx-4' id='footersocialicons2' > <FaInstagram/> </span>
                <span onClick={()=>{ window.location.replace("https://www.linkedin.com/in/taha-rasheed-990a14241/"); }} className='contacticon   shadow ' id='footersocialicons' > <FaLinkedinIn/> </span>

            </div>

          </div>

          <div class="col-md-4" id="footersections" >
            <h6>Site map</h6>
            <ul class="footer-links">
              <li><a href="#topsliderbody">Home</a></li>
              <li className='my-2' ><a href="#projectsection">Projects</a></li>
              <li  className='my-2' ><a href="#Skillbackground">Skills</a></li>
              <li><a href="#Educationarea">Contact</a></li>
            </ul>
          </div>

          <div class="col-md-4" id="footersections" >
            <h6>Contact me</h6>
           
            <span><span className='mx-2' > <FiPhoneCall/> </span>  (+92) 309 5199778 </span> <br />
           <span><span className='mx-2 my-3' >  <AiOutlineMail/>   </span>  taharasheed020@gmail </span> <br />
           <span>  <span className='mx-2' > <FaRegAddressCard/> </span>  lda avenue 1, Lahore Pakistan </span>

          </div>
        </div>
        <hr/>
      </div>
      <div class="container text-white">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by <b> Taha Rasheed </b>
            </p>
          </div>

          <div class="footergitlink col-md-4 col-sm-6 col-xs-12">
          <span>  <span className='footergithublink mx-2' > <AiFillGithub/> </span> <a className='footergithublink' href='https://github.com/taha020' > View on github </a> </span>
          

          </div>
        </div>
      </div>
</footer>

    </div>
  )
}

export default Footer