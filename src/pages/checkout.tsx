import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/libre-caslon-display";
import MockCheckout from "../components/checkout/temporary-checkout-page";
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

const Checkout = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />
      <MockCheckout />
    </>
  )
}

export default Checkout
export const Head = () => <SiteHead title="Checkout | Cherick's Eats" noindex path="/checkout" />;