/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image1 from '../images/impact2.jpg'
import { FaAirbnb } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaTv } from "react-icons/fa";

function About() {
  return (
    <div className='about1'>

     
       <div className="about-us-section bg-success">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0" >
            <div className="img-head">
           <img src={Image1}  />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className='text-head'>
            HAQQIMIZDA ƏTRAFLI BİLİN
            </h2>
            <div className="break-small mb-2"></div>
            <p className='text-para'>
              Lorem ipsum dolor sit, amet consectetur adipisicing 
              elit. Ab nulla, sapiente a explicabo harum, deleniti 
              quasi consequatur cumque sed, pariatur reiciendis.
               Dignissimos provident voluptatibus sequi placeat 
               nisi maiores excepturi repudiandae.
               Lorem ipsum dolor sit, amet consectetur adipisicing 
              elit. Ab nulla, sapiente a explicabo harum, deleniti 
              quasi consequatur cumque sed, pariatur reiciendis.
               Dignissimos provident voluptatibus sequi placeat 
               nisi maiores excepturi repudiandae.
            </p>
            <div className="row">
              <div className="col-12 col-md-4 mb-2 mb-md-0">
                <div className="box">
                  <i className='mb-3'> <FaAirbnb/> </i>
                  <h4 className='mb-0'>Ümumi müştərilər</h4>
                  <p className='mb-0'>1000</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-2 mb-md-0">
                <div className="box">
                  <i className='mb-3'> <FaHistory/> </i>
                  <h4 className='mb-0'>Layihələr həyata keçirilib</h4>
                  <p className='mb-0'>900</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-2 mb-md-0">
                <div className="box">
                  <i className='mb-3'> <FaTv/> </i>
                  <h4 className='mb-0'>İş illəri</h4>
                  <p className='mb-0'>333</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
       </div>
      </div>
    
  )
}

export default About
