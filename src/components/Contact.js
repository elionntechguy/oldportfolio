import React, { useEffect } from 'react'
import { Jumbotron, Container, CardDeck, Card, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import banner from '../assets/bg.jpg';
import photo from '../assets/photo.jpg';

const Styles = styled.div`
    
    .container-fluid {
        background-color: #FA991C;
        height: 650px;
    }


    h1 {
        color: #000000;
        padding-left: 40px;
        padding-top: 60px;
        font-weight: 300;
    }

    .maincontactdiv {
        margin: 80px;
        background-color: #FBF3F2;
        border-radius: 30px;
        padding: 20px;
    }

    .forma1 > * {
        margin: 10px;
        background-color: #FBF3F2;
    }

    .forma1 > button {
        color: #000000;
        border: 1px #555555 solid;
        border-radius: 10px;
    }

    textarea {
        resize: none;
    }

    .contact {
        display: flex;
        flex-direction: column;
    }

    .contact > a {
        text-decoration: none;
        color: #000000;
        font-size: 24px;
        margin-top: 30px;
        text-align: right;
        margin-right: 10px;
    }

    @media only screen and (max-width: 992px) {
        .contact > a {
            text-align: center;
        }
        .container-fluid {
            height: 850px;
        }

        .maincontactdiv {
            margin: 40px;
        }
    }

`;

function Contact() {
    return (
        <Styles>
        <Container fluid>
            <h1>
                contact
            </h1>

            <div className="maincontactdiv">
                <Row>
                    <Col lg={6}>
                        <form action="" className="forma1">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="email" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={7} placeholder="description" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                submit
                            </Button>
                        </form>
                    </Col>
                    <Col lg={6}>
                        <div className="contact">
                            <a href="https://instagram.com/elionntechguy">instagram</a>
                            <a href="https://github.com/elionntechguy">github</a>
                            <a href="mailto:shkololli40@gmail.com">email</a>
                        </div>
                    </Col>
                </Row>
            </div>
            


        </Container>
        </Styles>
    )
}

export default Contact
