import React from 'react';
import styled from 'styled-components';
import "@fontsource/dancing-script";
import Cherick from '../images/cherick-about-me.jpeg';
import CelebPhoto from '../images/cherick/celeb.jpeg';
import CookingPhoto from '../images/cherick/cooking.jpeg';
import RestaurantAssocPhoto from '../images/cherick/resturant-association.jpeg';
import WithCarlosPhoto from '../images/cherick/with-carlos.jpeg';

const BodyWrapper = styled.div`
    background-color: #1a0e07;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
        padding: 0;
    }
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #2a1506;
    border: 1px solid #3d1f0a;
    height: 500px;
    width: 50%;
    align-items: center;
    justify-items: center;
    overflow: hidden;
    margin: 35px 0 80px;
    @media screen and (max-width: 1024px) {
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
    color: #f5edd8;
    @media screen and (max-width: 1024px) {
        margin-top: 20px;
        padding: 15px;
    }
`

const Title = styled.div`
    color: #d4a843;
    font-size: 42px;
    font-family: 'Dancing Script';
    margin-top: 30px;
`

const AboutMeImage = styled.img`
    height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: top;
    display: block;

    @media screen and (max-width: 1024px) {
        height: 280px;
        margin-bottom: 40px;
    }
`

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    width: 50%;
    margin-bottom: 80px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: 4px;
        margin-bottom: 40px;
    }
`

const GridPhoto = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;

    @media screen and (max-width: 1024px) {
        height: 160px;
    }
`

export const AboutMeContent = () => {
    return (
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
                <AboutMeImage src={Cherick} alt='Image of CEO Cherick Logan' style={{ height: '400px', width: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </ContentWrapper>
            <PhotoGrid>
                <GridPhoto src={CelebPhoto} alt="Cherick at a celebration" />
                <GridPhoto src={CookingPhoto} alt="Cherick cooking" />
                <GridPhoto src={RestaurantAssocPhoto} alt="Cherick at restaurant association event" />
                <GridPhoto src={WithCarlosPhoto} alt="Cherick with Carlos" />
            </PhotoGrid>
        </BodyWrapper>
    )
}
