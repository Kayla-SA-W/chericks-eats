import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/libre-caslon-display";
import MockCheckout from "../components/checkout/temporary-checkout-page";
import { Nav } from "../components/nav";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Libre Caslon Display";
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