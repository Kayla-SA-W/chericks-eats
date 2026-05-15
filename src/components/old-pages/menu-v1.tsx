import * as React from "react"
import { Header } from '../header'
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script"
import { Footer } from "../footer";
import { MenuContent } from "../menu";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
}
`

const GlobalStyleProxy: any = GlobalStyle;

const Menu = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Header />
      <MenuContent/>
      <Footer />
    </>
  )
}

export default Menu