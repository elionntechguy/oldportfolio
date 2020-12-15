import React, { useEffect, useState } from 'react'
import { Jumbotron, Container, CardDeck, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import banner from '../assets/bg.jpg';

const Styles = styled.div`
    
    .container-fluid {
        background-color: #FA991C;
    }


    h1 {
        color: #000000;
        padding-left: 40px;
        padding-top: 60px;
        font-weight: 300;
    }

    .card-deck {
        padding: 60px;
        display: flex;
        justify-content: space-around;
    }

    @media only screen and (max-width: 1080px) {
        .card-deck {
            flex-direction: column;
            padding: 80px;
            align-items: center;
        }
        .card {
            margin: 20px;
        }
    }

    .card {
        width: 18rem;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
        border: none;
    }

    .card-img-top {
        padding: 20px;
    }

`;

function Work(props) {


    useEffect(() => {
        console.log(props.loading)
    }, [props.loading])

    useEffect(() => {
        if (props.loading) {
        }
    }, [props.loading])
    

    return (
        <Styles>
        { props.loading 
            ? <Container fluid style={{height: '600px'}}>
                
                <h1>
                    work
                </h1>

                <CardDeck>
                    { props.loading ? <h2> Loading... </h2>
                        : props.work.map((item, key) => {
                        return <Card key={key} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.workimg} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                {item.content}
                                </Card.Text>
                                <a className="btn btn-primary" target="_blank" href={item.link}>view</a>
                            </Card.Body>
                        </Card>
                    })}

                </CardDeck>

            </Container>
            : <Container fluid>
                <h1>
                    work
                </h1>

                <CardDeck>
                    { props.loading ? <h2> Loading... </h2>
                        : props.work.map((item, key) => {
                        return <Card key={key} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.workimg} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                {item.content}
                                </Card.Text>
                                <a className="btn btn-primary" target="_blank" href={item.link}>view</a>
                            </Card.Body>
                        </Card>
                    })}

                </CardDeck>
            </Container>
        }
        </Styles>
    )
}

export default Work
