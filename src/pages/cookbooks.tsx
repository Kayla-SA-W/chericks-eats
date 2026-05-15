import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import { CookbooksContent } from "../components/cookbooks";
import { SiteHead } from '../components/site-head';

const GlobalStyle = createGlobalStyle`
body {
  background-color: #1a0e07;
  margin: 0;
  font-family: "Libre Caslon Display";
  color: #f5edd8;
}
`

const GlobalStyleProxy: any = GlobalStyle;

const Cookbooks = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />
      <CookbooksContent />
      <Nav header={false} />
    </>
  )
}

export default Cookbooks
export const Head = () => <SiteHead title="Cookbooks | Cherick's Eats" description="Shop Cherick's Eats digital cookbooks packed with healthy, delicious recipes you can make at home." path="/cookbooks" />;
