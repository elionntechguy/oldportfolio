import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <React.Fragment>
            <div className="footer">

                <Container>

                    <Row>

                        <Col md={5}>
                            <h4 className="footername"> Elion Shkololli </h4>
                        </Col>
                        <Col id="footermiddle" md={4}>
                            
                        </Col>
                        <Col id="footersocial" md={3}>
                            <a href="https://https://github.com/elionntechguy/">
                            Github
                            </a>
                        </Col>
                        
                    </Row>

                </Container>

            </div>
        </React.Fragment>
    )
}

export default Footer
