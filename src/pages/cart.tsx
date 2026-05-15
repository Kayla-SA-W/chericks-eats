import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { MealPrepCartContent } from "../components/meal-prep-cart";
import { Nav } from "../components/nav";
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

const Cart = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />
      <MealPrepCartContent />
      <Nav header={false} />
    </>
  )
}

export default Cart
export const Head = () => <SiteHead title="Cart | Cherick's Eats" noindex path="/cart" />;
