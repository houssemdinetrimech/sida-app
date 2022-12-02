import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
} from 'reactstrap';


const NoticeSection = (props) => {

    return (
        <section>
            <Container className="mb-2">
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <div className="card-text">
                                    <h2>Give blood, save a childs life</h2>
                                    <p>We are in the best position to think about the discourse to adopt and the tools to develop so that key populations get tested, protect themselves, accept their treatments, and remain in care.

                                   </p>
                                    <p><i className="fa fa-tint mr-2" aria-hidden="true"></i>
                                        <a href="https://ccmtunisie.org.tn/" target="_blank" rel="noopener noreferrer">Find a Clinic</a>
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default NoticeSection