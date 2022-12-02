import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from 'reactstrap'

const Signs = (props) => {
  return (
    <Container>
      <Row>
        <Col>
        <div className="text-center mt-2 mb-2"><h2>Syndrome of Sida</h2></div>
          <p>
          <span className="first-character">S</span>ome people may have no symptoms after contracting HIV so that the infection goes undiagnosed until AIDS symptoms appear.</p>
          <Card>
            <CardBody>
              <div className = "card-text">
              <div className= "signs"> 
              <p><strong>F</strong>ever</p>
              <p><strong>F</strong>atigue</p>
              <p><strong>C</strong>hills</p>
              <p><strong>S</strong>ore throat</p>
              <p><strong>H</strong>eadache</p>
              <p><strong>J</strong>oint pain</p>
              <p><strong>M</strong> muscle pain</p>
              <p><strong>S</strong>wollen glands (lymph nodes)</p>
             
              </div>
              </div>

            </CardBody>
          </Card>
        </Col>
      </Row >
    </Container >
  )
}

export default Signs