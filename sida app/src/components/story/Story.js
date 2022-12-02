import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Intro from '../home/Intro'
import Detail from './StoryDetail';
import { Helmet } from 'react-helmet'

const Story = () => {
    return (
        <main>
            <Helmet>
                <title>Sida Story - The Deadly Disease </title>
                <meta name="description" content="Sida Storys story of her battle with Childhood Cancer" />

            </Helmet>
            <Intro />
            <Container className="mb-2">
                <Row>
                    <Col className="text-center">
                    <h2>Sida Story </h2>
                    </Col>
                </Row>
            </Container>
            <Detail />
        </main>)
}

export default Story