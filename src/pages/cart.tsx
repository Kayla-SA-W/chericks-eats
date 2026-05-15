import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { MealPrepCartContent } from "../components/meal-prep-cart";
import { Nav } from "../components/nav";
import { SiteHead } from '../components/site-head';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
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
