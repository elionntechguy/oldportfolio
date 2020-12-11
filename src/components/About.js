import React, { useEffect } from 'react'
import { Jumbotron, Container, CardDeck, Card } from 'react-bootstrap';
import styled from 'styled-components';
import banner from '../assets/bg.jpg';
import photo from '../assets/photo.jpg';

const Styles = styled.div`
    
    .container-fluid {
        background-color: #1C768F;
        height: 650px;
    }


    h1 {
        color: #ffffff;
        padding-left: 40px;
        padding-top: 60px;
        font-weight: 300;
    }

    .profile {
        margin-top: 60px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .photo {
        width: 191px;
        height: 191px;
        border-radius: 50%; /*don't forget prefixes*/
        background-image: url(${photo});
        background-position: center center;
        /* as mentioned by Vad: */
        background-size: cover;
    }

    .description > * {
        color: #ffffff;
    }

    .description {
        margin: 10px;
        text-align: center;
    }

    .github > a {
        color: #ffffff;
        text-decoration: none;
    }



    @media only screen and (max-width: 780px) {
        .photo {
            width: 166px;
            height: 166px;
        }
    }

    @media only screen and (max-width: 576px) {
        .photo {
            width: 141px;
            height: 141px;
        }
    }
    
`;



function About() {
    return (
        <Styles>
        <Container fluid>
            <h1>
                about
            </h1>

            <div className="profile">
                <div className="photo"></div>
                <div className="description">
                    <h2>Elion Shkololli</h2>
                    <p>
                        hi, i'm Elion Shkololli.
                    </p>
                </div>
                <br/>
                <br/>
                <div className="github">
                    <a href="https://github.com/elionntechguy">find me on github</a>
                </div>
            </div>


        </Container>
        </Styles>
    )
}

export default About
