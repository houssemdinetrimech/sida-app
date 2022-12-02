import React from 'react'
import crumlin from '../../assets/img/crumlin2.png'
// import events from '../../assets/img/events.png'
import ballons from '../../assets/img/cancer-module.png'
import {
    Container,
    Row,
    Col,
    CardText,
    Card,
    CardImg,
    CardHeader,
    CardBody,
} from 'reactstrap';
// import {FirstArticle} from '../news/FirstArticle'

const CardSection = (props) => {

    return (
        <section>
            <Container className="mb-4">
                <Row>
                    <Col lg="4" className="mb-4">
                        <Card>
                            <CardHeader><h2>About the Syndrome</h2></CardHeader>
                            <CardImg variant="top" alt="balloons floating into the sky" src={ballons} className="card-img img-fluid rounded" />
                            <CardBody>
                            <div className="card-text" ><h3 className="news-header" style={{fontFamily:"Roboto Mono"}}>driving awareness of Soda and Telling about</h3></div>
                                <CardText>
                                Some people infected with HIV do not have symptoms. Others may have symptoms but not realize that they are associated with HIV infection. So a person can be infected without knowing it.
                                </CardText>
                                <a title="Find out more information about Childhood Cancer" className="btn" href="/Syndrome/" style={{ textAlign: "left"  }} role="button">Syndrome</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4" className="mb-4">
                        <Card>
                            <CardHeader><h2>Prcessing steps</h2></CardHeader>
                            <CardImg variant="top" alt="Crumlin Childrens Hospital" src={crumlin} className="img-fluid rounded"/>
                            <CardBody>
                            <div className="card-text" ><h3 className="news-header" style={{fontFamily:"Roboto Mono"}}>There is no cure for HIV infection.</h3></div>
                                <CardText >
                                There is no cure for HIV infection. The virus remains in the person's body for life. However, with medication and proper medical care, the virus can be controlled and the severity of the infection can be limited.
</CardText>
                                <a title="Find out the many ways to help" className="btn" href="/helpout/" style={{ textAlign: "left" }} role="button">Prcessing
</a>
                            </CardBody>
                        </Card>
                    </Col>
                    {/* <Col lg="4" className="mb-4"> */}
{/* <Card                        Card> */}
                            {/* <CardHeader><h2>news & Events</h2></CardHeader> */}
                            {/* <CardImg variant="top" alt="Colourful chalk pieces" src={events} className="img-fluid rounded" /> */}
                            {/* <CardBody> */}
                            {/* <FirstArticle/> */}
                                {/* <a title="Find out the latest news on Childhood Cancer" className="btn" href="/news/" style={{ textAlign: "left" }} role="button">Browse news</a> */}
                            {/* </CardBody> */}
                        {/* </Card> */}
                    {/* </Col> */}
                </Row>
            </Container>
        </section>
    )
 
}

export default CardSection