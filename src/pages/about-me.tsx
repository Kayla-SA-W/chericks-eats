import React from 'react';
import { AboutMeContent } from '../components/about-me';
import { createGlobalStyle } from 'styled-components';
import "@fontsource/libre-caslon-display";
import { Nav } from '../components/nav';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Libre Caslon Display";
}
`

const GlobalStyleProxy: any = GlobalStyle;

const AboutMe = () => {
    return(
        <>
            <GlobalStyleProxy />
            <Nav header />
            <AboutMeContent />
            <Nav header={false} />
        </>
    )
};

export default AboutMe;