import React from 'react';
import { AboutMeContent } from '../components/about-me';
import { createGlobalStyle } from 'styled-components';
import "@fontsource/libre-caslon-display";
import { Nav } from '../components/nav';
import { SiteHead } from '../components/site-head';

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
export const Head = () => <SiteHead title="About Me | Cherick's Eats" description="Learn the story behind Cherick's Eats, a home-based meal prep and catering business serving Orlando, FL and surrounding areas." path="/about-me" />;