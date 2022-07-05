import React from 'react';
import styled from 'styled-components';
import "@fontsource/dancing-script";
import { StyleMenuLink } from './header';
import Instagram from '../images/instagram-logo.png';
import Facebook from '../images/facebook-logo.png'

const FooterWrapper = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr;
row-gap: 15px;
align-items: center;
justify-items: center;
font-family: 'Dancing Script';
font-size: 25px;
padding: 30px 35%;
@media screen and (max-width: 540px){
    padding: 30px 0;
}
`

const MiniNav = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 15px;
@media screen and (max-width: 540px){
    column-gap: 40px;
}
`

export const Footer = () => {
    return (
        <FooterWrapper>
            <MiniNav>
                <a href="https://www.instagram.com/chericks_eats/" target="_blank" rel="noopener noreferrer" style={{width: 'fit-content', height: '45px'}}>
                    <img src={Instagram} style={{height: '50px'}} />
                </a>
                <a href="https://facebook.com/chericks_eats-102433328551606/" target="_blank" rel="noopener noreferrer" style={{width: 'fit-content', height: '45px'}}>
                    <img src={Facebook} style={{height: '50px'}} />
                </a>
            </MiniNav>
            <MiniNav>
                <StyleMenuLink to='/about-me'>
                    About Me
                </StyleMenuLink>
                <StyleMenuLink to='/menu'>
                    Menu
                </StyleMenuLink>
            </MiniNav>
            <div>
                Cherick's Eats Est.2021
            </div>
        </FooterWrapper>
    )
}