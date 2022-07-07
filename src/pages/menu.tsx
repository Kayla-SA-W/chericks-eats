import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import { MenuContent } from "../components/menu-v2";

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
      <Nav header />
      <MenuContent/>
      <Nav header={false} />
    </>
  )
}

export default Menu