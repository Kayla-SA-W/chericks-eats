import * as React from "react";
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script"
import styled from 'styled-components';
import { Nav } from "../components/nav";
import Card from '../images/food/card.jpg';
import { FloatingTiles } from "../components/floating-tiles";
import { HomepageBody } from "../components/rolling-reviews";

const GlobalStyle = createGlobalStyle`
body {
    background-color: #c4e2e8;
  margin: 0;
  font-family: "Dancing Script";
}
`

const IntroSection = styled.div`
display: grid;
grid-template-columns: 50% 50%;
background-color: white;
align-items: center;
justify-content: center;
> img {
    width: fill-available;
}
@media screen and (max-width: 1024px){
  grid-template-columns: 80%;
  > img {
    max-width: 100vw;
}
}
`

const ItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 45%;
    margin: auto;
`;

const ReviewsWrapper = styled.div`
display: flex;
justify-content: center;
width: 25%;
margin: auto;
@media screen and (max-width: 1024px){
  width: inherit;
}
`

const IntroText = styled.div`
    margin: 0 20%;
    font-size: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 1024px){
      padding: 50px;
      margin: 0;
      font-size: 20px;
    }
`

const GlobalStyleProxy: any = GlobalStyle;

const IndexPage = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />
      <ItemWrapper>
      <IntroSection>
        <img src={Card} />
        <IntroText>
            Cherick's Eats offers Quality Kosher Foods and Great Service!
        </IntroText>
      </IntroSection>
      </ItemWrapper>
      <ItemWrapper>
      <FloatingTiles />
      </ItemWrapper>
      <ReviewsWrapper>
      <HomepageBody />
      </ReviewsWrapper>
      <Nav header={false} />
    </>
  )
}

export default IndexPage
