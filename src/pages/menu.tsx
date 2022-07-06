import * as React from "react"
import { Header } from '../components/header'
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script"
import { Footer } from "../components/footer";
import { MenuContent } from "../components/menu";

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