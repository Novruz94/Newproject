/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Image from '../images/impact2.jpg'
import { FaAirbnb } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import ReactPlayer from 'react-player/youtube'

function Home() {
  return (
  <div className="home1">
    <div className='container'>
      <div className="row">
        <div className="col-12 col-lg-6 " style={{padding:" 130px 0"}}>
          <h3 className='font-weight-bold' style={{color:'#205E61'}} >
            Novruz-a xoş gəlmisiniz
          </h3>
          <p className='text-para' style={{padding:" 20px 0" , color:'#205E61'}} >
            Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.
          </p>
          <Button style={{color:'#205E61', backgroundColor:'#8BF5FA'}} font-weight-bold >Başlamaq</Button>{' '}
          <br/>
          <br/>
          
          <ReactPlayer 
             width='480px' 
             height='240px' 
             controls
             url='https://www.youtube.com/watch?v=s2skans2dP4' />
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
              <h4 className='font-weight-bold text-center' style={{color:'#205E61'}}>Lorem Ipsum</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card text-center">
            <div className="card-body" >
              <div className="circle">
                <span> <i> <FaAirbnb/> </i> </span>
              </div>
              <h4 className='font-weight-bold text-center' style={{color:'#205E61'}}>Sed ut perspiciatis</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card text-center">
            <div className="card-body">
              <div className="circle">
                <span> <i> <FaLocationArrow/> </i> </span>
              </div>
              <h4 className='font-weight-bold text-center' style={{color:'#205E61'}}>Magni Dolores</h4>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card text-center">
            <div className="card-body">
              <div className="circle">
                <span> <i> <FaHistory/> </i> </span>
              </div>
              <h4 className='font-weight-bold text-center' style={{color:'#205E61'}}>Nemo Enim</h4>
            </div>
          </div>
        </div>



      </div>
      
    </div>
    
  </div>

    
  )
}

export default Home
