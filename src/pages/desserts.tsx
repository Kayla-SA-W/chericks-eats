import * as React from "react"
import { createGlobalStyle } from 'styled-components';
import "@fontsource/dancing-script";
import { Nav } from "../components/nav";
import DessertsMenu from "../components/desserts-menu";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Dancing Script";
}
`

const GlobalStyleProxy: any = GlobalStyle;

const Desserts = () => {
  return (
    <>
      <GlobalStyleProxy />
      <Nav header />
      <DessertsMenu />
      <Nav header={false} />
    </>
  )
}

export default Desserts
