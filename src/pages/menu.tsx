import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import { MenuContent } from "../components/menu-v2";
import { SiteHead } from '../components/site-head';

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
      <MenuContent />
      <Nav header={false} />
    </>
  )
}

export default Menu
export const Head = () => <SiteHead title="Menu | Cherick's Eats" description="Browse Cherick's Eats full menu of fresh, handcrafted meals. From weekly meal prep to desserts, explore healthy and delicious options in Orlando, FL." path="/menu" />;