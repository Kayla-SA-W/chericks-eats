import * as React from "react"
import { Header } from '../components/header'
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script"
import { Footer } from "../components/footer";
import { IntroSlider } from "../components/intro-slider";
import styled from 'styled-components';
import { Quote } from "../components/main-quote";
import { Reviews } from "../components/reviews";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
}
`

const SliderSection = styled.div`
background-color: #E77878;
height: 360px;
display: flex;
align-items: center;
justify-content: center;
padding: 40px 0;
`

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SliderSection>
        <IntroSlider />
      </SliderSection>
      <Reviews />
      <Quote />
      <Footer/>
    </>
  )
}

export default IndexPage
