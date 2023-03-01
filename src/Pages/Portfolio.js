import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image8 from '../images/social-media1.jpg'
import Image9 from '../images/social-media2.jpg'
import Image10 from '../images/social-media3.jpeg'

function Portfolio() {
  return (
    <div className='portfolio1'>
      
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



    </div>
  )
}

export default Portfolio
