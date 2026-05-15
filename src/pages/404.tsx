import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import FourOhFourImage from '../images/error-404.png';
import { OrderNowButton } from '../components/pill-button';
import { Nav } from '../components/nav';
import { SiteHead } from '../components/site-head';

const GlobalStyle = createGlobalStyle`
body {
  background-color: #1a0e07;
  margin: 0;
  font-family: "Libre Caslon Display";
  color: #f5edd8;
}
`

const FourOhFourErrorImage = styled.img`
width: 400px;
@media screen and (max-width: 1024px){
    width: 300px
 }
`

export const MessageWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-templatte-rows: 1fr 1fr 1fr;
row-gap: 20px;
font-size: 48px;
place-items: center;
text-align: center;
margin: 50px 0 160px;
`

const GlobalStyleProxy: any = GlobalStyle;

const FourOhFour = () => {
    return(
        <>
            <GlobalStyleProxy />
            <Nav header />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <FourOhFourErrorImage src={FourOhFourImage} />
            </div>
            <MessageWrapper>
                <div>Whoa!</div>
                <div>The page you're looking for doesnt exist</div>
                <OrderNowButton style={{backgroundColor: '#d4a843', color: '#1a0e07'}} location='' text='Return Home'/>
            </MessageWrapper>
        </>
    )
}

export default FourOhFour;
export const Head = () => <SiteHead title="Page Not Found | Cherick's Eats" noindex path="/404" />;