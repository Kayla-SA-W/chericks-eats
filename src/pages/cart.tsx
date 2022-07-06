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

const GlobalStyleProxy: any = GlobalStyle;

const Cart = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Header />
      <CheckoutContent />
      <Footer />
    </>
  )
}

export default Cart