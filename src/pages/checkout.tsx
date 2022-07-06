import * as React from "react"
import { Header } from '../components/header'
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script"
import MockCheckout from "../components/checkout/temporary-checkout-page";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
}
`

const GlobalStyleProxy: any = GlobalStyle;

const Checkout = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Header />
      <MockCheckout />
    </>
  )
}

export default Checkout