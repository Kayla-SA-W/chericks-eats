import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const LayoutStyle = createGlobalStyle`
  html, body {
    background-color: #1a0e07;
    margin: 0;
    font-family: "Libre Caslon Display";
    color: #f5edd8;
  }
  #___gatsby,
  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`
import Instagram from '../images/instagram-logo.png'
import Facebook from '../images/facebook-logo.png'
import "@fontsource/dancing-script"
import "@fontsource/libre-caslon-display"

const NavBar = styled.div`
    height: 64px;
    background-color: #1a0e07;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    border-bottom: 1px solid #3d1f0a;
`

const SiteName = styled.a`
    text-decoration: none;
    color: #d4a843;
    font-family: "Dancing Script";
    font-size: 32px;
    @media screen and (max-width: 1024px) { font-size: 24px; }
`

const HamburgerButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 8px;
    z-index: 1001;
`

const HamburgerLine = styled.span<{ $open: boolean }>`
    display: block;
    width: 24px;
    height: 2px;
    background-color: #d4a843;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(1) {
        transform: ${props => props.$open ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }
    &:nth-child(2) {
        opacity: ${props => props.$open ? 0 : 1};
    }
    &:nth-child(3) {
        transform: ${props => props.$open ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
    }
`

const slideIn = keyframes`
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
`

const slideOut = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
`

const Overlay = styled.div<{ $open: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
    opacity: ${props => props.$open ? 1 : 0};
    visibility: ${props => props.$open ? 'visible' : 'hidden'};
    transition: opacity 0.3s ease, visibility 0.3s ease;
`

const SlidePanel = styled.div<{ $open: boolean; $closing: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100%;
    background-color: #2a1506;
    border-left: 1px solid #3d1f0a;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 80px 30px 30px;
    animation: ${props => props.$closing ? slideOut : slideIn} 0.3s ease forwards;

    @media screen and (max-width: 1024px) { width: 240px; }
`

export const StyledMenuLink = styled.a`
    height: fit-content;
    text-decoration: none;
    font-family: "Libre Caslon Display";
    color: #f5edd8;
    font-size: 18px;
    padding: 12px 0;
    transition: color 0.2s;
    &:hover { color: #d4a843; }
`

const Socials = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #3d1f0a;
`

const FooterBar = styled.div`
    margin-top: auto;
    background-color: #130803;
    border-top: 1px solid #3d1f0a;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const FooterText = styled.span`
    font-family: "Libre Caslon Display";
    font-size: 13px;
    color: #a07840;
    letter-spacing: 0.04em;
`

export const Nav = ({ header }: { header: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300);
    };

    const handleToggle = () => {
        if (isOpen) {
            handleClose();
        } else {
            setIsOpen(true);
        }
    };

    if (!header) {
        return (
            <>
                <LayoutStyle />
                <FooterBar>
                    <FooterText>© 2021 Cherick's Eats</FooterText>
                    <a href="https://www.instagram.com/chericks_eats/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} style={{ height: '20px' }} alt="Instagram" />
                    </a>
                    <a href="https://facebook.com/chericks_eats-102433328551606/" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} style={{ height: '20px' }} alt="Facebook" />
                    </a>
                </FooterBar>
            </>
        );
    }

    return (
        <>
            <NavBar>
                <SiteName href='/'>Cherick's Eats</SiteName>
                <HamburgerButton onClick={handleToggle} aria-label="Menu">
                    <HamburgerLine $open={isOpen && !isClosing} />
                    <HamburgerLine $open={isOpen && !isClosing} />
                    <HamburgerLine $open={isOpen && !isClosing} />
                </HamburgerButton>
            </NavBar>

            {isOpen && (
                <>
                    <Overlay $open={!isClosing} onClick={handleClose} />
                    <SlidePanel $open={!isClosing} $closing={isClosing}>
                        <StyledMenuLink href='/' onClick={handleClose}>Home</StyledMenuLink>
                        <StyledMenuLink href='/how-it-works' onClick={handleClose}>How It Works</StyledMenuLink>
                        <StyledMenuLink href='/meal-prep' onClick={handleClose}>Meal Prep</StyledMenuLink>
                        <StyledMenuLink href='/flight-fuel' onClick={handleClose}>Flight Fuel</StyledMenuLink>
                        <StyledMenuLink href='/order' onClick={handleClose}>Order</StyledMenuLink>
                        <StyledMenuLink href='/desserts' onClick={handleClose}>Desserts</StyledMenuLink>
                        <StyledMenuLink href='/cookbooks' onClick={handleClose}>Cookbooks</StyledMenuLink>
                        <StyledMenuLink href='/about-me' onClick={handleClose}>About Me</StyledMenuLink>
                        <StyledMenuLink href='/cart' onClick={handleClose}>Cart</StyledMenuLink>
                        <Socials>
                            <a href="https://www.instagram.com/chericks_eats/" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} style={{ height: '20px' }} alt="Instagram" />
                            </a>
                            <a href="https://facebook.com/chericks_eats-102433328551606/" target="_blank" rel="noopener noreferrer">
                                <img src={Facebook} style={{ height: '20px' }} alt="Facebook" />
                            </a>
                        </Socials>
                    </SlidePanel>
                </>
            )}
        </>
    )
}
