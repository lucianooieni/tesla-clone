import React from 'react';
import "./Section.css";
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImage, leftButton, rightButton}) {
    console.log(rightButton);
    return (
        <Wrapper bgImage={backgroundImage}>
            <Fade bottom>
                <div className="item-text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </Fade>
            <div className="buttons-arrow">
                <Fade bottom>
                    <div className="buttons">
                        <div className="button-left">{leftButton}</div>
                        {rightButton && 
                            <div className="button-right">{rightButton}</div>
                        }
                        
                    </div>
                </Fade>
                <img className="down-arrow" src="../images/down-arrow.svg" alt="arrow" />   
            </div>
        </Wrapper>
    )
}

// cambiar el div wrapper por un componente para pasarle la imagen si no buscar la manera de pasarselo al css

export default Section

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url("/images/model-s.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`