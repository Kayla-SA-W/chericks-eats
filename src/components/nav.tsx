import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Instagram from '../images/instagram-logo-black.png'
import Facebook from '../images/facebook-logo-black.png'
import "@fontsource/dancing-script"

const NavBar = styled.div`
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`

const SiteName = styled.a`
    text-decoration: none;
    color: black;
    font-family: "Dancing Script";
    font-size: 30px;
    @media screen and (max-width: 1024px){
        font-size: 22px;
    }
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
    background-color: black;
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
    background-color: rgba(0, 0, 0, 0.3);
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
    background-color: white;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    padding: 80px 30px 30px;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    animation: ${props => props.$closing ? slideOut : slideIn} 0.3s ease forwards;

    @media screen and (max-width: 1024px){
        width: 240px;
    }
`

export const StyledMenuLink = styled.a`
    height: fit-content;
    text-decoration: none;
    font-family: 'Dancing Script';
    color: black;
    font-size: 24px;
    padding: 12px 0;
    text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    transition: text-decoration-color 300ms;
    &:hover {
        text-decoration-color: #c4e2e8;
    }
`

const Socials = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px dotted #c4e2e8;
`

const FooterBar = styled.div`
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const FooterText = styled.span`
    font-family: "Dancing Script";
    font-size: 18px;
    color: black;
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
            <FooterBar>
                <FooterText>© 2021 Cherick's Eats</FooterText>
                <a href="https://www.instagram.com/chericks_eats/" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} style={{ height: '20px' }} alt="Instagram" />
                </a>
                <a href="https://facebook.com/chericks_eats-102433328551606/" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} style={{ height: '20px' }} alt="Facebook" />
                </a>
            </FooterBar>
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
                        <StyledMenuLink href='/flight-fuel' onClick={handleClose}>Flight Fuel</StyledMenuLink>
                        <StyledMenuLink href='/order' onClick={handleClose}>Order</StyledMenuLink>
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
