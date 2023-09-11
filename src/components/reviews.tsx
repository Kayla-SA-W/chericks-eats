import React from 'react';
import styled from 'styled-components';
import FiveStarImage from '../images/five-stars.png';

const ReviewsContainer = styled.div`
display: grid;
grid-template-columns: 200px 200px 200px;
column-gap: 40px;
margin: 80px 30%;
justify-content: center;
@media screen and (max-width: 1024px){
    grid-template-columns: 200px;
    row-gap: 40px;
 }

`
const ReviewWrapper = styled.div`
text-align: center;
display: flex;
flex-direction: column;
place-items: center;
`

const TextWrapper = styled.div`
font-size: 22px;
height: 80px;
margin-bottom: 15px;
`
const NameWrapper = styled.div`
font-size: 19px
`

export const Reviews = () => {
    return (
        <ReviewsContainer>
            <ReviewWrapper>
                <img src={FiveStarImage} style={{ width: '150px' }} />
                <TextWrapper>Really Cute! I&apos;m so excited. It was so good.</TextWrapper>
                <NameWrapper>- Liyah</NameWrapper>
            </ReviewWrapper>
            <ReviewWrapper>
                <img src={FiveStarImage} style={{ width: '150px' }} />
                <TextWrapper>Presentation is on 1000! It was so damn good, I couldn&apos;t wait</TextWrapper>
                <NameWrapper>- Emily</NameWrapper>
            </ReviewWrapper>
            <ReviewWrapper>
                <img src={FiveStarImage} style={{ width: '150px' }} />
                <TextWrapper>Oh My Gosh! This is so good</TextWrapper>
                <NameWrapper>- Ciboney</NameWrapper>
            </ReviewWrapper>
        </ReviewsContainer>
    )
}