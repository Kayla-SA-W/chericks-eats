import React from 'react';
import { AboutMeContent } from '../components/about-me';
import { Header } from '../components/header';
import { createGlobalStyle } from 'styled-components';
import "@fontsource/libre-caslon-display";
import { Footer } from '../components/footer';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Libre Caslon Display";
}
`

const AboutMe = () => {
    return(
        <>
            <GlobalStyle />
            <Header />
            <AboutMeContent />
            <Footer />
        </>
    )
};

export default AboutMe;