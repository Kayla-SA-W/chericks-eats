import React, { useState } from 'react';
import styled from 'styled-components';
import "@fontsource/dancing-script";
import CherickLogo from '../images/logo.jpeg';
import Menu from '../images/menu-hamburger.png';
import Cart from '../images/cart-checkout.png';
import Exit from '../images/exit-button.png';


const HeaderWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 padding: 10px 15px 20px;
 @media screen and (max-width: 1024px){
    grid-template-columns: 5.5% 89% 5.5%;
 }
`

const Logo = styled.img`
@media screen and (max-width: 1024px){
    width: 250px;
 }
`

const MenuWrapper = styled.div`
    margin: 5px 0 0 20px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 5px;
    font-size: 24px;
    @media screen and (max-width: 1024px){
        font-size: 19px;
        margin: 0;
        row-gap: 0;
        padding: 10px;
        border: 1px solid #E77878;
     }
`

export const StyleMenuLink = styled.a`
    text-decoration: none;
    font-family: 'Dancing Script';
    color: black;
    text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    transition: text-decoration-color 300ms;
    &:hover {
        text-decoration-color: #E77878;
    }
`

const CartImage = styled.img`
justify-self: flex-end; 
height: 44px;
@media screen and (max-width: 1024px){
    height: 30px;
 }
`

const MenuImage = styled.img`
@media screen and (max-width: 1024px){
    height: 30px;
 }
`

const OpenMenu = () => (
    <>
        <MenuImage src={Exit} />
        <MenuWrapper>
            <StyleMenuLink href='/menu'>
                Menu
            </StyleMenuLink>
            <StyleMenuLink href="/about-me">
                About Me
            </StyleMenuLink>
        </MenuWrapper>
    </>
)

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderWrapper>
            <div
                style={{ cursor: 'pointer', width: 'fit-content'}}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <OpenMenu /> : <MenuImage src={Menu} />}
            </div>
            <a href='/' style={{justifySelf: 'center'}}>
                <Logo src={CherickLogo} />
            </a>
            <a href='/cart' style={{justifySelf: 'flex-end'}}>
                <CartImage src={Cart} />
            </a>
        </HeaderWrapper>
    )
}