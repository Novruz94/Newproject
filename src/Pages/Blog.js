import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image20 from '../images/design1.jpg'
import Image21 from '../images/design2.jpg'
import Image22 from '../images/design3.jpg'

function Blog() {

  const navigate = useNavigate();

  return (
    <div className='blog1' style={{backgroundColor:'#F9F54B'}}>
         
         <div className="blog-page">
          <div className="container">
            <div className="blog-heading">
              <h2 className='text-center pt-5' style={{color:'#205E61'}}>Bizim Blog</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12">
              <Card style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={Image20} />
                  <Card.Body>
                    <Card.Title style={{textAlign:"center", color:"#205E61"}}>Veb dizayn</Card.Title>
                    <Card.Text style={{textAlign:"center", color:"#205E61", fontSize:"16px"}}>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button 
                          onClick={() => {
                            navigate("/blogone");
                           }} 

                          style={{color:'#205E61' , backgroundColor:'#F9F54B'}}>Daha çox oxu</Button>
                  </Card.Body>
              </Card>
              </div>
              <div className="col-lg-4 col-md-12">
              <Card style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={Image21} />
                  <Card.Body>
                    <Card.Title style={{textAlign:"center", color:"#205E61"}}>Qrafik dizayn</Card.Title>
                    <Card.Text style={{textAlign:"center", color:"#205E61"}}>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button 
                     onClick={() => {
                      navigate("/blogtwo");
                     }} 
                     style={{color:'#205E61' , backgroundColor:'#F9F54B'}}  >Daha çox oxu</Button>
                  </Card.Body>
              </Card>
              </div>
              <div className="col-lg-4 col-md-12">
              <Card style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={Image22} />
                  <Card.Body>
                    <Card.Title style={{textAlign:"center", color:"#205E61"}}>
                          Veb inkişafı</Card.Title>
                    <Card.Text style={{textAlign:"center", color:"#205E61"}}>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button 
                     onClick={() => {
                      navigate("/blogthree");
                     }}  
                    style={{color:'#205E61' , backgroundColor:'#F9F54B'}} >Daha çox oxu</Button>
                  </Card.Body>
              </Card>
              </div>
            </div>
          </div>
         </div>












    </div>
  )
}

export default Blog
