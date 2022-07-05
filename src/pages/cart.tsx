import * as React from "react"
import { Header } from '../components/header'
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script"
import { Footer } from "../components/footer";
import { CheckoutContent } from "../components/cart";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
}
`

const Cart = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CheckoutContent />
      <Footer />
    </>
  )
}

export default Cart