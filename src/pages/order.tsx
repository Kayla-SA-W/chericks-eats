import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import { MealPrepChat } from "../components/meal-prep-menu";
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

const MealPrep = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />
      <MealPrepChat />
      <Nav header={false} />
    </>
  )
}

export default MealPrep
export const Head = () => <SiteHead title="Order | Cherick's Eats" noindex path="/order" />;
