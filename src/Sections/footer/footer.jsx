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
          <div class="col-md-4">
                <h4 className='footername' > <b> Taha Rasheed </b> </h4>
                <p className='p-0 my-2' style={{color:  "rgb(215, 215, 215)"}} >Full stack web developer</p>

            <p className='bio mt-4 w-75 ' > With a web developer shortage and  job growth is at 27% per year,  do you need a web developer?  </p>

            <div className="my-2">

                <span className='contacticon  shadow  ' id='footersocialicons1'  > <FaFacebookF/> </span>
                <span className='contacticon   shadow mx-4' id='footersocialicons2' > <FaInstagram/> </span>
                <span className='contacticon   shadow ' id='footersocialicons' > <FaLinkedinIn/> </span>

            </div>

          </div>

          <div class="col-md-4">
            <h6>Site map</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Home</a></li>
              <li className='my-2' ><a href="http://scanfcode.com/category/front-end-development/">Projects</a></li>
              <li  className='my-2' ><a href="http://scanfcode.com/category/back-end-development/">Skills</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Contact</a></li>
            </ul>
          </div>

          <div class="col-md-4">
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

          <div class="col-md-4 col-sm-6 col-xs-12">
          <span>  <span className='footergithublink mx-2' > <AiFillGithub/> </span> <a href="#" className='footergithublink' > View on github </a> </span>
          

          </div>
        </div>
      </div>
</footer>

    </div>
  )
}

export default Footer