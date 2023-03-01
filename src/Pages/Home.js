/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Image from '../images/impact2.jpg'
import { FaAirbnb } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

function Home() {
  return (
  <div className="home1">
    <div className='container'>
      <div className="row">
        <div className="col-12 col-lg-6 " style={{padding:" 130px 0"}}>
          <h3 className='font-weight-bold text-white' >
            Novruz-a xoş gəlmisiniz
          </h3>
          <p className='text-para text-white' style={{padding:" 20px 0"}} >
            Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
          </p>
          <Button variant="success" font-weight-bold >Başlamaq</Button>{' '}
          <a href="https://www.youtube.com/watch?v=Tn6-PIqc4UM" 
          className="glightbox btn-watch-video d-flex align-items-center">
            <i className='text-white'> <FaPlay/> </i>
            <span className='text-white font-weigt-bold'>Video izlə</span>
          </a>
        </div>
        <div className="col-sm col-lg-6 mb-4 mb-lg-0" style={{padding:" 60px 0"}}>
          <div className="img-head">
            <img  src={Image} className="img-fluid" alt='' />
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card text-center">
            <div className="card-body">
              <div className="circle">
                <span> <i> <FaTv/> </i> </span>
              </div>
              <h4 className='font-weight-bold text-center text-white'>Lorem Ipsum</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card text-center">
            <div className="card-body">
              <div className="circle">
                <span> <i> <FaAirbnb/> </i> </span>
              </div>
              <h4 className='font-weight-bold text-center text-white'>Sed ut perspiciatis</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card text-center">
            <div className="card-body">
              <div className="circle">
                <span> <i> <FaLocationArrow/> </i> </span>
              </div>
              <h4 className='font-weight-bold text-center text-white'>Magni Dolores</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card text-center">
            <div className="card-body">
              <div className="circle">
                <span> <i> <FaHistory/> </i> </span>
              </div>
              <h4 className='font-weight-bold text-center text-white'>Nemo Enim</h4>
            </div>
          </div>
        </div>



      </div>
      
    </div>
    
  </div>

    
  )
}

export default Home
