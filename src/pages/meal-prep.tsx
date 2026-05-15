import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import MealPrepMenuPage from "../components/meal-prep-menu-page";
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
      <MealPrepMenuPage />
      <Nav header={false} />
    </>
  )
}

export default MealPrep
export const Head = () => <SiteHead title="Meal Prep Delivery Orlando | Cherick's Eats" description="Fresh, healthy meal prep delivery in Orlando, FL by Cherick's Eats. Made-to-order weekly meals using high-quality ingredients. Serving Orlando and surrounding areas." path="/meal-prep" />;
