import React from 'react';
import styled from 'styled-components';
import "@fontsource/libre-caslon-display";
import Swag3 from '../images/food/swag3.jpg';
import Cheesecake from '../images/food/cheesecake.jpg';
import PackagedBrownies from '../images/food/packaged-brownies.jpg';
import Salmon from '../images/food/salmon.jpg';

const BodyWrapper = styled.div`
    display: grid;
    grid-template-columns: 60% 28%;
    column-gap: 9%;
    margin: 0px 0px 15%;
    justify-content: center;
    @media screen and (max-width: 540px){
        grid-template-columns: 80%;
      }
`

const RollingReviews = styled.div`
    background-color: white;
`
const AboutMe = styled.a`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: fit-content;
    color: black;
    text-decoration: none;
`
const AboutMeText = styled.div`
    background-color: white;
    padding: 25px;
    font-size: 20px;
    font-family: "Libre Caslon Display";
    line-height: 30px;
    @media screen and (max-width: 540px){
        align-self: center;
        margin: 0 25px;
        width: 30%;
      }
`

const SingleReview = styled.div`
    padding: 60px 0;
    width: inherit;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    border: 4px dotted #c4e2e8;
    :nth-child(1) {
        border-bottom: none;
    }
    :nth-child(2) {
        border-bottom: none;
    }
    > img {
        height: fill-available;
        width: 50vh;
        margin: auto;
    }
    > a {
        font-size: 25px;
        text-decoration: none;
        color: black;
        margin: auto;
        @media screen and (max-width: 540px){
            align-self: center;
            margin: 0 25px;
            width: 30%;
            text-decoration: none;
          }
    }
    > a:hover {
        text-decoration: underline overline #c4e2e8;
    }
    
`

export const HomepageBody = () => {
    return (
        <BodyWrapper>
            <RollingReviews>
                <SingleReview>
                    <img src={Cheesecake} />
                <a href='https://www.instagram.com/tv/CQ4pKfIJX9b/?utm_source=ig_web_copy_link' target='_blank'>Really Cute! I&apos;m so excited. It was so good. -Liyah</a>
                </SingleReview>
                <SingleReview>
                <img src={Salmon} />
                <a href='https://www.instagram.com/tv/CQ4p0Kzp8GO/?utm_source=ig_web_copy_link' target='_blank'>Presentation is on 1000! It was so damn good, I couldn&apos;t wait -Emily</a>
                </SingleReview>
                <SingleReview>
                <img src={PackagedBrownies} />
                <a href='https://www.instagram.com/p/CM3dXucJk5T/?utm_source=ig_web_copy_link' target='_blank'>Oh My Gosh! This is so good. -Ciboney</a>
                </SingleReview>
            </RollingReviews >
    <AboutMe href='about-me'>
        <img src={Swag3} />
        <AboutMeText>
            My name is Cherick Logan, owner and Executive Chef of Cherick's Eats. I am
            a licensed professional specializing in food prep and catering services.
        </AboutMeText>
    </AboutMe>
        </BodyWrapper >
    )
}