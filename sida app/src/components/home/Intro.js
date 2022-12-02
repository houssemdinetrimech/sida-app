import React from 'react';
import { Container, Jumbotron } from 'reactstrap'

const Intro = () => {
    return (
        <section style={{backgroundColor:"black"}}>
            <Jumbotron>
                <Container>
                    <h1 className="display-4">Sida Story</h1>
                    <div className="content">
                        <p className="lead">Driving awareness of Sida and Telling about 
                        </p>
                        <a title="Read about Sida Story" className="btn" href="/story/" style={{textAlign: "left"}} role="button">Sida Story</a>
                    </div>
                </Container>
            </Jumbotron>
        </section>
    )
}

export default Intro
