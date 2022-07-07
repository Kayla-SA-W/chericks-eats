import React from 'react';
import { OrderNowButton } from '../components/pill-button';
import styled, { createGlobalStyle } from 'styled-components';
import { MessageWrapper } from './404';
import Swag3 from '../images/food/swag3.jpg';
import { Nav } from '../components/nav';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
}
`

const GlobalStyleProxy: any = GlobalStyle;

const SwagImage = styled.img`
margin-top: 50px;
width: 400px;
@media screen and (max-width: 540px){
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
                <OrderNowButton style={{backgroundColor: '#c4e2e8'}} location='' text='Return Home'/>
            </MessageWrapper>

        </>
    )
}

export default Swag;