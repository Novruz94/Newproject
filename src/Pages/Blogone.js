import React from 'react'
import Card from 'react-bootstrap/Card';
import Image20 from '../images/design1.jpg'

function Blogone() {
  return (
    <div className='new1' style={{backgroundColor:'#F9F54B'}}>

      <div className="container">
           
            <div className="row">
              <div className="col-lg-4 col-md-12">
              <Card style={{ width: '1110px', marginTop:'20px' , marginBottom:'20px' }}>
                  <Card.Img variant="top" src={Image20} />
                  <Card.Body>
                    <Card.Title style={{textAlign:"center", color:"#205E61"}}>Veb dizayn</Card.Title>
                    <Card.Text style={{textAlign:"center", color:"#205E61", fontSize:"16px"}}>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content. Some quick example text to build on the card title and make up the
                      bulk of the card's content. Some quick example text to build on the card title and make up the
                      bulk of the card's content. Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
              </Card>
              </div>
            </div>

      </div>
            
    </div>
  )
}

export default Blogone
