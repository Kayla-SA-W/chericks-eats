import React from 'react';
import styled from 'styled-components';
import Instagram from '../images/instagram-logo-black.png'
import Facebook from '../images/facebook-logo-black.png'
import "@fontsource/dancing-script"

const GridWrapper = styled.div`
    height: 60px;
    background-color: white;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    margin: auto;
    @media screen and (max-width: 540px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin: 15px auto 50px;
    }
`

const SiteName = styled.a`
text-decoration: none;
color: black;
align-self: center;
font-family: "Dancing Script";
font-size: 30px;
@media screen and (max-width: 540px){
    font-size: 20px;
  }
`

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 20px;
    justify-content: flex-end;
    margin-right: 30px;
`

export const StyledMenuLink = styled.a`
    height: fit-content;
    text-decoration: none;
    font-family: 'Dancing Script';
    color: black;
    text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    transition: text-decoration-color 300ms;
    &:hover {
        text-decoration-color: #c4e2e8;
    }
`

const Socials = styled.div`
    display: flex;
    align-content: center;
    gap: 10px;
    margin: auto 0;
`

export const Nav = ({ header }: { header: boolean }) => {
    return (
        <GridWrapper>
            <SiteName href='/' style={{ justifySelf: 'center'}}>{header ? "Cherick's Eats" : "© 2021 Cherick's Eats"}</SiteName>
            <NavLinks>
                <StyledMenuLink href='/'>
                    Home
                </StyledMenuLink>
                <StyledMenuLink href='/menu'>
                    Menu
                </StyledMenuLink>
                <StyledMenuLink href="/about-me">
                    About Me
                </StyledMenuLink>
                {
                    header ?
                        <StyledMenuLink href='/cart'>
                            Cart
                        </StyledMenuLink>
                        : null
                }
            </NavLinks>
            <Socials>
                <a href="https://www.instagram.com/chericks_eats/" target="_blank" rel="noopener noreferrer" style={{ width: 'fit-content' }}>
                    <img src={Instagram} style={{ height: '20px' }} />
                </a>
                <a href="https://facebook.com/chericks_eats-102433328551606/" target="_blank" rel="noopener noreferrer" style={{ width: 'fit-content' }}>
                    <img src={Facebook} style={{ height: '20px' }} />
                </a>
            </Socials>
        </GridWrapper>
    )
}