/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import Image4 from '../images/man2.jpg'
import Image5 from '../images/man3.jpg'
import Image6 from '../images/man4.jpg'

function Team() {
  return (
    <div className='team1'>
      
      <div className="team-area">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src={Image4} className="img-responsive" alt=''/>
            <div className="social">
              <ul className="list-inline">
                <li><a href="#"><i> <FaFacebook/> </i></a></li>
                <li><a href="#"><i> <FaTwitter/> </i></a></li>
                <li><a href="#"><i> <FaPinterest/> </i></a></li>
                <li><a href="#"><i> <FaLinkedin/> </i></a></li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h4>John Doe</h4>
            <h5>Front-End Developer</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src={Image5} className="img-responsive" alt=""/>
            <div className="social">
              <ul className="list-inline">
                <li><a href="#"><i> <FaFacebook/> </i></a></li>
                <li><a href="#"><i> <FaTwitter/> </i></a></li>
                <li><a href="#"><i> <FaPinterest/> </i></a></li>
                <li><a href="#"><i> <FaLinkedin/> </i></a></li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h4>Dave Wood</h4>
            <h5>Back-End Developer</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className="single-team">
          <div className="img-area">
            <img src={Image6} className="img-responsive" alt=""/>
            <div className="social">
              <ul className="list-inline">
                <li><a href="#"><i> <FaFacebook/> </i></a></li>
                <li><a href="#"><i> <FaTwitter/> </i></a></li>
                <li><a href="#"><i> <FaPinterest/> </i></a></li>
                <li><a href="#"><i> <FaLinkedin/> </i></a></li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h4>Claire Chedd</h4>
            <h5>Back-End Developer</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Team
