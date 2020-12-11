import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import banner from '../assets/bg.jpg';

const Styles = styled.div`
    
    .container-fluid {

        background: linear-gradient(0deg, rgba(28, 118, 143, 0.7), rgba(28, 118, 143, 0.7)), url(${banner}) repeat;
        background-position: center;
        height: 700px;
        padding-top: 200px;
        padding-left: 40px;
    }


    h1 {
        color: #ffffff;
        font-weight: 300;
    }

    .workbtn {
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 12px;
        background-color: #FBF3F2;
        text-decoration: none;
        color: #000000;
        font-size: 24px;
        font-weight: bold;

    }

`;


function Home() {
    return (
        <Styles>
            <Container fluid>
                <h1>
                    hi, i'm Elion,
                    <br />
                    a fullstack developer
                </h1>
                <br />
                <a className="workbtn" href="/work">
                    view my work
                </a>
            </Container>
        </Styles>
    )
}

export default Home
