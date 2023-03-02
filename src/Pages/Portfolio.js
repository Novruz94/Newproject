import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image8 from '../images/social-media1.jpg'
import Image9 from '../images/social-media2.jpg'
import Image10 from '../images/social-media3.jpeg'
import { FaAirbnb } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaTv } from "react-icons/fa";

function Portfolio() {
  return (
    <div className='portfolio1' style={{backgroundColor:'#F9F54B'}}>
      
      <Carousel>
      <Carousel.Item>
        <img
          className="picture d-block w-100"
          src={Image8}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='text-dark font-weight-bold'>First slide label</h2>
          <p className='text-white font-weight-bold '>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" picture2 d-block w-100"
          src={Image9}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2 className='text-dark font-weight-bold'>Second slide label</h2>
          <p className='text-white font-weight-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" picture3 d-block w-100"
          src={Image10}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2 className='text-dark font-weight-bold'>Third slide label</h2>
          <p className='text-white font-weight-bold'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            <div className="container" style={{marginTop:'20px'}}>
            <div className="row">
              <div className="col-12 col-md-4 mb-2 mb-md-0">
                <div className="box">
                  <i className='mb-3'> <FaAirbnb/> </i>
                  <h4 className='mb-0' style={{color:'#205E61'}}>Ümumi müştərilər</h4>
                  <p className='mb-0' style={{color:'#205E61'}}>1000</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-2 mb-md-0">
                <div className="box">
                  <i className='mb-3'> <FaHistory/> </i>
                  <h4 className='mb-0' style={{color:'#205E61'}}>Layihələr həyata keçirilib</h4>
                  <p className='mb-0' style={{color:'#205E61'}}>900</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-2 mb-md-0">
                <div className="box">
                  <i className='mb-3'> <FaTv/> </i>
                  <h4 className='mb-0' style={{color:'#205E61'}}>İş illəri</h4>
                  <p className='mb-0' style={{color:'#205E61'}}>333</p>
                </div>
              </div>
             </div>
            </div>

    

    </div>
  )
}

export default Portfolio
