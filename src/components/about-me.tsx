import React from 'react';
import styled from 'styled-components';
import "@fontsource/dancing-script";
import Cherick from '../images/cherick-about-me.jpeg';

const BodyWrapper = styled.div`
background-color: #c4e2e8;
height: fit-content;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media screen and (max-width: 1024px){
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
margin: 35px 0 80px;
@media screen and (max-width: 1024px){
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
    @media screen and (max-width: 1024px){
        margin-top: 20px;
        padding: 15px;
     }
`

const Title = styled.div`
    color: white;
    font-size: 42px;
    font-family: 'Dancing Script';
    margin-top: 30px;
`

const AboutMeImage = styled.img`
@media screen and (max-width: 1024px){
    margin-bottom: 40px;
 }
`

export const AboutMeContent = () => {

    return(
        <BodyWrapper>
            <Title>About Me</Title>
            <ContentWrapper>
                <AboutMeSummary>
                    Hello, 
                    <br/>
                    I'm Cherick Logan, Owner and Executive Chef of Cherick's Eats. I'm 
                    a licensed culinary professional with over 8 years of experience in the food and beverage
                    industry, proudly educated by Valencia College and Florida International University. Cooking
                    isn't just my career, it's my passion. I truly love creating delicious, well-crafted meals 
                    and delivering warm, genuine hospitality through food. Whether I'm preparing a catered 
                    event or sharing a recipe, my goal is simple: to serve meals that are flavorful, comforting, and made with care.
                </AboutMeSummary>
                <AboutMeImage src={Cherick} alt='Image of CEO Cherick Logan' style={{height: '400px'}} />
            </ContentWrapper>
        </BodyWrapper>
    )
}