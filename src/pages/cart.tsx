import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { CheckoutContent } from "../components/cart";
import { Nav } from "../components/nav";

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
      <CheckoutContent />
      <Nav header={false} />
    </>
  )
}

export default Cart