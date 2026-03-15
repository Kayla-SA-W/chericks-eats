import React, { useContext, useEffect } from 'react';
import { Header } from '../components/header';
import styled, { createGlobalStyle } from 'styled-components';
import ThankYouImage from '../images/thank-you.png';
import { OrderNowButton } from '../components/pill-button';
import { MealPrepCartContext } from '../context/meal-prep-cart';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Libre Caslon Display";
}
`

const ThankYou = styled.img`
width: 500px;
@media screen and (max-width: 1024px){
    width: 300px
 }
`

const MessageWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-templatte-rows: 1fr 1fr 1fr 1fr;
row-gap: 20px;
place-items: center;
text-align: center;
margin-bottom: 160px;
`

const CopyDiv = styled.div`
font-size: 22px
`

const GlobalStyleProxy: any = GlobalStyle;

const ConfirmationPage = () => {
    const { clearCart } = useContext(MealPrepCartContext);

    useEffect(() => {
        clearCart();
    }, [])

    return(
        <>
            <GlobalStyleProxy />
            <Header />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <ThankYou src={ThankYouImage} />
            </div>
            <MessageWrapper>
                <CopyDiv>Thanks for your order!</CopyDiv>
                <CopyDiv>
                    You will be recieving an confirmation email soon.
                    Be sure to check your spam folder.
                </CopyDiv>
                <CopyDiv>
                    The delivery fee is $10 but can vary based on distance.
                </CopyDiv>
                <CopyDiv>
                    If you dont recieve a confirmation with in the next hour, feel free to reach out to us at cherickseats@gmail.com
                </CopyDiv>
                <OrderNowButton style={{backgroundColor: '#E77878'}} location='' text='Return Home'/>
            </MessageWrapper>
        </>
    )
}

export default ConfirmationPage;
