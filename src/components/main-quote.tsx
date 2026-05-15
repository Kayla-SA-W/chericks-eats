import React from 'react';
import styled from 'styled-components';
import { OrderNowButton } from './pill-button';

export const StyledHR = styled.hr`
    border-top: 4px solid #E77878;
    margin: 0
`

const StyledQuote = styled.div`
    margin-top: 30px;
    background-color: #E77878;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    font-size: 50px;
    text-align: center;
    flex-direction: column;
`

export const Quote = () => (
    <>
        <StyledQuote>
            Cherick's Eats offers
            <br />
            Quality Kosher Foods and 
            <br />
            Great Service!
            <OrderNowButton location='menu' text='Order Now'/>
        </StyledQuote>
    </>
);
