import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image20 from '../images/design1.jpg'
import Image21 from '../images/design2.jpg'
import Image22 from '../images/design3.jpg'

function Blog() {
  return (
    <div className='blog1 bg-danger'>
         
         <div className="blog-page">
          <div className="container">
            <div className="blog-heading">
              <h2 className='text-center pt-5'>Bizim Blog</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12">
              <Card style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={Image20} />
                  <Card.Body>
                    <Card.Title style={{textAlign:"center", color:"white"}}>Veb dizayn</Card.Title>
                    <Card.Text style={{textAlign:"center", color:"black", fontSize:"16px"}}>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="danger">Daha çox oxu</Button>
                  </Card.Body>
              </Card>
              </div>
              <div className="col-lg-4 col-md-12">
              <Card style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={Image21} />
                  <Card.Body>
                    <Card.Title style={{textAlign:"center", color:"white"}}>Qrafik dizayn</Card.Title>
                    <Card.Text style={{textAlign:"center", color:"black"}}>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="danger">Daha çox oxu</Button>
                  </Card.Body>
              </Card>
              </div>
              <div className="col-lg-4 col-md-12">
              <Card style={{ width: '19rem' }}>
                  <Card.Img variant="top" src={Image22} />
                  <Card.Body>
                    <Card.Title style={{textAlign:"center", color:"white"}}>
                          Veb inkişafı</Card.Title>
                    <Card.Text style={{textAlign:"center", color:"black"}}>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="danger">Daha çox oxu</Button>
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
