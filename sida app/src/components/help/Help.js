import React from 'react';
import Intro from '../home/Intro'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import { Items } from './Organisations'
import { Helmet } from 'react-helmet'

const Help = (props) => {

    return (
        <main>
            <Helmet>
                <title>Helping Out - The Deadly Disease </title>
                <meta name="description" content="Helping familys affected by Childhood Cancer. Blood donation and funding" />

            </Helmet>
            <Intro />
            <Container>
                <Row>
                    <Col>
                        <h2>Prcessing </h2>
                        <p className="text-primary"><span className="first-character">S</span>Sida's selection of partners follows an established process. On this page we detail the different steps.

 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Items />
                    </Col>
                </Row>
            </Container>
        </main>
    )

}
export default Help;