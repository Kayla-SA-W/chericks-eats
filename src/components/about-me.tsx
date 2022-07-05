import React from 'react';
import styled from 'styled-components';
import "@fontsource/dancing-script";
import Cherick from '../images/cherick-about-me.jpeg';

const BodyWrapper = styled.div`
background-color: #E77878;
height: fit-content;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media screen and (max-width: 540px){
    padding: 0;
 }
`
const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
background-color: white;
height: 500px;
width: 50%;
align-items: center;
justify-items: center;
margin-top: 35px;
@media screen and (max-width: 540px){
    grid-template-columns: 1fr;
    width: 100%;
    row-gap: 30px;
    height: fit-content;
 }
`

const AboutMeSummary = styled.div`
    padding-left: 50px;
    font-size: 18px;
    line-height: 25px;
    @media screen and (max-width: 540px){
        margin-top: 20px;
        padding: 15px;
     }
`

const Title = styled.div`
    color: white;
    font-size: 42px;
    font-family: 'Dancing Script'
`

const AboutMeImage = styled.img`
@media screen and (max-width: 540px){
    margin-bottom: 40px;
 }
`

export const AboutMeContent = () => {

    return(
        <BodyWrapper>
            <Title>About Me</Title>
            <ContentWrapper>
                <AboutMeSummary>
                    Hello There, 
                    <br/>
                    My name is Cherick Logan, owner and Executive Chef of Cherick's Eats. I am 
                    a licensed professional specializing in food prep and catering services. Educated
                    by Valencia College and Florida International University. I have been working in the 
                    food and beverage industry for 8 years and it is my absolute pride and joy. I am 
                    incredibly passionate about the culinary and hospitality industry. It would be my
                    pleasure to prepare a very tasty meal for you today and share some very palatable 
                    recipes. 
                </AboutMeSummary>
                <AboutMeImage src={Cherick} alt='Image of CEO Cherick Logan' style={{height: '400px'}} />
            </ContentWrapper>
        </BodyWrapper>
    )
}