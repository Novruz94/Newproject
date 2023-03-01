/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";


function Contact() {
  return (
    <div className='contact1' >
      
      <div className="container text-light " >
        
        <div className="row">
          <div className="col-md-12">
            <h1 className='display-4 font-weight-bold text-uppercase text-center text-dark'>Bizimlə Əlaqə</h1>
            <p className='lead text-center text-dark font-weight-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores iste voluptates ipsa?</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <i className='fa-3x text-light'> <FaLocationArrow/> </i>
            <h3>Ünvan</h3>
            <p>Area,City,Country</p>
            <i className='fa-3x text-light'> <FiPhone/> </i>
            <h3>Bizə zəng edin</h3>
            <p>+99 345 3456789</p>
            <i className='fa-3x text-light'> <FiMail/> </i>
            <h3>Email</h3>
            <p>Info@gmail.com</p>
          </div>
          <div className="col-md-8">
            <div className="contactform">
              <div className="row">
                <div className="col-md-8">
                  <span id='lblResponse' className='tab-content'></span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input name='tbName' type="text" id='tbName' className='form-control my-2' placeholder='Ad'/>
                </div>
                <br></br>
                <div className="col-md-6">
                  <input name='tbEmail' type="text" id='tbEmail' className='form-control my-2' placeholder='Email' />
                </div>
                <br></br>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <input name='tbSubject' type="text" id='tbSubject' className='form-control my-2' placeholder='Mövzu' />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <textarea name="tbMessage" rows='10' cols='20' id="tbmessage"  className='form-control my-2' placeholder='Mesaj'></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <input type="submit" name='btnSendMsg' value='Mesaj göndər' id='btnSendMsg'  className='btn btn-lg btn-submit btn-outline-dark' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact
