import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Intro from '../home/Intro'
import TwitterContainer from './Twitter'
import { Helmet } from 'react-helmet'


const About = () => {
    return (
        <main>
            <Helmet>
                <title>About Us - The Deadly Disease </title>
                <meta name="description" content="Information about who we are and who Sida Story was and reason for a childhood cancer site like The Deadly Disease " />

            </Helmet>
            <Intro />
            <Container className="mb-2">
                <Row>
                    <Col className="text-center">
                        <h2>About Us</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md="4" className="text-center">
                        <TwitterContainer />
                    </Col>
                    <Col md="8" className="text-left">
                        <p><span className="first-character">My</span> Name is Trimech Houssem Eddine I'm a MERN stack 
                        </p>
                        <p>
                            Created in the ip digital school in the event "info night"
                        </p>
                        <p>
                            theme of
                            Sexual Health and Intimacy Awareness Toolkit
and intimate life of adolescents and young adults
and even older adults (AYA) with or who have had cancer.
with cancer
                        </p>
                    </Col>

                </Row>
            </Container>
        </main>)
}

export default About