import React from 'react';
import { OrderNowButton } from '../components/pill-button';
import styled, { createGlobalStyle } from 'styled-components';
import { MessageWrapper } from './404';
import Swag3 from '../images/food/swag3.jpg';
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

const GlobalStyleProxy: any = GlobalStyle;

const SwagImage = styled.img`
margin-top: 50px;
width: 400px;
@media screen and (max-width: 1024px){
    width: 300px
 }
`

const Swag = () => {
    return (
        <>
        <GlobalStyleProxy />
        <Nav header />
         <div style={{display: 'flex', justifyContent: 'center'}}>
                <SwagImage src={Swag3} />
            </div>
            <MessageWrapper>
                <div>Swag Shop Coming Soon</div>
                <OrderNowButton style={{backgroundColor: '#d4a843', color: '#1a0e07'}} location='' text='Return Home'/>
            </MessageWrapper>

        </>
    )
}

export default Swag;
export const Head = () => <SiteHead title="Swag | Cherick's Eats" description="Shop Cherick's Eats merchandise and show your love for great food and healthy living." path="/swag" />;