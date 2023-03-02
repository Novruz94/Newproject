import React from 'react'
import { FaHistory } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

function Services() {
  return (
    <div className='services1'>
      <section className='services py-5' style={{backgroundColor:'#F9F54B'}}>
        <div className="container py-5">
          <h1 className='text-center pb-5' style={{color:'#205E61'}}>Xidmətlər.</h1>
          <div className="row pb-3">
            <div className="col-lg-4 mb-3">
              <div className="cards text-center py-3">
                <div className="cards-body" style={{backgroundColor:'#8BF5FA'}}>
                  <div className="circles">
                  <span> <i> <FaTv/> </i> </span>
                  </div>
                  <h4 className='font-weight-bold pb-2' style={{color:'#205E61'}}>Veb dizayn</h4>
                  <p style={{color:'#205E61'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, explicabo.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="cards text-center py-3">
                <div className="cards-body" style={{backgroundColor:'#8BF5FA'}}>
                  <div className="circles">
                  <span> <i> <FaHistory/> </i> </span>
                  </div>
                  <h4 className='font-weight-bold pb-2' style={{color:'#205E61'}}>Veb dizayn</h4>
                  <p style={{color:'#205E61'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, explicabo.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="cards text-center py-3">
                <div className="cards-body" style={{backgroundColor:'#8BF5FA'}}>
                  <div className="circles">
                  <span> <i> <FaLocationArrow/> </i> </span>
                  </div>
                  <h4 className='font-weight-bold pb-2' style={{color:'#205E61'}}>Veb dizayn</h4>
                  <p style={{color:'#205E61'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, explicabo.</p>
                </div>
              </div>
            </div>


          </div>

         <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="cards text-center py-3">
                <div className="cards-body" style={{backgroundColor:'#8BF5FA'}}>
                  <div className="circles">
                  <span> <i> <FaHistory/> </i> </span>
                  </div>
                  <h4 className='font-weight-bold pb-2' style={{color:'#205E61'}}>Veb dizayn</h4>
                  <p style={{color:'#205E61'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, explicabo.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="cards text-center py-3">
                <div className="cards-body" style={{backgroundColor:'#8BF5FA'}}>
                  <div className="circles">
                  <span> <i> <FaTv/> </i> </span>
                  </div>
                  <h4 className='font-weight-bold pb-2' style={{color:'#205E61'}}>Veb dizayn</h4>
                  <p style={{color:'#205E61'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, explicabo.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="cards text-center py-3">
                <div className="cards-body" style={{backgroundColor:'#8BF5FA'}}>
                  <div className="circles">
                  <span> <i> <FaLocationArrow/> </i> </span>
                  </div>
                  <h4 className='font-weight-bold pb-2' style={{color:'#205E61'}}>Veb dizayn</h4>
                  <p style={{color:'#205E61'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, explicabo.</p>
                </div>
              </div>
            </div>

         </div>
        </div>
      </section>
    </div>
  )
}

export default Services
