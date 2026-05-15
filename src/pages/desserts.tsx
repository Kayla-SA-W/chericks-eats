import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import DessertsMenu from "../components/desserts-menu";
import { SiteHead } from '../components/site-head';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
}
`

const GlobalStyleProxy: any = GlobalStyle;

const Desserts = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />
      <DessertsMenu />
      <Nav header={false} />
    </>
  )
}

export default Desserts
export const Head = () => <SiteHead title="Desserts Orlando | Cherick's Eats" description="Indulge in Cherick's Eats handcrafted desserts. Fresh, made-to-order sweet treats available in Orlando, FL." path="/desserts" />;
