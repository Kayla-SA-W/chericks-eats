import React, { useContext, useEffect, useState } from 'react';
import { Nav } from '../components/nav';
import styled, { createGlobalStyle } from 'styled-components';
import ThankYouImage from '../images/thank-you.png';
import { OrderNowButton } from '../components/pill-button';
import { MealPrepCartContext, CookbookItem } from '../context/meal-prep-cart';

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

const DownloadsSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 12px;
margin-top: 10px;
`

const DownloadLink = styled.a`
display: inline-block;
background-color: #c4e2e8;
border-radius: 25px;
padding: 10px 28px;
font-size: 18px;
font-family: "Dancing Script";
color: black;
text-decoration: none;
transition: background-color 0.3s ease;

&:hover {
    background-color: rgba(55, 69, 119, 0.23);
}
`

const GlobalStyleProxy: any = GlobalStyle;

const ConfirmationPage = () => {
    const { clearCart } = useContext(MealPrepCartContext);
    const [purchasedCookbooks, setPurchasedCookbooks] = useState<CookbookItem[]>([]);
    const [hadMealPrep, setHadMealPrep] = useState(true);

    useEffect(() => {
        try {
            const stored = sessionStorage.getItem('purchasedCookbooks');
            if (stored) {
                setPurchasedCookbooks(JSON.parse(stored));
                sessionStorage.removeItem('purchasedCookbooks');
            }
            const mealPrepFlag = sessionStorage.getItem('hadMealPrepOrders');
            if (mealPrepFlag !== null) {
                setHadMealPrep(JSON.parse(mealPrepFlag));
                sessionStorage.removeItem('hadMealPrepOrders');
            }
        } catch {}
        clearCart();
    }, [])

    return(
        <>
            <GlobalStyleProxy />
            <Nav header />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <ThankYou src={ThankYouImage} />
            </div>
            <MessageWrapper>
                <CopyDiv>Thanks for your order!</CopyDiv>
                {hadMealPrep && (
                    <>
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
                    </>
                )}
                {purchasedCookbooks.length > 0 && (
                    <DownloadsSection>
                        <CopyDiv>Download your cookbook(s):</CopyDiv>
                        {purchasedCookbooks.map((cookbook) => (
                            <DownloadLink key={cookbook.id} href={cookbook.downloadPath} download>
                                {cookbook.title}
                            </DownloadLink>
                        ))}
                    </DownloadsSection>
                )}
                <OrderNowButton style={{backgroundColor: '#E77878'}} location='' text='Return Home'/>
            </MessageWrapper>
        </>
    )
}

export default ConfirmationPage;
